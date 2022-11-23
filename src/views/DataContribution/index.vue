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
import dataJson2 from './data2.json';
import { getContribution, getContributionByCard } from '../../api';
import { mapGetters } from 'vuex';
export default {
  components: { BtnGroup, DataView, ContributionChart, Rank },
  name: 'DataContribution',

  data() {
    return {
      type: 1,
      cardData: [],
      rankData: null,
      chartData: [],
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
    processType(val) {
      this.getContributionByCard();
      console.log('val:', val);
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
            this.cardData = res.data['区域三十五'];
            /* 设置初始默认值 */
            this.$store.dispatch('page/changeProcessType', {
              key: 'processType',
              value: this.cardData[0].objType,
            });
            this.getContributionByCard();
            console.log('res.data:', res.data);
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
              this.rankData = res.data['区域三十七'];
              this.chartData = res.data['区域三十六'];
            } else {
              this.chartData = res.data['区域三十八'];
              this.rankData = res.data['区域三十九'];
              console.log(this.rankData, 9);
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