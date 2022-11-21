<template>
  <div class="designChange">
    <design-change-panel :panelData="panelData" />
    <div class="panelCartWrap clearfix">
      <div class="dataBar">
        <change-view :changeViewData="changeViewData" />
      </div>
      <div class="rank">
        <Rank
          :rankData="rankData"
          title="变更单量完成率排行榜"
          label="平均完成率"
          progressLabel="ecnFinishedRate"
          isRate="true"
        />
      </div>
    </div>
  </div>
</template>

<script>
import DesignChangePanel from './components/DesignChangePanel.vue';
import Rank from '@/components/Common/Rank';
import ChangeView from './components/ChangeView.vue';
import dataJson from './data.json';
export default {
  components: { DesignChangePanel, Rank, ChangeView },
  name: 'DesignChange',

  data() {
    return {
      panelData: {},
      changeViewData: [],
      rankData: {},
    };
  },

  created() {
    this.panelData['区域二十三'] = dataJson['区域二十三'];
    this.panelData['区域二十四'] = dataJson['区域二十四'];
    this.panelData['区域二十五'] = dataJson['区域二十五'];
    this.changeViewData = dataJson['区域二十六'];
    this.rankData = dataJson['区域二十七'];
    console.log(this.changeViewData);
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