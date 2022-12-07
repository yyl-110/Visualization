<template>
  <div class="percentWrap">
    <div class="chartsdom" ref="PercentChart" id="PercentChart"></div>
  </div>
</template>

<script>
import elementResizeDetectorMaker from 'element-resize-detector';
import { debounce } from '../../utils/tool';
let erd = elementResizeDetectorMaker();
let myChart = null;
let option = {};
export default {
  name: 'Percent',
  props: {
    maxData: {
      type: Number,
      default: 0,
    },
    color: {
      type: String,
      default: '#00DFFB',
    },
    value: {
      type: Array,
      default: () => [0],
    },
    bgColor: {
      type: String,
      default: 'rgba(0, 223, 251, 0.3)',
    },
  },
  data() {
    return {};
  },
  watch: {
    value: {
      handler() {
        this.initOption();
        if (myChart) {
          this.getChart().setOption(option, true);
        } else {
          this.initChart();
        }
      },
      deep: true,
    },
  },

  mounted() {
    this.initOption();
    this.initChart();
  },

  methods: {
    handelResize() {
      if (this.getChart()) {
        this.getChart().resize();
      }
    },
    initOption() {
      let maxData = this.maxData;
      let greenBar = this.value;
      let symbolMargin = '6'; // 间隙
      let gridLeft = '0';
      let gridRight = '0';

      option = {
        animation: !this.$isIE,
        tooltip: {},
        xAxis: {
          max: maxData,
          splitLine: {
            show: false,
          },
          offset: 10,
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
        },
        yAxis: {
          data: ['', '', ''],
          offset: 20,
          inverse: true,
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisLabel: {
            margin: 10,
            textStyle: {
              color: '#999',
              fontSize: this.$fontSize(16),
            },
          },
        },
        grid: {
          top: '10%',
          bottom: '3%',
          // height: "100%",
          left: gridLeft,
          right: gridRight,
        },
        series: [
          {
            // current data
            type: 'pictorialBar',
            symbol: 'rect',
            itemStyle: {
              normal: {
                barBorderRadius: 5,
                color: this.color, // 进度颜色
              },
            },
            symbolRepeat: 'fixed',
            symbolMargin: symbolMargin + '%',
            symbolClip: true,
            symbolSize: [6, 50],
            symbolBoundingData: maxData,
            data: greenBar,
            z: 999,
            // animationDelay: function (dataIndex, params) {
            //   return params.index * 30;
            // },
          },
          {
            // full data
            type: 'pictorialBar',
            itemStyle: {
              normal: {
                color: this.bgColor,
              },
            },
            animationDuration: 0,
            symbolRepeat: 'fixed',
            symbolMargin: symbolMargin + '%',
            symbol: 'rect',
            symbolSize: [6, 50],
            symbolBoundingData: maxData,
            data: greenBar,
            z: 99999,
            // animationDelay: function (dataIndex, params) {
            //   return params.index * 30;
            // },
          },
        ],
      };
    },
    initChart() {
      myChart = this.$echarts.init(this.$refs.PercentChart);

      this.getChart().setOption(option, true);
      erd.listenTo(this.$refs.PercentChart, debounce(this.handelResize, 300));
    },
    getChart() {
      try {
        return this.$echarts.getInstanceByDom(this.$refs.PercentChart);
      } catch {
        return null;
      }
    },
  },
  beforeDestroy() {
    try {
      this.getChart().clear();
      erd.removeAllListeners(this.$refs.PercentChart);
    } catch (error) {
      console.log('error:', error);
    }
  },
};
</script>

<style lang="scss" scoped>
.percentWrap {
  width: 100%;
  height: 100%;
  .percentInnerWrap {
    width: 100%;
    height: 100%;
  }
  .chartsdom {
    width: 100%;
    height: 100%;
  }
}
</style>