<template>
  <div class="dataBox">
    <dv-border-box-7 ref="borderBox">
      <div class="dataContainer">
        <el-scrollbar wrap-class="scrollbar-wrapper">
          <div class="dataWrap">
            <data-item v-for="i in 5" :key="i" class="item" />
          </div>
          <div class="dataWrap">
            <data-item v-for="i in 4" :key="i" class="item" />
          </div>
        </el-scrollbar>
      </div>
    </dv-border-box-7>
  </div>
</template>

<script>
import DataItem from '../../../components/Common/DataItem.vue';
import resizeChartMixin from '../../../utils/resizeChartMixin';
export default {
  components: { DataItem },
  name: 'DataBox',
  mixins: [resizeChartMixin],
  data() {
    return {
      dataList: [{ id: 1, title: '普通文档单流程' }],
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.dataBox {
  width: 100%;
  height: 490px;
  background: #050a4e;
  box-shadow: inset -8px -8px 40px 0px rgba(0, 227, 255, 0.3),
    inset 8px 8px 40px 0px rgba(0, 227, 255, 0.3);
  border-radius: 4px;
  .dataContainer {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 30px;
    overflow-y: hidden;
    /deep/ .el-scrollbar {
      height: 100%;
    }
    .dataWrap {
      display: flex;
      width: 100%;
      align-content: flex-start;
      flex-wrap: no-wrap;
      flex: 1;
    }
    .item {
      flex-shrink: 0;
      &:not(:last-child) {
        margin-right: 70px;
      }
      margin-top: 30px;
    }
  }
}
</style>