<template>
  <div class="futureChart" v-if="chartData">
    <dv-border />
    <div class="chartTitle">
      <Title :text="'近六期的趋势图'" />
    </div>
    <div class="chartWrap">
      <div class="chartsdom" id="FutureChart" ref="FutureChart"></div>
    </div>
  </div>
</template>

<script>
import Title from '@/components/Common/Title.vue';
import elementResizeDetectorMaker from 'element-resize-detector';
import { debounce } from '../../../utils/tool';
import DvBorder from '../../../components/Common/DvBorder.vue';
import { mapGetters } from 'vuex';
/* 窗口变化监听 */
let erd = elementResizeDetectorMaker();
let myChart = null;
let option = {};

export default {
  name: 'FutureChart',
  components: {
    Title,
    DvBorder,
  },
  props: {
    chartData: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    ...mapGetters(['queryType']),
    // 1 月度 2 季度 3 半年度 4 全年
    getTip() {
      let text = '';
      switch (this.queryType) {
        case 1:
          text = '月份';
          break;
        case 2:
          text = '季度';
          break;
        case 3:
          text = '半年度';
          break;
        case 4:
          text = '年份';
          break;
        default:
          text = '月份';
          break;
      }
      return text;
    },
  },
  watch: {
    chartData: {
      handler() {
        this.initOption();
        if (myChart) {
          myChart.clear();
          myChart.setOption(option, true);
        } else {
          this.$nextTick(() => {
            this.initChart();
          });
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
      myChart.resize();
    },
    initOption() {
      let xData = [];
      let drawing = [];
      let parts = [];
      let model = [];
      try {
        xData = this.chartData.map((i) => {
          return Object.keys(i)[0];
        });
        for (let i = 0; i < xData.length; i++) {
          drawing.push(this.chartData[i][xData[i]]['addDrawingCount']);
          model.push(this.chartData[i][xData[i]]['addModelCount']);
          parts.push(this.chartData[i][xData[i]]['addPartCount']);
        }
      } catch (error) {
        throw new Error(error);
      }

      option = {
        animation: !this.$isIE,
        tooltip: {
          trigger: 'axis',
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
          data: ['图纸数量', '模型数量', '零部件数量'],
          textStyle: {
            fontSize: this.$fontSize(14), //字体大小
            color: '#fff', //字体颜色
          },
        },
        xAxis: {
          name: this.getTip,
          data: xData,
          splitLine: {
            show: false,
          },
          axisLabel: {
            color: '#fff', //文字颜色
            fontSize: this.$fontSize(14), //文字大小
          },
          nameTextStyle: {
            color: '#fff',
            fontSize: this.$fontSize(14),
          },
        },
        yAxis: {
          name: '零部件数量',
          splitLine: {
            lineStyle: {
              type: 'dashed', //虚线
              color: 'rgba(255, 255, 255, 0.5)',
            },
            show: true, //隐藏
          },
          axisLine: {
            show: false, //隐藏y轴
          },
          axisLabel: {
            color: '#fff', //文字颜色
            fontSize: this.$fontSize(14), //文字大小
          },
          nameTextStyle: {
            padding: [0, 0, this.$fontSize(10), 0],
            color: '#fff',
            fontSize: this.$fontSize(14),
          },
        },
        series: [
          {
            name: '零部件数量',
            type: 'bar',
            barWidth: this.$fontSize(30),
            stack: '使用情况',
            data: parts,

            itemStyle: {
              normal: { color: '#165DFF' },
              barBorderRadius: [this.$fontSize(4), this.$fontSize(4), 0, 0],
            },
          },
          {
            name: '图纸数量',
            type: 'bar',
            barWidth: this.$fontSize(30),
            stack: '使用情况',
            data: drawing,
            itemStyle: {
              normal: { color: '#F7BA1E' },
              barBorderRadius: [this.$fontSize(4), this.$fontSize(4), 0, 0],
            },
          },
          {
            name: '模型数量',
            type: 'bar',
            barWidth: '30',
            stack: '使用情况',
            data: model,
            itemStyle: {
              normal: { color: '#23CEFD' },
              barBorderRadius: [this.$fontSize(4), this.$fontSize(4), 0, 0],
            },
          },
        ],
        grid: {
          // 让图表占满容器
          top: this.$fontSize(90),
          left: this.$fontSize(52),
          right: this.$fontSize(70),
          bottom: this.$fontSize(45),
        },
      };
    },
    initChart() {
      myChart = this.$echarts.init(
        document.getElementById('FutureChart'),
        null,
        { renderer: 'svg' },
      );
      myChart.setOption(option, true);
      erd.listenTo(
        document.getElementById('FutureChart'),
        debounce(this.handelResize, 300),
      );
    },
  },
  beforeDestroy() {
    if (myChart) myChart.clear();
    erd.uninstall(this.$refs.FutureChart);
  },
};
</script>

<style lang="scss" scoped>
.futureChart {
  width: 100%;
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