<template>
  <div>
    <el-table
      :data="tableData"
      stripe
      style="width: 100%; height: 100%"
      row-class-name="vTable"
    >
      <el-table-column
        :width="item.width"
        align="center"
        :prop="item.value"
        :label="item.label"
        v-for="item in column"
        :key="item.value"
      ></el-table-column>
    </el-table>
    <div class="pageWrap">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        background
        :current-page="page"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, prev, pager, next,sizes, slot, jumper"
        :total="400"
      >
        <span style="color: #23cefd; font-size: 14px">
          {{ page }}/{{ total }}
        </span>
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VisualizationVTable',
  props: {
    tableData: {
      type: Array,
      default: () => [
        {
          id: 1,
          name: '产品01',
          department: '科室三',
          partsNum: '233',
          jieyong: '14',
          jyRate: '5.08%',
          standard: '333',
          standardRate: '90%',
        },
        {
          id: 2,
          name: '产品01',
          department: '科室三',
          partsNum: '233',
          jieyong: '14',
          jyRate: '5.08%',
          standard: '333',
          standardRate: '90%',
        },
        {
          id: 3,
          name: '产品01',
          department: '科室三',
          partsNum: '233',
          jieyong: '14',
          jyRate: '5.08%',
          standard: '333',
          standardRate: '90%',
        },
        {
          id: 5,
          name: '产品01',
          department: '科室三',
          partsNum: '233',
          jieyong: '14',
          jyRate: '5.08%',
          standard: '333',
          standardRate: '90%',
        },
      ],
    },
    column: {
      type: Array,
      default: () => [
        { label: '序号', value: 'id' },
        { label: '产品名称', value: 'name' },
        { label: '所属科室', value: 'department' },
        { label: '总零件数', value: 'partsNum' },
        { label: '借用件', value: 'jieyong' },
        { label: '借用率', value: 'jyRate' },
        { label: '标准件数', value: 'standard' },
        { label: '标准件率', value: 'standardRate' },
      ],
    },
    page: {
      type: Number,
      default: 10,
    },
    total: {
      type: Number,
      default: 400,
    },
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.pageWrap {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 50px;
}
::v-deep.el-pagination {
  .el-pagination__total {
    font-size: 12px;
    font-weight: 500;
    color: #23cefd;
  }
  .btn-prev {
    background: transparent;
    color: rgba(0, 223, 251, 1);
  }
  .btn-next {
    background: transparent;
    color: rgba(0, 223, 251, 1);
  }
  .el-pager {
    .number {
      background: rgba(247, 248, 250, 0);
      border-radius: 4px;
      border: 1px solid #00dffb;
      font-size: 14px;
      font-weight: 400;
      color: #00dffb;
      &.active {
        background: linear-gradient(
          180deg,
          rgba(0, 223, 251, 0.08) 0%,
          rgba(0, 223, 251, 0.5) 100%
        ) !important;
      }
    }
  }
  .el-pagination__sizes {
    .el-input {
      border-radius: 4px;
      border: 1px solid #00d2ff;
      .el-input__inner {
        background: linear-gradient(
          360deg,
          rgba(0, 223, 251, 0.5) 0%,
          rgba(0, 223, 251, 0.08) 100%
        ) !important;
        color: #00dffb;
      }
    }
  }
  .el-pagination__jump {
    font-size: 14px;
    font-weight: 500;
    color: #23cefd;
    line-height: 22px;
    .el-input__inner {
      background: transparent;
      border: none;
      font-size: 14px;
      font-weight: 400;
      color: #00dffb;
    }
  }
}
::v-deep.el-table {
  background: transparent !important;
  thead {
    tr {
      background: linear-gradient(
        360deg,
        rgba(0, 223, 251, 0.08) 0%,
        rgba(0, 223, 251, 0.5) 100%
      );
      border-radius: 4px 4px 0px 0px;
      border: 1px solid rgba(0, 223, 251, 0.5);
      th {
        background: transparent;
        border: none !important;
      }
      .cell {
        background-color: transparent;
      }
    }
  }
  .el-table__cell {
    border: none;
  }
  tbody {
    tr {
      background: transparent;
      height: 34px !important;
      &:hover {
        background-color: rgba(255, 255, 255, 0.3) !important;
        .el-table__cell {
          background-color: rgba(255, 255, 255, 0.3) !important;
        }
      }
    }
    .el-table__row--striped {
      // background: transparent;
      background-color: rgba(255, 255, 255, 0.1);
      height: 34px !important;
      .el-table__cell {
        background: transparent !important;
        border: none;
        font-size: 16px;
        font-weight: 500;
        color: #ffffff;
        line-height: 24px;
      }
      // background: red!important;
    }
  }
  tr {
    height: 34px !important;
    font-size: 16px;
    font-weight: 500;
    color: #ffffff;
    line-height: 24px;
  }
  &::before {
    display: none;
  }
}
</style>