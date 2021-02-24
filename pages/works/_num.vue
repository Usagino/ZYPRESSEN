<template lang="pug">
  .container(ref="workContainer" @mousemove="mousemoveNext")
    .container__back-blur.offset-pos
    .next-thumbnail
      img.next-thumbnail__image(src="https://images.microcms-assets.io/protected/ap-northeast-1:5f222472-49ae-43ef-9009-85b89c98d6be/service/uchida/media/20201203_1.jpeg?auto=compress&h=500&w=500&fit=clip")
    .work
      .work__info
        h2.work__title
          .work__title__wrap
            span.work__title__move-text Works
          .work__title__wrap
            span.work__title__move-text Title
        p.work__text.work__text--first Created : Mar.6.2020
        p.work__text Client : Zypressen
        a.work__text.work__text--link(href="http://yudouhu.org/" target="_blank") View Project
      .work__thumbnail-wrap
        img.work__thumbnail(src="https://images.microcms-assets.io/protected/ap-northeast-1:5f222472-49ae-43ef-9009-85b89c98d6be/service/uchida/media/20201203_1.jpeg?auto=compress&h=500&w=500&fit=clip")
      .work__description
        p.work__description__text Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
      .work__gallery
        img(src="https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2855&q=80").work__gallery__image
        img(src="https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2855&q=80").work__gallery__image
        img(src="https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2855&q=80").work__gallery__image
    .next-work(
      @mouseover="mouseoverNext"
      @mouseleave="mouseleaveNext"
      )
      n-link.next-work__wrap(to="/works/0")
        p.next-work__text(v-for="item of 8") Next
    baseFooter
</template>

<script>
import Scrollbar, { ScrollbarPlugin } from 'smooth-scrollbar'
import gsap from 'gsap' // eslint-disable-line
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.min.js'

export default {
  data() {
    return {
      mouseOffset: {
        offsetY: 0,
        clientY: 0,
      },
    }
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger)
    this.scrollCustom()
    this.enterAnime()
  },
  created() {},
  methods: {
    enterAnime() {
      gsap.set('.work__thumbnail', { y: '100%' })
      gsap.set('.work__title__move-text', { y: '100%' })
      const tl = gsap.timeline()
      tl.to('.work__thumbnail', {
        duration: 1,
        y: '0%',
      })
      tl.to('.work__title__move-text', {
        duration: 0.5,
        y: '-10%',
        ease: 'power2.inOut',
      })
      tl.to('.work__title__move-text', {
        duration: 0.7,
        y: '0%',
        ease: 'power2.inOut',
      })
    },
    mouseoverNext() {
      console.log('mouseoverNext')
      gsap.to('.next-thumbnail__image', {
        duration: 0.3,
        clipPath: 'inset(0 0% 0 0%)',
      })
    },
    mouseleaveNext() {
      console.log('mouseleave')
      const tl = gsap.timeline()
      tl.to('.next-thumbnail__image', {
        duration: 0.3,
        clipPath: 'inset(0 0% 0 100%)',
      })
      tl.set('.next-thumbnail__image', {
        clipPath: 'inset(0 100% 0 0%)',
      })
    },
    mousemoveNext(e) {
      if (e) {
        const currentOffsetY = this.$('.next-work').offsetTop
        this.mouseOffset.clientY = e.clientY
        gsap.to('.next-thumbnail', {
          x: e.clientX - 100,
          y: e.clientY - 150 + this.mouseOffset.offsetY,
        })
      } else {
        gsap.to('.next-thumbnail', {
          y: this.mouseOffset.clientY - 150 + this.mouseOffset.offsetY,
        })
      }
    },
    addMousemove() {
      // const getOffsetY
    },

    scrollCustom() {
      Scrollbar.destroyAll()
      const el = this.$refs.workContainer
      this.bodyScrollBar = Scrollbar.init(el, {
        damping: this.$ua.isFromSmartphone() ? 0.1 : 0.9,
        delegateTo: document,
      })
      this.bodyScrollBar.addListener(({ offset }) => {
        this.mouseOffset.offsetY = offset.y
        this.mousemoveNext()
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
.next-thumbnail
  position: fixed
  top: 0
  left: 0
  z-index: 2
.next-thumbnail__image
  width: 200px
  height: 300px
  clip-path: inset(0 100% 0 0%)

.work
  +default-width(80px,1200px)
  padding: 200px 0 240px
  position: relative
  z-index: 2
  +sp-view
    +default-width(20px)
    padding: 100px 0 80px
.work__info
  width: 500px
  +sp-view
    width: 50vw
.work__title
  *
    display: block
    font-size: 144px
    font-weight: 300
    line-height: 100%
    letter-spacing: 1.4px
.work__title__wrap
  overflow: hidden
+sp-view
  *
    font-size: 40px
.work__text
  font-weight: 300
  padding-top: 24px
  display: block
  +sp-view
    padding-top: 16px
    font-size: 12px
  &--first
    padding-top: 72px
    +sp-view
      padding-top: 32px
  &--link
    text-decoration: underline
.work__thumbnail-wrap
  width: 100%
  +flex-middle
  margin-top: 48px
  +sp-view
    margin-top: 48px
.work__thumbnail
  width: 500px
  height: 750px
  +sp-view
    width: 200px
    height: 300px
.work__description
  width: 500px
  margin: 160px 0
  +sp-view
    width: 100%
    margin: 56px 0
.work__description__text
  font-size: 15px
  line-height: 200%
  +sp-view
    font-size: 12px
    line-height: 180%
    font-weight: 300
.work__gallery
  width: 100%
  +gap-bottom(80px)
  +sp-view
    +gap-bottom(56px)
.work__gallery__image
  width: 1200px
  height: auto
  +sp-view
    width: 100%
    height: auto

.next-work
  position: relative
  z-index: 2
  margin-bottom: 240px
  height: 144px
  width: 100vw
  overflow: hidden
  display: flex
  align-items: center
  +sp-view
    margin-bottom: 160px
    height: 44px
.next-work__wrap
  display: flex
  width: fit-content
  animation: marquee 10s linear 0s normal infinite
.next-work__text
  font-size: 144px
  font-weight: 300
  padding-right: 160px
  line-height: 100%
  letter-spacing: 4px
  +sp-view
    font-size: 40px
    padding-right: 56px

@keyframes marquee
  0%
    transform: translateX(0%)
  100%
    transform: translateX(-50%)
</style>
