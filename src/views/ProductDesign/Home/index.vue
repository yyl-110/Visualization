<template>
  <div class="productDesign">
    <btn-group
      @handleChange="handleChange"
      style="margin-bottom: 0.275rem"
      :textGroup="['零部件', '产品']"
    />
    <div class="parts" v-if="btnType === 1">
      <!-- 数据展示 -->
      <data-display type="parts" :disData="display" />

      <count-chart
        style="margin-top: 0.25rem"
        :chartData="countChartData"
        v-if="countChartData.length"
      />

      <!-- 表格 -->
      <data-table
        style="margin-top: 0.25rem"
        :tableData="tableData1"
        type="parts"
      />
      <div class="cell clearfix">
        <div class="future">
          <future-chart :chartData="futureChartData" v-if="futureChartData" />
        </div>
        <div class="rank">
          <Rank
            :rankData="rankData1"
            title="发布率排行榜"
            label="零件发布率"
            v-if="rankData1"
            progressLabel="partReleasedRate"
          />
        </div>
      </div>
    </div>
    <div v-else>
      <data-display type="product" disData="display" />
      <!-- chart -->
      <product-chart
        style="margin-top: 0.25rem"
        :productData="productChartData"
      />
      <!-- 表格 -->
      <data-table
        style="margin-top: 0.25rem"
        :tableData="tableData2"
        type="product"
      />
      <div class="productCell clearfix">
        <div class="rank1">
          <Rank
            :rankData="rankData2"
            title="项目总数量排行榜"
            label="产品库数量"
            progressLabel="productCount"
            v-if="rankData2"
          />
        </div>
        <div class="rank2">
          <Rank
            :rankData="rankData3"
            title="项目验收数量排行榜"
            label="产品验收数量"
            progressLabel="projectAccepted"
            v-if="rankData3"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DataDisplay from '../components/DataDisplay.vue';
import CountChart from '../components/CountChart.vue';
import DataTable from '../components/DataTable.vue';
import FutureChart from '../components/FutureChart.vue';
import Rank from '@/components/Common/Rank';
import ProductChart from '../components/ProductChart.vue';
import BtnGroup from '@/components/Common/BtnGroup.vue';
import { mapGetters } from 'vuex';
import {
  getPartsStatistics,
  getProductDesign,
  getProductStatistics,
} from '@/api';
export default {
  name: 'ProductDesign',
  components: {
    DataDisplay,
    CountChart,
    DataTable,
    Rank,
    FutureChart,
    ProductChart,
    BtnGroup,
  },

  computed: {
    ...mapGetters(['queryYear', 'queryTime', 'queryType']),
  },
  data() {
    return {
      btnType: 1,
      display: {},
      tableData1: {},
      futureChartData: null,
      rankData1: null,
      productChartData: [],
      countChartData: [],
      rankData2: null,
      rankData3: null,
      tableData2: {},
    };
  },

  created() {
    this.handelGetProductDesign();
    this.handelGetData();
    this.handelGetTableData();
  },

  mounted() {},

  methods: {
    handleChange(type) {
      this.btnType = type;
    },
    /**
     * 获取页面数据
     * @return {*}
     */
    handelGetProductDesign() {
      getProductDesign({
        queryYear: this.queryYear,
        queryTime: this.queryTime,
      }).then((res) => {
        if (res.success) {
          this.display = res.data['区域五'];
          this.rankData1 = res.data['区域九'];
          this.productChartData = res.data['区域十一'];
          this.rankData2 = res.data['区域十三'];
          this.rankData3 = res.data['区域十四'];
          this.countChartData = res.data['区域六'];
        }
      });
    },

    /* 1.1.2区域七、八数据统计 */
    handelGetData() {
      getPartsStatistics({
        queryYear: this.queryYear,
        queryTime: this.queryTime,
      }).then((res) => {
        if (res.success) {
          this.tableData1 = res.data['区域七'];
          this.futureChartData = res.data['区域八'];
        }
      });
    },

    /* 获取区域12数据 */
    handelGetTableData() {
      getProductStatistics({
        queryYear: this.queryYear,
        queryTime: this.queryTime,
      }).then((res) => {
        if (res.success) {
          this.tableData2 = res.data['区域十二'];
        }
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
.productDesign {
  padding-bottom: 30px;
  .productCell {
    width: 100%;
    height: 360px;
    margin-top: 20px;
    overflow: hidden;
    .rank1 {
      float: left;
      width: calc(50% - 10px);
      height: 360px;
    }
    .rank2 {
      width: calc(50% - 10px);
      float: right;
      height: 360px;
    }
  }
  .cell {
    width: 100%;
    height: 360px;
    margin-top: 20px;
    .future {
      height: 100%;
      width: calc(100% - 722px);
      float: left;
    }
    .rank {
      height: 100%;
      width: 700px;
      margin-left: 22px;
      float: right;
    }
  }
}
/deep/.el-radio-button__inner {
  background-color: rgba(255, 255, 255, 0.1);
  border-color: transparent !important;
  color: #23cefd;
  width: 72px;
  height: 34px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>