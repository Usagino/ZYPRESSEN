<template lang="pug">
  .base-loading
    .base-loading__film
</template>

<script>
import gsap from 'gsap' // eslint-disable-line
import lottie from 'lottie-web'
import animeDataPC from '@/assets/json/pc_loading.json'
import animeDataSP from '@/assets/json/sp_loading.json'

export default {
  data() {
    return {}
  },
  mounted() {
    const lottoleAnime = lottie.loadAnimation({
      container: this.$('.base-loading__film'),
      renderer: 'svg',
      loop: false,
      autoplay: false,
      animationData: window.innerWidth > 750 ? animeDataPC : animeDataSP,
    })
    window.setTimeout(function () {
      lottoleAnime.play()
    }, 1000)
    lottoleAnime.addEventListener('complete', () => {
      if (this.$('.back-movie__video')) {
        this.resetVideo()
        this.playVideo()
        this.$('.base-loading').classList.add('already_loaded')
      }
      const tl = gsap.timeline()
      tl.to('.base-loading', { duration: 0.5, opacity: 0 })
      tl.set('.base-loading', { display: 'none' })
    })
  },
  created() {},
  methods: {},
}
</script>

<style lang="sass" scoped>
.base-loading
  +full-screen
  background: #ffffff
  position: fixed
  z-index: 10
  .base-loading__film
    +full-size
</style>
