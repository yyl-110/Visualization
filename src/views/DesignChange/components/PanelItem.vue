<template>
  <div class="panelItem">
    <Decoration />
    <div class="content">
      <div class="innerLeft">
        <div class="title">
          <img src="../../../assets/imgs/icon_file@2x.png" alt="" />
          <span>{{ title }}</span>
        </div>
      </div>
      <div class="innerRight"></div>
    </div>
    <Decoration />
  </div>
</template>

<script>
import Decoration from '../../../components/Common/Decoration.vue';
export default {
  components: { Decoration },
  name: 'VueDataVPanelItem',
  props: {
    title: {
      type: String,
      default: '标题',
    },
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.panelItem {
  width: 560px;
  display: flex;
  flex-direction: column;
  height: 240px;
  background: rgba(255, 255, 255, 0.05);
  .content {
    flex: 1;
    padding: 20px;
    .innerLeft {
      height: 100%;
      border-right: 1px solid rgba(255, 255, 255, 0.3);
    }
    .title {
      display: flex;
      align-items: center;
      img {
        width: 24px;
        height: 24px;
        flex-shrink: 0;
      }
      span {
        margin-left: 4px;
        font-size: 16px;
        font-weight: 400;
        color: #ffffff;
        line-height: 22px;
      }
    }
  }
}
</style>