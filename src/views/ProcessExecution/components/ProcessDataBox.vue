<template>
  <div class="processDataBox">
    <dv-border />
    <div class="dataContainer">
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
            <div :class="['dataItem']" @click="handleClick(item)">
              <Decoration />
              <div class="content">
                <div class="title clearfix">
                  <img
                    src="../../../assets/imgs/icon_file@2x.png"
                    class="icon"
                    alt=""
                  />
                  <span>{{ item.workflowType || item.taskType }}</span>
                </div>
                <div class="data clearfix">
                  <div class="addWrap item">
                    <countTo
                      class="countTo"
                      :startVal="0"
                      :endVal="item.workflowAddCount"
                      :duration="6000"
                      separator=""
                    ></countTo>
                    <div class="name">当前新增流程数量</div>
                  </div>
                  <div class="preWrap item">
                    <countTo
                      :startVal="0"
                      class="countTo"
                      :endVal="item.workflowOverdueCount"
                      :duration="6000"
                      separator=""
                    ></countTo>
                    <div class="name">超期数量</div>
                  </div>
                </div>
                <div class="bottom clearfix">
                  <div class="tb box">
                    同比
                    <countTo
                      class="countTo"
                      :startVal="0"
                      :endVal="parseFloat(item.tongBiAddRate)"
                      :duration="6000"
                      separator=""
                      suffix="%"
                      :decimals="1"
                    ></countTo>
                    <img
                      src="../../../assets/imgs/icon_rise@2x.png"
                      class="up"
                      alt=""
                    />
                  </div>
                  <div class="hb box">
                    环比
                    <countTo
                      class="countTo"
                      :startVal="0"
                      :endVal="parseFloat(item.huanBiAddRate)"
                      :duration="6000"
                      separator=""
                      suffix="%"
                      :decimals="1"
                    ></countTo>
                    <img
                      src="../../../assets/imgs/icon_rise@2x.png"
                      class="up"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <Decoration class="bottomDec" />
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import countTo from 'vue-count-to';
import Decoration from '../../../components/Common/Decoration.vue';
import DvBorder from '../../../components/Common/DvBorder.vue';
export default {
  components: { DvBorder, Decoration, countTo },
  name: 'ProcessDataBox',
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

  mounted() {
    console.log(this.cardData, 9090);
  },

  methods: {
    handleClick(item) {
      this.$emit('handleClick', item.workflowType || item.taskType);
    },
  },
};
</script>

<style lang="scss" scoped>
.processDataBox {
  width: 100%;
  height: 490px;
  background: #050a4e;
  box-shadow: inset -8px -8px 40px 0px rgba(0, 227, 255, 0.3),
    inset 8px 8px 40px 0px rgba(0, 227, 255, 0.3);
  position: relative;
  .dataContainer {
    width: 100%;
    height: 100%;
    padding: 0 0;
    overflow-y: hidden;
    /deep/ .el-scrollbar {
      height: 100%;
    }
    .dataWrap {
      width: 100%;
      flex: 1;
      .el-col {
        display: flex;
        justify-content: center;
      }
    }
  }

  .dataItem {
    margin-top: 30px;
    width: 300px;
    height: 200px;
    background: rgba(255, 255, 255, 0.04);
    position: relative;
    .bottomDec {
      position: absolute;
      bottom: 0;
      left: 0;
    }
    .addWrap {
      .countTo {
        color: #23cefd;
        line-height: 40px;
        font-size: 28px;
        font-weight: 600;
      }
    }
    .preWrap {
      .countTo {
        color: #23cefd;
        font-size: 28px;
        font-weight: 600;
        line-height: 40px;
      }
    }
    .content {
      padding: 0 20px;
      .data {
        border-bottom: 1px solid rgba(255, 255, 255, 0.3);
        padding-top: 12px;
        padding-bottom: 12px;
        overflow: hidden;
        .addWrap {
          float: left;
        }
        .preWrap {
          float: right;
        }
        .item {
          text-align: center;
          .name {
            margin-top: 2px;
            font-size: 16px;
            font-weight: 400;
            color: #ffffff;
            white-space: nowrap;
          }
        }
      }
      .title {
        border-bottom: 1px solid rgba(255, 255, 255, 0.3);
        padding-bottom: 11px;
        padding-top: 20px;
        span {
          font-size: 16px;
          font-weight: 400;
          color: #ffffff;
          line-height: 24px;
          margin-left: 4px;
          float: left;
        }
        img {
          width: 24px;
          height: 24px;
          float: left;
        }
      }

      .bottom {
        padding-top: 14px;
        overflow: hidden;
        .countTo {
          font-size: 16px;
          color: #fff;
        }
        .tb {
          float: left;
        }
        .hb {
          float: right;
        }
        .box {
          font-size: 16px;
          font-weight: 400;
          color: #ffffff;
          line-height: 22px;
          .up {
            width: 12px;
            height: 12px;
            margin-left: 7px;
          }
        }
      }
    }
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
</style>