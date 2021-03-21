<template lang="pug">
.container(ref="contactContainer")
  backMovie(name="about")
  .first
    ScrollButton
    .first__title-box
      p.first__title-box__text 03
      h2.first__title-box__title Contact
  .contact-detail
    .contact-detail__first
      p.contact-detail__first__degree Contact
      h2.contact-detail__first__title Get inTouch!!
      .contact-detail__first__sentence-box
        .contact-detail__first__text-box
          p.contact-detail__first__text Please feel free to contact me anytime. From your dear neighbor ZYPRESSEN.
        .contact-detail__first__info
          a.contact-detail__first__link(href="/" target="_blank") info@zypressen.org
          span.contact-detail__first__slash /
          a.contact-detail__first__link(href="/" target="_blank") Twitter
          span.contact-detail__first__slash /
          a.contact-detail__first__link(href="/" target="_blank") Instagram
  .gallery
    .gallery__wrap
      img.gallery__item(src="/dummy.jpg")
      img.gallery__item(src="/dummy.jpg")
      img.gallery__item(src="/dummy.jpg")
      img.gallery__item(src="/dummy.jpg")
  baseFooter(:scrollBar="bodyScrollBar")
</template>

<script>
import Scrollbar, { ScrollbarPlugin } from 'smooth-scrollbar'
import gsap from 'gsap' // eslint-disable-line
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.min.js'

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
      tl.to('.transition-screen', { duration: 0.7, ease: 'expo.out', scaleY: 1 })
    },
  },
  data() {
    return {
      bodyScrollBar: null,
    }
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger)
    this.scrollCustom()
    // this.$('html, body').classList.remove('index')
  },
  created() {},
  methods: {
    scrollCustom() {
      Scrollbar.destroyAll()
      const el = this.$refs.contactContainer
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

.contact-detail
  +default-width(40px,1200px)
  +gap-bottom(280px)
  padding: 240px 0
  // .contact-detail__first
  .contact-detail__first__degree
    margin-bottom: 24px
    +sp-view
      margin-bottom: 16px
      font-size: 12px
      letter-spacing: 0.6px
  .contact-detail__first__title
    font-size: 160px
    letter-spacing: 4px
    font-weight: 300
    line-height: 100%
    +sp-view
      font-size: 40px

  .contact-detail__first__sentence-box
    margin-top: 160px
    // width: 600px
    margin-right: auto
    +sp-view
      margin-top: 40px
  .contact-detail__first__sentence
    font-size: 15px
    line-height: 180%
    letter-spacing: 1px

  .contact-detail__first__text
    line-height: 180%
    letter-spacing: 1px
    +sp-view
      font-size: 12px
      letter-spacing: 0.6px
  .contact-detail__first__info
    +gap-right(16px)
    display: flex
    align-items: center
    +sp-view
      +gap-right(8px)
  .contact-detail__first__link
    line-height: 180%
    text-decoration: underline
    +sp-view
      font-size: 12px
      letter-spacing: 0.6px
  .contact-detail__first__slash
    line-height: 180%
    +sp-view
      font-size: 12px
      letter-spacing: 0.6px

.gallery
  width: 100vw
  height: 80vh
  overflow-x: hidden
  margin-bottom: 240px
  .gallery__wrap
    width: fit-content
    height: 100%
    display: flex
    align-items: center
    will-change: transform
    animation: marquee 10s linear 0s infinite
    @keyframes marquee
      from
        transform: translateX(0%)
      to
        transform: translateX(calc((800px + 80px) * -2))
  .gallery__item
    width: 800px
    height: auto
    margin-left: 80px
    &:nth-child(odd)
      align-self: flex-end
</style>
