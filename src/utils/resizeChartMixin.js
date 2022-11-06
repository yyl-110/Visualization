import {mapGetters} from 'vuex';
export default {
  computed: {
    ...mapGetters(['sidebar']),
    isCollapse() {
      return !this.sidebar.opened;
    },
  },
  mounted() {
    // this.changeColor();
  },
  watch: {
    isCollapse(val) {
      setTimeout(() => {
        if (this.$refs.borderBox) {
          this.$refs.borderBox.initWH();
        }
      }, 300);
    },
  },
  methods: {},
};
