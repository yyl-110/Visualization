<template>
  <!-- 数据展示区域 -->
  <div class="dataDisplay" v-if="type === 'parts'">
    {{ timeType }}新增
    <img src="../../../assets/imgs/parts.png" alt="" />
    零部件数量
    <countTo
      :startVal="0"
      :endVal="disData.addPartCount || 0"
      :duration="6000"
      separator=""
      class="countTo"
    ></countTo>
    个，发布率
    <countTo
      :startVal="0"
      :endVal="parseFloat(disData.partReleasedRate || 0)"
      :duration="6000"
      separator=""
      suffix="%"
      :decimals="2"
      class="countTo"
    ></countTo>
    ；新增
    <img src="../../../assets/imgs/icon_model@2x.png" alt="" />
    模型数量
    <countTo
      :startVal="0"
      :endVal="disData.addModelCount || 0"
      :duration="6000"
      separator=""
      class="countTo"
    ></countTo>
    个，发布率
    <countTo
      :startVal="0"
      :endVal="parseFloat(disData.modelReleasedRate) || 0"
      :duration="6000"
      separator=""
      suffix="%"
      :decimals="2"
      class="countTo"
    ></countTo>
    ; 新增
    <img src="../../../assets/imgs/icon_drawing@2x.png" alt="" />
    图纸数量
    <countTo
      :startVal="0"
      :endVal="disData.addDrawingCount || 0"
      :duration="6000"
      separator=""
      class="countTo"
    ></countTo>
    张， 发布率
    <countTo
      :startVal="0"
      :endVal="parseFloat(disData.drawingReleasedRate) || 0"
      :duration="6000"
      separator=""
      suffix="%"
      :decimals="2"
      class="countTo"
    ></countTo>
    ；
  </div>
  <div v-else class="dataDisplay">
    系统总
    <img
      class="productIcon"
      src="../../../assets/imgs/icon_product@2x.png"
      alt=""
    />
    产品库数量
    <countTo
      :startVal="0"
      :endVal="disData.allCount || 0"
      :duration="6000"
      separator=""
      class="countTo"
    ></countTo>
    个，{{ timeType }}新增
    <img
      class="productIcon"
      src="../../../assets/imgs/icon_product@2x.png"
      alt=""
    />
    产品数量
    <countTo
      :startVal="0"
      :endVal="disData.addCount || 0"
      :duration="6000"
      separator=""
      class="countTo"
    ></countTo>
    个，同比
    <countTo
      :startVal="0"
      :endVal="parseFloat(disData.tongBiAdd) || 0"
      :duration="6000"
      separator=""
      suffix="%"
      :decimals="2"
      class="countTo"
    ></countTo>
    <img src="../../../assets/imgs/icon_rise@2x.png" class="up" alt="" />
    环比
    <countTo
      :startVal="0"
      :endVal="parseFloat(disData.huanBiAdd) || 0"
      :duration="6000"
      separator=""
      suffix="%"
      :decimals="2"
      class="countTo"
    ></countTo>
    <img src="../../../assets/imgs/icon_rise@2x.png" class="up" alt="" />
    ；
  </div>
</template>

<script>
import countTo from 'vue-count-to';
import { mapGetters } from 'vuex';

export default {
  name: 'DataDisplay',
  props: {
    type: {
      type: String,
      default: 'parts',
    },
    disData: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    ...mapGetters(['queryYear', 'queryTime', 'queryType']),
    timeType() {
      if (this.queryType === 1) {
        return '本月';
      }
      if (this.queryType === 2) {
        return '本季度';
      }
      if (this.queryType === 3) {
        return this.queryTime;
      }
      if (this.queryType === 4) {
        return '本年度';
      }
      return '本月';
    },
  },
  components: {
    countTo,
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.dataDisplay {
  height: 60px;
  background: rgba(247, 186, 30, 0.2);
  border-radius: 4px;
  opacity: 0.97;
  border: 1px solid #f7ba1e;
  font-size: 24px;
  font-weight: 400;
  color: #ffffff;
  line-height: 60px;
  padding-left: 22px;
  .countTo {
    color: #f7ba1e;
    font-size: 32px;
    font-weight: 600;
  }
  img {
    width: 32px;
    height: 32px;
    vertical-align: middle;
    &.productIcon {
      margin: 0 4px;
    }
    &.up {
      margin: 0 4px;
      width: 24px;
      height: 24px;
    }
  }
}
</style>