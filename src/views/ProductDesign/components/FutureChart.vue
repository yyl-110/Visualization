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
import { resizeOb } from '../../../utils/tool';

export default {
  name: 'FutureChart',
  components: {
    Title,
  },
  mixins: [resizeChartMixin],
  data() {
    return {
      option: {},
    };
  },

  mounted() {
    this.initChart();
    resizeOb(document.getElementById('FutureChart'));
  },

  methods: {
    initChart() {
      let myChart = echarts.init(document.getElementById('FutureChart'));
      this.option = {
        // title: {
        //   text: '近六期的趋势图',
        //   left: '20px',
        //   textStyle: {
        //     color: '#436EEE',
        //     fontSize: 17,
        //   },
        // },
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          top: '0',
          right: 0,
          y: '0',
          itemWidth: 10,
          itemHeight: 10,
          icon: 'circle',
          data: ['图纸数量', '模型数量', '零部件数量'],
          textStyle: {
            fontSize: 14, //字体大小
            color: 'rgba(255,255,255,0.5)', //字体颜色
          },
        },
        xAxis: {
          name: '月份',
          data: ['1月', '2月', '3月', '4月', '5月', '6月'],
          splitLine: {
            show: false,
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
          nameTextStyle: {
            padding: [0, 0, 10, 0],
          },
        },
        series: [
          {
            name: '零部件数量',
            type: 'bar',
            barWidth: '30',
            stack: '使用情况',
            data: [5, 20, 36, 10, 10, 20],

            itemStyle: {
              normal: { color: '#165DFF' },
              barBorderRadius: [4, 4, 0, 0],
            },
          },
          {
            name: '图纸数量',
            type: 'bar',
            barWidth: '30',
            stack: '使用情况',
            data: [40, 22, 18, 35, 42, 40],
            itemStyle: {
              normal: { color: '#F7BA1E' },
              barBorderRadius: [4, 4, 0, 0],
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
              barBorderRadius: [4, 4, 0, 0],
            },
          },
        ],
        grid: {
          // 让图表占满容器
          top: '80px',
          left: '52px',
          right: '70px',
          bottom: '45px',
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