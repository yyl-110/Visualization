<template>
  <div class="title">
    <div class="line"></div>
    <span>{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    text: {
      type: String,
      default: '标题',
    },
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.title {
  display: flex;
  align-items: center;
  .line {
    width: 4px;
    height: 18px;
    background: #00dffb;
  }
  span {
    margin-left: 8px;
    font-size: 16px;
    font-weight: 500;
    color: #00dffb;
    line-height: 24px;
  }
}
</style>