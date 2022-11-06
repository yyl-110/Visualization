<template>
  <div class="percentWrap">
    <div class="chartsdom" ref="PercentChart"></div>
  </div>
</template>

<script>
import { resizeOb } from '../../utils/tool';

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
    return {
      option: {},
    };
  },

  mounted() {
    this.initChart();
    resizeOb(this.$refs.PercentChart);
  },

  methods: {
    initChart() {
      let myChart = echarts.init(this.$refs.PercentChart);
      let maxData = this.maxData;
      let greenBar = this.value;
      let symbolMargin = '6'; // 间隙
      let gridLeft = '0';
      let gridRight = '0';

      this.option = {
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
              fontSize: 16,
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
            z: 99999999,
            animationEasing: 'elasticOut',
            animationDelay: function (dataIndex, params) {
              return params.index * 30;
            },
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
            animationEasing: 'elasticOut',
            animationDelay: function (dataIndex, params) {
              return params.index * 30;
            },
          },
        ],
      };

      myChart.setOption(this.option, true);

      window.addEventListener('resize', () => {
        myChart.resize();
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.percentWrap {
  width: 100%;
  height: 100%;
  .chartsdom {
    width: 100%;
    height: 100%;
  }
}
</style>