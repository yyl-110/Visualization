<template>
  <div class="processData">
    <data-box :cardData="cardData" />

    <!-- 数据 -->
    <div class="preData clearfix">
      <div class="leftChart">
        <completion-rate :processType="processType" />
      </div>
      <div class="rank">
        <Rank
          title="流程完成率排行榜"
          :rankData="rankData"
          label="平均完成率"
          progressLabel="workflowFinishRate"
          widthType="small"
        />
      </div>
    </div>
  </div>
</template>

<script>
import DataBox from './components/DataBox.vue';
import Rank from '@/components/Common/Rank';
import CompletionRate from './components/CompletionRate.vue';
import { getProcessData } from '@/api';
import { mapGetters } from 'vuex';
export default {
  components: { DataBox, Rank, CompletionRate },
  name: 'VueDataVIndex',

  computed: {
    ...mapGetters(['queryYear', 'queryTime', 'queryType', 'processType']),
  },

  watch: {
    queryYear() {
      this.getProcessData();
    },
    queryTime() {
      this.getProcessData();
    },
  },
  data() {
    return {
      completionData: [],
      rankData: null,
      cardData: [],
    };
  },

  created() {
    this.getProcessData();
  },

  mounted() {
    console.log(123123);
  },

  methods: {
    getProcessData() {
      getProcessData({
        queryYear: this.queryYear,
        queryTime: this.queryTime,
      })
        .then((res) => {
          if (res.success) {
            this.rankData = res['区域二十二'];
            this.cardData = res['区域二十'];
            this.$store.dispatch('page/changeProcessType', {
              key: 'processType',
              value: this.cardData[0].workflowType,
            });
          }
        })
        .catch((e) => {
          throw new Error(e);
        });
    },
    // getProcessDataByCard() {
    //   getProcessDataByCard({
    //     queryYear: this.queryYear,
    //     queryTime: this.queryTime,
    //     workflowType: this.processType,
    //   })
    //     .then((res) => {
    //       if (res.success) {
    //         this.completionData = res['区域二十一'];
    //       }
    //     })
    //     .catch((e) => {
    //       console.log(e);
    //     });
    // },
  },
  destroyed() {
    this.$store.dispatch('page/changeProcessType', {
      key: 'processType',
      value: '',
    });
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
.processData {
  width: 100%;
  padding-bottom: 30px;
  .preData {
    width: 100%;
    height: 438px;
    margin-top: 20px;
    overflow-y: hidden;
    .leftChart {
      float: left;
      width: calc(100% - 720px);
      height: 100%;
    }
    .rank {
      height: 100%;
      width: 700px;
      margin-left: 20px;
      float: right;
    }
  }
}
</style>