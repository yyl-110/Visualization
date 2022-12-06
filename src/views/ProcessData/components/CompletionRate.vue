<template>
  <div class="CompletionRate">
    <dv-border />
    <div class="chartTitle">
      <Title :text="'项目类型流程数量及完成率'" />
    </div>
    <div class="chartWrap">
      <div class="chartsdom" id="RateChart" ref="RateChart"></div>
    </div>
  </div>
</template>

<script>
import Title from '@/components/Common/Title';
import elementResizeDetectorMaker from 'element-resize-detector';
import { debounce } from '../../../utils/tool';
import DvBorder from '../../../components/Common/DvBorder.vue';
import { getProcessDataByCard } from '@/api';
import { mapGetters } from 'vuex';
let erd = elementResizeDetectorMaker();

export default {
  name: 'CompletionRate',
  components: {
    Title,
    DvBorder,
  },
  props: {
    processType: {
      type: String,
      default: '',
    },
    update: {
      type: Number,
      default: 0,
    },
  },

  watch: {
    processType(val) {
      if (!val) return;
      this.getProcessDataByCard();
    },
    completionData: {
      deep: true,
      handler() {
        this.initOption();
        if (this.myChart) {
          this.myChart.setOption(this.option, true);
        } else {
          this.initChart();
        }
      },
    },
    update() {
      this.getProcessDataByCard();
    },
  },
  computed: {
    ...mapGetters(['queryYear', 'queryTime']),
  },
  data() {
    return {
      option: {},
      myChart: null,
      completionData: [],
    };
  },
  created() {
    if (this.processType) this.getProcessDataByCard();
  },

  mounted() {
    this.initOption();
    this.initChart();
  },

  methods: {
    handelResize() {
      this.myChart.resize();
    },
    initOption() {
      const xLabel = this.completionData.map((i) => i.prjType);
      const data1 = this.completionData.map((i) => i.workflowAddCount);
      const data2 = this.completionData.map((i) =>
        parseInt(i.workflowFinishRate),
      );
      this.option = {
        animation: !this.$isIE,
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
              fontSize: this.$fontSize(14), //文字大小
              interval: 0, //使x轴文字显示全
            },
            data: xLabel,
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
            axisLine: {
              show: false, //隐藏y轴
            },
            axisLabel: {
              formatter: '{value}',
              color: '#fff', //文字颜色
              fontSize: this.$fontSize(14), //文字大小
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
            axisLine: {
              show: false, //隐藏y轴
            },
            nameTextStyle: {
              color: '#fff',
              fontSize: this.$fontSize(14),
            },
            splitLine: {
              lineStyle: {
                type: 'dashed', //虚线
                color: 'rgba(255, 255, 255, 0.5)',
              },
              show: true, //隐藏
            },
            axisLabel: {
              formatter: '{value}',
              color: '#fff', //文字颜色
              fontSize: this.$fontSize(14), //文字大小
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
            data: data1,
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
              position: 'top',
              fontSize: this.$fontSize(14),
            },
            tooltip: {
              valueFormatter: function (value) {
                return value + '%';
              },
            },
            data: data2,
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
    },
    initChart() {
      let myChart = this.$echarts.init(
        document.getElementById('RateChart'),
        null,
        { renderer: 'svg' },
      );

      myChart.setOption(this.option, true);
      erd.listenTo(
        document.getElementById('RateChart'),
        debounce(this.handelResize, 300),
      );
      this.myChart = myChart;
    },
    getProcessDataByCard() {
      getProcessDataByCard({
        queryYear: this.queryYear,
        queryTime: this.queryTime,
        workflowType: this.processType,
      })
        .then((res) => {
          console.log('res:', res);
          if (res.success) {
            this.completionData = res['区域二十一'];
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  beforeDestroy() {
    this.myChart.clear();
    erd.uninstall(this.$refs.RateChart);
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