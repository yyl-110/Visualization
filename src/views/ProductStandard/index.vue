<template>
  <div class="ProductStandard">
    <standard-rate @handelClickChart="handelClickChart" />
    <div class="tableWrap">
      <standard-table :tableData="tableData" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { getProductStandardByChart } from '../../api';
import StandardRate from './components/StandardRate.vue';
import StandardTable from './components/StandardTable.vue';
export default {
  components: { StandardRate, StandardTable },
  name: 'ProductStandard',

  data() {
    return {
      tableData: [],
    };
  },

  computed: {
    ...mapGetters(['queryTime', 'queryYear']),
  },

  created() {},

  mounted() {},

  methods: {
    /**
     * 点击获取table数据
     * @param {*} index
     * @return {*}
     */
    handelClickChart(prjType) {
      getProductStandardByChart({ prjType })
        .then((res) => {
          if (res.success) {
            this.tableData = res['区域三十'].map((item, index) => {
              return { id: index + 1, ...item };
            });
          }
        })
        .catch((e) => {
          console.log(e);
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
.ProductStandard {
  width: 100%;
  height: 100%;
  .tableWrap {
    margin-top: 20px;
  }
}
</style>