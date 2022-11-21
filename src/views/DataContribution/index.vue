<template>
  <div class="dataContribution">
    <div class="btnWrap"><btn-group @handleChange="handleChange" /></div>
    <data-view :cardData="cardData" />
    <el-scrollbar style="width: 100%" class="sidebar-wrapper">
      <div class="panelCartWrap clearfix">
        <div class="dataBar">
          <contribution-chart :key="type" :chartData="chartData" :type="type" />
        </div>
        <div class="rank">
          <Rank
            :key="type"
            :rankData="rankData"
            title="普通文档贡献量排行榜"
            label="数量"
            progressLabel="addCount"
            :type="type === 1 ? '' : 'peopleRank'"
          />
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>

<script>
import BtnGroup from '../../components/Common/BtnGroup.vue';
import ContributionChart from './components/ContributionChart.vue';
import DataView from './components/DataView.vue';
import Rank from '@/components/Common/Rank';
import dataJson from './data.json';
import dataJson2 from './data2.json';
export default {
  components: { BtnGroup, DataView, ContributionChart, Rank },
  name: 'DataContribution',

  data() {
    return {
      type: 1,
      cardData: [],
      rankData: {},
      chartData: [],
    };
  },

  created() {
    this.cardData = dataJson['区域三十五'];
    this.rankData = dataJson2[0]['区域三十七'];
    this.chartData = dataJson2[0]['区域三十六'];
  },

  mounted() {},

  methods: {
    handleChange(type) {
      this.type = type;
      if (type === 1) {
        this.rankData = dataJson2[type - 1]['区域三十七'];
        this.chartData = dataJson2[type - 1]['区域三十六'];
      } else {
        this.chartData = dataJson2[type - 1]['区域三十八'];
        this.rankData = dataJson2[type - 1]['区域三十九'];
      }
      console.log(this.chartData, 'hhhhhh');
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
/* element滚动条组件 隐藏水平滚动条 */
.sidebar-wrapper .el-scrollbar__wrap {
  overflow-y: hidden;
}
.dataContribution {
  width: 100%;
  .panelCartWrap {
    width: 100%;
    height: 444px;
    margin-top: 20px;
    overflow-y: hidden;
    .dataBar {
      float: left;
      height: 100%;
      width: calc(100% - 720px);
    }
    .rank {
      height: 100%;
      float: right;
      width: 700px;
      margin-left: 20px;
    }
  }
  .btnWrap {
    margin-bottom: 20px;
  }
}
</style>