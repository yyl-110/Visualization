<template>
  <div class="processData">
    <data-box :cardData="cardData" />

    <!-- 数据 -->
    <div class="preData clearfix">
      <div class="leftChart">
        <completion-rate :completionData="completionData" />
      </div>
      <div class="rank">
        <Rank
          title="流程完成率排行榜"
          :rankData="rankData"
          label="平均完成率"
          progressLabel="workflowFinishRate"
        />
      </div>
    </div>
  </div>
</template>

<script>
import DataBox from './components/DataBox.vue';
import Rank from '@/components/Common/Rank';
import CompletionRate from './components/CompletionRate.vue';
import { getProcessDataByCard } from '@/api';
import dataJson from './data.json';
export default {
  components: { DataBox, Rank, CompletionRate },
  name: 'VueDataVIndex',

  data() {
    return {
      completionData: [],
      rankData: {},
      cardData: [],
    };
  },

  created() {
    this.getProcessData();
  },

  mounted() {},

  methods: {
    getProcessData() {
      this.completionData = dataJson['区域二十一'];
      this.rankData = dataJson['区域二十二'];
      this.cardData = dataJson['区域二十'];
      console.log('this.cardData:', this.cardData, 322);
      // getProcessDataByCard
    },
  },
};
</script>

<style lang="scss" scoped>
/deep/ .dv-bb7-line-width-2 {
  stroke: #00dffb !important;
}
/deep/ .dv-bb7-line-width-5 {
  display: none !important;
}
.processData {
  width: 100%;
  padding-bottom: 30px;
  .preData {
    width: 100%;
    height: 438px;
    margin-top: 20px;
    overflow-y: hidden;
    .leftChart {
      float: left;
      width: calc(100% - 720px);
      height: 100%;
    }
    .rank {
      height: 100%;
      width: 700px;
      margin-left: 20px;
      float: right;
    }
  }
}
</style>