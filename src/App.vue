<template>
  <div id="app" v-cloak>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {};
  },
  created() {},
  mounted() {
    // screenSize(this.$refs.appContainer);
  },
};
</script>

<style lang="scss">
@import './styles/variables.scss';
@import './styles/mixin.scss';
@import './styles/index.scss';
@import './styles/base.scss';
@import './styles/transition.scss';
@import './styles/element-ui.scss';
@import './styles/sidebar.scss';
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  // .innerWrap {
  //   min-width: auto;
  //   width: 100%;
  //   height: 100%;
  //   // width: 1920px;
  //   min-height: auto;
  //   // height: 1080px;
  //   overflow: hidden;
  //   transform-origin: 0 0 0;
  // }
}
</style>
