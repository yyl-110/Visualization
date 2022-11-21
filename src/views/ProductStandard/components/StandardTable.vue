<template>
  <div class="tableContainer">
    <dv-border />
    <div class="tableWrap">
      <div class="chartTitle">
        <Title :text="'PDM标准化查看'" />
      </div>
      <div class="table">
        <v-table />
      </div>
    </div>
  </div>
</template>

<script>
import Title from '../../../components/Common/Title.vue';
import VTable from '@/components/Common/V-Table.vue';
import DvBorder from '../../../components/Common/DvBorder.vue';
export default {
  components: { VTable, Title, DvBorder },
  name: 'VisualizationStandardTable',

  data() {
    return {};
  },
  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.tableContainer {
  width: 100%;
  background: #050a4e;
  box-shadow: inset -8px -8px 40px 0px rgba(0, 227, 255, 0.3),
    inset 8px 8px 40px 0px rgba(0, 227, 255, 0.3);
  height: 506px;
  position: relative;
  .tableWrap {
    width: 100%;
    height: 100%;
    position: relative;
    padding-top: 40px;
    padding-left: 27px;
    padding-right: 14px;
    padding-bottom: 25px;
    display: flex;
    flex-direction: column;
    .chartTitle {
      flex-shrink: 0;
    }
  }
  .table {
    width: 100%;
    height: 100%;
    flex: 1;
    padding-top: 20px;
  }
}
</style>