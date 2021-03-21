<template lang="pug">
  div(:style="style")
    baseLoading
    baseHeader
    baseMenu
    nuxt
</template>

<script>
import deviceMixin from '@/assets/mixin/device.js'
export default {
  mixins: [deviceMixin],
  created() {
    if (process.browser) {
      this.$('html, body').classList.add('index')
    }
  },
  mounted() {},
}
</script>

<style lang="sass">
.bg-movie
  +full-screen
  position: fixed
  top: 0
  z-index: -1
  &__movie
    +full-size
    object-fit: cover
</style>
