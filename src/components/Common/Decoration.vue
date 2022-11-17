<template>
  <div class="decoration">
    <div class="is"></div>
    <div class="it"></div>
    <div class="line"></div>
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
  line-height: 3px;
  .is {
    width: 24px;
    height: 3px;
    background: #153389;
    border-radius: 1px;
    float: left;
  }
  .line {
    height: 1px;
    background: #153389;
    border-radius: 1px;
    padding: 0 24px;
    margin-top: 1px;
  }
  .it {
    width: 24px;
    height: 3px;
    background: #153389;
    border-radius: 1px;
    float: right;
  }
}
</style>