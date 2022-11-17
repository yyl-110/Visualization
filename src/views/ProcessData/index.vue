<template>
  <div class="processData">
    <data-box />

    <!-- 数据 -->
    <div class="preData clearfix">
      <div class="leftChart">
        <completion-rate />
      </div>
      <div class="rank">
        <Rank />
      </div>
    </div>
  </div>
</template>

<script>
import DataBox from './components/DataBox.vue';
import Rank from '@/components/Common/Rank';
import CompletionRate from './components/CompletionRate.vue';
export default {
  components: { DataBox, Rank, CompletionRate },
  name: 'VueDataVIndex',

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
.processData {
  width: 100%;
  padding-bottom: 30px;
  .preData {
    width: 100%;
    height: 438px;
    margin-top: 20px;
    overflow-y: hidden;
    .leftChart {
      float: left;
      width: calc(100% - 720px);
      height: 100%;
    }
    .rank {
      height: 100%;
      width: 700px;
      margin-left: 20px;
      float: right;
    }
  }
}
</style>