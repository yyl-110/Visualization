<template>
  <div class="SliderBar" ref="SliderBar">
    <!-- <el-scrollbar wrap-class="scrollbar-wrapper"> -->
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <el-menu-item-group v-for="route in routes" :key="route.id">
          <template slot="title">
            <div class="titleGroup">
              <span v-if="!isCollapse">{{ route.title }}</span>
            </div>
          </template>
          <sidebar-item
            v-for="subroute in route._route"
            :key="subroute.path"
            :item="subroute"
            :base-path="subroute.path"
          />
        </el-menu-item-group>
      </el-menu>
    <!-- </el-scrollbar> -->
    <div class="options" @click="$store.dispatch('app/toggleSideBar')">
      <img src="../../../assets/imgs/slideIcon2.png" v-if="!isCollapse" alt="" />
      <img src="../../../assets/imgs/slideIcon.png" v-else alt="" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import SidebarItem from './SidebarItem';
import variables from '@/assets/styles/variables.scss';
import { DATA_STATISTICE, SERVICE_MONITORING } from '../../../utils/enum';

export default {
  components: { SidebarItem },
  mounted() {},
  computed: {
    ...mapGetters(['sidebar']),
    routes() {
      let route = this.$router.options.routes.filter((i) => !i.hidden);
      const dataStatistice = route.filter(
        (i) => i.children[0].meta.mainTitle === DATA_STATISTICE,
      );
      const service = route.filter(
        (i) => i.children[0].meta.mainTitle === SERVICE_MONITORING,
      );
      return [
        { title: DATA_STATISTICE, _route: dataStatistice, id: 1 },
        { title: SERVICE_MONITORING, _route: service, id: 2 },
      ];
    },
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },
    showLogo() {
      return this.$store.state.settings.sidebarLogo;
    },
    variables() {
      return variables;
    },
    isCollapse() {
      return !this.sidebar.opened;
    },
  },
};
</script>

<style lang="scss" scoped>
.titleGroup {
  height: 46px;
  line-height: 46px;
  font-size: 16px;
  font-weight: 400;
  color: #ffffff;
  letter-spacing: 1px;
  opacity: 0.6;
  flex-wrap: nowrap;
}
</style>
