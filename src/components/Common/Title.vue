<template>
  <div class="title clearfix">
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
  .line {
    width: 4px;
    height: 18px;
    background: #00dffb;
    float: left;
  }
  span {
    margin-left: 8px;
    font-size: 16px;
    font-weight: 500;
    color: #00dffb;
    float: left;
    line-height: 18px;
  }
}
</style>