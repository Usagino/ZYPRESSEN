<template lang="pug">
  .container.top-container(ref="topContainer")
    backMovie(name="top")
    .top
      .top__title
        .top__title__wrap
          h2.top__title__text Different From
        .top__title__wrap
          h2.top__title__text Others!!
      scrollButton.top--works-click(text="Works")
    .screen
</template>

<script>
import Scrollbar, { ScrollbarPlugin } from 'smooth-scrollbar'
import gsap from 'gsap' // eslint-disable-line
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.min.js'
import { Draggable } from 'gsap/dist/Draggable.min.js'
import transitionAnime from '@/assets/js/transition.js'

export default {
  transition: transitionAnime(),
  data() {
    return {
      bodyScrollBar: null,
    }
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger, Draggable)

    this.$('.top-container').onmousewheel = (event) => {
      gsap.to('.screen', {
        duration: 0.1,
        y: event.wheelDelta,
      })
      this.$router.push('/works')
    }
    this.$('.top--works-click').addEventListener('click', () => {
      this.$router.push('/works')
    })
  },
  created() {},
  methods: {},
}
</script>

<style lang="sass" scoped>
.top
  +full-screen
  position: relative
  .top__title
    position: absolute
    bottom: 80px
    left: 0
    +default-width
    +sp-view
      bottom: 32px
      left: 0px
  .top__wrap
    overflow: hidden
  .top__title__text
    font-size: 6vw
    letter-spacing: 4px
    font-weight: 300
    +sp-view
      font-size: 40px
      letter-spacing: 1.4px
  .top__title__scroll-buttton
    bottom: 0
  & ::v-deep .scroll-button
    // opacity: 0
    cursor: pointer

.screen
  +full-screen
  background: white
  position: fixed
  top: 100%
  z-index: 1
  content: ""
  display: block
</style>
