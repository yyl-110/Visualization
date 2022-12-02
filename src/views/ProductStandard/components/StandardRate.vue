<template>
  <div class="standeredContainer">
    <dv-border />
    <div class="chartWrap">
      <div class="chartTitle">
        <Title :text="'标准化率用统计图'" />
      </div>
      <div class="chartsdom" id="StandardChart" ref="StandardChart"></div>
    </div>
  </div>
</template>

<script>
import Title from '../../../components/Common/Title.vue';
import elementResizeDetectorMaker from 'element-resize-detector';
import { debounce } from '../../../utils/tool';
import DvBorder from '../../../components/Common/DvBorder.vue';
import { mapGetters } from 'vuex';
import { getProductStandard } from '../../../api';
let erd = elementResizeDetectorMaker();
export default {
  name: 'StandardChart',
  data() {
    return {
      option: {},
      myChart: null,
      chartData: [],
    };
  },
  watch: {
    queryYear() {},
    queryTime() {},
    chartData: {
      deep: true,
      handler() {
        this.initOption();
        if (this.myChart) {
          this.myChart.setOption(this.option, true);
        } else {
          this.initCharts();
        }
      },
    },
  },
  created() {
    this.handelGetProductStandard();
  },
  computed: {
    ...mapGetters(['queryYear', 'queryTime']),
  },
  mounted() {
    this.initOption();
    this.initCharts();
  },
  methods: {
    initOption() {
      let source = [];
      source = (this.chartData || []).map((i) => {
        return [i.prjType, i.borrowStandardPartCount, i.borrowPartCount];
      });
      this.option = {
        legend: {
          top: '-6',
          right: 0,
          y: '0',
          itemWidth: this.$fontSize(10),
          itemHeight: this.$fontSize(10),
          icon: 'circle',
          textStyle: {
            fontSize: this.$fontSize(14),
            color: 'rgba(255,255,255,0.5)', //字体颜色
          },
        },
        tooltip: {
          trigger: 'axis',
        },
        dataset: {
          source: [['', '标准件数量', '借用件数量'], ...source],
        },
        xAxis: {
          type: 'category',
          name: '项目类型',
          axisPointer: {
            type: 'shadow',
          },
          nameTextStyle: {
            // x轴name的样式调整
            color: '#fff',
            fontSize: this.$fontSize(14),
          },
          axisLabel: {
            padding: [this.$fontSize(8), 0, 0, 0],
            color: '#fff',
            fontSize: this.$fontSize(12),
            interval: 0, //使x轴文字显示全
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
            padding: [0, this.$fontSize(36), this.$fontSize(10), 0],
          },
          axisLine: {
            show: false, //隐藏y轴
          },
          axisLabel: {
            color: '#fff',
            fontSize: this.$fontSize(12),
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
                barBorderRadius: [this.$fontSize(4), this.$fontSize(4), 0, 0],
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
                barBorderRadius: [this.$fontSize(4), this.$fontSize(4), 0, 0],
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
          top: this.$fontSize(80),
          left: this.$fontSize(42),
          right: this.$fontSize(80),
          bottom: this.$fontSize(45),
        },
      };
    },
    initCharts() {
      let myChart = this.$echarts.init(
        document.getElementById('StandardChart'),
      );
      myChart.setOption(this.option, true);
      myChart.getZr().on('click', (params) => {
        let pointInPixel = [params.offsetX, params.offsetY];
        if (myChart.containPixel('grid', pointInPixel)) {
          let xIndex = myChart.convertFromPixel({ seriesIndex: 0 }, [
            params.offsetX,
            params.offsetY,
          ])[0];
          console.log(xIndex);
          try {
            const prjType = this.chartData[xIndex].prjType;
            this.$emit('handelClickChart', prjType);
          } catch (error) {
            console.log('error:', error);
          }
        }
      });
      erd.listenTo(document.getElementById('StandardChart'), () => {
        debounce(myChart.resize(), 200);
      });
      this.myChart = myChart;
    },
    handelGetProductStandard() {
      getProductStandard({
        queryYear: this.queryYear,
        queryTime: this.queryTime,
      })
        .then((res) => {
          if (res.success) {
            this.chartData = res['区域二十九'];
            /* 默认设置第一个座位table数据 */
            try {
              const prjType = this.chartData[0].prjType;
              this.$emit('handelClickChart', prjType);
            } catch (error) {
              console.log('error:', error);
            }
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  beforeDestroy() {
    erd.uninstall(this.$refs.StandardChart);
  },
  components: { Title, DvBorder },
};
</script>

<style lang="scss" scoped>
.standeredContainer {
  height: 384px;
  background: #050a4e;
  box-shadow: inset -8px -8px 40px 0px rgba(0, 227, 255, 0.3),
    inset 8px 8px 40px 0px rgba(0, 227, 255, 0.3);
  position: relative;
  .chartWrap {
    padding: 20px;
    width: 100%;
    height: 100%;
    position: relative;
    .chartTitle {
      position: absolute;
      left: 20px;
      top: 18px;
    }
    .chartsdom {
      height: 100%;
      width: 100%;
    }
  }
}
</style>