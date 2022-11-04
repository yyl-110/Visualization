<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <div class="scroll">
        <router-view :key="key" />
      </div>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.path;
    },
  },
};
</script>

<style scoped lang="scss">
.app-main {
  /*50 = navbar  */
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
  padding-top: 102px;
  color: #fff;
  padding-left: 34px;
  .scroll {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding-right: 20px;
    overflow-x: hidden;
  }
}
.fixed-header + .app-main {
  padding-top: 50px;
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
