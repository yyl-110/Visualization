<template>
  <div class="dvBorder">
    <div class="line line1"></div>
    <div class="line line2"></div>
    <div class="line line3"></div>
    <div class="line line4"></div>
    <div class="line_v line5"></div>
    <div class="line_v line6"></div>
    <div class="line_v line7"></div>
    <div class="line_v line8"></div>
  </div>
</template>

<script>
export default {
  name: 'VisualizationDvBorder',

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.dvBorder {
  .line1 {
    top: 0;
    left: 0;
  }
  .line2 {
    right: 0;
    top: 0;
  }
  .line3 {
    left: 0;
    bottom: 0;
  }
  .line4 {
    right: 0;
    bottom: 0;
  }
  .line5 {
    left: 0;
    top: 0;
  }
  .line6 {
    right: 0;
    top: 0;
  }
  .line7 {
    right: 0;
    bottom: 0;
  }
  .line8 {
    left: 0;
    bottom: 0;
  }
  .line {
    width: 15px;
    height: 2px;
    background: #00dffb;
    position: absolute;
    z-index: 10;
  }
  .line_v {
    z-index: 10;
    width: 2px;
    height: 15px;
    background: #00dffb;
    position: absolute;
  }
}
</style>