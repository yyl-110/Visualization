<template>
  <div class="changeView">
    <dv-border />
    <div class="chartWrap">
      <div class="chartTitle">
        <Title :text="'变更单量数量视图'" />
      </div>
      <div class="chartsdom" id="ChangeView" ref="ChangeView"></div>
    </div>
  </div>
</template>

<script>
import Title from '../../../components/Common/Title.vue';
import elementResizeDetectorMaker from 'element-resize-detector';
import { debounce } from '../../../utils/tool';
import DvBorder from '../../../components/Common/DvBorder.vue';
export default {
  name: 'VueDataVChangeView',
  props: {
    changeViewData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      myChart: null,
    };
  },
  mounted() {
    this.initChart();
    let erd = elementResizeDetectorMaker();
    let that = this;
    erd.listenTo(document.getElementById('ChangeView'), () => {
      debounce(that.myChart.resize(), 200);
    });
  },
  methods: {
    initChart() {
      let myChart = echarts.init(document.getElementById('ChangeView'));
      const source = this.changeViewData.map((i) => {
        return [i.prjType, i.addECNCount];
      });
      console.log('source:', this.changeViewData)
      this.option = {
        tooltip: {
          trigger: 'axis',
          showDelay: 0, // 显示延迟，添加显示延迟可以避免频繁切换，单位ms
          axisPointer: {
            type: 'shadow',
          },
        },
        dataset: {
          source: [...source],
        },
        xAxis: {
          name: '项目类型',
          axisLabel: {
            padding: [this.$fontSize(8), 0, 0, 0], //文字左右定位
            color: '#fff', //文字颜色
            fontSize: this.$fontSize(12), //文字大小
          },
          nameTextStyle: {
            // x轴name的样式调整
            color: '#fff',
            fontSize: this.$fontSize(14),
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
            barWidth: this.$fontSize(30),
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)',
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
          top: this.$fontSize(110),
          left: this.$fontSize(42),
          right: this.$fontSize(90),
          bottom: this.$fontSize(70),
        },
      };
      myChart.setOption(this.option, true);
      this.myChart = myChart;
      window.addEventListener('resize', () => {
        myChart.resize();
      });
    },
  },
  components: { Title, DvBorder },
};
</script>

<style lang="scss" scoped>
.changeView {
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