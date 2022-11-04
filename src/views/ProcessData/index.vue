<template>
  <div class="processData">
    <data-box />

    <!-- 数据 -->
    <div class="preData">
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
.processData {
  width: 100%;
  padding-bottom: 30px;
  .preData {
    display: flex;
    width: 100%;
    height: 438px;
    margin-top: 20px;
    overflow-y: hidden;
    .leftChart {
      width: 100%;
    }
    .rank {
      width: 700px;
      margin-left: 20px;
      flex-shrink: 0;
    }
  }
}
</style>