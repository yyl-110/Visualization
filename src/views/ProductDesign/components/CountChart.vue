<template>
  <div class="countContainer">
    <dv-border />
    <div class="chartWrap">
      <div class="chartsdom" id="CountChart" ref="CountChart"></div>
    </div>
  </div>
</template>

<script>
import elementResizeDetectorMaker from 'element-resize-detector';
import { debounce } from '../../../utils/tool';
import DvBorder from '../../../components/Common/DvBorder.vue';
let erd = elementResizeDetectorMaker();
let myChart = null;
let option = {};
export default {
  components: { DvBorder },
  name: 'CountChart',
  props: {
    chartData: {
      type: Array,
      default: () => [],
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
          this.initCharts();
        }
      },
      deep: true,
    },
  },
  data() {
    return {};
  },
  mounted() {
    this.initOption();
    this.initCharts();
  },

  methods: {
    handelResize() {
      myChart.resize();
    },
    initOption() {
      /* 组装数据 */
      const source = this.chartData.map((i) => {
        return [i.prjType, i.addPartCount, i.addModelCount, i.addDrawingCount];
      });
      option = {
        legend: {
          top: 0,
          right: 0,
          y: '0',
          itemWidth: this.$fontSize(10),
          itemHeight: this.$fontSize(10),
          icon: 'circle',
          textStyle: {
            fontSize: this.$fontSize(14), //字体大小
            color: '#fff', //字体颜色
          },
        },
        tooltip: {
          trigger: 'axis',
        },
        dataset: {
          source: [['', '零部件数量', '模型数量', '图纸数量'], ...source],
        },
        animation: !this.$isIE,
        xAxis: {
          type: 'category',
          name: '项目类型',
          nameTextStyle: {
            // x轴name的样式调整
            color: '#fff',
            fontSize: this.$fontSize(14),
          },
          axisPointer: {
            type: 'shadow',
          },
          axisLabel: {
            padding: [this.$fontSize(8), 0, 0, 0], //文字左右定位
            color: '#fff', //文字颜色
            fontSize: this.$fontSize(14), //文字大小
            lineHeight: this.$fontSize(22),
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#fff',
              type: 'solid',
            },
          },
        },
        yAxis: {
          type: 'value',
          nameTextStyle: {
            // x轴name的样式调整
            color: '#fff',
            fontSize: this.$fontSize(14),
            padding: [0, this.$fontSize(50), this.$fontSize(10), 0],
          },
          axisLine: {
            show: false, //隐藏y轴
          },
          axisLabel: {
            color: '#fff', //文字颜色
            fontSize: this.$fontSize(14), //文字大小
          },
          nameGap: this.$fontSize(10), // x轴name与横坐标轴线的间距
          name: '数量',
          splitLine: {
            lineStyle: {
              type: 'dashed', //虚线
              color: 'rgba(255, 255, 255, 0.5)',
            },
            show: true, //隐藏
          },
        },
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [
          {
            type: 'bar',
            barWidth: this.$fontSize(30),
            tooltip: {
              valueFormatter: function (value) {
                return value;
              },
            },
            itemStyle: {
              normal: {
                color: '#165DFF',
                //这里设置柱形图圆角 [左上角，右上角，右下角，左下角]
                barBorderRadius: [this.$fontSize(4), this.$fontSize(4), 0, 0],
              },
            },
            label: {
              // 柱图头部显示值
              show: true,
              color: '#FFFFFF',
              position: 'top',
              fontSize: this.$fontSize(14),
            },
          },
          {
            type: 'bar',
            barWidth: this.$fontSize(30),
            itemStyle: {
              normal: {
                color: '#23CEFD',
                //这里设置柱形图圆角 [左上角，右上角，右下角，左下角]
                barBorderRadius: [this.$fontSize(4), this.$fontSize(4), 0, 0],
              },
            },
            label: {
              // 柱图头部显示值
              show: true,
              color: '#FFFFFF',
              position: 'top',
              fontSize: this.$fontSize(14),
            },
          },
          {
            type: 'bar',
            barWidth: this.$fontSize(30),
            itemStyle: {
              normal: {
                color: '#F7BA1E',
                //这里设置柱形图圆角 [左上角，右上角，右下角，左下角]
                barBorderRadius: [this.$fontSize(4), this.$fontSize(4), 0, 0],
              },
            },
            label: {
              // 柱图头部显示值
              show: true,
              color: '#FFFFFF',
              position: 'top',
              fontSize: this.$fontSize(14),
            },
          },
        ],
        grid: {
          // 让图表占满容器
          top: this.$fontSize(41),
          left: this.$fontSize(48),
          right: this.$fontSize(80),
          bottom: this.$fontSize(45),
        },
      };
    },
    initCharts() {
      myChart = this.$echarts.init(
        document.getElementById('CountChart'),
        null,
        { renderer: 'svg' },
      );
      myChart.setOption(option, true);

      /* 点击柱形图 */
      myChart.getZr().on('click', (params) => {
        let pointInPixel = [params.offsetX, params.offsetY];
        if (myChart.containPixel('grid', pointInPixel)) {
          let xIndex = myChart.convertFromPixel({ seriesIndex: 0 }, [
            params.offsetX,
            params.offsetY,
          ])[0];
          /* 点击柱形图 */
          this.$emit('chartClick', xIndex);
          console.log(xIndex);
        }
      });
      erd.listenTo(
        document.getElementById('CountChart'),
        debounce(this.handelResize, 300),
      );
    },
  },
  beforeDestroy() {
    if (myChart) {
      myChart.clear();
    }
    erd.uninstall(this.$refs.CountChart);
  },
};
</script>

<style lang="scss" scoped>
.countContainer {
  height: 340px;
  background: #050a4e;
  box-shadow: inset -8px -8px 40px 0px rgba(0, 227, 255, 0.3),
    inset 8px 8px 40px 0px rgba(0, 227, 255, 0.3);
  position: relative;
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