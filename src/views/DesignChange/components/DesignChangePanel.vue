<template>
  <div class="changePanel">
    <dv-border-box-7 ref="borderBox">
      <div class="panelList">
        <el-row :gutter="60">
          <el-col :span="8">
            <panel-item class="panItme" />
          </el-col>
          <el-col :span="8">
            <panel-item class="panItme" />
          </el-col>
          <el-col :span="8">
            <panel-item class="panItme" :type="0" />
          </el-col>
        </el-row>
      </div>
    </dv-border-box-7>
  </div>
</template>

<script>
import resizeChartMixin from '../../../utils/resizeChartMixin';
import PanelItem from './PanelItem.vue';

export default {
  components: { PanelItem },
  name: 'VueDataVDesignChangePanel',

  data() {
    return {};
  },
  mixins: [resizeChartMixin],
  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.changePanel {
  width: 100%;
  height: 300px;
  background: #050a4e;
  box-shadow: inset -8px -8px 40px 0px rgba(0, 227, 255, 0.3),
    inset 8px 8px 40px 0px rgba(0, 227, 255, 0.3);
  .panelList {
    width: 100%;
    height: 100%;
    padding: 0 26px;
    padding-top: 30px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>