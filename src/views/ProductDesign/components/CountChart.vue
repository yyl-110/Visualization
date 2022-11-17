<template>
  <div class="countContainer">
    <dv-border-box-7 ref="borderBox">
      <div class="chartWrap">
        <div class="chartsdom" id="CountChart"></div>
      </div>
    </dv-border-box-7>
  </div>
</template>

<script>
import resizeChartMixin from '@/utils/resizeChartMixin';
import elementResizeDetectorMaker from 'element-resize-detector';
import { debounce } from '../../../utils/tool';
export default {
  name: 'CountChart',

  data() {
    return {
      option: {},
      myChart: null,
    };
  },
  mixins: [resizeChartMixin],
  mounted() {
    this.initCharts();
    let erd = elementResizeDetectorMaker();
    let that = this;
    erd.listenTo(document.getElementById('CountChart'), () => {
      debounce(that.myChart.resize(), 200);
    });
  },

  methods: {
    initCharts() {
      let myChart = echarts.init(document.getElementById('CountChart'));
      this.option = {
        legend: {
          top: -this.$fontSize(6),
          right: 0,
          y: '0',
          itemWidth: this.$fontSize(10),
          itemHeight: this.$fontSize(10),
          icon: 'circle',
          textStyle: {
            fontSize: this.$fontSize(14), //字体大小
            color: 'rgba(255,255,255,0.5)', //字体颜色
          },
        },
        tooltip: {
          trigger: 'axis',
        },
        dataset: {
          source: [
            ['', '零部件数量', '模型数量', '图纸数量'],
            ['集团项目', 100, 200, 300],
            ['公安武警项目', 83.1, 73.4, 55.1],
            ['基础科研项目', 86.4, 65.2, 82.5],
            ['实验基础项目', 72.4, 53.9, 39.1],
            ['技术基础类', 72.4, 53.9, 39.1],
            ['其他项目', 72.4, 53.9, 39.1],
            ['技术基础类1', 72.4, 53.9, 39.1],
            ['技术基础类2', 72.4, 53.9, 39.1],
            ['技术基础类3', 72.4, 53.9, 39.1],
          ],
        },
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
            textStyle: {
              color: '#fff', //文字颜色
              fontSize: this.$fontSize(12), //文字大小
              lineHeight: this.$fontSize(22),
            },
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
                barBorderRadius: [4, 4, 0, 0],
              },
            },
            label: {
              // 柱图头部显示值
              show: true,
              color: '#FFFFFF',
              position: 'top',
              fontSize: this.$fontSize(12),
            },
          },
          {
            type: 'bar',
            barWidth: this.$fontSize(30),
            itemStyle: {
              normal: {
                color: '#23CEFD',
                //这里设置柱形图圆角 [左上角，右上角，右下角，左下角]
                barBorderRadius: [4, 4, 0, 0],
              },
            },
            label: {
              // 柱图头部显示值
              show: true,
              color: '#FFFFFF',
              position: 'top',
              fontSize: this.$fontSize(12),
            },
          },
          {
            type: 'bar',
            barWidth: this.$fontSize(30),
            itemStyle: {
              normal: {
                color: '#F7BA1E',
                //这里设置柱形图圆角 [左上角，右上角，右下角，左下角]
                barBorderRadius: [4, 4, 0, 0],
              },
            },
            label: {
              // 柱图头部显示值
              show: true,
              color: '#FFFFFF',
              position: 'top',
              fontSize: this.$fontSize(12),
            },
          },
        ],
        grid: {
          // 让图表占满容器
          top: this.$fontSize(31),
          left: this.$fontSize(48),
          right: this.$fontSize(80),
          bottom: this.$fontSize(45),
        },
      };
      myChart.setOption(this.option, true);

      myChart.getZr().on('click', (params) => {
        console.log('params:', this.option.series);

        let pointInPixel = [params.offsetX, params.offsetY];
        if (myChart.containPixel('grid', pointInPixel)) {
          let xIndex = myChart.convertFromPixel({ seriesIndex: 0 }, [
            params.offsetX,
            params.offsetY,
          ])[0];
          console.log(xIndex);
        }
      });
      window.addEventListener('resize', () => {
        myChart.resize();
      });
      this.myChart = myChart;
    },
  },
};
</script>

<style lang="scss" scoped>
.countContainer {
  height: 340px;
  background: #050a4e;
  box-shadow: inset -8px -8px 40px 0px rgba(0, 227, 255, 0.3),
    inset 8px 8px 40px 0px rgba(0, 227, 255, 0.3);
  border-radius: 4px;
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