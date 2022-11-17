<template>
  <div class="container">
    <dv-border-box-7 ref="borderBox">
      <div class="inner">
        <div class="titleWrap">
          <Title text="PDM中超期流程任务查看(普通文档)" />
        </div>
        <v-table style="margin-top: 0.25rem" :column="column" :tableData="tableData" />
      </div>
    </dv-border-box-7>
  </div>
</template>

<script>
import Title from '../../../components/Common/Title.vue';
import resizeChartMixin from '../../../utils/resizeChartMixin';
import VTable from '@/components/Common/V-Table.vue';

export default {
  components: { Title, VTable },
  name: 'VisualizationTaskView',

  data() {
    return {
      column: [
        { label: '序号', value: 'id' },
        { label: '课程名称', value: 'name' },
        { label: '所属科室', value: 'department' },
        { label: '任务节点名称', value: 'taskName' },
        { label: '任务承担者', value: 'people' },
        { label: '任务耗时', value: 'time' },
        { label: '任务是否完成', value: 'isFinsh' },
      ],
      tableData: [
        {
          id: 1,
          name: '产品01',
          department: '科室三',
          taskName: '233',
          people: '张三',
          time: '10h',
          isFinsh: '是',
        },
        {
          id: 2,
          name: '产品01',
          department: '科室三',
          taskName: '233',
          people: '张三',
          time: '10h',
          isFinsh: '是',
        },
        {
          id: 3,
          name: '产品01',
          department: '科室三',
          taskName: '233',
          people: '张三',
          time: '10h',
          isFinsh: '是',
        },
      ],
    };
  },
  mixins: [resizeChartMixin],
  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  .inner {
    padding: 20px;
    padding-bottom: 0;
  }
}
</style>