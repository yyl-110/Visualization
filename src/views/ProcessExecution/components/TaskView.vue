<template>
  <div class="container">
    <dv-border />
    <div class="inner">
      <div class="titleWrap">
        <Title :text="title" />
      </div>
      <v-table
        style="margin-top: 0.25rem"
        :column="column"
        :tableData="tableData"
        :page="page"
        :count="count"
        @handleSizeChange="handleSizeChange"
        @handleCurrentChange="handleCurrentChange"
        :total="total"
      />
    </div>
  </div>
</template>

<script>
import Title from '../../../components/Common/Title.vue';
import VTable from '@/components/Common/V-Table.vue';
import DvBorder from '../../../components/Common/DvBorder.vue';
import { getProcessExecutionByExe } from '@/api';
import { mapGetters } from 'vuex';

export default {
  components: { Title, VTable, DvBorder },
  name: 'VisualizationTaskView',
  computed: {
    ...mapGetters(['queryYear', 'queryTime']),
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    wfType: {
      type: String,
      default: '',
    },
  },
  watch: {
    wfType(val, oldVal) {
      if (!oldVal) return;
      this.getProcessExecutionByExe();
    },
    queryYear() {
      this.getProcessExecutionByExe();
    },
    queryTime() {
      this.getProcessExecutionByExe();
    },
  },
  data() {
    return {
      tableData: [],
      column: [
        { label: '序号', value: 'id' },
        { label: '流程名称', value: 'wfName' },
        { label: '所属科室', value: 'keshi' },
        { label: '任务节点名称', value: 'taskName' },
        { label: '任务承担者', value: 'taskOwner' },
        { label: '任务耗时', value: 'hours' },
        { label: '任务是否完成', value: 'isCompleted' },
      ],
      page: 1,
      count: 5,
      total: 100,
    };
  },
  created() {
    this.getProcessExecutionByExe();
  },
  mounted() {},

  methods: {
    /* 获取四十六数据 */
    getProcessExecutionByExe() {
      console.log(this.page, this.count, this.wfType);
      getProcessExecutionByExe({
        queryYear: this.queryYear,
        queryTime: this.queryTime,
        wfType: this.wfType,
        page: this.page,
        count: this.count,
      })
        .then((res) => {
          console.log(res);
          if (res.success) {
            try {
              this.total = res.total || 100;
              this.tableData = res['区域四十六'].map((item, index) => {
                return { id: index + 1, ...item };
              });
            } catch (error) {
              console.log(error);
            }
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
    /**
     * 修改每页count
     * @return {*}
     */
    handleSizeChange(size) {
      this.count = size;
      this.getProcessExecutionByExe();
    },

    /**
     * page
     * @return {*}
     */
    handleCurrentChange(page) {
      this.page = page;
      this.getProcessExecutionByExe();
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  // height: 100%;
  padding-bottom: 30px;
  position: relative;
  background: #050a4e;
  box-shadow: inset -8px -8px 40px 0px rgba(0, 227, 255, 0.3),
    inset 8px 8px 40px 0px rgba(0, 227, 255, 0.3);
  .inner {
    padding: 20px;
    padding-bottom: 0;
  }
}
</style>