<template>
  <div class="changePanel">
    <dv-border-box-7 ref="borderBox">
      <div class="panelList">
        <panel-item class="panItme" />
        <panel-item class="panItme" />
        <panel-item class="panItme" :type="0" />
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
  .panelList {
    width: 100%;
    height: 100%;
    justify-content: space-between;
    display: flex;
    align-items: center;
    padding: 0 26px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>