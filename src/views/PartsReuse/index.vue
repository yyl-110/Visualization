<template>
  <div class="partsReuse">
    <dv-border-box-7 ref="borderBox">
      <div class="partsWrap">
        <div class="options">
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="零件类型:" style="margin-right: 113px">
              <el-select
                v-model="formInline.partsType"
                placeholder="请选择零件类型"
              >
                <el-option label="类型一" value="shanghai"></el-option>
                <el-option label="类型二" value="beijing"></el-option>
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
              <el-button icon="el-icon-refresh-right">重置</el-button>
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
            <v-table :column="column" :table-data="tableData" />
          </div>
        </div>
      </div>
    </dv-border-box-7>
  </div>
</template>

<script>
import Title from '../../components/Common/Title.vue';
import VTable from '../../components/Common/V-Table.vue';
import resizeChartMixin from '../../utils/resizeChartMixin';
export default {
  components: { Title, VTable },
  name: 'PartsReuse',
  mixins: [resizeChartMixin],
  data() {
    return {
      formInline: {
        partsType: '',
        num: '',
      },
      tableData: [
        {
          id: 1,
          name: '产品01',
          coding: '0000251',
          partsNum: '233',
          borrowProduct: '产品01',
        },
        {
          id: 1,
          name: '产品01',
          coding: '0000251',
          partsNum: '233',
          borrowProduct: '产品01',
        },
        {
          id: 1,
          name: '产品01',
          coding: '0000251',
          partsNum: '233',
          borrowProduct: '产品01',
        },
        {
          id: 1,
          name: '产品01',
          coding: '0000251',
          partsNum: '233',
          borrowProduct: '产品01',
        },
      ],
      column: [
        { label: '序号', value: 'id', width: '100' },
        { label: '零件编码', value: 'coding' },
        { label: '名称', value: 'name' },
        { label: '被重用次数', value: 'partsNum' },
        { label: '借用产品', value: 'borrowProduct' },
      ],
    };
  },

  mounted() {},

  methods: {},
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
  border-radius: 4px;
  height: 98%;
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