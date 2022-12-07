<template>
  <div class="processItem">
    <decoration />
    <div class="content">
      <div class="title">
        <img src="../../../assets/imgs/icon_file@2x.png" class="icon" alt="" />
        {{ cardData.workflowType }}
      </div>
      <div class="chartItem">
        <div class="chartTop clearfix">
          <span class="float_l">当前新增</span>
          <span class="float_r">{{ cardData.wfAddCount }}</span>
        </div>
        <div class="percentContainer">
          <Percent
            :maxData="1000"
            :value="[cardData.wfAddCount]"
            color="#23CEFD"
            bgColor="rgba(35, 206, 253, 0.1)"
          />
        </div>
      </div>
      <div class="chartItem">
        <div class="chartTop clearfix">
          <span class="float_l">完成率</span>
          <span class="float_r">{{ cardData.wfFinishRate }}</span>
        </div>
        <div class="percentContainer">
          <Percent
            :maxData="100"
            :value="[parseFloat(cardData.wfFinishRate)]"
            color="#9FDB1D"
            bgColor="rgba(159, 219, 29, .1)"
          />
        </div>
      </div>
      <div class="bottom clearfix">
        <div class="tb box float_l">
          同比&nbsp;
          <countTo
            :startVal="0"
            :endVal="parseFloat(cardData.tongBiAddRate)"
            :duration="6000"
            separator=""
            suffix="%"
            :decimals="2"
            class="countTo"
          ></countTo>
          <img src="../../../assets/imgs/icon_rise@2x.png" class="up" alt="" />
        </div>
        <div class="hb box float_r">
          环比&nbsp;
          <countTo
            :startVal="0"
            :endVal="parseFloat(cardData.huanBiAddRate)"
            :duration="6000"
            separator=""
            suffix="%"
            :decimals="2"
            class="countTo"
          ></countTo>
          <img src="../../../assets/imgs/icon_rise@2x.png" class="up" alt="" />
        </div>
      </div>
      <div class="cell">
        <p class="r1">流程平均耗时：{{ cardData.wfAvgHours }}</p>
        <p class="r2 clearfix">
          <span class="float_l">耗时最短任务完成者：{{ p1 }}</span>
          <span class="time1 float_r">耗时：{{ t1 }}</span>
        </p>
        <p class="r3 clearfix">
          <span class="float_l">耗时最长任务完成者：{{ p2 }}</span>
          <span class="time2 float_r">耗时：{{ t2 }}</span>
        </p>
      </div>
    </div>
    <decoration class="bottomDec" />
  </div>
</template>

<script>
import countTo from 'vue-count-to';
import Decoration from '../../../components/Common/Decoration.vue';
import Percent from '../../../components/Common/Percent.vue';
export default {
  components: { Decoration, Percent, countTo },
  name: 'VisualizationProcessItem',

  props: {
    cardData: {
      type: Object,
      default: () => {},
    },
  },
  watch: {
    cardData: {
      deep: true,
      handler() {
        this.init();
      },
    },
  },
  data() {
    return {
      p1: '',
      p2: '',
      t1: '',
      t2: '',
    };
  },
  created() {
    this.init();
  },

  mounted() {},

  methods: {
    init() {
      try {
        const t1_key = Object.keys(this.cardData.wfConsumeShortest)[0];
        const t2_key = Object.keys(this.cardData.wfConsumeLongest)[0];
        this.p1 = t1_key;
        this.p2 = t2_key;
        this.t1 = this.cardData.wfConsumeShortest[t1_key];
        this.t2 = this.cardData.wfConsumeLongest[t2_key];
        // this.t1 =
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.processItem {
  width: 420px;
  height: 414px;
  background: rgba(255, 255, 255, 0.05);
  position: relative;
  .float_l {
    float: left;
  }
  .float_r {
    float: right;
  }
  .bottomDec {
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .countTo {
    font-size: 16px;
    color: #fff;
  }
  .content {
    padding: 0 20px;
    height: 100%;
    .title {
      height: 54px;
      width: 100%;
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
      img {
        vertical-align: middle;
        width: 24px;
        height: 24px;
        margin-right: 4px;
        display: inline;
      }
      font-size: 16px;
      font-weight: 400;
      line-height: 54px;
      color: #ffffff;
    }
    .chartItem {
      margin-top: 20px;
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
    .bottom {
      margin-top: 30px;
      padding-bottom: 20px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
      .box {
        font-size: 16px;
        font-weight: 400;
        color: #ffffff;
        line-height: 22px;
        .up {
          width: 12px;
          height: 12px;
          margin-left: 7px;
          vertical-align: middle;
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
        margin-top: 20px;
      }
      .time1 {
        color: rgba(0, 180, 42, 1);
        width: 30%;
        text-align: left;
        white-space: nowrap;
      }
      .time2 {
        white-space: nowrap;
        text-align: left;
        width: 30%;
        color: rgba(245, 63, 63, 1);
      }
    }
  }
}
</style>