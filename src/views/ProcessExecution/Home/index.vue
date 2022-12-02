<template>
  <div class="processExecution">
    <div class="btnWrap">
      <btn-group
        :textGroup="['流程超期', '任务超期']"
        @handleChange="handleChange"
      />
    </div>
    <process-data-box
      :key="type"
      :cardData="cardData"
      @handleClick="handleClick"
      :type="type"
    />
    <div class="panelCartWrap clearfix" v-if="type === 1">
      <div class="dataBar">
        <common-chart
          :chartData="commonChartData"
          @chartClick="chartClick"
          :title="wfType1 + '超期任务排行'"
        />
      </div>
      <div class="rank">
        <Rank
          :title="wfType1 + '超期任务排行'"
          :rankData="rankData"
          label="流程超期数量"
          progressLabel="workflowOverdueCount"
          widthType="small"
        />
      </div>
    </div>
    <div class="table" v-else>
      <task-view
        :title="'PDM中超期流程任务查看(' + wfType2 + ')'"
        :wfType="wfType2"
      />
    </div>
  </div>
</template>

<script>
import BtnGroup from '@/components/Common/BtnGroup.vue';
import ProcessDataBox from '../components/ProcessDataBox.vue';
import Rank from '@/components/Common/Rank';
import CommonChart from '../components/CommonChart.vue';
import TaskView from '../components/TaskView.vue';
import { mapGetters } from 'vuex';
import { getProcessExecution, getProcessExecutionByPro } from '@/api';
export default {
  components: {
    BtnGroup,
    ProcessDataBox,
    Rank,
    CommonChart,
    TaskView,
  },
  name: 'ProcessExecution',
  computed: {
    ...mapGetters(['queryYear', 'queryTime', 'queryType']),
  },
  data() {
    return {
      type: 1,
      cardData: [],
      dataJson: {},
      commonChartData: [],
      rankData: [],
      wfType1: '', //点击四十一的type
      wfType2: '', //点击四十五的type
    };
  },

  watch: {
    wfType1(val) {
      if (val === '') return;
      this.getProcessExecutionByPro();
    },
    queryYear() {
      this.getProcessExecution();
    },
    queryTime() {
      this.getProcessExecution();
    },
  },

  created() {
    this.getProcessExecution();
  },

  mounted() {},

  methods: {
    handleChange(type) {
      this.type = type;
      if (type === 1) {
        if (!('区域四十一' in this.dataJson)) return;
        this.cardData = this.dataJson['区域四十一'];
        this.wfType1 = this.dataJson['区域四十一'][0].workflowType;
        this.wfType2 = '';
      } else {
        if (!('区域四十五' in this.dataJson)) return;
        this.cardData = this.dataJson['区域四十五'];
        /* 默认展示第一个项的table数据 */
        this.wfType2 = this.dataJson['区域四十五'][0].taskType;
        this.wfType1 = '';
      }
    },
    /* 四十一 */
    getProcessExecution() {
      getProcessExecution({
        queryYear: this.queryYear,
        queryTime: this.queryTime,
      })
        .then((res) => {
          if (res.success) {
            this.dataJson = res || {};
            if (this.type === 1) {
              if ('区域四十一' in this.dataJson) {
                this.cardData = this.dataJson['区域四十一'];
                this.wfType1 = this.dataJson['区域四十一'][0].workflowType;
              }
            } else {
              if ('区域四十五' in this.dataJson) {
                this.cardData = this.dataJson['区域四十五'];
                /* 默认展示第一个项的table数据 */
                this.wfType2 = this.dataJson['区域四十五'][0].taskType;
              }
            }
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
    /* 获取区域42 43 */
    getProcessExecutionByPro() {
      getProcessExecutionByPro({
        queryYear: this.queryYear,
        queryTime: this.queryTime,
        wfType: this.wfType1,
      })
        .then((res) => {
          if (res.success) {
            this.commonChartData = res['区域四十二'];
            this.rankData = res['区域四十三'];
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
    /* 卡片点击 */
    handleClick(val) {
      if (this.type === 1) {
        this.wfType1 = val;
      } else {
        this.wfType2 = val;
      }
    },
    /* 柱状图点击 */
    chartClick(index) {
      let prjType = '';
      const chartRow = this.commonChartData[index];
      try {
        const key = Object.keys(chartRow)[0];
        prjType = chartRow[key].prjType;
      } catch (error) {
        console.log('error:', error);
      }
      this.$router.push({
        path: '/process/execution/overdue',
        query: {
          wfType: this.type === 1 ? this.wfType1 : this.wfType2,
          prjType,
        },
      });
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