<template>
  <div class="changePanel">
    <dv-border />
    <div class="panelList">
      <el-row :gutter="60">
        <el-col :span="8">
          <panel-item class="panItme" :type="1" :itemData="panel1" />
        </el-col>
        <el-col :span="8">
          <panel-item class="panItme" :type="2" :itemData="panel2" />
        </el-col>
        <el-col :span="8">
          <panel-item class="panItme" :type="3" :itemData="panel3" />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import DvBorder from '../../../components/Common/DvBorder.vue';
import PanelItem from './PanelItem.vue';

export default {
  components: { PanelItem, DvBorder },
  name: 'VueDataVDesignChangePanel',
  props: {
    panelData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      panel1: {},
      panel2: {},
      panel3: {},
    };
  },
  created() {
    this.panel1 = this.panelData['区域二十三'];
    this.panel2 = this.panelData['区域二十四'];
    this.panel3 = this.panelData['区域二十五'];
  },
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
  position: relative;
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