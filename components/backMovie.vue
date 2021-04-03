<template lang="pug">
.back-movie.offset-pos
  video.back-movie__video.video-in(
    :src="`/movie/in-${name}.mp4`"
    preload="metadata"
    muted
    playsinline)
  video.back-movie__video.video-loop(
    :src="`/movie/loop-${name}.mp4`"
    preload="metadata"
    muted
    playsinline
    loop)
</template>

<script>
// import Scrollbar, { ScrollbarPlugin } from 'smooth-scrollbar'
// import gsap from 'gsap' // eslint-disable-line
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.min.js'

export default {
  props: {
    name: {
      default: '',
      type: String,
    },
  },
  data() {
    return {}
  },
  mounted() {
    // gsap.registerPlugin(ScrollTrigger)
    this.setVideo()
  },
  created() {},
  methods: {},
}
</script>

<style lang="sass">
.back-movie
  pointer-events: none
  z-index: -1
  position: fixed
  top: 0px
  left: 0px
  +full-screen
  overflow: hidden
  filter: blur(0px)
  background-image: url("/movie/poster.png")
  background-size: cover
  background-position: center
  &__video
    position: absolute
    left: 50%
    top: 50%
    min-width: 100%
    min-height: 100%
    transform: translate(-50%,-50%)
    +sp-view
      transform: translate(-50%,-50%)
      height: var(--wh, 100vh)
      width: auto
      // transform: translate(-50%,-50%) scale(0.65)
  .video-in
    z-index: 3
  .video-loop
    z-index: 2
</style>
