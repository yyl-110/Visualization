<template>
  <div class="wrap">
    <div class="btnGroup clearfix">
      <el-button
        :class="['btn', 'btn1', selectBtn === 1 && 'active']"
        @click="handleChange(1)"
      >
        {{ textGroup[0] }}
      </el-button>
      <el-button
        :class="['btn', 'btn2', selectBtn === 2 && 'active']"
        @click="handleChange(2)"
      >
        {{ textGroup[1] }}
      </el-button>
    </div>
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
.wrap {
  width: 150px;
}
.btnGroup {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
  width: 150px;
  height: 34px;
  .btn1 {
    float: left;
  }
  .btn2 {
    float: right;
  }
  .btn {
    width: 50%;
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