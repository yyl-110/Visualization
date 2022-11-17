<template>
  <div class="designChange">
    <design-change-panel />
    <div class="panelCartWrap clearfix">
      <div class="dataBar">
        <change-view />
      </div>
      <div class="rank">
        <Rank />
      </div>
    </div>
  </div>
</template>

<script>
import DesignChangePanel from './components/DesignChangePanel.vue';
import Rank from '@/components/Common/Rank';
import ChangeView from './components/ChangeView.vue';
export default {
  components: { DesignChangePanel, Rank, ChangeView },
  name: 'DesignChange',

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
/deep/ .dv-bb7-line-width-2 {
  stroke: #00dffb !important;
}
/deep/ .dv-bb7-line-width-5 {
  display: none !important;
}
.panelCartWrap {
  width: 100%;
  height: 444px;
  margin-top: 20px;
  .dataBar {
    height: 444px;
    float: left;
    width: calc(100% - 720px);
  }
  .rank {
    height: 444px;
    float: right;
    width: 700px;
    margin-left: 20px;
  }
}
</style>