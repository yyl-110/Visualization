<template>
  <div class="ProductStandard">
    <standard-rate />
    <div class="tableWrap">
      <standard-table />
    </div>
  </div>
</template>

<script>
import StandardRate from './components/StandardRate.vue';
import StandardTable from './components/StandardTable.vue';
export default {
  components: { StandardRate, StandardTable },
  name: 'ProductStandard',

  data() {
    return {};
  },

  created() {},

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
.ProductStandard {
  width: 100%;
  height: 100%;
  .tableWrap {
    margin-top: 20px;
  }
}
</style>