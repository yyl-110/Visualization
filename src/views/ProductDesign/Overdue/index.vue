<template>
  <div class="overdue">
    <dv-border-box-7 ref="borderBox">
      <div class="partsWrap">
        <div class="titleWrap">
          <Title text="PDM产品查看列表" />
          <el-button type="primary" class="back">
            <img src="../../../assets/imgs/icon_return@2x.png" alt="" />
            返回
          </el-button>
        </div>
        <v-table />
      </div>
    </dv-border-box-7>
  </div>
</template>

<script>
import Title from '../../../components/Common/Title.vue';
import resizeChartMixin from '../../../utils/resizeChartMixin';
import VTable from '@/components/Common/V-Table.vue';
export default {
  components: { Title, VTable },
  name: 'Overdue',

  mixins: [resizeChartMixin],
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.overdue {
  width: 100%;
  background: #050a4e;
  box-shadow: inset -8px -8px 40px 0px rgba(0, 227, 255, 0.3),
    inset 8px 8px 40px 0px rgba(0, 227, 255, 0.3);
  border-radius: 4px;
  height: 98%;
  .partsWrap {
    width: 100%;
    padding: 0 20px 30px;
    height: 100%;
    .titleWrap {
      display: flex;
      justify-content: space-between;
      padding: 13px 0 20px;
      align-items: center;
      .back {
        font-size: 14px;
        font-weight: bold;
        color: #050a4e;
        display: flex;
        align-items: center;
        img {
          width: 16px;
          height: 16px;
        }
      }
    }
  }
}
</style>