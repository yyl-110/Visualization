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
        :page="5"
        :total="tableData ? tableData.length : 0"
      />
    </div>
  </div>
</template>

<script>
import Title from '../../../components/Common/Title.vue';
import VTable from '@/components/Common/V-Table.vue';
import DvBorder from '../../../components/Common/DvBorder.vue';

export default {
  components: { Title, VTable, DvBorder },
  name: 'VisualizationTaskView',
  props: {
    title: {
      type: String,
      default: '',
    },
    tableData: {
      type: Array,
      default: () => [],
    },
  },
  watch: {},
  data() {
    return {
      column: [
        { label: '序号', value: 'id' },
        { label: '课程名称', value: 'wfName' },
        // { label: '所属科室', value: 'department' },
        { label: '任务节点名称', value: 'taskName' },
        { label: '任务承担者', value: 'taskOwner' },
        { label: '任务耗时', value: 'hours' },
        { label: '任务是否完成', value: 'isCompleted' },
      ],
    };
  },
  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  // height: 100%;
  padding-bottom: 30px;
  position: relative;
  .inner {
    padding: 20px;
    padding-bottom: 0;
  }
}
</style>