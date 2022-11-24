<template>
  <div class="productChange">
    <dv-border />
    <div class="partsWrap">
      <div class="titleWrap">
        <Title text="PDM中超期流程任务查看" class="title" />
        <el-button type="primary" class="back" @click="$router.go(-1)">
          <img src="../../../assets/imgs/icon_return@2x.png" alt="" />
          返回
        </el-button>
      </div>
      <v-table :column="column" :tableData="tableData" />
    </div>
  </div>
</template>

<script>
import Title from '../../../components/Common/Title.vue';
import VTable from '@/components/Common/V-Table.vue';
import DvBorder from '../../../components/Common/DvBorder.vue';
import { getDesignChangeByChart } from '../../../api';
import { mapGetters } from 'vuex';
export default {
  components: { Title, VTable, DvBorder },
  name: 'ProductChange',

  data() {
    return {
      tableData: [],
      column: [
        { label: '序号', value: 'id' },
        { label: '变更单编号', value: 'number' },
        { label: '变更单名称', value: 'name' },
        // { label: '所属科室', value: 'createtime' },
        { label: '创建者', value: 'creator' },
        { label: '执行时长', value: 'hours' },
        { label: '创建时间', value: 'createtime' },
        { label: '是否完成', value: 'isFinish' },
      ],
    };
  },
  computed: {
    ...mapGetters(['queryTime', 'queryYear']),
  },

  created() {
    this.getDesignChangeByChart();
  },

  mounted() {},

  methods: {
    getDesignChangeByChart() {
      const { prjType } = this.$route.query;
      getDesignChangeByChart({
        queryTime: this.queryTime,
        queryYear: this.queryYear,
        prjType,
      })
        .then((res) => {
          if (res.success) {
            this.tableData = res.data['区域二十八'].map((item, index) => {
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
.productChange {
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