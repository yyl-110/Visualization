import {mapGetters} from 'vuex';
export default {
  computed: {
    ...mapGetters(['sidebar']),
    isCollapse() {
      return !this.sidebar.opened;
    },
  },
  mounted() {
    this.changeColor();
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
  methods: {
    changeColor() {
      console.log();
      Array.prototype.forEach.call(document.getElementsByClassName('dv-bb7-line-width-2'), function (element) {
        element.style.stroke = '#00DFFB';
      });
    },
  },
};
