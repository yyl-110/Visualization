<template>
  <div class="processExecution">
    <div class="btnWrap">
      <btn-group
        :textGroup="['流程超期', '任务超期']"
        @handleChange="handleChange"
      />
    </div>
    <process-data-box />
    <div class="panelCartWrap clearfix" v-if="type === 1">
      <div class="dataBar">
        <common-chart />
      </div>
      <div class="rank">
        <Rank title="普通文档流程超期任务排行" />
      </div>
    </div>
    <div class="table" v-else>
      <task-view />
    </div>
  </div>
</template>

<script>
import BtnGroup from '../../components/Common/BtnGroup.vue';
import ProcessDataBox from './components/ProcessDataBox.vue';
import Rank from '@/components/Common/Rank';
import CommonChart from './components/CommonChart.vue';
import TaskView from './components/TaskView.vue';
export default {
  components: {
    BtnGroup,
    ProcessDataBox,
    Rank,
    CommonChart,
    TaskView,
  },
  name: 'ProcessExecution',

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
.processExecution {
  width: 100%;
  .btnWrap {
    margin-bottom: 22px;
  }
  .panelCartWrap {
    width: 100%;
    height: 400px;
    overflow-y: hidden;
    margin-top: 20px;
    .dataBar {
      height: 100%;
      width: calc(100% - 720px);
      float: left;
    }
    .rank {
      float: right;
      width: 700px;
      height: 100%;
      margin-left: 20px;
    }
  }

  .table {
    width: 100%;
    margin-top: 20px;
    height: 394px;
  }
}
</style>