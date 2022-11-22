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
      v-if="cardData.length"
      @handleClick="handleClick"
    />
    <div class="panelCartWrap clearfix" v-if="type === 1">
      <div class="dataBar">
        <common-chart
          v-if="commonChartData.length"
          :chartData="commonChartData"
        />
      </div>
      <div class="rank">
        <Rank
          title="普通文档流程超期任务排行"
          :rankData="rankData"
          label="流程超期数量"
          progressLabel="workflowOverdueCount"
          v-if="rankData"
        />
      </div>
    </div>
    <div class="table" v-else>
      <task-view
        :title="'PDM中超期流程任务查看(' + wfType2 + ')'"
        :tableData="tableData"
      />
    </div>
  </div>
</template>

<script>
import BtnGroup from '../../components/Common/BtnGroup.vue';
import ProcessDataBox from './components/ProcessDataBox.vue';
import Rank from '@/components/Common/Rank';
import CommonChart from './components/CommonChart.vue';
import TaskView from './components/TaskView.vue';
import { mapGetters } from 'vuex';
import {
  getProcessExecution,
  getProcessExecutionByPro,
  getProcessExecutionByExe,
} from '../../api';
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
      dataJson: null,
      commonChartData: [],
      rankData: null,
      wfType1: '', //点击四十一的type
      wfType2: '', //点击四十五的type
      tableData: null,
    };
  },

  watch: {
    wfType1() {
      this.getProcessExecutionByPro();
    },
    wfType2() {
      this.getProcessExecutionByExe();
    },
  },

  created() {
    this.getProcessExecution();
    this.getProcessExecutionByPro();
  },

  mounted() {},

  methods: {
    handleChange(type) {
      this.type = type;
      if (type === 1) {
        this.cardData = this.dataJson['区域四十一'];
        this.wfType1 = this.dataJson['区域四十一'].workflowType;
      } else {
        this.cardData = this.dataJson['区域四十五'];
        /* 默认展示第一个项的table数据 */
        this.wfType2 = this.dataJson['区域四十五'][0].taskType;
      }
    },
    getProcessExecution() {
      getProcessExecution({
        queryYear: this.queryYear,
        queryTime: this.queryTime,
      })
        .then((res) => {
          if (res.success) {
            this.dataJson = res.data;
            this.cardData = res.data['区域四十一'];
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
            this.commonChartData = res.data['区域四十二'];
            this.rankData = res.data['区域四十三'];
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
    /* 获取四十六数据 */
    getProcessExecutionByExe() {
      getProcessExecutionByExe({
        queryYear: this.queryYear,
        queryTime: this.queryTime,
        wfType: this.wfType2,
      })
        .then((res) => {
          console.log(res);
          if (res.success) {
            try {
              this.tableData = res.data['区域四十六'].map((item, index) => {
                return { id: index + 1, ...item };
              });
            } catch (error) {
              console.log(error);
            }
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
    handleClick(val) {
      if (this.type === 1) {
        console.log('val:', val);
        this.wfType1 = val;
      } else {
        this.wfType2 = val;
      }
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