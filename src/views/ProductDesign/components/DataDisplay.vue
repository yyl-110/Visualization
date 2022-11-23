<template>
  <!-- 数据展示区域 -->
  <div class="dataDisplay" v-if="type === 'parts'">
    本月新增
    <img src="../../../assets/imgs/parts.png" alt="" />
    零部件数量
    <countTo
      :startVal="0"
      :endVal="disData.addPartCount"
      :duration="6000"
      separator=""
      class="countTo"
    ></countTo>
    个，发布率
    <countTo
      :startVal="0"
      :endVal="parseFloat(disData.partReleasedRate)"
      :duration="6000"
      separator=""
      suffix="%"
      :decimals="1"
      class="countTo"
    ></countTo>
    ；新增
    <img src="../../../assets/imgs/icon_model@2x.png" alt="" />
    模型数量
    <countTo
      :startVal="0"
      :endVal="disData.addModelCount"
      :duration="6000"
      separator=""
      class="countTo"
    ></countTo>
    个，发布率
    <countTo
      :startVal="0"
      :endVal="parseFloat(disData.modelReleasedRate)"
      :duration="6000"
      separator=""
      suffix="%"
      :decimals="1"
      class="countTo"
    ></countTo>
    ; 新增
    <img src="../../../assets/imgs/icon_drawing@2x.png" alt="" />
    图纸数量
    <countTo
      :startVal="0"
      :endVal="disData.addDrawingCount"
      :duration="6000"
      separator=""
      class="countTo"
    ></countTo>
    张， 发布率
    <countTo
      :startVal="0"
      :endVal="parseFloat(disData.drawingReleasedRate)"
      :duration="6000"
      separator=""
      suffix="%"
      :decimals="1"
      class="countTo"
    ></countTo>
    ；
  </div>
  <div v-else class="dataDisplay">
    本月总
    <img
      class="productIcon"
      src="../../../assets/imgs/icon_product@2x.png"
      alt=""
    />
    产品库数量
    <countTo
      :startVal="0"
      :endVal="disData.allCount"
      :duration="6000"
      separator=""
      class="countTo"
    ></countTo>
    个，本月新增
    <img
      class="productIcon"
      src="../../../assets/imgs/icon_product@2x.png"
      alt=""
    />
    产品数量
    <countTo
      :startVal="0"
      :endVal="disData.addCount"
      :duration="6000"
      separator=""
      class="countTo"
    ></countTo>
    个，同比
    <countTo
      :startVal="0"
      :endVal="parseFloat(disData.tongBiAdd)"
      :duration="6000"
      separator=""
      suffix="%"
      class="countTo"
    ></countTo>
    <img src="../../../assets/imgs/icon_rise@2x.png" class="up" alt="" />
    环比
    <countTo
      :startVal="0"
      :endVal="parseFloat(disData.huanBiAdd)"
      :duration="6000"
      separator=""
      suffix="%"
      class="countTo"
    ></countTo>
    <img src="../../../assets/imgs/icon_rise@2x.png" class="up" alt="" />
    ；
  </div>
</template>

<script>
import countTo from 'vue-count-to';

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