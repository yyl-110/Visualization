<template>
  <div class="tableContainer">
    <dv-border />
    <div class="tableWrap">
      <div class="chartTitle">
        <Title :text="'PDM标准化查看'" />
      </div>
      <div class="table">
        <v-table
          :tableData="tableData"
          :column="column"
          :showPage="false"
          :maxHeight="350"
        />
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
    return {
      column: [
        { label: '序号', value: 'id' },
        { label: '产品名称', value: 'productName' },
        { label: '所属科室', value: 'keshi' },
        { label: '总零件数', value: 'totalPartCount' },
        { label: '借用件', value: 'borrowPartCount' },
        {
          label: '借用率',
          value: 'borrowRate',
          format(val) {
            let value = val.borrowRate;
            try {
              let val = parseFloat(value || 0);
              return val.toFixed(2) + '%';
              // eslint-disable-next-line no-empty, no-unreachable
            } catch (error) {
              console.log(error);
              return value;
            }
          },
        },
        { label: '标准件数', value: 'borrowStandardPartCount' },
        {
          label: '标准件率',
          value: 'standardRate',
          format(val) {
            let value = val.standardRate;
            try {
              let val = parseFloat(value || 0);
              return val.toFixed(2) + '%';
              // eslint-disable-next-line no-empty, no-unreachable
            } catch (error) {
              console.log(error);
              return value;
            }
          },
        },
      ],
    };
  },
  props: {
    tableData: {
      type: Array,
      default: () => [],
    },
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
  // height: 506px;
  position: relative;
  .tableWrap {
    width: 100%;
    height: 100%;
    position: relative;
    padding-top: 40px;
    padding-left: 27px;
    padding-right: 14px;
    padding-bottom: 25px;
    // display: flex;
    // flex-direction: column;
  }
  .table {
    width: 100%;
    height: 100%;
    flex: 1;
    padding-top: 20px;
  }
}
</style>