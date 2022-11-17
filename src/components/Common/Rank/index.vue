<template>
  <div class="rankContainer">
    <dv-border-box-7 ref="borderBox">
      <div class="ranlWrap">
        <Title :text="title" />
        <table border="0" align="left">
          <thead>
            <tr>
              <th width="50"><div class="text rankText">排名</div></th>
              <th width="106"><div class="text name">项目类型</div></th>
              <th width="300">
                <div class="progressWrap">
                  <div class="progress"></div>
                </div>
              </th>
              <th width="80"><div class="text rate">零件发布率</div></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in rankData" :key="item.id">
              <td width="50">
                <div :class="['rankNum', 'rankText']">
                  <div
                    :class="[
                      item.id === 1 && 'one',
                      item.id === 2 && 'two',
                      item.id === 3 && 'three',
                    ]"
                  >
                    {{ item.id }}
                  </div>
                </div>
              </td>
              <td width="106">
                <div class="text name">{{ item.title }}</div>
              </td>
              <td width="300">
                <div class="progressWrap">
                  <div class="progress">
                    <el-progress
                      :text-inside="false"
                      :show-text="false"
                      :stroke-width="10"
                      :percentage="item.value"
                      color="#23CEFD"
                    ></el-progress>
                  </div>
                </div>
              </td>
              <td width="80">
                <div class="text rate">{{ item.value }}%</div>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- <div class="content">
          <div class="row rowTitle clearfix">
            <span class="text rankText">排名</span>
            <span class="text name">项目类型</span>
            <div class="progressWrap">
              <div class="progress"></div>
            </div>
            <span class="text rate">零件发布率</span>
          </div>
          <div
            class="row rowContent clearfix"
            v-for="item in rankData"
            :key="item.id"
          >
            <div :class="['rankNum', 'rankText']">
              <span
                :class="[
                  item.id === 1 && 'one',
                  item.id === 2 && 'two',
                  item.id === 3 && 'three',
                ]"
              >
                {{ item.id }}
              </span>
            </div>
            <div class="text name">{{ item.title }}</div>
            <div class="progressWrap">
              <div class="progress">
                <el-progress
                  :text-inside="false"
                  :show-text="false"
                  :stroke-width="14"
                  :percentage="item.value"
                  color="#23CEFD"
                ></el-progress>
              </div>
            </div>
            <span class="text rate">{{ item.value }}%</span>
          </div>
        </div> -->
      </div>
    </dv-border-box-7>
  </div>
</template>

<script>
import resizeChartMixin from '../../../utils/resizeChartMixin';
import Title from '../Title.vue';
export default {
  name: 'Rank',
  components: {
    Title,
  },
  props: {
    title: {
      type: String,
      default: '标题',
    },
  },
  mixins: [resizeChartMixin],
  data() {
    return {
      rankData: [
        { title: '集团项目', id: 1, value: 50 },
        { title: '公安武警项目', id: 2, value: 90 },
        { title: '基础科研项目', id: 3, value: 10 },
        { title: '实验基础项目', id: 4, value: 30 },
        { title: '技术基础类', id: 5, value: 40 },
        { title: '其他项目', id: 6, value: 70 },
      ],
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.rankContainer {
  width: 100%;
  height: 100%;
  background: #050a4e;
  box-shadow: inset -8px -8px 40px 0px rgba(0, 227, 255, 0.3),
    inset 8px 8px 40px 0px rgba(0, 227, 255, 0.3);
  border-radius: 4px;
  overflow: hidden;
  .ranlWrap {
    width: 100%;
    height: 100%;
    padding: 18px 0 0 30px;
  }
  .progress {
    width: 86%;
    margin: 0 auto;
  }
  .name {
    padding-left: 20px;
  }

  table {
    width: 100%;
    height: 100%;
    margin-top: 8px;
    thead {
      width: 100%;
    }
    tr {
      height: 42px;
      line-height: 42px;
      .rankNum {
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
            background: linear-gradient(180deg, #f7bcf8 0%, #c64cc9 100%);
            border: none;
          }
          &.two {
            background: linear-gradient(180deg, #ffc688 0%, #ff9f13 100%);
            border: none;
          }
          &.three {
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