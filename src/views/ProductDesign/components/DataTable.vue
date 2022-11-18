<template>
  <div class="tableContainer">
    <dv-border-box-7 ref="borderBox">
      <div class="tableWrap">
        <table
          align="center"
          border="1px"
          bordercolor="#00DFFB"
          v-if="type === 'parts'"
        >
          <thead>
            <tr>
              <th class="border_r">项目类型</th>
              <th class="border_l">排名</th>
              <th class="border_r">零部件数量</th>
              <th class="border_n">发布零件数</th>
              <th class="border_l">零部件发布率</th>
              <th class="border_r">模型数量</th>
              <th class="border_n">发布模型数</th>
              <th class="border_l">模型发布率</th>
              <th class="border_r">图纸数量</th>
              <th class="border_n">发布图纸数</th>
              <th class="border_l">图纸发布率</th>
            </tr>
          </thead>
          <tbody>
            <tr align="center">
              <td class="border_r">项目集团</td>
              <td class="border_l">{{ tableData.ranking }}</td>
              <td class="border_r">{{ tableData.addPartCount }}</td>
              <td class="border_n">{{ tableData.releasedPartCount }}</td>
              <td class="border_l">{{ tableData.partReleasedRate }}</td>
              <td class="border_r">{{ tableData.addModelCount }}</td>
              <td class="border_n">{{ tableData.releasedModelCount }}</td>
              <td class="border_l">{{ tableData.modelReleasedRate }}</td>
              <td class="border_r">{{ tableData.addDrawingCount }}</td>
              <td class="border_n">{{ tableData.releasedDrawingCount }}</td>
              <td class="border_l">
                {{ tableData.drawingReleasedRate || '-' }}
              </td>
            </tr>
          </tbody>
        </table>
        <table
          border="0"
          bordercolor="#00DFFB"
          class="table2"
          v-if="type === 'product'"
        >
          <thead>
            <tr>
              <td>项目类型</td>
              <td>总数量排行</td>
              <td>产品库总数</td>
              <td>总项目立项数</td>
              <td>总项目在研数</td>
              <td>总项目验中数</td>
              <td>总项目验收数</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ tableData.prjType }}</td>
              <td>5</td>
              <td>{{ tableData.productCount }}</td>
              <td>{{ tableData.projectInitiation }}</td>
              <td>{{ tableData.projectInResearch }}</td>
              <td>{{ tableData.projectUnderAcceptance }}</td>
              <td>{{ tableData.projectAccepted }}</td>
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

  props: {
    tableData: {
      type: Object,
      default: () => {},
    },
    type: {
      type: String,
      default: '',
    },
  },

  data() {
    return {};
  },
  mixins: [resizeChartMixin],
  mounted() {
    console.log(this.tableData, 111);
  },

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
    .table2 {
      border-collapse: separate;
      border-spacing: 0;
      border-bottom: 1px solid #fff;
      border-radius: 4px 4px 0 0;
      thead tr td:first-child {
        border-top-left-radius: 4px;
      }
      thead tr td:last-child {
        border-top-right-radius: 4px;
      }
      thead {
        border: 1px solid rgba(0, 223, 251, 0.5);
        border-radius: 4px 4px 0px 0px;
        overflow: hidden;
      }
      td {
        height: 34px;
        padding-left: 32px;
      }
    }
    table {
      width: 100%;
      font-size: 16px;
      font-weight: 400;
      border-collapse: collapse;
      border-spacing: 0;
      color: #ffffff;
      height: 68px;

      th,
      td {
        border-color: rgba(255, 255, 255, 0.5);
        font-size: 16px;
        font-weight: 500;
        color: #ffffff;
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
        background: rgb(43, 99, 149);
        background: linear-gradient(
          360deg,
          rgba(0, 223, 251, 0.08) 0%,
          rgba(0, 223, 251, 0.5) 100%
        );
      }
      tbody {
        height: 34px;
        width: 100%;
      }
    }
  }
}
</style>