<template>
  <section class="app-main">
    <div class="scroll">
      <transition name="fade-transform" mode="out-in" v-if="$isIE">
        <router-view :key="key" />
      </transition>
      <router-view :key="key" v-else />
    </div>
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
  created() {},
};
</script>

<style scoped lang="scss">
.app-main {
  /*50 = navbar  */
  height: 100%;
  width: 100%;
  position: relative;
  padding-top: 102px;
  color: #fff;
  padding-left: 34px;
  .scroll {
    width: 100%;
    height: 100%;
    padding-right: 20px;
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
