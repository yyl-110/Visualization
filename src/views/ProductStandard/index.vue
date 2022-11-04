<template>
  <div class="ProductStandard">
    <standard-rate />
  </div>
</template>

<script>
import StandardRate from './components/StandardRate.vue';
export default {
  components: { StandardRate },
  name: 'ProductStandard',

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.ProductStandard {
  width: 100%;
  height: 100%;
}
</style>