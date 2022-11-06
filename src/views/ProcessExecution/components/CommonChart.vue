<template>
  <div class="commonChart">
    <dv-border-box-7 ref="borderBox">
      <div class="chartContainer">
        <div class="chartTitle">
          <Title :text="'普通文档流程超期任务量'" />
        </div>
        <universal-chart style="flex: 1" />
      </div>
    </dv-border-box-7>
  </div>
</template>

<script>
import Title from '../../../components/Common/Title.vue';
import UniversalChart from '../../../components/Common/UniversalChart.vue';
import resizeChartMixin from '../../../utils/resizeChartMixin';
export default {
  components: { Title, UniversalChart },
  name: 'VisualizationCommonChart',

  data() {
    return {};
  },
  mixins: [resizeChartMixin],
  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.commonChart {
  width: 100%;
  height: 100%;
  background: #050a4e;
  box-shadow: inset -8px -8px 40px 0px rgba(0, 227, 255, 0.3),
    inset 8px 8px 40px 0px rgba(0, 227, 255, 0.3);
  border-radius: 4px;
  .chartTitle {
    padding-left: 20px;
  }
  .chartContainer {
    width: 100%;
    height: 100%;
    padding-top: 15px;
    display: flex;
    flex-direction: column;
    .chartsdom {
      width: 100%;
      height: 100%;
    }
  }
}
</style>