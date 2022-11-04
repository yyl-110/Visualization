<template>
  <div class="rankContainer">
    <Title :text="'发布率排行榜'" />
    <div class="content">
      <div class="row rowTitle">
        <span class="text rankText">排名</span>
        <span class="text name">项目类型</span>
        <div class="progressWrap">
          <div class="progress"></div>
        </div>
        <span class="text rate">零件发布率</span>
      </div>
      <div class="row rowContent" v-for="item in rankData" :key="item.id">
        <div class="rankNum rankText">
          <span>{{ item.id }}</span>
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
    </div>
  </div>
</template>

<script>
import Title from '../Title.vue';
export default {
  name: 'Rank',
  components: {
    Title,
  },
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
  padding: 18px 0 0 30px;
  overflow: hidden;
  /deep/.el-progress-bar__outer {
    background: #050a4e;
    box-shadow: inset -8px -8px 40px 0px rgba(0, 227, 255, 0.3),
      inset 8px 8px 40px 0px rgba(0, 227, 255, 0.3);
    padding: 5px;
  }
  .content {
    margin-top: 16px;
    height: 100%;
    overflow: auto;
    padding-right: 20px;
    .row {
      display: flex;
      align-items: center;
      height: 42px;
      flex-wrap: nowrap;
      .rankNum {
        display: flex;
        justify-content: center;
        span {
          width: 24px;
          height: 24px;

          font-size: 14px;
          font-weight: 400;
          color: #ffffff;
          line-height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
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
      .rankText {
        width: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .progressWrap {
        flex: 1;
      }
      .name {
        width: 120px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-left: 24px;
      }
      .rate {
        width: 80px;
      }
      .progress {
        width: 90%;
        height: 14px;
        // border-radius: 7px;
        // border: 1px solid #23cefd;
      }
      .text {
        font-size: 14px;
        font-weight: 500;
        color: #ffffff;
        line-height: 24px;
      }
    }
  }
}
</style>