<template>
  <div class="dataContribution">
    <div class="btnWrap"><btn-group @handleChange="handleChange" /></div>
    <data-view :cardData="cardData" />
    <div class="panelCartWrap clearfix">
      <div class="dataBar">
        <pro-contribution-chart :chartData="chartData1" v-if="type === 1" />
        <peo-contribution-chart :chartData="chartData2" v-if="type === 2" />
      </div>
      <div class="rank">
        <Rank
          :key="type"
          :type="type === 1 ? '' : 'peopleRank'"
          :rankData="rankData"
          :title="processType + '贡献量排行榜'"
          label="数量"
          :rowName="type === 1 ? '项目类型' : '人员'"
          progressLabel="addCount"
          widthType="small"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BtnGroup from '../../components/Common/BtnGroup.vue';
import ProContributionChart from './components/ProContributionChart.vue';
import PeoContributionChart from './components/PeoContributionChart.vue';
import DataView from './components/DataView.vue';
import Rank from '@/components/Common/Rank';
import { getContribution, getContributionByCard } from '../../api';
import { mapGetters } from 'vuex';
export default {
  components: {
    BtnGroup,
    DataView,
    ProContributionChart,
    PeoContributionChart,
    Rank,
  },
  name: 'DataContribution',

  data() {
    return {
      type: 1,
      cardData: [],
      rankData: null,
      chartData1: [],
      chartData2: {},
    };
  },

  computed: {
    ...mapGetters(['queryTime', 'queryYear', 'processType']),
  },

  watch: {
    queryTime() {
      this.getContribution();
    },
    queryYear() {
      this.getContribution();
    },
    processType(val, oldVal) {
      if (!oldVal) return;
      this.getContributionByCard();
    },
  },

  created() {
    this.getContribution();
  },

  mounted() {},

  methods: {
    handleChange(type) {
      this.type = type;
      this.getContributionByCard();
    },

    /* 获取数据 */
    getContribution() {
      getContribution({ queryTime: this.queryTime, queryYear: this.queryYear })
        .then((res) => {
          if (res.success) {
            this.cardData = res['区域三十五'];
            /* 设置初始默认值 */
            this.$store.dispatch('page/changeProcessType', {
              key: 'processType',
              value: this.cardData[0].objType,
            });
            this.getContributionByCard();
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },

    /* 获取三十六、三十七、三十八、三十九 */
    getContributionByCard() {
      getContributionByCard({
        queryTime: this.queryTime,
        queryYear: this.queryYear,
        dataType: this.processType,
        statisticsType: this.type === 1 ? '项目类型' : '人员',
      })
        .then((res) => {
          if (res.success) {
            if (this.type === 1) {
              this.rankData = res['区域三十七'];
              this.chartData1 = res['区域三十六'];
            } else {
              this.chartData2 = res['区域三十八'];
              this.rankData = res['区域三十九'];
            }
          }
        })
        .catch((e) => {
          console.log(e);
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