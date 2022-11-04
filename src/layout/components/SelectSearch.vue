<template>
  <div class="selectSearch">
    <div class="year selectWrap">
      <el-select v-model="year" placeholder="请选择" size="mini">
        <el-option
          v-for="item in yearOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
    <div class="month selectWrap">
      <el-select v-model="month" placeholder="请选择" size="mini">
        <el-option
          v-for="item in monthOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
    <div class="type selectWrap">
      <el-select v-model="selectType" placeholder="请选择" size="mini">
        <el-option
          v-for="item in typeOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectSearch',

  data() {
    return {
      year: '',
      month: '',
      selectType: '1',
      typeOptions: [
        {
          value: '1',
          label: '年度',
        },
        {
          value: '2',
          label: '月度',
        },
      ],
      yearOptions: [
        {
          value: '2000',
          label: '2000年',
        },
        {
          value: '2001',
          label: '2001年',
        },
        {
          value: '2002',
          label: '2002年',
        },
        {
          value: '2003',
          label: '2003年',
        },
        {
          value: '2004',
          label: '2004年',
        },
      ],
      monthOptions: [
        {
          value: '1',
          label: '1月',
        },
        {
          value: '2',
          label: '2月',
        },
        {
          value: '3',
          label: '3月',
        },
        {
          value: '4',
          label: '4月',
        },
        {
          value: '5',
          label: '5月',
        },
      ],
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.selectSearch {
  height: 100%;
  color: #fff;
  display: flex;
  align-items: flex-end;
  .selectWrap {
    width: 100px;
    border-radius: 4px;
    margin-left: 20px;
    /deep/ .el-select {
      input {
        background: #050a4e;
        box-shadow: inset 2px 5px 10px 0px rgba(11, 219, 247, 0.3),
          inset -2px -5px 10px 0px rgba(11, 219, 247, 0.3),
          inset 2px 5px 10px 0px rgba(35, 206, 253, 0.3),
          inset -2px -5px 10px 0px rgba(35, 206, 253, 0.2);
        font-size: 16px;
        font-weight: 500;
        color: #23cefd;
        border-radius: 4px;
        border: 1px solid #23cefd;
      }
    }
  }
}
</style>