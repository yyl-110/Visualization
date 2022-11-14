<template>
  <div class="panelItem">
    <Decoration />
    <div class="content" v-if="type === 1">
      <div class="innerLeft">
        <div class="title">
          <img src="../../../assets/imgs/icon_file@2x.png" alt="" />
          <span>{{ title }}</span>
        </div>
        <div class="chartItem">
          <div class="chartTop">
            <span>当前新增</span>
            <span>880</span>
          </div>
          <div class="percentContainer">
            <Percent
              :maxData="1000"
              :value="[880]"
              color="#23CEFD"
              bgColor="rgba(35, 206, 253, 0.1)"
            />
          </div>
        </div>
        <div class="chartItem">
          <div class="chartTop">
            <span>当前新增</span>
            <span>880</span>
          </div>
          <div class="percentContainer">
            <Percent
              :maxData="100"
              :value="[51]"
              color="#009AFF"
              bgColor="rgba(0, 154, 255, .1)"
            />
          </div>
        </div>
      </div>
      <div class="innerRight">
        <p class="tb">
          同比
          <countTo
            :startVal="0"
            :endVal="5.9"
            :duration="6000"
            separator=""
            :decimals="1"
            suffix="%"
            class="countTo"
          ></countTo>
          <img src="../../../assets/imgs/icon_rise@2x.png" alt="" />
        </p>
        <p class="huan">
          环比
          <countTo
            :startVal="0"
            :endVal="2.1"
            :duration="6000"
            separator=""
            suffix="%"
            :decimals="1"
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
        <div class="row">
          <span class="name">一类变更</span>
          <div class="percentContainer">
            <Percent
              :maxData="1000"
              :value="[880]"
              color="#23CEFD"
              bgColor="rgba(35, 206, 253, 0.1)"
            />
          </div>
          <countTo
            :startVal="0"
            :endVal="800"
            :duration="6000"
            separator=""
            suffix="个"
            class="countTo"
          ></countTo>
        </div>
        <div class="row">
          <span class="name">一类变更</span>
          <div class="percentContainer">
            <Percent
              :maxData="1000"
              :value="[880]"
              color="#9FDB1D"
              bgColor="rgba(159, 219, 29, .1)"
            />
          </div>
          <countTo
            :startVal="0"
            :endVal="100"
            :duration="6000"
            separator=""
            suffix="个"
            class="countTo"
          ></countTo>
        </div>
      </div>
    </div>
    <Decoration />
  </div>
</template>

<script>
import Decoration from '../../../components/Common/Decoration.vue';
import Percent from '../../../components/Common/Percent.vue';
import countTo from 'vue-count-to';
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
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.panelItem {
  width: 560px;
  display: flex;
  flex-direction: column;
  height: 240px;
  background: rgba(255, 255, 255, 0.05);
  flex-shrink: 0;
  .content2 {
    flex: 1;
    padding: 20px;
    .title2 {
      display: flex;
      align-items: center;
      padding-bottom: 18px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
      img {
        width: 24px;
        height: 24px;
        flex-shrink: 0;
      }
      span {
        margin-left: 4px;
        font-size: 16px;
        font-weight: 400;
        color: #ffffff;
        line-height: 22px;
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
        display: flex;
        justify-content: space-between;
        margin-top: 25px;
        align-items: center;
        .percentContainer {
          width: 100%;
          height: 16px;
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
          margin-right: 12px;
        }
      }
    }
  }
  .content {
    flex: 1;
    padding: 20px;
    display: flex;
    align-items: center;
    .innerLeft {
      height: 100%;
      border-right: 1px solid rgba(255, 255, 255, 0.3);
      flex: 1;
      padding-right: 20px;
    }
    .title {
      display: flex;
      align-items: center;
      img {
        width: 24px;
        height: 24px;
        flex-shrink: 0;
      }
      span {
        margin-left: 4px;
        font-size: 16px;
        font-weight: 400;
        color: #ffffff;
        line-height: 22px;
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
        display: flex;
        justify-content: space-between;
        font-size: 20px;
        font-weight: normal;
        color: #ffffff;
        line-height: 23px;
      }
    }
    .innerRight {
      font-size: 18px;
      font-weight: 400;
      color: #ffffff;
      line-height: 25px;
      padding-left: 28px;
      .countTo {
        color: #fff;
        font-size: 18px;
      }
      p {
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        white-space: nowrap;
        span {
          margin-left: 8px;
        }
      }
      img {
        width: 12px;
        height: 12px;
        flex-shrink: 0;
        margin-left: 4px;
      }
      .huan {
        margin-top: 40px;
      }
    }
  }
}
</style>