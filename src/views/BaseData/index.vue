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
import { getBaseData } from '../../api';
export default {
  components: { DataDisplay, DevicesBox, BaseChart },
  name: 'VueDataVIndex',

  computed: {
    ...mapGetters(['queryYear', 'queryTime', 'queryType']),
  },
  watch: {
    queryYear() {
      this.getData();
    },
    queryTime() {
      this.getData();
    },
  },
  data() {
    return {
      disData: {},
      devicesBoxData: null,
      chartData1: null,
      chartData2: null,
    };
  },

  created() {
    this.getData();
  },

  mounted() {},

  methods: {
    getData() {
      getBaseData({
        queryYear: this.queryYear,
        queryTime: this.queryTime,
      }).then((res) => {
        if (res.success) {
          this.disData = res.data['区域十六'];
          this.devicesBoxData = res.data['区域十七'];
          this.chartData1 = res.data['区域十八'];
          this.chartData2 = res.data['区域十九'];
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