<template lang="pug">
  div(:style="style")
    nuxt
</template>

<script>
import deviceMixin from '@/assets/mixin/device.js'
export default {
  mixins: [deviceMixin],
}
</script>

<style lang="sass"></style>
