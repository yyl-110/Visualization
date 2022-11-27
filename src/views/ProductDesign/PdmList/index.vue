<template>
  <div class="overdue">
    <dv-border />
    <div class="partsWrap">
      <div class="titleWrap clearfix">
        <Title text="PDM产品查看列表" class="title" />
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
import { getPdmList } from '../../../api';
import { mapGetters } from 'vuex';
export default {
  components: { Title, VTable, DvBorder },
  name: 'Overdue',

  computed: {
    ...mapGetters(['queryYear', 'queryTime', 'queryType']),
  },
  watch: {
    queryYear() {
      this.getPdmList();
    },
    queryTime() {
      this.getPdmList();
    },
  },
  data() {
    return {
      tableData: [],
      column: [
        { label: '序号', value: 'id' },
        { label: '产品库名称', value: 'productName' },
        { label: '所属科室', value: 'keShi' },
        { label: '创建时间', value: 'createtime' },
        { label: '项目状态', value: 'productStatus' },
      ],
      page: 1,
      count: 20,
    };
  },

  created() {
    this.getPdmList();
  },

  mounted() {},

  methods: {
    getPdmList() {
      const { prjStatus, prjType } = this.$route.query;
      getPdmList({ prjStatus, prjType, page: this.page, count: this.count })
        .then((res) => {
          if (res.success) {
            this.tableData = res['区域十五'].map((item, index) => {
              return { id: index + 1, ...item };
            });
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
    handleSizeChange(size) {
      this.count = size;
      this.getPdmList();
    },
    handleCurrentChange(page) {
      this.page = page;
      this.getPdmList();
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
    height: 100%;
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