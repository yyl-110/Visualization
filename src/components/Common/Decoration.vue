<template>
  <div class="decoration">
    <div class="it"></div>
    <div class="line"></div>
    <div class="it"></div>
  </div>
</template>

<script>
export default {
  name: 'Decoration',

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.decoration {
  width: 100%;
  display: flex;
  align-items: center;
  .line {
    height: 1px;
    background: #153389;
    border-radius: 1px;
    flex: 1;
  }
  .it {
    width: 24px;
    height: 3px;
    background: #153389;
    border-radius: 1px;
    flex-shrink: 0;
  }
}
</style>