<template>
  <div class="designChange">
    <design-change-panel />
    <div class="panelCartWrap">
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
.panelCartWrap {
  display: flex;
  width: 100%;
  height: 444px;
  margin-top: 20px;
  .dataBar {
    flex: 1;
  }
  .rank {
    width: 700px;
    flex-shrink: 0;
    margin-left: 20px;
  }
}
</style>