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
          axisLabel: {
            padding: [8, 0, 0, 0], //文字左右定位
            textStyle: {
              color: '#fff', //文字颜色
              fontSize: '12', //文字大小
              lineHeight: '22',
            },
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
            textStyle: {
              color: '#fff', //文字颜色
              fontSize: '12', //文字大小
              lineHeight: '22',
            },
          },
          nameTextStyle: {
            // x轴name的样式调整
            color: '#fff',
            fontSize: 14,
            padding: [0, 30, 16, 0],
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
            barWidth: '30',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)',
            },
            label: {
              // 柱图头部显示值
              show: true,
              color: '#FFFFFF',
              position: 'top',
              fontSize: '12px',
            },
            itemStyle: {
              normal: {
                color: '#009AFF',
                //这里设置柱形图圆角 [左上角，右上角，右下角，左下角]
                barBorderRadius: [4, 4, 0, 0],
              },
            },
          },
        ],
        grid: {
          // 让图表占满容器
          top: '40px',
          left: '42px',
          right: '70px',
          bottom: '45px',
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

      this.myChart = myChart;
      /* 窗口变化监听 */
      let erd = elementResizeDetectorMaker();
      erd.listenTo(document.getElementById('ProductChart'), () => {
        debounce(myChart.resize());
      });
      window.addEventListener('resize', () => {
        myChart.resize();
      });
    },
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