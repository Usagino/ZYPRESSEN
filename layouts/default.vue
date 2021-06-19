<template lang="pug">
  div(:style="style")
    baseLoading
    baseHeader
    baseMenu
    nuxt
    .transition-screen
    .movie-cash
      video(
        v-for="item in movieArray"
        :src="`/movie/${item}.mp4`"
        preload="metadata"
        muted
        playsinline)
</template>

<script>
import deviceMixin from '@/assets/mixin/device.js'
import gsap from 'gsap' // eslint-disable-line

export default {
  mixins: [deviceMixin],
  data() {
    return {
      movieArray: [
        'in-about',
        'in-top',
        'in-works',
        'loop-about',
        'loop-top',
        'loop-works',
      ],
    }
  },

  created() {
    if (process.browser) {
      this.$('html, body').classList.add('index')
    }
  },
  mounted() {},
  methods: {},
}
</script>

<style lang="sass">
.movie-cash
  position: fixed
  z-index: -1
  opacity: 0
</style>
