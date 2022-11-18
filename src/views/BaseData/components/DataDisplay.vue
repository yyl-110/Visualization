<template>
  <div class="dataDisplay">
    系统新增
    <img src="../../../assets/imgs/parts.png" alt="" />
    标准件数量
    <countTo
      :startVal="0"
      :endVal="disData.AddStandardParts"
      :duration="6000"
      separator=""
      class="countTo"
    ></countTo>
    个，新增
    <img src="../../../assets/imgs/parts.png" alt="" />
    元器件数量
    <countTo
      :startVal="0"
      :endVal="disData.AddComponentsParts"
      :duration="6000"
      separator=""
      class="countTo"
    ></countTo>
    个；
  </div>
</template>

<script>
import countTo from 'vue-count-to';

export default {
  components: { countTo },
  name: 'BaseDataDisplay',
  props: {
    disData: { type: Object, default: () => {} },
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
    flex-shrink: 0;
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