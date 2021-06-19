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

<style lang="sass"></style>
