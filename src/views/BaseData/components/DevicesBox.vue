<template>
  <div class="DevicesBox">
    <dv-border-box-7 ref="borderBox">
      <div class="chartWrap">
        <div class="stader">
          <div class="topInfo">
            <span>标准件</span>
            <span>1058</span>
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
          <div class="topInfo">
            <span>元器件</span>
            <span>1000</span>
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
  height: 340px;
  background: #050a4e;
  box-shadow: inset -8px -8px 40px 0px rgba(0, 227, 255, 0.3),
    inset 8px 8px 40px 0px rgba(0, 227, 255, 0.3);
  border-radius: 4px;
  .chartWrap {
    padding: 20px;
    width: 100%;
    height: 100%;
    padding-top: 43px;
    .devices {
      margin-top: 50px;
    }
    .topInfo {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
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