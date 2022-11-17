<template>
  <div class="DevicesBox">
    <dv-border-box-7 ref="borderBox">
      <div class="chartWrap">
        <div class="stader">
          <div class="topInfo clearfix">
            <span>标准件</span>
            <span style="float: right">1058</span>
          </div>
          <div class="percentContainer">
            <Percent
              :maxData="1000"
              :value="[400]"
              :color="'#00DFFB'"
              :bgColor="'rgba(0, 223, 251, 0.3)'"
            />
          </div>
        </div>
        <div class="devices">
          <div class="topInfo clearfix">
            <span>元器件</span>
            <span style="float: right">1000</span>
          </div>
          <div class="percentContainer">
            <Percent
              :maxData="2000"
              :value="[400]"
              :color="'#009AFF'"
              :bgColor="'rgba(0, 154, 255, 0.3)'"
            />
          </div>
        </div>
        <div class="scale">
          <div class="line">
            <el-row>
              <el-col span="2">
                <div class="point">
                  <span>0</span>
                </div>
              </el-col>
              <el-col span="2" v-for="i in 11" :key="i">
                <div class="point">
                  <span>{{ i * 100 }}</span>
                </div>
              </el-col>
            </el-row>
          </div>
          <span class="label">数量</span>
        </div>
      </div>
    </dv-border-box-7>
  </div>
</template>

<script>
import Percent from '@/components/Common/Percent.vue';
import resizeChartMixin from '../../../utils/resizeChartMixin';
export default {
  components: { Percent },
  name: 'DevicesBox',

  data() {
    return {};
  },
  mixins: [resizeChartMixin],
  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.DevicesBox {
  height: 384px;
  background: #050a4e;
  box-shadow: inset -8px -8px 40px 0px rgba(0, 227, 255, 0.3),
    inset 8px 8px 40px 0px rgba(0, 227, 255, 0.3);
  border-radius: 4px;
  .chartWrap {
    padding: 20px;
    width: 100%;
    height: 100%;
    padding-top: 43px;
    padding-right: 60px;

    .scale {
      width: 100%;
      margin-top: 48px;
      position: relative;
      .label {
        position: absolute;
        right: -45px;
        font-size: 12px;
        font-weight: 500;
        color: #ffffff;
        line-height: 22px;
      }
      .line {
        width: 100%;
        height: 2px;
        background-color: rgba(255, 255, 255, 0.5);
        position: relative;
        .point {
          width: 1px;
          height: 4px;
          opacity: 0.92;
          border: 1px solid #ffffff;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          span {
            margin-top: 18px;
            font-size: 12px;
            font-weight: 500;
            color: #ffffff;
            line-height: 22px;
          }
        }
      }
    }
    .devices {
      margin-top: 50px;
    }
    .topInfo {
      width: 100%;
      font-size: 20px;
      font-weight: bold;
      color: #ffffff;
      line-height: 22px;
    }
    .percentContainer {
      width: 100%;
      height: 40px;
      margin-top: 20px;
    }
  }
}
</style>