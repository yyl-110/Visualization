<template>
  <div class="contributionChart">
    <dv-border />
    <div class="chartContainer">
      <div class="chartTitle">
        <Title :text="'前二十名人员数据贡献量'" />
      </div>
      <div class="chartWrap">
        <div class="chartsdom" ref="propleChart" id="propleChart"></div>
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
      type: Object,
      default: () => {},
    },
  },
  components: { Title, DvBorder },

  data() {
    return {
      myChart: null,
      option: {},
    };
  },
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
  mounted() {
    this.initOption();
    this.initChart();
  },
  methods: {
    handelResize() {
      this.myChart.resize();
    },
    initOption() {
      let source = [];
      try {
        const keys = Object.keys(this.chartData);
        source = keys.map((i) => {
          return [i, this.chartData[i]];
        });
      } catch (error) {
        console.log('error:', error);
      }
      this.option = {
        animation: !this.$isIE,
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
            fontSize: this.$fontSize(14), //文字大小
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
            fontSize: this.$fontSize(14), //文字大小
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
            barWidth: this.$fontSize(24),
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)',
            },
            label: {
              // 柱图头部显示值
              show: true,
              color: '#FFFFFF',
              position: 'top',
              fontSize: this.$fontSize(14),
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
          right: this.$fontSize(90),
          bottom: this.$fontSize(70),
        },
      };
    },
    initChart() {
      let myChart = this.$echarts.init(
        document.getElementById('propleChart'),
        null,
        { renderer: 'svg' },
      );

      myChart.setOption(this.option, true);
      erd.listenTo(
        document.getElementById('propleChart'),
        debounce(this.handelResize, 300),
      );
      this.myChart = myChart;
    },
  },
  beforeDestroy() {
    this.myChart.clear();
    erd.uninstall(this.$refs.propleChart);
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