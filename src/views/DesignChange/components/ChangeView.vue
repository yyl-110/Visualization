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
let erd = elementResizeDetectorMaker();
let myChart = null;
let option = {};

export default {
  name: 'VueDataVChangeView',
  props: {
    changeViewData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  watch: {
    changeViewData: {
      deep: true,
      handler() {
        this.initOption();
        if (myChart) {
          myChart.clear()
          myChart.setOption(option, true);
        } else {
          this.initChart();
        }
      },
    },
  },
  created() {},
  mounted() {
    this.initOption();
    this.initChart();
  },
  methods: {
    handelResize() {
      myChart.resize();
    },
    initOption() {
      const source = this.changeViewData.map((i) => {
        return [i.prjType, i.addECNCount];
      });
      option = {
        animation: !this.$isIE,
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
            fontSize: this.$fontSize(14), //文字大小
            interval: 0, //使x轴文字显示全
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
            fontSize: this.$fontSize(14), //文字大小
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
              fontSize: this.$fontSize(14),
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
    },
    initChart() {
      myChart = this.$echarts.init(
        document.getElementById('ChangeView'),
        null,
        { renderer: 'svg' },
      );
      myChart.setOption(option, true);
      erd.listenTo(
        document.getElementById('ChangeView'),
        debounce(this.handelResize, 300),
      );
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
    },
  },
  beforeDestroy() {
    if (myChart) myChart.clear();
    erd.uninstall(this.$refs.ChangeView);
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