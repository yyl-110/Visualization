<template>
  <div class="CompletionRate">
    <dv-border-box-7 ref="borderBox">
      <div class="chartTitle">
        <Title :text="'项目类型流程数量及完成率'" />
      </div>
      <div class="chartWrap">
        <div class="chartsdom" id="RateChart"></div>
      </div>
    </dv-border-box-7>
  </div>
</template>

<script>
import Title from '@/components/Common/Title';
import resizeChartMixin from '../../../utils/resizeChartMixin';
import elementResizeDetectorMaker from 'element-resize-detector';
import { debounce } from '../../../utils/tool';
export default {
  name: 'CompletionRate',
  components: {
    Title,
  },
  mixins: [resizeChartMixin],
  data() {
    return {
      option: {},
      myChart: null,
    };
  },

  mounted() {
    this.initChart();
    let erd = elementResizeDetectorMaker();
    let that = this;
    erd.listenTo(document.getElementById('RateChart'), () => {
      debounce(that.myChart.resize(), 200);
    });
  },

  methods: {
    initChart() {
      let myChart = echarts.init(document.getElementById('RateChart'));

      this.option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999',
            },
          },
        },
        legend: {
          itemWidth: this.$fontSize(20),
          itemHeight: this.$fontSize(10),
          top: 0,
          right: this.$fontSize(10),
          y: '0',
          data: ['流程完成率', '流程数量'],
          textStyle: {
            color: '#fff',
            fontSize: this.$fontSize(14),
          },
        },
        xAxis: [
          {
            type: 'category',
            axisLabel: {
              padding: [this.$fontSize(8), 0, 0, 0], //文字左右定位
              color: '#fff', //文字颜色
              fontSize: this.$fontSize(12), //文字大小
            },
            data: [
              '集团项目',
              '公安武警项目',
              '基础科研项目',
              '实验基础项目',
              '技术基础类',
              '其他项目',
              '军贸项目',
            ],
            axisPointer: {
              type: 'shadow',
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
            name: '数量',
            nameTextStyle: {
              padding: [0, this.$fontSize(36), this.$fontSize(10), 0],
              color: '#fff',
              fontSize: this.$fontSize(14),
            },
            interval: 50,
            axisLabel: {
              formatter: '{value}',
              color: '#fff', //文字颜色
              fontSize: this.$fontSize(12), //文字大小
            },
            splitLine: {
              lineStyle: {
                type: 'dashed', //虚线
                color: 'rgba(255, 255, 255, 0.5)',
              },
              show: true, //隐藏
            },
          },
          {
            type: 'value',
            name: '流程完成率%',
            nameTextStyle: {
              color: '#fff',
              fontSize: this.$fontSize(14),
            },
            splitLine: {
              show: false,
            },
            interval: 10,
            axisLabel: {
              formatter: '{value}',
              color: '#fff', //文字颜色
              fontSize: this.$fontSize(12), //文字大小
            },
          },
        ],
        series: [
          {
            name: '流程数量',
            type: 'bar',
            barWidth: this.$fontSize(30),
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)',
            },
            itemStyle: {
              normal: {
                color: '#009AFF',
                //这里设置柱形图圆角 [左上角，右上角，右下角，左下角]
                barBorderRadius: [this.$fontSize(4), this.$fontSize(4), 0, 0],
              },
            },
            tooltip: {
              valueFormatter: function (value) {
                return value;
              },
            },
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6],
          },
          {
            name: '流程完成率',
            type: 'line',
            yAxisIndex: 1,
            symbolSize: this.$fontSize(14),
            itemStyle: {
              normal: {
                color: '#23CEFD',
              },
            },
            label: {
              // 柱图头部显示值
              show: true,
              color: '#FFFFFF',
              position: 'bottom',
              fontSize: this.$fontSize(12),
            },
            tooltip: {
              valueFormatter: function (value) {
                return value + '%';
              },
            },
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3],
          },
        ],
        grid: {
          // 让图表占满容器
          top: this.$fontSize(101),
          left: this.$fontSize(42),
          right: this.$fontSize(70),
          bottom: this.$fontSize(80),
        },
      };

      myChart.setOption(this.option, true);

      this.myChart = myChart;
      window.addEventListener('resize', () => {
        myChart.resize();
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.CompletionRate {
  width: 100%;
  height: 100%;
  background: #050a4e;
  box-shadow: inset -8px -8px 40px 0px rgba(0, 227, 255, 0.3),
    inset 8px 8px 40px 0px rgba(0, 227, 255, 0.3);
  border-radius: 4px;
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