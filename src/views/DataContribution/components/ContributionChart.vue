<template>
  <div class="contributionChart">
    <dv-border-box-7 ref="borderBox">
      <div class="chartContainer">
        <div class="chartTitle">
          <Title :text="'项目数据贡献量'" />
        </div>
        <universal-chart style="width:'100%" />
      </div>
    </dv-border-box-7>
  </div>
</template>

<script>
import Title from '../../../components/Common/Title.vue';
import UniversalChart from '../../../components/Common/UniversalChart.vue';
import resizeChartMixin from '../../../utils/resizeChartMixin';
export default {
  name: 'ContributionChart',
  mixins: [resizeChartMixin],
  data() {
    return {};
  },
  mounted() {},
  components: { Title, UniversalChart },
};
</script>

<style lang="scss" scoped>
.contributionChart {
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
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding-top: 15px;
  }
}
</style>