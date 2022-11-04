<template>
  <div id="app" v-cloak>
    <div class="innerWrap" ref="appContainer">
      <router-view />
    </div>
  </div>
</template>

<script>
import { screenSize } from '@/assets/js/utils';
export default {
  name: 'App',
  data() {
    return {};
  },
  mounted() {
    screenSize(this.$refs.appContainer);
  },
};
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: #050a4e;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  .innerWrap {
    min-width: auto;
    width: 1920px;
    min-height: auto;
    height: 1080px;
    overflow: auto;
    transform-origin: 0 0 0;
  }
}
</style>
