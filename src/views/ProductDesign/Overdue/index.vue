<template>
  <div class="overdue">
    <dv-border />
    <div class="partsWrap">
      <div class="titleWrap">
        <Title text="PDM中超期流程查看列表" class="title" />
        <el-button type="primary" class="back" @click="$router.go(-1)">
          <img src="../../../assets/imgs/icon_return@2x.png" alt="" />
          返回
        </el-button>
      </div>
      <v-table
        :tableData="tableData"
        :column="column"
        :page="page"
        :count="count"
        :total="total"
        @handleSizeChange="handleSizeChange"
        @handleCurrentChange="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script>
import Title from '../../../components/Common/Title.vue';
import VTable from '@/components/Common/V-Table.vue';
import DvBorder from '../../../components/Common/DvBorder.vue';
import { getProcessExecutionByChart } from '../../../api';
import { mapGetters } from 'vuex';
export default {
  components: { Title, VTable, DvBorder },
  name: 'Overdue',

  computed: {
    ...mapGetters(['queryYear', 'queryTime', 'queryType']),
  },
  watch: {
    queryYear() {
      this.getProcessExecutionByChart();
    },
    queryTime() {
      this.getProcessExecutionByChart();
    },
  },
  data() {
    return {
      tableData: [],
      column: [
        { label: '序号', value: 'id' },
        { label: '流程名称', value: 'workflowName' },
        { label: '执行时长', value: 'hours' },
        { label: '所属科室', value: 'keShi' },
        { label: '流程状态', value: 'workflowStatus' },
        { label: '流程承担者', value: 'wfCreator' },
      ],
      page: 1, //页码
      count: 20, //默认每页的数量
      total: 100,
    };
  },

  created() {
    this.getProcessExecutionByChart();
  },

  mounted() {},

  methods: {
    getProcessExecutionByChart() {
      const { wfType, prjType } = this.$route.query;
      getProcessExecutionByChart({
        wfType,
        prjType,
        queryYear: this.queryYear,
        queryTime: this.queryTime,
        page: this.page,
        count: this.count,
      })
        .then((res) => {
          if (res.success) {
            this.total = res.total
            this.tableData = res['区域四十四'].map((item, index) => {
              return { id: index + 1, ...item };
            });
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
      this.getProcessExecutionByChart();
    },

    /**
     * page
     * @return {*}
     */
    handleCurrentChange(page) {
      this.page = page;
      this.getProcessExecutionByChart();
    },
  },
};
</script>

<style lang="scss" scoped>
.overdue {
  width: 100%;
  background: #050a4e;
  box-shadow: inset -8px -8px 40px 0px rgba(0, 227, 255, 0.3),
    inset 8px 8px 40px 0px rgba(0, 227, 255, 0.3);
  height: 98%;
  position: relative;
  .partsWrap {
    width: 100%;
    padding: 0 20px 30px;
    height: 80%;
    .titleWrap {
      padding: 13px 0 20px;
      overflow: hidden;
      .title {
        float: left;
        margin-top: 15px;
      }
      .back {
        font-size: 14px;
        font-weight: bold;
        color: #050a4e;
        float: right;
        display: block;
        img {
          width: 16px;
          height: 16px;
          vertical-align: middle;
        }
      }
    }
  }
}
</style>