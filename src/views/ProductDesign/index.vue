<template>
  <div class="productDesign">
    <el-radio-group v-model="typeTitle" style="margin-bottom: 22px">
      <el-radio-button :label="1">零部件</el-radio-button>
      <el-radio-button :label="2">产品</el-radio-button>
    </el-radio-group>
    <div class="parts" v-if="typeTitle === 1">
      <!-- 数据展示 -->
      <data-display type="parts" />

      <count-chart style="margin-top: 20px" />

      <!-- 表格 -->
      <data-table style="margin-top: 20px" />
      <div class="cell">
        <div class="future">
          <future-chart />
        </div>
        <div class="rank">
          <Rank />
        </div>
      </div>
    </div>
    <div v-else>
      <data-display type="product" />
      <!-- chart -->
      <product-chart style="margin-top: 20px" />
      <!-- 表格 -->
      <data-table style="margin-top: 20px" />
      <div class="productCell">
        <div class="rank">
          <Rank />
        </div>
        <div class="rank">
          <Rank />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DataDisplay from './components/DataDisplay.vue';
import CountChart from './components/CountChart.vue';
import DataTable from './components/DataTable.vue';
import FutureChart from './components/FutureChart.vue';
import Rank from '@/components/Common/Rank';
import ProductChart from './components/ProductChart.vue';
export default {
  name: 'ProductDesign',
  components: {
    DataDisplay,
    CountChart,
    DataTable,
    Rank,
    FutureChart,
    ProductChart,
  },
  data() {
    return {
      typeTitle: 1,
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.productDesign {
  padding-bottom: 30px;
  .productCell {
    width: 100%;
    height: 360px;
    display: flex;
    margin-top: 20px;
    .rank {
      flex: 1;
      flex-shrink: 0;
      &:last-child {
        margin-left: 22px;
      }
    }
  }
  .cell {
    width: 100%;
    height: 360px;
    display: flex;
    margin-top: 20px;
    .future {
      height: 100%;
      flex: 1;
    }
    .rank {
      height: 100%;
      width: 700px;
      margin-left: 22px;
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