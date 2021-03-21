<template lang="pug">
  div(:style="style")
    baseLoading
    baseHeader
    baseMenu
    nuxt
    .transition-screen
</template>

<script>
import deviceMixin from '@/assets/mixin/device.js'
import gsap from 'gsap' // eslint-disable-line

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

<style lang="sass"></style>
