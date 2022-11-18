<template>
  <div class="selectSearch clearfix">
    <div class="year selectWrap">
      <el-select
        v-model="year"
        placeholder="请选择"
        size="mini"
        @change="handleChangeYear"
      >
        <el-option
          v-for="item in yearOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
    <div class="month selectWrap">
      <el-select
        v-model="middleData"
        placeholder="请选择"
        size="mini"
        :disabled="selectType === 4"
        @click="handleChangeTime"
      >
        <el-option
          v-for="item in monthOptions[selectType]"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
    <div class="type selectWrap">
      <el-select
        v-model="selectType"
        placeholder="请选择"
        size="mini"
        @change="handleChangeType"
      >
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
import { mapGetters } from 'vuex';
export default {
  name: 'SelectSearch',

  data() {
    return {
      year: '',
      middleData: '',
      selectType: 0,
      typeOptions: [
        {
          value: 0,
          label: '全部',
        },
        {
          value: 1,
          label: '月度',
        },
        {
          value: 2,
          label: '季度',
        },
        {
          value: 3,
          label: '半年度',
        },
        {
          value: 4,
          label: '全年',
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
      monthOptions: {
        0: [],
        4: [{ value: 'allYear', label: '全年度' }],
        2: [
          { value: 'firstQuarter', label: '第一季度' },
          { value: 'secendQuarter', label: '第二季度' },
          { value: 'thirdQuarter', label: '第三季度' },
          { value: 'fourthQuarter', label: '第四季度' },
        ],
        3: [
          { value: 'upHalfYear', label: '上半年' },
          { value: 'downHalfYear', label: '下半年' },
        ],
        1: [
          { value: 1, label: '一月' },
          { value: 2, label: '二月' },
          { value: 3, label: '三月' },
          { value: 4, label: '四月' },
          { value: 5, label: '五月' },
          { value: 6, label: '六月' },
          { value: 7, label: '七月' },
          { value: 8, label: '八月' },
          { value: 9, label: '九月' },
          { value: 10, label: '十月' },
          { value: 11, label: '十一月' },
          { value: 12, label: '十二月' },
        ],
      },
    };
  },

  watch: {},

  computed: {
    ...mapGetters(['queryYear', 'queryTime', 'queryType']),
  },
  created() {
    this.year = this.queryYear;
    this.middleData = this.queryTime;
    this.selectType = this.queryType;
  },
  async mounted() {
    await this.$store.dispatch('product/changeTime', {
      key: 'queryType',
      value: 2,
    });
  },

  methods: {
    handleChangeType() {
      this.$store.dispatch('product/changeTime', {
        key: 'queryType',
        value: this.selectType,
      });
      try {
        this.middleData = this.monthOptions[this.selectType][0]?.value;
      } catch (error) {
        console.log('error:', error);
      }
    },
    async handleChangeYear() {
      this.$store.dispatch('product/changeTime', {
        key: 'queryYear',
        value: this.year,
      });
    },
    handleChangeTime() {
      this.$store.dispatch('product/changeTime', {
        key: 'queryYear',
        value: this.middleData,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.selectSearch {
  height: 100%;
  color: #fff;
  margin-top: 28px;
  .selectWrap {
    width: 100px;
    border-radius: 4px;
    margin-left: 20px;
    float: left;
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
        height: 32px !important;
        .el-input__inner {
          height: 100% !important;
        }
      }
    }
  }
}
</style>