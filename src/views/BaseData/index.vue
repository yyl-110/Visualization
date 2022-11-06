<template>
  <div class="baseData">
    <data-display />
    <!-- 元件数量统计 -->
    <devices-box style="margin-top: 20px" />

    <!-- 器件图标 -->
    <div class="chart">
      <div class="standard">
        <base-chart title="标准件统计图" color="#00DFFB" />
      </div>
      <div class="devices">
        <base-chart title="元器件统计图" color="#009AFF" />
      </div>
    </div>
  </div>
</template>

<script>
import DataDisplay from './components/DataDisplay.vue';
import DevicesBox from './components/DevicesBox.vue';
import BaseChart from './components/BaseChart.vue';
export default {
  components: { DataDisplay, DevicesBox, BaseChart },
  name: 'VueDataVIndex',

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
/deep/ .dv-bb7-line-width-2 {
  stroke: #00dffb !important;
}
/deep/ .dv-bb7-line-width-5 {
  display: none !important;
}
.chart {
  margin-top: 20px;
  width: 100%;
  height: 500px;
  display: flex;
  .standard {
    flex: 1;
    flex-shrink: 0;
  }
  .devices {
    flex: 1;
    flex-shrink: 0;
    margin-left: 20px;
  }
}
</style>