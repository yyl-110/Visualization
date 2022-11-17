<template>
  <div class="futureChart">
    <dv-border-box-7 ref="borderBox">
      <div class="chartTitle">
        <Title :text="'近六期的趋势图'" />
      </div>
      <div class="chartWrap">
        <div class="chartsdom" id="FutureChart"></div>
      </div>
    </dv-border-box-7>
  </div>
</template>

<script>
import Title from '@/components/Common/Title.vue';
import resizeChartMixin from '@/utils/resizeChartMixin';
import elementResizeDetectorMaker from 'element-resize-detector';
import { debounce } from '../../../utils/tool';

export default {
  name: 'FutureChart',
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
    erd.listenTo(document.getElementById('FutureChart'), () => {
      debounce(that.myChart.resize());
    });
  },

  methods: {
    initChart() {
      let myChart = echarts.init(document.getElementById('FutureChart'));
      this.option = {
        tooltip: {
          trigger: 'axis',
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
            fontSize: this.$fontSize(12), //字体大小
            color: '#fff', //字体颜色
          },
        },
        xAxis: {
          name: '月份',
          data: ['1月', '2月', '3月', '4月', '5月', '6月'],
          splitLine: {
            show: false,
          },
          axisLabel: {
            color: '#fff', //文字颜色
            fontSize: this.$fontSize(12), //文字大小
          },
          nameTextStyle: {
            color: '#fff',
            fontSize: this.$fontSize(12),
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
          axisLabel: {
            color: '#fff', //文字颜色
            fontSize: this.$fontSize(12), //文字大小
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
            data: [5, 20, 36, 10, 10, 20],

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
            data: [40, 22, 18, 35, 42, 40],
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
            data: [40, 22, 18, 35, 42, 40],
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
.futureChart {
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