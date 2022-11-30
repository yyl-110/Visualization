<template>
  <div class="productDesign">
    <btn-group
      @handleChange="handleChange"
      style="margin-bottom: 0.275rem"
      :textGroup="['零部件', '产品']"
    />
    <div class="parts" v-if="btnType === 1">
      <!-- 数据展示 -->
      <data-display type="parts" :disData="display1" />

      <count-chart
        style="margin-top: 0.25rem"
        :chartData="countChartData"
        @chartClick="chartClick"
      />

      <!-- 表格 -->
      <data-table
        style="margin-top: 0.25rem"
        :tableData="tableData1"
        type="parts"
      />
      <div class="cell clearfix">
        <div class="future">
          <future-chart :chartData="futureChartData" />
        </div>
        <div class="rank">
          <Rank
            :rankData="rankData1"
            title="发布率排行榜"
            label="零件发布率"
            progressLabel="partReleasedRate"
            widthType="small"
          />
        </div>
      </div>
    </div>
    <div v-else>
      <data-display type="product" :disData="display2" v-if="display2" />
      <!-- chart -->
      <product-chart
        style="margin-top: 0.25rem"
        :productData="productChartData"
        @chartClick="chartClick"
      />
      <!-- 表格 -->
      <data-table
        style="margin-top: 0.25rem"
        :tableData="tableData2"
        type="product"
        @handelClickTable="handelClickTable"
      />
      <div class="productCell clearfix">
        <div class="rank1">
          <Rank
            :rankData="rankData2"
            title="项目总数量排行榜"
            label="产品库数量"
            progressLabel="productCount"
            v-if="rankData2"
            widthType="lang"
          />
        </div>
        <div class="rank2">
          <Rank
            :rankData="rankData3"
            title="项目验收数量排行榜"
            label="产品验收数量"
            progressLabel="projectAccepted"
            v-if="rankData3"
            widthType="lang"
          />
        </div>
      </div>
    </div>
    <div style="display: flex; margin-top: 40px">
      <div v-for="item in typelist" :key="item.id">{{ item.tag_name }}</div>
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
      display1: {},
      display2: null,
      tableData1: {},
      futureChartData: [],
      rankData1: [],
      productChartData: [],
      countChartData: [],
      rankData2: null,
      rankData3: null,
      tableData2: {},
      prjType1: '', //点击区域六选择
      prjType2: '', // 点击区域十二选择
      pageData: {},
      typelist: [],
    };
  },
  watch: {
    queryYear() {
      this.handelGetProductDesign();
    },
    queryTime() {
      this.handelGetProductDesign();
    },
    prjType1(newVal, old) {
      if (!old) return;
      if (!newVal) return;
      this.handelGetData();
    },
    prjType2(newVal, old) {
      if (!old) return;
      if (!newVal) return;
      this.handelGetTableData();
    },
  },

  created() {
    this.handelGetProductDesign();
    // this.handelGetData();
    // this.handelGetTableData();
    // test()
    //   .then((res) => {
    //     console.log(res, 9090);
    //     this.typelist = res.data;
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
  },

  mounted() {},

  methods: {
    handleChange(type) {
      this.btnType = type;
      if (type === 1) {
        this.prjType1 = this.countChartData[0].prjType;
      } else {
        this.prjType2 = this.productChartData[0].prjType;
      }
    },
    /**
     * 获取页面数据
     * @return {*}
     */
    handelGetProductDesign() {
      getProductDesign({
        queryYear: this.queryYear,
        queryTime: this.queryTime,
      })
        .then((res) => {
          if (res.success) {
            this.pageData = res;
            this.display1 = res['区域五'];
            this.display2 = res['区域十'];
            this.rankData1 = res['区域九'];
            this.productChartData = res['区域十一'];
            this.rankData2 = res['区域十三'];
            this.rankData3 = res['区域十四'];
            this.countChartData = res['区域六'];
            /*  */
            this.prjType1 = this.countChartData[0].prjType;
            this.handelGetData();
            this.prjType2 = this.productChartData[0].prjType;
            this.handelGetTableData();
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },

    /* 1.1.2区域七、八数据统计 */
    handelGetData() {
      getPartsStatistics({
        queryYear: this.queryYear,
        queryTime: this.queryTime,
        prjType: this.prjType1,
      })
        .then((res) => {
          console.log('res:', res);
          if (res.success) {
            this.tableData1 = res['区域七'];
            this.futureChartData = res['区域八'];
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },

    /* 获取区域12数据 */
    handelGetTableData() {
      getProductStatistics({
        queryYear: this.queryYear,
        queryTime: this.queryTime,
        prjType: this.prjType2,
      })
        .then((res) => {
          if (res.success) {
            this.tableData2 = res['区域十二'];
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },

    /**
     * 柱形图点击
     * @return {*}
     */
    chartClick(index) {
      if (this.btnType === 1) {
        this.prjType1 = this.countChartData[index]?.prjType;
      } else {
        this.prjType2 = this.productChartData[index]?.prjType;
      }
    },

    /**
     * 点击table
     * @return {*}
     */
    handelClickTable(prjStatus) {
      this.$router.push({
        path: '/product-design/pdmlist',
        query: {
          prjStatus,
          prjType: this.prjType2,
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