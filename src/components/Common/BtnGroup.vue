<template>
  <div class="btnGroup">
    <el-button
      :class="['btn', selectBtn === 1 && 'active']"
      @click="handleChange(1)"
    >
      {{ textGroup[0] }}
    </el-button>
    <el-button
      :class="['btn', selectBtn === 2 && 'active']"
      @click="handleChange(2)"
    >
      {{ textGroup[1] }}
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'VisualizationBtnGroup',

  props: {
    textGroup: {
      type: Array,
      default: () => ['项目类型', '人员'],
    },
  },

  data() {
    return {
      selectBtn: 1,
    };
  },

  mounted() {},

  methods: {
    handleChange(type) {
      this.selectBtn = type;
      this.$emit('handleChange', type);
    },
  },
};
</script>

<style lang="scss" scoped>
.btnGroup {
  background-color: rgba(255, 255, 255, 0.1);
  width: max-content;
  border-radius: 4px;
  overflow: hidden;
  .btn {
    width: 72px;
    margin: 0;
    padding: 0px;
    height: 34px;
    background: transparent;
    border: none;
    font-size: 14px;
    font-weight: bold;
    color: #23cefd;
    transition: all 0.5s;
    border-radius: 4px;
    &.active {
      color: #050a4e;
      background: #23cefd;
      border-radius: 4px;
    }
  }
}
</style>