<template lang="pug">
  .container(ref="topContainer")
    backMovie(name="top")
    .top
      .top__title
        .top__title__wrap
          h2.top__title__text Diffrent From
        .top__title__wrap
          h2.top__title__text Others!!
</template>

<script>
import Scrollbar, { ScrollbarPlugin } from 'smooth-scrollbar'
import gsap from 'gsap' // eslint-disable-line
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.min.js'
import { Draggable } from 'gsap/dist/Draggable.min.js'

export default {
  transition: {
    mode: 'out-in',
    css: false,
    enter(el, done) {
      // done()
      const tl = gsap.timeline({
        onComplete: () => {
          done()
        },
      })
      tl.set('.transition-screen', { transformOrigin: 'top center' })
      tl.to('.transition-screen', {
        duration: 0.7,
        ease: 'expo.out',
        scaleY: 0,
      })
    },
    leave(el, done) {
      // done()
      const tl = gsap.timeline({
        onComplete: () => {
          done()
        },
      })
      tl.set('.transition-screen', { transformOrigin: 'bottom center' })
      tl.to('.transition-screen', {
        duration: 0.7,
        ease: 'expo.out',
        scaleY: 1,
      })
    },
  },
  data() {
    return {
      bodyScrollBar: null,
    }
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger, Draggable)
    console.log(this.$store.state.works)
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
</style>
