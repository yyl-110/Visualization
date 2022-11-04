<template>
  <div class="changePanel">
    <dv-border-box-7 ref="borderBox">
      <div class="panelList">
        <panel-item />
        <panel-item />
        <panel-item />
      </div>
    </dv-border-box-7>
  </div>
</template>

<script>
import resizeChartMixin from '../../../utils/resizeChartMixin';
import PanelItem from './PanelItem.vue';

export default {
  components: { PanelItem },
  name: 'VueDataVDesignChangePanel',

  data() {
    return {};
  },
  mixins: [resizeChartMixin],
  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.changePanel {
  width: 100%;
  height: 300px;
  background: #050a4e;
  box-shadow: inset -8px -8px 40px 0px rgba(0, 227, 255, 0.3),
    inset 8px 8px 40px 0px rgba(0, 227, 255, 0.3);
  border-radius: 4px;
  .panelList {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 27px;
  }
}
</style>