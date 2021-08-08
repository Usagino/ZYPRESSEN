<template lang="pug">
  div(:style="style")
    baseLoading
    baseHeader
    baseMenu
    nuxt
    .transition-screen
    .transition-curtain
      .transition-curtain__item(v-for="i of 8")
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
      movieArrayLength: 0,
    }
  },

  created() {
    if (process.browser) {
      this.$('html, body').classList.add('index')
      this.callApi()
    }
  },
  mounted() {},
  methods: {
    async callApi() {
      await this.movieArray.forEach((media, i) => {
        this.$axios
          .get(`https://zypressen.org/movie/${media}.mp4`)
          .then((res) => {
            // console.log(res)
          })
          .catch((error) => {
            console.warn(error)
          })
      })
    },
  },
}
</script>

<style lang="sass">
.transition-screen
  +full-screen
  position: fixed
  z-index: 9
  background: #ffffff
  pointer-events: none
  top: 0
  left: 0
  transform: scaleY(0)
  will-change: transform
  transform-origin: bottom center

.transition-curtain
  +full-screen
  position: fixed
  z-index: 9
  top: 0
  left: 0
  pointer-events: none
  display: grid
  grid-template-columns: 1fr
  grid-template-rows: repeat(8, 1fr)
  .transition-curtain__item
    width: 100%
    height: 100%
    clip-path: inset(100% 0 0% 0)
    background: #ffffff
</style>
