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
        @change="handleChangeTime"
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
      yearOptions: [],
      monthOptions: {
        0: [],
        4: [{ value: '', label: '全年度' }],
        2: [
          { value: '一季度', label: '第一季度' },
          { value: '二季度', label: '第二季度' },
          { value: '三季度', label: '第三季度' },
          { value: '四季度', label: '第四季度' },
        ],
        3: [
          { value: '上半年', label: '上半年' },
          { value: '下半年', label: '下半年' },
        ],
        1: [
          { value: '1月', label: '一月' },
          { value: '2月', label: '二月' },
          { value: '3月', label: '三月' },
          { value: '4月', label: '四月' },
          { value: '5月', label: '五月' },
          { value: '6月', label: '六月' },
          { value: '7月', label: '七月' },
          { value: '8月', label: '八月' },
          { value: '9月', label: '九月' },
          { value: '10月', label: '十月' },
          { value: '11月', label: '十一月' },
          { value: '12月', label: '十二月' },
        ],
      },
    };
  },

  watch: {},

  computed: {
    ...mapGetters(['queryYear', 'queryTime', 'queryType']),
  },
  created() {
    /* year */
    let _yearOptions = [];
    for (let i = 2000; i < 2050; i++) {
      _yearOptions.push({
        value: i,
        label: `${i}年`,
      });
    }
    this.yearOptions = [..._yearOptions];
    this.year = this.queryYear;
    this.middleData = this.queryTime;
    this.selectType = this.queryType;
  },

  methods: {
    handleChangeType() {
      this.$store.dispatch('product/changeTime', {
        key: 'queryType',
        value: this.selectType,
      });
      try {
        this.middleData = this.monthOptions[this.selectType][0]?.value;
        this.$store.dispatch('product/changeTime', {
          key: 'queryTime',
          value: this.middleData,
        });
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
        key: 'queryTime',
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
      .is-disabled {
        .el-input__inner {
          color: #23cefd !important;
        }
      }
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