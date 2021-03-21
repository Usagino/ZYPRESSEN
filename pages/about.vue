<template lang="pug">
  .container(ref="aboutContainer")
    .back-movie.offset-pos
      video.back-movie__video.video-in(
        src="/movie/in-about.mp4"
        preload="metadata"
        muted
        playsinline
      )
      video.back-movie__video.video-loop(
        src="/movie/loop-about.mp4"
        preload="metadata"
        muted
        playsinline
        loop
      )
    .first
      ScrollButton
      .first__title-box
        p.first__title-box__text 02
        h2.first__title-box__title About
    .question
      .question__first
        .question__first__title-box
          p.question__first__degree 01.About
          h2.question__first__title Who We Are?
        .question__first__sentence-box
          p.question__first__sentence ZYPRESSEN is a creative team that creates digital product designs. We don't believe in stereotypes, and each member of our team is always working with a cutting-edge philosophy. In order to create something new and different, we observe and absorb what our predecessors have built and find new values that have never been seen before.<br>We call this "Different from Others".
      .question__picture-first
        img.question__picture-first__image(src="/dummy/about_1.jpg")

      .question__first.question__first--right
        .question__first__title-box
          p.question__first__degree 02. Philosophy
          h2.question__first__title Diffrent From <br>Others!!
        .question__first__sentence-box
          p.question__first__sentence ZYPRESSEN is a creative team that creates digital product designs. We don't believe in stereotypes, and each member of our team is always working with a cutting-edge philosophy. In order to create something new and different, we observe and absorb what our predecessors have built and find new values that have never been seen before.<br>We call this "Different from Others".

      .question__picture-first
        img.question__picture-first__image(src="/dummy/about_2.jpg")
    n-link(to="/contact").marquee-link
      .marquee-link__wrap
        span(v-for="item of 8").marquee-link__wrap__text Contact
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
    // this.$('html, body').classList.remove('index')
    gsap.registerPlugin(ScrollTrigger)
    this.scrollCustom()
    this.setVideo()
  },
  created() {},
  methods: {
    scrollCustom() {
      Scrollbar.destroyAll()
      const el = this.$refs.aboutContainer
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
// .container



.question
  +default-width(160px,1600px)
  +gap-bottom(280px)
  // padding-top: 240px
  +sp-view
    +gap-bottom(120px)
  .question__first
    width: fit-content
    margin-right: auto
  .question__first__degree
    margin-bottom: 24px
    +sp-view
      font-size: 12px
      letter-spacing: 0.6px
  .question__first__title
    font-size: 144px
    letter-spacing: 4px
    font-weight: 300
    line-height: 100%
    width: fit-content
    +sp-view
      font-size: 40px
      letter-spacing: 1.4px

  .question__first__sentence-box
    margin-top: 140px
    width: 600px
    +sp-view
      width: 100%
      margin-top: 40px
  .question__first__sentence
    font-size: 15px
    line-height: 180%
    letter-spacing: 1px
    +sp-view
      font-size: 12px
      list-style: 0.6px

  .question__picture-first
    width: 100%
    padding-bottom: 61.7%
    position: relative
    overflow: hidden

  .question__picture-first__image
    position: absolute
    top: 0
    left: 0
    +full-size
    transform: scale(1.1)

.question__first--right
  margin-left: auto
  margin-right: 0 !important
</style>
