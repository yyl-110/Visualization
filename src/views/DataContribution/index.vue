<template>
  <div class="dataContribution">
    <div class="btnWrap"><btn-group @handleChange="handleChange" /></div>
    <data-view />
    <el-scrollbar style="width: 100%" class="sidebar-wrapper">
      <div class="panelCartWrap">
        <div class="dataBar">
          <contribution-chart :key="type" />
        </div>
        <div class="rank">
          <Rank title="普通文档贡献量排行榜" />
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
export default {
  components: { BtnGroup, DataView, ContributionChart, Rank },
  name: 'DataContribution',

  data() {
    return {
      type: 1,
    };
  },

  mounted() {},

  methods: {
    handleChange(type) {
      this.type = type;
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
    display: flex;
    width: 100%;
    height: 444px;
    margin-top: 20px;
    overflow-y: hidden;
    .dataBar {
      flex: 1;
    }
    .rank {
      width: 700px;
      flex-shrink: 0;
      margin-left: 20px;
    }
  }
  .btnWrap {
    width: max-content;
    margin-bottom: 20px;
  }
}
</style>