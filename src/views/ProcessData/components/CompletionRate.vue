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
export default {
  name: 'CompletionRate',
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
          top: 0,
          right: 10,
          y: '0',
          data: ['流程完成率', '流程数量'],
          textStyle: {
            color: '#fff',
            fontSize: 14,
          },
        },
        xAxis: [
          {
            type: 'category',
            axisLabel: {
              padding: [8, 0, 0, 0], //文字左右定位
              textStyle: {
                color: '#fff', //文字颜色
                fontSize: '12', //文字大小
                lineHeight: '22',
              },
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
              padding: [0, 36, 0, 0],
              color: '#fff',
            },
            interval: 50,
            axisLabel: {
              formatter: '{value}',
              textStyle: {
                color: '#fff', //文字颜色
                fontSize: '12', //文字大小
                lineHeight: '22',
              },
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
            },
            splitLine: {
              show: false,
            },
            interval: 10,
            axisLabel: {
              formatter: '{value}',
              textStyle: {
                color: '#fff', //文字颜色
                fontSize: '12', //文字大小
                lineHeight: '22',
              },
            },
          },
        ],
        series: [
          {
            name: '流程数量',
            type: 'bar',
            barWidth: '30',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)',
            },
            itemStyle: {
              normal: {
                color: '#009AFF',
                //这里设置柱形图圆角 [左上角，右上角，右下角，左下角]
                barBorderRadius: [4, 4, 0, 0],
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
            symbolSize: 14,
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
              fontSize: '12px',
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
          top: '66px',
          left: '42px',
          right: '70px',
          bottom: '80px',
        },
      };

      myChart.setOption(this.option, true);

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