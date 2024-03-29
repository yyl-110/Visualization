<template>
  <div class="BaseChart">
    <dv-border />
    <div class="chartTitle">
      <Title :text="title" />
    </div>
    <div class="chartWrap">
      <div class="chartsdom" ref="BaseChart" id="BaseChart"></div>
    </div>
  </div>
</template>

<script>
import Title from '../../../components/Common/Title.vue';
import elementResizeDetectorMaker from 'element-resize-detector';
import { debounce, isEmptyObject } from '../../../utils/tool';
import DvBorder from '../../../components/Common/DvBorder.vue';
let erd = elementResizeDetectorMaker();
export default {
  name: 'BaseChart',
  props: {
    title: {
      type: String,
      default: '标题',
    },
    color: {
      type: String,
      default: '#00DFFB',
    },
    chartTitle: {
      type: String,
      default: '标题',
    },
    chartData: {
      type: Object,
      default: () => {},
    },
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
  data() {
    return {
      option: {},
      myChart: null,
    };
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
      /* 组装数据 */
      const source = Object.keys(this.chartData).map((i) => {
        return [i, this.chartData[i]];
      });
      this.option = {
        animation: !this.$isIE,
        tooltip: {
          trigger: 'axis',
          showDelay: 0,
          axisPointer: {
            type: 'shadow',
          },
        },
        legend: {
          top: '0',
          right: 0,
          y: '0',
          itemWidth: this.$fontSize(10),
          itemHeight: this.$fontSize(10),
          icon: 'circle',
          data: [this.chartTitle],
          textStyle: {
            fontSize: this.$fontSize(14), //字体大小
            color: '#fff', //字体颜色
          },
        },
        dataset: {
          source: [['', this.chartTitle], ...source],
        },
        xAxis: {
          name: '分类',
          axisLabel: {
            padding: [0, 0, 0, 0],
            margin: this.$fontSize(16),
            rotate: 45, // 调整数值改变倾斜的幅度（范围-90到90）
            fontSize: this.$fontSize(14),
            color: '#fff',
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
          nameTextStyle: {
            // x轴name的样式调整
            color: '#fff',
            fontSize: this.$fontSize(14),
            padding: [0, this.$fontSize(30), this.$fontSize(16), 0],
          },
          nameGap: 10,
          name: '数量',
          axisLabel: {
            color: '#fff',
          },
          axisLine: {
            show: false, //隐藏y轴
          },
          splitLine: {
            lineStyle: {
              type: 'dashed',
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
                color: this.color,
                //这里设置柱形图圆角 [左上角，右上角，右下角，左下角]
                barBorderRadius: [this.$fontSize(4), this.$fontSize(4), 0, 0],
              },
            },
          },
        ],
        grid: {
          // 让图表占满容器
          top: this.$fontSize(80),
          left: this.$fontSize(50),
          right: this.$fontSize(70),
          bottom: this.$fontSize(150),
        },
      };
    },
    initChart() {
      if (isEmptyObject(this.chartData)) return;
      let myChart = this.$echarts.init(this.$refs.BaseChart, null, {
        renderer: 'svg',
      });
      myChart.setOption(this.option, true);

      erd.listenTo(
        document.getElementById('BaseChart'),
        debounce(this.handelResize, 300),
      );
      this.myChart = myChart;
    },
  },
  beforeDestroy() {
    this.myChart.clear();
    erd.uninstall(this.$refs.BaseChart);
  },
  components: { Title, DvBorder },
};
</script>

<style lang="scss" scoped>
.BaseChart {
  height: 100%;
  background: #050a4e;
  box-shadow: inset -8px -8px 40px 0px rgba(0, 227, 255, 0.3),
    inset 8px 8px 40px 0px rgba(0, 227, 255, 0.3);
  position: relative;
  .chartTitle {
    position: absolute;
    left: 20px;
    top: 18px;
  }
  .chartWrap {
    padding: 20px;
    width: 100%;
    height: 100%;
    .chartsdom {
      height: 100%;
      width: 100%;
    }
  }
}
</style>