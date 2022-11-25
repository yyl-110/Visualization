<template>
  <div class="ProcessEfficiency">
    <dv-border />
    <div class="processWrap">
      <el-row justify="space-around">
        <el-col
          :span="isCollapse ? 6 : 8"
          v-for="(item, index) in cardData"
          :key="index"
          style="margin-top: 30px"
        >
          <process-item style="margin: 0 auto" :cardData="item" />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import ProcessItem from './components/ProcessItem.vue';
import { mapGetters } from 'vuex';
import DvBorder from '../../components/Common/DvBorder.vue';
import { getProcessEfficiency } from '../../api';
export default {
  components: { ProcessItem, DvBorder },
  name: 'ProcessEfficiency',

  data() {
    return {
      cardData: [],
    };
  },

  computed: {
    ...mapGetters(['sidebar', 'queryYear', 'queryTime']),
    isCollapse() {
      return !this.sidebar.opened;
    },
  },
  created() {
    this.getProcessEfficiency();
  },
  mounted() {},
  watch: {
    isCollapse(val) {
      console.log(val);
      setTimeout(() => {
        if (this.$refs.borderBox) {
          this.$refs.borderBox.initWH();
        }
      }, 300);
    },
    queryTime() {
      this.getProcessEfficiency();
    },
    queryYear() {
      this.getProcessEfficiency();
    },
  },

  methods: {
    // getData() {
    //   this.cardData = dataJson['区域四十七'];
    // },
    getProcessEfficiency() {
      getProcessEfficiency({
        queryYear: this.queryYear,
        queryTime: this.queryTime,
      })
        .then((res) => {
          if (res.success) {
            this.cardData = res['区域四十七'];
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
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