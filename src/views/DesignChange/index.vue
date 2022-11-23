<template>
  <div class="designChange">
    <design-change-panel :panelData="panelData" />
    <div class="panelCartWrap clearfix">
      <div class="dataBar">
        <change-view
          :changeViewData="changeViewData"
          @chartClick="chartClick"
        />
      </div>
      <div class="rank">
        <Rank
          :rankData="rankData"
          title="变更单量完成率排行榜"
          label="平均完成率"
          progressLabel="ecnFinishedRate"
          :isRate="true"
          v-if="rankData"
        />
      </div>
    </div>
  </div>
</template>

<script>
import DesignChangePanel from './components/DesignChangePanel.vue';
import Rank from '@/components/Common/Rank';
import ChangeView from './components/ChangeView.vue';
import { getDesignChange } from '../../api';
import { mapGetters } from 'vuex';
export default {
  components: { DesignChangePanel, Rank, ChangeView },
  name: 'DesignChange',

  data() {
    return {
      panelData: {},
      changeViewData: [],
      rankData: null,
    };
  },
  computed: {
    ...mapGetters(['queryYear', 'queryTime', 'queryType']),
  },

  watch: {
    queryYear() {
      this.getDesignChange();
    },
    queryTime() {
      this.getDesignChange();
    },
  },

  created() {
    this.getDesignChange();
  },

  mounted() {},

  methods: {
    getDesignChange() {
      getDesignChange({ queryYear: this.queryYear, queryTime: this.queryTime })
        .then((res) => {
          if (res.success) {
            const _panelData = {};
            _panelData['区域二十三'] = res.data['区域二十三'];
            _panelData['区域二十四'] = res.data['区域二十四'];
            _panelData['区域二十五'] = res.data['区域二十五'];
            this.panelData = { ..._panelData };
            this.changeViewData = res.data['区域二十六'];
            this.rankData = res.data['区域二十七'];
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
    /**
     * 区域二十六点击
     * @return {*}
     */
    chartClick(index) {
      const prjType = this.changeViewData[index].prjType;
      this.$router.push({
        path: '/product-design/change',
        query: {
          prjType,
        },
      });
    },
  },
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