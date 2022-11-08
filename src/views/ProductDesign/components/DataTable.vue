<template>
  <div class="tableContainer">
    <dv-border-box-7 ref="borderBox">
      <div class="tableWrap">
        <div class="table">
          <div class="top">
            <div class="row1 row border_right">
              <p>项目类型</p>
              <p>排名</p>
            </div>
            <div class="border_right row2 row">
              <p>零部件数量</p>
              <p>发布零件数</p>
              <p>零部件发布率</p>
            </div>
            <div class="row3 row border_right">
              <p>零部件数量</p>
              <p>发布零件数</p>
              <p>零部件发布率</p>
            </div>
            <div class="row4 row">
              <p>零部件数量</p>
              <p>发布零件数</p>
              <p>零部件发布率</p>
            </div>
          </div>
          <div class="bottom">
            <div class="row1 row border_right">
              <span>项目集团</span>
              <span>4</span>
            </div>
            <div class="row2 row border_right">
              <span>85</span>
              <span>80</span>
              <span>94.1%</span>
            </div>
            <div class="row3 row border_right">
              <span>85</span>
              <span>80</span>
              <span>94.1%</span>
            </div>
            <div class="row4 row">
              <span>85</span>
              <span>80</span>
              <span>94.1%</span>
            </div>
          </div>
        </div>
      </div>
    </dv-border-box-7>
  </div>
</template>

<script>
import resizeChartMixin from '../../../utils/resizeChartMixin';

export default {
  name: 'DataTable',

  data() {
    return {};
  },
  mixins: [resizeChartMixin],
  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.tableContainer {
  height: 110px;
  background: #050a4e;
  box-shadow: inset -8px -8px 40px 0px rgba(0, 227, 255, 0.3),
    inset 8px 8px 40px 0px rgba(0, 227, 255, 0.3);
  border-radius: 4px;
  .tableWrap {
    width: 100%;
    padding: 0 20px;
    display: flex;
    align-items: center;
    height: 100%;
  }
  .table {
    width: 100%;
    .border_right {
      border-right: 1px solid rgba(0, 223, 251, 0.5);
    }
    .row1 {
      width: 205px;
    }
    .row {
      display: flex;
      align-items: center;
      height: 100%;
      &:not(:first-child) {
        flex: 1;
      }
      p {
        flex: 1;
        text-align: center;
      }
      span {
        flex: 1;
        text-align: center;
      }
    }
    .bottom {
      height: 34px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid rgba(0, 223, 251, 0.5);
      span {
        font-size: 16px;
        font-weight: 500;
        color: #ffffff;
        line-height: 24px;
      }
    }
    .top {
      display: flex;
      align-items: center;
      height: 34px;
      background: linear-gradient(
        360deg,
        rgba(0, 223, 251, 0.08) 0%,
        rgba(0, 223, 251, 0.5) 100%
      );
      border-radius: 4px 4px 0px 0px;
      border: 1px solid rgba(0, 223, 251, 0.5);
      p {
        font-size: 16px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #ffffff;
        line-height: 24px;
      }
    }
  }
}
</style>