<template>
  <div class="BaseChart">
    <dv-border-box-7 ref="borderBox">
      <div class="chartTitle">
        <Title :text="title" />
      </div>
      <div class="chartWrap">
        <div class="chartsdom" ref="BaseChart"></div>
      </div>
    </dv-border-box-7>
  </div>
</template>

<script>
import Title from '../../../components/Common/Title.vue';
import resizeChartMixin from '../../../utils/resizeChartMixin';
export default {
  name: 'StandardChart',
  props: {
    title: {
      type: String,
      default: '标题',
    },
    color: {
      type: String,
      default: '#00DFFB',
    },
  },
  data() {
    return {
      option: {},
    };
  },
  mixins: [resizeChartMixin],
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      let myChart = echarts.init(this.$refs.BaseChart);
      this.option = {
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
          itemWidth: 10,
          itemHeight: 10,
          icon: 'circle',
          data: ['集团项目'],
          textStyle: {
            fontSize: 14, //字体大小
            color: 'rgba(255,255,255,0.5)', //字体颜色
          },
        },
        dataset: {
          source: [
            ['', '集团项目'],
            ['集团项目', 0],
            ['公安武警项目', 83.1],
            ['基础科研项目', 86.4],
            ['实验基础项目', 72.4],
            ['技术基础类', 0],
            ['其他项目', 72.4],
            ['技术基础类1', 72.4],
            ['技术基础类2', 72.4],
            ['技术基础类3', 72.4],
          ],
        },
        xAxis: {
          name: '分类',
          axisLabel: {
            padding: [0, 0, 0, 0],
            margin: 16,
            rotate: 45, // 调整数值改变倾斜的幅度（范围-90到90）
            textStyle: {
              color: '#fff',
              fontSize: '12',
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
          nameTextStyle: {
            // x轴name的样式调整
            color: '#fff',
            fontSize: 14,
            padding: [0, 30, 16, 0],
          },
          nameGap: 10,
          name: '数量',
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
                color: this.color,
                //这里设置柱形图圆角 [左上角，右上角，右下角，左下角]
                barBorderRadius: [4, 4, 0, 0],
              },
            },
          },
        ],
        grid: {
          // 让图表占满容器
          top: '80px',
          left: '42px',
          right: '70px',
          bottom: '150px',
        },
      };
      myChart.setOption(this.option, true);
      window.addEventListener('resize', () => {
        myChart.resize();
      });
    },
  },
  components: { Title },
};
</script>

<style lang="scss" scoped>
.BaseChart {
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