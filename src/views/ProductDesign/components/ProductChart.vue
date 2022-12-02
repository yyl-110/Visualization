<template>
  <div class="productChart">
    <dv-border />
    <div class="chartWrap">
      <div class="chartsdom" id="ProductChart" ref="ProductChart"></div>
    </div>
  </div>
</template>

<script>
import DvBorder from '../../../components/Common/DvBorder.vue';
import elementResizeDetectorMaker from 'element-resize-detector';
import { debounce } from '../../../utils/tool';
/* 窗口变化监听 */
let erd = elementResizeDetectorMaker();

export default {
  components: { DvBorder },
  name: 'ProductChart',
  props: {
    productData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      option: {},
      myChart: null,
    };
  },
  watch: {
    productData: {
      handler() {
        this.initOption();
        if (this.myChart) {
          this.myChart.setOption(this.option, true);
        } else {
          this.$nextTick(() => {
            this.initChart();
          });
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
    initOption() {
      /* 组装数据 */
      const source = this.productData.map((i) => {
        return [i.prjType, i.addCount];
      });
      this.option = {
        tooltip: {
          trigger: 'axis',
          showDelay: 0, // 显示延迟，添加显示延迟可以避免频繁切换，单位ms
          axisPointer: {
            type: 'shadow',
          },
        },
        dataset: {
          source: source,
        },
        xAxis: {
          name: '项目类型',
          nameTextStyle: {
            color: '#fff',
            fontSize: this.$fontSize(14),
          },
          axisLabel: {
            padding: [this.$fontSize(8), 0, 0, 0], //文字左右定位
            color: '#fff', //文字颜色
            fontSize: this.$fontSize(12), //文字大小
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
            barWidth: this.$fontSize(40),
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(255, 255, 255, .3)',
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
          top: this.$fontSize(50),
          left: this.$fontSize(42),
          right: this.$fontSize(120),
          bottom: this.$fontSize(40),
        },
      };
    },
    initChart() {
      let myChart = this.$echarts.init(document.getElementById('ProductChart'));
      myChart.setOption(this.option, true);
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

      erd.listenTo(document.getElementById('ProductChart'), () => {
        debounce(myChart.resize(), 200);
      });
      this.myChart = myChart;
    },
  },
  beforeDestroy() {
    erd.removeAllListeners(document.getElementById('ProductChart'));
  },
};
</script>

<style lang="scss" scoped>
.productChart {
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