<template>
  <div class="contributionChart">
    <dv-border />
    <div class="chartContainer">
      <div class="chartTitle">
        <Title :text="'项目数据贡献量'" />
      </div>
      <div class="chartWrap">
        <div class="chartsdom" ref="universalChart"></div>
      </div>
    </div>
  </div>
</template>

<script>
import DvBorder from '../../../components/Common/DvBorder.vue';
import Title from '../../../components/Common/Title.vue';
import elementResizeDetectorMaker from 'element-resize-detector';
import { debounce } from '@/utils/tool';
let erd = elementResizeDetectorMaker();
export default {
  name: 'ProContributionChart',
  props: {
    chartData: {
      // eslint-disable-next-line vue/require-prop-type-constructor
      type: Array,
      default: () => [],
    },
  },
  components: { Title, DvBorder },
  watch: {
    chartData: {
      handler() {
        this.initOption();
        if (this.myChart) {
          this.myChart.setOption(this.option, true);
        } else {
          this.initChart();
        }
      },
      deep: true,
    },
  },
  data() {
    return {
      myChart: null,
      option: {},
    };
  },
  mounted() {
    this.initOption();
    this.initChart();
  },
  methods: {
    initOption() {
      let source = [];
      try {
        source = this.chartData.map((i) => {
          return [i[Object.keys(i)[0]].prjType, i[Object.keys(i)[0]].addCount];
        });
      } catch (error) {
        console.log('error:', error);
      }
      this.option = {
        tooltip: {
          trigger: 'axis',
          showDelay: 0, // 显示延迟，添加显示延迟可以避免频繁切换，单位ms
          axisPointer: {
            type: 'shadow',
          },
        },
        dataset: {
          source: [...source],
        },
        xAxis: {
          name: '项目类型',
          axisLabel: {
            padding: [this.$fontSize(8), 0, 0, 0], //文字左右定位
            color: '#fff', //文字颜色
            fontSize: this.$fontSize(12), //文字大小
            interval: 0, //使x轴文字显示全
          },
          nameTextStyle: {
            // x轴name的样式调整
            color: '#fff',
            fontSize: this.$fontSize(14),
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#fff',
              type: 'solid',
            },
          },
          type: 'category',
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            color: '#fff', //文字颜色
            fontSize: this.$fontSize(12), //文字大小
          },
          axisLine: {
            show: false, //隐藏y轴
          },
          nameTextStyle: {
            // x轴name的样式调整
            color: '#fff',
            fontSize: this.$fontSize(14),
            padding: [0, this.$fontSize(30), this.$fontSize(16), 0],
          },
          nameGap: 10, // x轴name与横坐标轴线的间距
          name: '数量',
          splitLine: {
            lineStyle: {
              type: 'dashed', //虚线
              color: 'rgba(255, 255, 255, 0.5)',
            },
            show: true, //隐藏
          },
        },
        series: [
          {
            type: 'bar',
            barWidth: this.$fontSize(30),
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)',
            },
            label: {
              // 柱图头部显示值
              show: true,
              color: '#FFFFFF',
              position: 'top',
              fontSize: this.$fontSize(12),
            },
            itemStyle: {
              normal: {
                color: '#009AFF',
                //这里设置柱形图圆角 [左上角，右上角，右下角，左下角]
                barBorderRadius: [this.$fontSize(4), this.$fontSize(4), 0, 0],
              },
            },
          },
        ],
        grid: {
          // 让图表占满容器
          top: this.$fontSize(70),
          left: this.$fontSize(52),
          right: this.$fontSize(100),
          bottom: this.$fontSize(90),
        },
      };
    },
    initChart() {
      let myChart = this.$echarts.init(this.$refs.universalChart);

      myChart.setOption(this.option, true);
      erd.listenTo(this.$refs.universalChart, () => {
        debounce(myChart.resize(), 200);
      });
      this.myChart = myChart;
    },
  },
  beforeDestroy() {
    erd.removeAllListeners(this.$refs.universalChart);
  },
};
</script>

<style lang="scss" scoped>
.contributionChart {
  width: 100%;
  height: 100%;
  background: #050a4e;
  box-shadow: inset -8px -8px 40px 0px rgba(0, 227, 255, 0.3),
    inset 8px 8px 40px 0px rgba(0, 227, 255, 0.3);
  position: relative;
  .chartWrap {
    width: 100%;
    height: 100%;
    .chartsdom {
      height: 100%;
      width: 100%;
    }
  }
  .chartTitle {
    padding-left: 20px;
  }
  .chartContainer {
    width: 100%;
    height: 100%;
    padding-top: 15px;
    .chartsdom {
      width: 100%;
      height: 100%;
    }
  }
}
</style>