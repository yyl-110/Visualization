<template>
  <div class="productChange">
    <dv-border />
    <div class="partsWrap">
      <div class="titleWrap">
        <Title text="PDM上人数统计" class="title" />
      </div>
      <div class="chartWrap">
        <div class="chartsdom" id="LineChart" ref="LineChart"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from '../../components/Common/Title.vue';
import DvBorder from '../../components/Common/DvBorder.vue';
import { debounce } from '../../utils/tool';
import elementResizeDetectorMaker from 'element-resize-detector';

import { getPersonCount } from '@/api';
import { mapGetters } from 'vuex';
let erd = elementResizeDetectorMaker();
let myChart = null;
let option = {};

export default {
  components: { Title, DvBorder },
  data() {
    return {
      list: [],
    };
  },
  computed: {
    ...mapGetters(['queryYear', 'queryTime']),
  },
  created() {
    this.getPersonCount();
  },
  mounted() {},
  watch: {
    queryYear() {
      this.getPersonCount();
    },
    queryTime() {
      this.getPersonCount();
    },
  },
  methods: {
    handelResize() {
      myChart.resize();
    },
    initOption() {
      const xLabel = this.list.map((i) => i.date);
      const data2 = this.list.map((i) => parseInt(i.personCount));
      option = {
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
          show: false,
        },
        xAxis: [
          {
            type: 'category',
            name: '日期',
            nameTextStyle: {
              color: '#fff',
              fontSize: this.$fontSize(14),
              padding: [0, 0, -this.$fontSize(70), -this.$fontSize(40)],
            },
            axisLabel: {
              padding: [this.$fontSize(60), 0, 0, 0], //文字左右定位
              color: '#fff', //文字颜色
              fontSize: this.$fontSize(12), //文字大小
              interval: 0, //使x轴文字显示全
              rotate: 45, // 调整数值改变倾斜的幅度（范围-90到90）
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
            name: '人数',
            axisLine: {
              show: false, //隐藏y轴
            },
            nameTextStyle: {
              color: '#fff',
              fontSize: this.$fontSize(14),
              padding: [0, 0, this.$fontSize(10), -this.$fontSize(30)],
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
            name: '人数',
            type: 'line',
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
          top: this.$fontSize(60),
          left: this.$fontSize(60),
          right: this.$fontSize(70),
          bottom: this.$fontSize(100),
        },
      };
    },
    initChart() {
      myChart = this.$echarts.init(document.getElementById('LineChart'), null, {
        renderer: 'svg',
      });

      myChart.setOption(option, true);
      erd.listenTo(
        document.getElementById('LineChart'),
        debounce(this.handelResize, 300),
      );
    },
    getPersonCount() {
      getPersonCount({
        queryYear: this.queryYear,
        queryTime: this.queryTime,
      })
        .then((res) => {
          console.log('res111:', res);
          if (res.success) {
            this.list = res['区域四十八'];
            this.initOption();
            this.initChart();
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.productChange {
  width: 100%;
  background: #050a4e;
  box-shadow: inset -8px -8px 40px 0px rgba(0, 227, 255, 0.3),
    inset 8px 8px 40px 0px rgba(0, 227, 255, 0.3);
  height: 98%;
  position: relative;
  .partsWrap {
    width: 100%;
    padding: 0 20px 30px;
    height: 90%;
    .chartWrap {
      width: 100%;
      height: 100%;
      padding-top: 15px;
      .chartsdom {
        width: 100%;
        height: 100%;
      }
    }
    .titleWrap {
      padding: 13px 0 20px;
      overflow: hidden;
      .title {
        float: left;
        margin-top: 15px;
      }
    }
  }
}
</style>