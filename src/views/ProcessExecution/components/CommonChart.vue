<template>
  <div class="commonChart">
    <dv-border />
      <div class="chartContainer">
        <div class="chartTitle">
          <Title :text="'普通文档流程超期任务量'" />
        </div>
        <universal-chart />
      </div>
  </div>
</template>

<script>
import DvBorder from '../../../components/Common/DvBorder.vue';
import Title from '../../../components/Common/Title.vue';
import UniversalChart from '../../../components/Common/UniversalChart.vue';
export default {
  components: { Title, UniversalChart, DvBorder },
  name: 'VisualizationCommonChart',

  data() {
    return {};
  },
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
    position: relative;
  .chartTitle {
    padding-left: 20px;
  }
  .chartContainer {
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