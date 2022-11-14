<template>
  <div class="productDesign">
    <btn-group
      @handleChange="handleChange"
      style="margin-bottom: 0.275rem"
      :textGroup="['零部件', '产品']"
    />
    <div class="parts" v-if="btnType === 1">
      <!-- 数据展示 -->
      <data-display type="parts" />

      <count-chart style="margin-top: 0.25rem" />

      <!-- 表格 -->
      <data-table style="margin-top: 0.25rem" />
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
      <product-chart style="margin-top: 0.25rem" />
      <!-- 表格 -->
      <data-table style="margin-top: 0.25rem" />
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
import BtnGroup from '../../components/Common/BtnGroup.vue';
import { test } from '../../api';
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
  data() {
    return {
      btnType: 1,
    };
  },

  async mounted() {
    const res = await test({});
    console.log('res:', res);
  },

  methods: {
    handleChange(type) {
      this.btnType = type;
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