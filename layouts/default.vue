<template lang="pug">
  div(:style="style")
    baseHeader
    nuxt
    baseFooter
    .bg-movie
      img.bg-movie__movie(src="/bg_img.png")
</template>

<script>
import deviceMixin from '@/assets/mixin/device.js'
export default {
  mixins: [deviceMixin],
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
