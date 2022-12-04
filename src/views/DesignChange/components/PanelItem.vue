<template>
  <div class="panelItem" :style="{ width: isCollapse ? '7rem' : '6.25rem' }">
    <Decoration />
    <div class="content clearfix" v-if="type === 1 || type === 2">
      <div class="innerLeft floatL">
        <div class="title">
          <img src="../../../assets/imgs/icon_file@2x.png" alt="" />
          <span>{{ title }}</span>
        </div>
        <div class="chartItem">
          <div class="chartTop clearfix">
            <span class="floatL">当前新增</span>
            <span class="floatR">
              {{
                type === 1 ? cardData.addChangeCount : cardData.changePartSum
              }}
            </span>
          </div>
          <div class="percentContainer">
            <Percent
              :maxData="
                getNumber(
                  type === 1 ? cardData.addChangeCount : cardData.changePartSum,
                )
              "
              :value="[
                type === 1 ? cardData.addChangeCount : cardData.changePartSum,
              ]"
              color="#23CEFD"
              bgColor="rgba(35, 206, 253, 0.1)"
            />
          </div>
        </div>
        <div class="chartItem" v-if="type === 1">
          <div class="chartTop clearfix">
            <span class="floatL">完成率</span>
            <span class="floatR">{{ cardData.completeRate }}</span>
          </div>
          <div class="percentContainer">
            <Percent
              :maxData="getNumber(parseFloat(cardData.completeRate || 0))"
              :value="[parseFloat(cardData.completeRate)]"
              color="#009AFF"
              bgColor="rgba(0, 154, 255, .1)"
            />
          </div>
        </div>
      </div>
      <div class="innerRight floatR">
        <p class="tb">
          同比
          <countTo
            :startVal="0"
            :endVal="parseFloat(cardData.tongBi || 0)"
            :duration="6000"
            separator=""
            :decimals="2"
            suffix="%"
            class="countTo"
          ></countTo>
          <img src="../../../assets/imgs/icon_rise@2x.png" alt="" />
        </p>
        <p class="huan">
          环比
          <countTo
            :startVal="0"
            :endVal="parseFloat(cardData.huanBi || 0)"
            :duration="6000"
            separator=""
            suffix="%"
            :decimals="2"
            class="countTo"
          ></countTo>
          <img src="../../../assets/imgs/icon_rise@2x.png" alt="" />
        </p>
      </div>
    </div>
    <div class="content2" v-else>
      <div class="title2">
        <img src="../../../assets/imgs/icon_file@2x.png" alt="" />
        <span>{{ title }}</span>
      </div>
      <div class="dataBox">
        <div class="row clearfix">
          <span class="name floatL">一类变更</span>
          <div class="percentContainer floatR clearfix">
            <Percent
              :maxData="getNumber(parseInt(cardData['一类'] || 0))"
              :value="[parseInt(cardData['一类'] || 0)]"
              color="#23CEFD"
              bgColor="rgba(35, 206, 253, 0.1)"
              class="floatL percent"
            />
            <countTo
              :startVal="0"
              :endVal="cardData['一类'] || 0"
              :duration="6000"
              separator=""
              suffix="个"
              class="countTo floatR"
            ></countTo>
          </div>
        </div>
        <div class="row clearfix">
          <span class="name floatL">二类变更</span>
          <div class="percentContainer floatR clearfix">
            <Percent
              :maxData="getNumber(parseInt(cardData['二类'] || 0))"
              :value="[parseInt(cardData['二类'] || 0)]"
              color="#9FDB1D"
              bgColor="rgba(159, 219, 29, .1)"
              class="floatL percent"
            />
            <countTo
              :startVal="0"
              :endVal="cardData['二类'] || 0"
              :duration="6000"
              separator=""
              suffix="个"
              class="countTo floatR"
            ></countTo>
          </div>
        </div>
        <div class="row clearfix">
          <span class="name floatL">三类变更</span>
          <div class="percentContainer floatR clearfix">
            <Percent
              :maxData="getNumber(parseInt(cardData['三类'] || 0))"
              :value="[parseInt(cardData['三类'] || 0)]"
              color="#9FDB1D"
              bgColor="rgba(159, 219, 29, .1)"
              class="floatL percent"
            />
            <countTo
              :startVal="0"
              :endVal="cardData['三类'] || 0"
              :duration="6000"
              separator=""
              suffix="个"
              class="countTo floatR"
            ></countTo>
          </div>
        </div>
      </div>
    </div>
    <Decoration class="bottomDec" />
  </div>
</template>

<script>
import Decoration from '../../../components/Common/Decoration.vue';
import Percent from '../../../components/Common/Percent.vue';
import countTo from 'vue-count-to';
import { getMaxNumber } from '../../../utils/tool';
import { mapGetters } from 'vuex';
export default {
  components: { Decoration, Percent, countTo },
  name: 'VueDataVPanelItem',
  props: {
    title: {
      type: String,
      default: '标题',
    },
    type: {
      type: Number,
      default: 1,
    },
    itemData: {
      type: Object,
      default: () => {},
    },
  },
  watch: {
    itemData(val) {
      this.cardData = { ...val };
    },
  },
  data() {
    return {
      cardData: {},
    };
  },
  computed: {
    ...mapGetters(['sidebar']),
    isCollapse() {
      return !this.sidebar.opened;
    },
  },

  mounted() {},

  methods: {
    getNumber(number) {
      return getMaxNumber(number);
    },
  },
};
</script>

<style lang="scss" scoped>
.panelItem {
  width: 560px;
  height: 240px;
  background: rgba(255, 255, 255, 0.05);
  position: relative;
  transition: width 0.1s;
  .bottomDec {
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .floatL {
    float: left;
  }
  .floatR {
    float: right;
  }
  .content2 {
    padding: 20px;
    .title2 {
      padding-bottom: 18px;
      border-bottom: 1px solid rgb(73, 77, 123);
      img {
        width: 24px;
        height: 24px;
        vertical-align: middle;
      }
      span {
        margin-left: 4px;
        font-size: 16px;
        font-weight: 400;
        color: #ffffff;
        line-height: 24px;
      }
    }
    .dataBox {
      width: 100%;
      padding-left: 4px;
      .countTo {
        color: #fff;
        font-size: 20px;
        font-weight: bold;
        margin-left: 10px;
      }
      .row {
        // margin-top: 25px;
        &:first-child {
          margin-top: 25px;
        }
        .percentContainer {
          height: 16px;
          width: 80%;
          .percent {
            width: 70%;
          }
        }
        span {
          flex-shrink: 0;
        }
        .name {
          font-size: 16px;
          font-weight: 800;
          color: #ffffff;
          line-height: 22px;
          flex-shrink: 0;
          width: 20%;
        }
      }
    }
  }
  .content {
    padding: 20px;
    height: 100%;
    .innerLeft {
      width: 68%;
      height: 100%;
      border-right: 1px solid rgba(255, 255, 255, 0.3);
      padding-right: 20px;
    }
    .title {
      img {
        width: 24px;
        height: 24px;
        vertical-align: middle;
      }
      span {
        margin-left: 4px;
        font-size: 16px;
        font-weight: 400;
        color: #ffffff;
        line-height: 24px;
        display: inline;
      }
    }

    .chartItem {
      margin-top: 28px;
      .percentContainer {
        width: 100%;
        height: 16px;
        margin-top: 10px;
      }
      .chartTop {
        font-size: 20px;
        font-weight: normal;
        color: #ffffff;
        line-height: 23px;
      }
    }
    .innerRight {
      width: 32%;
      height: 100%;
      font-size: 18px;
      font-weight: 400;
      color: #ffffff;
      line-height: 25px;
      padding-left: 26px;
      padding-top: 70px;
      text-align: left;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      .countTo {
        color: #fff;
        font-size: 18px;
      }
      p {
        span {
          margin-left: 6px;
        }
      }
      img {
        width: 12px;
        height: 12px;
        margin-left: 4px;
      }
      .huan {
        margin-top: 40px;
      }
    }
  }
}
</style>