<template>
  <div :class="['dataItem', isSingle && 'singleItem']">
    <Decoration />
    <div
      class="content"
      v-if="!isSingle"
      @click="handleDataItem(cardData.workflowType)"
    >
      <div class="title clearfix">
        <img src="../../assets/imgs/icon_file@2x.png" class="icon" alt="" />
        <span>{{ cardData.workflowType }}</span>
      </div>
      <div class="data clearfix">
        <div class="addWrap item">
          <countTo
            class="countTo"
            :startVal="0"
            :endVal="cardData.workflowAddCount"
            :duration="6000"
            separator=""
          ></countTo>
          <div class="name">当前新增</div>
        </div>
        <div class="preWrap item">
          <countTo
            :startVal="0"
            class="countTo"
            :endVal="parseFloat(cardData.workflowFinishRate)"
            :duration="6000"
            separator=""
            suffix="%"
            :decimals="2"
          ></countTo>
          <div class="name">流程完成率</div>
        </div>
      </div>
      <div class="bottom clearfix">
        <div class="tb box">
          同比
          <countTo
            class="countTo"
            :startVal="0"
            :endVal="parseFloat(cardData.tongBiAddRate)"
            :duration="6000"
            separator=""
            suffix="%"
            :decimals="2"
          ></countTo>
          <img src="../../assets/imgs/icon_rise@2x.png" class="up" alt="" />
        </div>
        <div class="hb box">
          环比
          <countTo
            class="countTo"
            :startVal="0"
            :endVal="parseFloat(cardData.huanBiAddRate)"
            :duration="6000"
            separator=""
            suffix="%"
            :decimals="2"
          ></countTo>
          <img src="../../assets/imgs/icon_rise@2x.png" class="up" alt="" />
        </div>
      </div>
    </div>
    <div class="content" v-else @click="handleDataItem(cardData.objType)">
      <div class="title clearfix">
        <img src="../../assets/imgs/icon_file@2x.png" class="icon" alt="" />
        <span>{{ cardData.objType }}</span>
      </div>
      <div class="singleData">
        <div class="singleWrap">
          <span class="name">当前新增</span>
          <countTo
            :startVal="0"
            :endVal="cardData.addCount"
            :duration="6000"
            separator=""
            class="countTo"
          ></countTo>
        </div>
      </div>
      <div class="bottom clearfix">
        <div class="tb box">
          同比
          <countTo
            class="countTo"
            :startVal="0"
            :endVal="parseFloat(cardData.tongBiAddRate)"
            :duration="6000"
            separator=""
            suffix="%"
            :decimals="2"
          ></countTo>
          <img src="../../assets/imgs/icon_rise@2x.png" class="up" alt="" />
        </div>
        <div class="hb box">
          环比
          <countTo
            class="countTo"
            :startVal="0"
            :endVal="parseFloat(cardData.huanBiAddRate)"
            :duration="6000"
            separator=""
            suffix="%"
            :decimals="2"
          ></countTo>
          <img src="../../assets/imgs/icon_rise@2x.png" class="up" alt="" />
        </div>
      </div>
    </div>
    <Decoration class="bottomDec" />
  </div>
</template>

<script>
import Decoration from './Decoration.vue';
import countTo from 'vue-count-to';

export default {
  components: { Decoration, countTo },
  name: 'VueDataVDataItem',

  props: {
    isSingle: {
      type: Boolean,
      default: false,
    },
    cardData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {
    handleDataItem(val) {
      this.$store.dispatch('page/changeProcessType', {
        key: 'processType',
        value: val,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.dataItem {
  width: 300px;
  height: 200px;
  background: rgba(255, 255, 255, 0.04);
  position: relative;
  .bottomDec {
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .addWrap {
    .countTo {
      color: #23cefd;
      line-height: 40px;
      font-size: 28px;
      font-weight: 600;
    }
  }
  .preWrap {
    .countTo {
      color: #23cefd;
      font-size: 28px;
      font-weight: 600;
      line-height: 40px;
    }
  }
  &.singleItem {
    height: 174px;
    .content {
      .title {
        padding: 16px 0 14px;
      }
    }
  }
  .content {
    padding: 0 20px;
    .singleData {
      padding: 11px 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
      .singleWrap {
        .countTo {
          color: #23cefd;
          font-size: 28px;
          font-weight: 600;
          line-height: 40px;
          // height: 40px;
        }
        .name {
          font-size: 16px;
          font-weight: 400;
          color: #ffffff;
          margin-right: 14px;
          line-height: 40px;
        }
      }
    }
    .data {
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
      padding-top: 12px;
      padding-bottom: 12px;
      overflow: hidden;
      .addWrap {
        float: left;
      }
      .preWrap {
        float: right;
      }
      .item {
        text-align: center;
        .name {
          margin-top: 2px;
          font-size: 16px;
          font-weight: 400;
          color: #ffffff;
        }
      }
    }
    .title {
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
      padding-bottom: 11px;
      padding-top: 20px;
      span {
        font-size: 16px;
        font-weight: 400;
        color: #ffffff;
        line-height: 24px;
        margin-left: 4px;
        float: left;
      }
      img {
        width: 24px;
        height: 24px;
        float: left;
      }
    }

    .bottom {
      padding-top: 14px;
      overflow: hidden;
      .countTo {
        font-size: 16px;
        color: #fff;
      }
      .tb {
        float: left;
      }
      .hb {
        float: right;
      }
      .box {
        font-size: 16px;
        font-weight: 400;
        color: #ffffff;
        line-height: 22px;
        .up {
          width: 12px;
          height: 12px;
          margin-left: 7px;
        }
      }
    }
  }
}
</style>