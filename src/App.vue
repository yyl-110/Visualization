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
  created() {
    const userAgent = navigator.userAgent; // 获取浏览器信息
    const IEReg = new RegExp('MSIE \\d+\\.\\d+;'); // 正则校验IE标识符
    const IEMsg = IEReg.exec(userAgent); // 获取字符串
    const IEVersionNum = new RegExp('\\d+\\.\\d'); // 正则获取版本

    // 是IE9，引入js文件
    if (IEMsg && parseFloat(IEVersionNum.exec(IEMsg)) == 9) {
      import('@/utils/flex.native.min.js');
      console.log('IE9引入');
      alert(1)
    } else {
      console.log('非IE9不引入');
      import('@/utils/flex.native.min.js');
    }
  },
  mounted() {
    // screenSize(this.$refs.appContainer);
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
    width: 100%;
    height: 100%;
    // width: 1920px;
    min-height: auto;
    // height: 1080px;
    overflow: auto;
    transform-origin: 0 0 0;
  }
}
</style>
