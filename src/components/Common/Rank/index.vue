<template>
  <div class="rankContainer">
    <dv-border />
    <div class="ranlWrap">
      <Title :text="title" />
      <div class="tableWrapper">
        <table border="0" align="left">
          <thead>
            <tr height="35">
              <th width="50"><div class="text rankText">排名</div></th>
              <th width="112">
                <div class="text name">
                  {{ rowName ? rowName : '项目类型' }}
                </div>
              </th>
              <th :class="[widthType === 'lang' ? 'maxWidth' : 'minWidth']">
                <div class="progressWrap">
                  <div class="progress"></div>
                </div>
              </th>
              <th width="80">
                <div class="text rate">{{ label }}</div>
              </th>
            </tr>
          </thead>
        </table>
        <div class="innerWrap">
          <table border="0" align="left">
            <tbody>
              <tr v-for="(item, index) in newRankData" :key="index" height="35">
                <td width="50">
                  <div :class="['rankNum', 'rankText']">
                    <div
                      :class="[
                        index === 0 && 'one',
                        index === 1 && 'two',
                        index === 2 && 'three',
                      ]"
                    >
                      {{ index + 1 }}
                    </div>
                  </div>
                </td>
                <td width="112">
                  <div class="text name">{{ item.prjType }}</div>
                </td>
                <td :class="[widthType === 'lang' ? 'maxWidth' : 'minWidth']">
                  <div class="progressWrap">
                    <div class="progress">
                      <el-progress
                        :text-inside="false"
                        :show-text="false"
                        :stroke-width="10"
                        :percentage="item[progressLabel] | format(that)"
                        color="#23CEFD"
                      ></el-progress>
                    </div>
                  </div>
                </td>
                <td width="80" valign="middle">
                  <div class="text rate" v-if="isRate">
                    {{ item[progressLabel] | fomartNum }}
                  </div>
                  <div class="text rate" v-else>
                    {{ item[progressLabel] }}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DvBorder from '../DvBorder.vue';
import Title from '../Title.vue';
export default {
  name: 'Rank',
  components: {
    Title,
    DvBorder,
  },
  props: {
    type: {
      type: String,
      default: '',
    },
    progressLabel: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '标题',
    },
    rankData: {
      type: Array,
      default: () => [],
    },
    isRate: {
      type: Boolean,
      default: false,
    },
    /* 控制进度条宽度 */
    widthType: {
      type: String,
      default: 'lang',
    },
    rowName: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      that: this,
      newRankData: [],
      max: 100,
    };
  },
  filters: {
    format(val, that) {
      try {
        return (parseFloat(val || 0) / that.max) * 100;
      } catch (error) {
        console.log('error:', error);
      }
    },
  },
  watch: {
    rankData: {
      deep: true,
      handler() {
        this.newRankData = [];
        if (this.type === 'peopleRank') {
          this.formateCommon();
        } else {
          this.formateData();
        }
      },
    },
  },
  created() {
    this.newRankData = [];
    if (this.type === 'peopleRank') {
      this.formateCommon();
      return;
    }
    this.formateData();
  },

  mounted() {},

  methods: {
    formateData() {
      let rankArr = [];
      if (!(this.rankData instanceof Array)) return;
      try {
        rankArr = (this.rankData || []).map((item) => {
          const key = Object.keys(item)[0];
          return { ...item[key] };
        });
      } catch (error) {
        console.log('error:', error);
      }
      this.newRankData = [...rankArr];
      if (this.isRate) {
        this.max = 100;
        return;
      }
      const that = this;
      that.max = rankArr.reduce((c, R) => c + R[that.progressLabel], 0);
    },
    /* 普通文档贡献量排行榜 */
    formateCommon() {
      if (!(this.rankData instanceof Array)) return;
      try {
        let key = Object.keys(this.rankData[0] || {})[0];
        if (this.rankData[0][key] instanceof Object) return;
      } catch (error) {
        console.log('error:', error);
      }
      try {
        let arr = this.rankData.map((i) => {
          let key = Object.keys(i)[0];
          let item = { prjType: key };
          item[this.progressLabel] = i[key];
          return item;
        });
        console.log('arr:哈哈哈', arr);
        this.newRankData = arr;
        if (this.isRate) {
          this.max = 100;
          return;
        }
        const that = this;
        that.max = arr.reduce((c, R) => c + R[that.progressLabel], 0);
      } catch (error) {
        console.log('error:', error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.rankContainer {
  width: 100%;
  height: 100%;
  background: #050a4e;
  box-shadow: inset -8px -8px 40px 0px rgba(0, 227, 255, 0.3),
    inset 8px 8px 40px 0px rgba(0, 227, 255, 0.3);
  overflow: hidden;
  position: relative;
  .tableWrapper {
    width: 100%;
    height: calc(100% - 42px);
    .innerWrap {
      width: 100%;
      height: 100%;
      overflow: scroll;
      padding-bottom: 30px;
    }
  }
  // .progressWrap {
  //   height: 40px;
  // }
  // .rate {
  //   height: 40px;
  // }
  // .rankText {
  //   height: 40px;
  // }
  .ranlWrap {
    width: 100%;
    height: 100%;
    padding: 18px 0 0 30px;
  }
  .progressWrap {
    width: 100%;
    // height: 100%;
  }
  .progress {
    width: 84%;
    // height: 100%;
    margin: 0 auto;
  }
  .name {
    padding-left: 20px;
    // height: 40px;
  }

  table {
    width: 100%;
    // height: 100%;
    // margin-top: 8px;
    border-collapse: collapse;

    thead {
      width: 100%;
    }
    tbody {
      width: 100%;
      height: 100%;
      // overflow: auto;
      display: block;
      .rate {
        text-indent: 20px;
      }
      // .progressWrap {
      //   height: 50px;
      // }
      // .rate {
      //   height: 50px;
      // }
      // .rankText {
      //   height: 50px;
      // }
      // .name {
      //   height: 50px;
      // }
    }
    tr {
      table-layout: fixed;

      display: table;
      .minWidth {
        width: 360px !important;
      }
      .maxWidth {
        width: 400px !important;
      }
      .rankNum {
        // height: 50px;
        width: 24px;
        margin: 0 auto;
        div {
          width: 24px;
          height: 24px;
          font-size: 14px;
          font-weight: 400;
          color: #ffffff;
          line-height: 24px;
          border-radius: 50%;
          text-align: center;
          border: 1px solid rgba(8, 58, 190, 1);
          &.one {
            background-color: #f7bcf8;
            background: linear-gradient(180deg, #f7bcf8 0%, #c64cc9 100%);
            border: none;
          }
          &.two {
            background-color: #ffc688;
            background: linear-gradient(180deg, #ffc688 0%, #ff9f13 100%);
            border: none;
          }
          &.three {
            background-color: #0497e7;
            background: linear-gradient(180deg, #0497e7 0%, #0948cc 100%);
            border: none;
          }
        }
      }
    }
    th,
    td {
      white-space: nowrap;
    }
    .text {
      font-size: 14px;
      font-weight: 500;
      color: #ffffff;
      line-height: 24px;
      text-align: left;
      &.rankText {
        text-align: center !important;
      }
    }
  }
  /deep/.el-progress-bar__outer {
    background: #050a4e;
    box-shadow: inset -8px -8px 40px 0px rgba(0, 227, 255, 0.3),
      inset 8px 8px 40px 0px rgba(0, 227, 255, 0.3);
    padding: 5px;
  }
}
</style>