<template>
  <div class="tableContainer">
    <dv-border-box-7 ref="borderBox">
      <div class="tableWrap">
        <table align="center" border="1px" bordercolor="#00DFFB">
          <!-- align设置表格位置在网页中间，border设置表格的边框线 -->
          <thead>
            <tr>
              <!-- 第一行 -->
              <th class="border_r">项目类型</th>
              <th class="border_l">排名</th>
              <th class="border_r">零部件数量</th>
              <th class="border_n">发布零件数</th>
              <th class="border_l">零部件发布率</th>
              <th class="border_r">零部件数量</th>
              <th class="border_n">发布零件数</th>
              <th class="border_l">零部件发布率</th>
              <th class="border_r">零部件数量</th>
              <th class="border_n">发布零件数</th>
              <th class="border_l">零部件发布率</th>
            </tr>
          </thead>
          <!-- colspan合并第一行四列的格子 -->
          <tbody>
            <tr align="center">
              <!-- 第二行居中 -->
              <td class="border_r">项目集团</td>
              <td class="border_l">4</td>
              <td class="border_r">85</td>
              <td class="border_n">80</td>
              <td class="border_l">94.1%</td>
              <td class="border_r">85</td>
              <td class="border_n">80</td>
              <td class="border_l">94.1%</td>
              <td class="border_r">85</td>
              <td class="border_n">80</td>
              <td class="border_l">94.1%</td>
            </tr>
          </tbody>
        </table>
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
    padding: 21px 20px 0 20px;
    height: 100%;
    display: table;
    table {
      width: 100%;
      font-size: 16px;
      font-weight: 400;
      color: #ffffff;
      height: 68px;
      border-collapse: collapse;
      border-spacing: 0;
      th,
      td {
        border-color: rgba(255, 255, 255, 0.5);
      }
      .border_r {
        border-right: 0;
      }
      .border_l {
        border-left: 0;
      }
      .border_n {
        border-left: 0;
        border-right: 0;
      }
      thead {
        height: 34px;
        width: 100%;
        background: linear-gradient(
          360deg,
          rgba(0, 223, 251, 0.08) 0%,
          rgba(0, 223, 251, 0.5) 100%
        );
        border-radius: 4px 4px 0px 0px;
      }
      tbody {
        height: 34px;
        width: 100%;
      }
    }
  }
}
</style>