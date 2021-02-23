<template lang="pug">
  .container(ref="workContainer")
    .container__back-blur.offset-pos
    .work
      .work__info
        h2.work__title Works Title
    baseFooter
</template>

<script>
import Scrollbar, { ScrollbarPlugin } from 'smooth-scrollbar'
import gsap from 'gsap' // eslint-disable-line
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.min.js'

export default {
  data() {
    return {}
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger)
    this.scrollCustom()
  },
  created() {},
  methods: {
    scrollCustom() {
      Scrollbar.destroyAll()
      const el = this.$refs.workContainer
      this.bodyScrollBar = Scrollbar.init(el, {
        damping: this.$ua.isFromSmartphone() ? 0.1 : 0.9,
        delegateTo: document,
      })
      this.bodyScrollBar.addListener(({ offset }) => {
        if (el.querySelector('.offset-pos')) {
          gsap.set('.offset-pos', {
            x: offset.x,
            y: offset.y,
          })
        }
      })
      this.bodyScrollBar.setPosition(0, 0)
      ScrollTrigger.scrollerProxy(el, {
        scrollTop(value) {
          if (arguments.length) {
            this.bodyScrollBar.scrollTop = value
          }
          return this.bodyScrollBar.scrollTop
        },
      })
      this.bodyScrollBar.addListener(() => {
        this.bodyScrollBar.setPosition(0)
        ScrollTrigger.refresh()
      })
    },
  },
}
</script>

<style lang="sass" scoped>
.work
  +default-width(80px,1200px)
  padding: 200px 0 240px
  position: relative
  z-index: 2
</style>
