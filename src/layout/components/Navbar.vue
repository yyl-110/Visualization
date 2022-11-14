<template>
  <div class="navbar">
    <breadcrumb class="breadcrumb-container" />
    <div class="title">{{ $route.meta.mainTitle }}</div>
    <div class="select"><select-search /></div>
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
  watch: {
    $route() {
      console.log(this.$route);
    },
  },
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
.IE {
  .navbar {
    height: 100%;
    overflow: hidden;
    position: relative;
    background-color: #050a4e;
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
}
.noIE {
  .navbar {
    height: 100%;
    overflow: hidden;
    position: relative;
    background-color: #050a4e;
    background: url(../../assets/imgs/bg_title.png) no-repeat;
    background-position: 0 0;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    & > .title {
      font-size: 40px;
      color: #23cefd;
      line-height: 56px;
      flex: 1;
      text-align: center;
      flex-shrink: 0;
    }
    .breadcrumb-container {
      flex: 1;
      flex-shrink: 0;
      margin-top: 39px;
    }
    .select {
      flex: 1;
      flex-shrink: 0;
      display: flex;
      justify-content: flex-end;
      height: 100%;
    }
  }
}
</style>
