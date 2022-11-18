<template>
  <div class="baseData">
    <data-display :disData="disData" />
    <!-- 元件数量统计 -->
    <devices-box style="margin-top: 20px" :devicesData="devicesBoxData" />

    <!-- 器件图标 -->
    <div class="chart clearfix">
      <div class="standard">
        <base-chart
          title="标准件统计图"
          color="#00DFFB"
          :chartData="chartData1"
          chartTitle="标准件数量"
        />
      </div>
      <div class="devices">
        <base-chart
          title="元器件统计图"
          color="#009AFF"
          :chartData="chartData2"
          chartTitle="元器件数量"
        />
      </div>
    </div>
  </div>
</template>

<script>
import DataDisplay from './components/DataDisplay.vue';
import DevicesBox from './components/DevicesBox.vue';
import BaseChart from './components/BaseChart.vue';
import { mapGetters } from 'vuex';
import dataJson from './data.json';
// import { getBaseData } from '../../api';
export default {
  components: { DataDisplay, DevicesBox, BaseChart },
  name: 'VueDataVIndex',

  computed: {
    ...mapGetters(['queryYear', 'queryTime', 'queryType']),
  },
  watch: {
    queryYear(val) {},
  },
  data() {
    return {
      disData: {},
      devicesBoxData: {},
      chartData1: {},
      chartData2: {},
    };
  },

  created() {
    this.getData();
  },

  mounted() {},

  methods: {
    getData() {
      this.disData = dataJson['区域十六'];
      this.devicesBoxData = dataJson['区域十七'];
      this.chartData1 = dataJson['区域十八'];
      this.chartData2 = dataJson['区域十九'];
      console.log('this.disData:', this.disData);
      // getBaseData({ queryYear: '2022', queryTime: '1月' }).then((res) => {
      //   console.log(res, 9090);
      // });
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
.chart {
  margin-top: 20px;
  width: 100%;
  height: 500px;
  .standard {
    height: 500px;
    width: calc(50% - 10px);
    float: left;
  }
  .devices {
    height: 500px;
    float: right;
    width: calc(50% - 10px);
  }
}
</style>