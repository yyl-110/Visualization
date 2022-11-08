<template>
  <div class="processItem">
    <decoration />
    <div class="content">
      <div class="title">
        <img src="../../../assets/imgs/icon_file@2x.png" class="icon" alt="" />
        <span>变更单流程</span>
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
          <span>80%</span>
        </div>
        <div class="percentContainer">
          <Percent
            :maxData="100"
            :value="[80]"
            color="#9FDB1D"
            bgColor="rgba(159, 219, 29, .1)"
          />
        </div>
      </div>
      <div class="bottom">
        <div class="tb box">
          同比&nbsp;
          <CountTo
            :startVal="0"
            :endVal="3.5"
            :duration="6000"
            separator=""
            suffix="%"
            :decimals="1"
            style="font-size: 16px; color: #fff"
          ></CountTo>
          <img src="../../../assets/imgs/icon_rise@2x.png" class="up" alt="" />
        </div>
        <div class="hb box">
          环比&nbsp;
          <countTo
            :startVal="0"
            :endVal="3.1"
            :duration="6000"
            separator=""
            suffix="%"
            :decimals="1"
            style="font-size: 16px; color: #fff"
          ></countTo>
          <img src="../../../assets/imgs/icon_rise@2x.png" class="up" alt="" />
        </div>
      </div>
      <div class="cell">
        <p class="r1">流程平均耗时：3h</p>
        <p class="r2">
          <span>耗时最短任务完成者：张三</span>
          <span class="time1">耗时：400min</span>
        </p>
        <p class="r3">
          <span>耗时最长任务完成者：李四</span>
          <span class="time2">耗时：46h</span>
        </p>
      </div>
    </div>
    <decoration />
  </div>
</template>

<script>
import countTo from 'vue-count-to';
import Decoration from '../../../components/Common/Decoration.vue';
import Percent from '../../../components/Common/Percent.vue';
export default {
  components: { Decoration, Percent, countTo },
  name: 'VisualizationProcessItem',

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.processItem {
  width: 420px;
  height: 414px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .content {
    flex: 1;
    padding: 0 20px;
    .title {
      height: 54px;
      display: flex;
      align-items: center;
      width: 100%;
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
      img {
        width: 24px;
        height: 24px;
        margin-right: 4px;
      }
      span {
        font-size: 16px;
        font-weight: 400;
        color: #ffffff;
      }
    }
    .chartItem {
      margin-top: 20px;
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
    .bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 30px;
      padding-bottom: 20px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
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
    .cell {
      margin-top: 20px;
      font-size: 16px;
      font-weight: 400;
      color: #ffffff;
      line-height: 22px;
      .r2,
      .r3 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 20px;
      }
      .time1 {
        color: rgba(0, 180, 42, 1);
        width: 30%;
        text-align: left;
      }
      .time2 {
        text-align: left;
        width: 30%;
        color: rgba(245, 63, 63, 1);
      }
    }
  }
}
</style>