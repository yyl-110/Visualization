<template>
  <div :class="['dataItem', isSingle && 'singleItem']">
    <Decoration />
    <div class="content">
      <div class="title">
        <img src="../../assets/imgs/icon_file@2x.png" class="icon" alt="" />
        <span>变更单流程</span>
      </div>
      <div class="data" v-if="!isSingle">
        <div class="addWrap item">
          <countTo
            class="countTo"
            :startVal="0"
            :endVal="856"
            :duration="6000"
            separator=""
          ></countTo>
          <span class="name">当前新增</span>
        </div>
        <div class="preWrap item">
          <countTo
            :startVal="0"
            class="countTo"
            :endVal="87"
            :duration="6000"
            separator=""
            suffix="%"
          ></countTo>
          <span class="name">流程完成率</span>
        </div>
      </div>
      <div class="singleData" v-else>
        <div class="singleWrap">
          <span class="name">流程完成率</span>
          <countTo
            :startVal="0"
            :endVal="870"
            :duration="6000"
            separator=""
            class="countTo"
          ></countTo>
        </div>
      </div>
      <div class="bottom">
        <div class="tb box">
          同比&nbsp;
          <countTo
            class="countTo"
            :startVal="0"
            :endVal="3.5"
            :duration="6000"
            separator=""
            suffix="%"
            :decimals="1"
          ></countTo>
          <img src="../../assets/imgs/icon_rise@2x.png" class="up" alt="" />
        </div>
        <div class="hb box">
          环比&nbsp;
          <countTo
            class="countTo"
            :startVal="0"
            :endVal="3.1"
            :duration="6000"
            separator=""
            suffix="%"
            :decimals="1"
          ></countTo>
          <img src="../../assets/imgs/icon_rise@2x.png" class="up" alt="" />
        </div>
      </div>
    </div>
    <Decoration />
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
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.dataItem {
  width: 300px;
  height: 200px;
  background: rgba(255, 255, 255, 0.04);
  display: flex;
  flex-direction: column;

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
    flex: 1;
    padding: 0 20px;
    .singleData {
      padding: 11px 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
      .singleWrap {
        display: flex;
        align-items: center;
        .countTo {
          color: #23cefd;
          font-size: 28px;
          font-weight: 600;
          line-height: 40px;
          height: 40px;
        }
        .name {
          font-size: 16px;
          font-weight: 400;
          color: #ffffff;
          margin-right: 14px;
        }
      }
    }
    .data {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
      align-items: center;
      padding-top: 12px;
      padding-bottom: 12px;
      .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .name {
          margin-top: 2px;
          font-size: 16px;
          font-weight: 400;
          color: #ffffff;
        }
      }
    }
    .title {
      display: flex;
      align-content: center;
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
      padding-bottom: 11px;
      padding-top: 20px;
      span {
        font-size: 16px;
        font-weight: 400;
        color: #ffffff;
        line-height: 22px;
        margin-left: 4px;
      }
      img {
        width: 24px;
        height: 24px;
        flex-shrink: 0;
      }
    }

    .bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 14px;
      .countTo {
        font-size: 16px;
        color: #fff;
      }
      .box {
        display: flex;
        align-items: center;
        font-size: 16px;
        font-weight: 400;
        color: #ffffff;
        line-height: 22px;
        .up {
          width: 12px;
          height: 12px;
          margin-left: 7px;
          flex-shrink: 0;
        }
      }
    }
  }
}
</style>