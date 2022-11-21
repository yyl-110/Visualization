<template>
  <div class="ProcessEfficiency">
    <dv-border />
    <div class="processWrap">
      <el-row justify="space-around">
        <el-col
          :span="isCollapse ? 6 : 8"
          v-for="i in 10"
          :key="i"
          style="margin-top: 30px"
        >
          <process-item style="margin: 0 auto" />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import ProcessItem from './components/ProcessItem.vue';
import { mapGetters } from 'vuex';
import DvBorder from '../../components/Common/DvBorder.vue';
export default {
  components: { ProcessItem, DvBorder },
  name: 'ProcessEfficiency',

  data() {
    return {};
  },

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
      console.log(val);
      setTimeout(() => {
        if (this.$refs.borderBox) {
          this.$refs.borderBox.initWH();
        }
      }, 300);
    },
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
/deep/ .dv-bb7-line-width-2 {
  stroke: #00dffb !important;
}
/deep/ .dv-bb7-line-width-5 {
  display: none !important;
}
.ProcessEfficiency {
  width: 100%;
  background: #050a4e;
  box-shadow: inset -8px -8px 40px 0px rgba(0, 227, 255, 0.3),
    inset 8px 8px 40px 0px rgba(0, 227, 255, 0.3);
  margin-bottom: 20px;
  position: relative;
  .processWrap {
    padding: 0 30px 20px;
  }
}
</style>