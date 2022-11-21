<template>
  <div class="dataBox">
    <dv-border />
    <div class="dataContainer">
      <el-scrollbar wrap-class="scrollbar-wrapper">
        <div class="dataWrap">
          <el-row>
            <el-col
              :lg="{ span: '4-8' }"
              :md="{ span: '4-8' }"
              :sm="{ span: '4-8' }"
              :xs="{ span: '4-8' }"
              v-for="(item, index) in cardData"
              :key="index"
            >
              <data-item class="item" :cardData="item" />
            </el-col>
          </el-row>
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
import DataItem from '../../../components/Common/DataItem.vue';
import DvBorder from '../../../components/Common/DvBorder.vue';
export default {
  components: { DataItem, DvBorder },
  name: 'DataBox',
  props: {
    cardData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      dataList: [{ id: 1, title: '普通文档单流程' }],
    };
  },

  mounted() {},

  created() {
    console.log(this.cardData, 9393939);
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
.dataBox {
  width: 100%;
  height: 490px;
  background: #050a4e;
  box-shadow: inset -8px -8px 40px 0px rgba(0, 227, 255, 0.3),
    inset 8px 8px 40px 0px rgba(0, 227, 255, 0.3);
  position: relative;
  .dataContainer {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 30px;
    overflow-y: hidden;
    /deep/ .el-scrollbar {
      height: 100%;
    }
    .dataWrap {
      .item {
        margin-top: 30px;
      }
      width: 100%;
    }
  }

  @media only screen and (min-width: 768px) {
    .el-col-sm-4-8 {
      width: 20%;
    }
    .el-col-sm-offset-4-8 {
      margin-left: 20%;
    }
    .el-col-sm-pull-4-8 {
      position: relative;
      right: 20%;
    }
    .el-col-sm-push-4-8 {
      position: relative;
      left: 20%;
    }
  }

  @media only screen and (min-width: 992px) {
    .el-col-md-4-8 {
      width: 20%;
    }
    .el-col-md-offset-4-8 {
      margin-left: 20%;
    }
    .el-col-md-pull-4-8 {
      position: relative;
      right: 20%;
    }
    .el-col-md-push-4-8 {
      position: relative;
      left: 20%;
    }
  }

  @media only screen and (min-width: 1200px) {
    .el-col-lg-4-8 {
      width: 20%;
    }
    .el-col-lg-offset-4-8 {
      margin-left: 20%;
    }
    .el-col-lg-pull-4-8 {
      position: relative;
      right: 20%;
    }
    .el-col-lg-push-4-8 {
      position: relative;
      left: 20%;
    }
  }

  @media only screen and (min-width: 1920px) {
    .el-col-xl-4-8 {
      width: 20%;
    }
    .el-col-xl-offset-4-8 {
      margin-left: 20%;
    }
    .el-col-xl-pull-4-8 {
      position: relative;
      right: 20%;
    }
    .el-col-xl-push-4-8 {
      position: relative;
      left: 20%;
    }
  }
}
</style>