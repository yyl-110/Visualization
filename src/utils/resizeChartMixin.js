import {mapGetters} from 'vuex';
export default {
  computed: {
    ...mapGetters(['sidebar']),
    isCollapse() {
      return !this.sidebar.opened;
    },
  },
  watch: {
    isCollapse(val) {
      setTimeout(() => {
        this.$refs.borderBox.initWH();
      }, 300);
    },
  },
};
