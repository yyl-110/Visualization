<template>
  <div class="partsReuse">
    <dv-border />
    <div class="partsWrap">
      <div class="options">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="零件类型:" style="margin-right: 113px">
            <el-select
              v-model="formInline.partsType"
              placeholder="请选择零件类型"
            >
              <el-option label="借用件" value="借用件"></el-option>
              <el-option label="标准件" value="标准件"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="大于借用次数:">
            <el-input
              type="number"
              v-model="formInline.num"
              placeholder="请输入借用次数"
            ></el-input>
          </el-form-item>
          <el-form-item style="float: right" class="btn">
            <el-button icon="el-icon-refresh-right" @click="resetForm">
              重置
            </el-button>
            <el-button type="primary" @click="onSubmit" icon="el-icon-search">
              查询
            </el-button>
          </el-form-item>
        </el-form>
      </div>
      <!-- table -->
      <div class="tableContainer">
        <Title text="零件重用统计表" />
        <div class="innerTable">
          <v-table
            :column="column"
            :tableData="tableData"
            :page="page"
            :count="count"
            :total="total"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getPartsReuse } from '../../api';
import DvBorder from '../../components/Common/DvBorder.vue';
import Title from '../../components/Common/Title.vue';
import VTable from '../../components/Common/V-Table.vue';
export default {
  components: { Title, VTable, DvBorder },
  name: 'PartsReuse',
  data() {
    return {
      formInline: {
        partsType: '',
        num: '',
      },
      tableData: [],
      column: [
        { label: '序号', value: 'id', width: '100' },
        { label: '零件编码', value: 'borrowPartNumber' },
        { label: '名称', value: 'borrowPartName' },
        { label: '被重用次数', value: 'borrowedTime' },
        { label: '借用产品', value: 'borrowedProductName' },
      ],
      page: 1,
      count: 10,
      total: 100,
    };
  },
  watch: {},

  created() {
    this.getPartsReuse();
  },

  mounted() {},

  methods: {
    onSubmit() {
      this.getPartsReuse();
    },
    getPartsReuse() {
      getPartsReuse({
        page: this.page,
        count: this.count,
        reuseTime: this.formInline.num,
        partType: this.formInline.partsType,
      })
        .then((res) => {
          if (res.success) {
            this.total = res.total;
            this.tableData = res['区域三十三'].map((item, index) => {
              return { id: index + 1, ...item };
            });
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
    /**
     * 重置
     * @return {*}
     */
    resetForm() {
      this.formInline = { partsType: '', num: '' };
      this.getPartsReuse();
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
::v-deep.el-form {
  .el-form-item__label {
    color: #ffffff;
  }
  .el-form-item {
    margin-bottom: 0;
    &.btn {
      .el-button--default {
        background-color: rgba(255, 255, 255, 0.14);
        border-radius: 4px;
        font-size: 14px;
        font-weight: 400;
        color: #ffffff;
        border: none;
      }
      .el-button--primary {
        font-size: 14px;
        font-weight: 400;
        color: #050a4e;
      }
    }
    .el-input__inner {
      background-color: rgba(255, 255, 255, 0.14);
      font-size: 14px;
      font-weight: 400;
      color: #fff;
      width: 280px;
      border: none;
      &::placeholder {
        color: #86909c !important;
      }
    }
  }
}
.partsReuse {
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
  }
  .options {
    border-bottom: 1px solid rgba(229, 230, 232, 0.2);
    padding-top: 34px;
    padding-bottom: 23px;
  }
  .tableContainer {
    padding-top: 30px;
    .innerTable {
      margin-top: 30px;
    }
  }
}
</style>