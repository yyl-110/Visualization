<template>
  <div class="navbar">
    <breadcrumb class="breadcrumb-container" />
    <div class="select"><select-search /></div>
    <div class="title">{{ $route.meta.mainTitle }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Breadcrumb from '@/components/Breadcrumb';
import SelectSearch from './SelectSearch.vue';
// import Hamburger from '@/components/Hamburger'

export default {
  components: {
    Breadcrumb,
    SelectSearch,
  },
  watch: {},
  computed: {
    ...mapGetters(['sidebar', 'avatar']),
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar');
    },
    async logout() {
      await this.$store.dispatch('user/logout');
      this.$router.push(`/login?redirect=${this.$route.fullPath}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  height: 100%;
  overflow: hidden;
  position: relative;
  // background-color: #050a4e;
  background: url(../../assets/imgs/bg_title.png) no-repeat;
  background-position: 0 0;
  background-size: 100% 100%;
  padding-right: 20px;
  padding-left: 20px;
  & > .title {
    font-size: 40px;
    color: #23cefd;
    line-height: 56px;
    text-align: center;
    width: 50%;
    margin: 0 auto;
  }
  .breadcrumb-container {
    float: left;
    margin-top: 38px;
  }
  .select {
    height: 100%;
    float: right;
  }
}
</style>
