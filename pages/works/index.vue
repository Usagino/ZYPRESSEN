<template lang="pug">
  .container(ref="worksContainer")
    backMovie(name="about")
    .container__back-blur.offset-pos
    .first
      ScrollButton
      .first__title-box
        p.first__title-box__text 01
        h2.first__title-box__title Works
    .all-works
      .posts
        n-link.posts__item(
          v-for="(item,i) of $store.state.works"
          :to="`/works/${item.linkId}`"
          :key="i"
          )
          .posts__thumbnail-box
            img(:src="item.thumbnailVertical").posts__thumbnail
          .posts__title-box
            p.posts__title-box__text {{item.title}}
            span.posts__title-box__bar
            time.posts__title-box__text {{item.created}}
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
    this.enterAnime()
    this.scrollBlur()
  },
  created() {},
  methods: {
    enterAnime() {
      gsap.set('.posts__item', {
        clipPath: 'inset(0 0% 0 100%)',
      })
      gsap.utils.toArray('.posts__item').forEach((el, i) => {
        const index = i + 1
        const duration = { time: 0.5 }
        if (index % 3 === 0 && this.$ua.isFromSmartphone) {
          duration.time = 0.7
        } else if (index % 2 === 0 && this.$ua.isFromSmartphone) {
          duration.time = 0.5
        }
        console.log(duration.time)
        gsap.to(el, {
          duration: duration.time,
          clipPath: 'inset(0 0% 0 0%)',
          scrollTrigger: {
            trigger: el,
            start: 'top center',
          },
        })
      })
    },
    scrollCustom() {
      Scrollbar.destroyAll()
      const el = this.$refs.worksContainer
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
    scrollBlur() {
      gsap.set('.container__back-blur', { backdropFilter: 'blur(0px)' })
      gsap.to('.container__back-blur', {
        backdropFilter: 'blur(10px)',
        scrollTrigger: {
          trigger: '.all-works',
          scrub: true,
        },
      })
    },
  },
}
</script>

<style lang="sass" scoped>

.all-works
  padding: 200px 0
  z-index: 2
  position: relative
  width: fit-content
  margin: auto
  +sp-view
    padding: 106px 0 160px
.all-works__title
  font-size: 40px
  font-weight: 300
  letter-spacing: 1.4px
  padding-bottom: 96px
  +sp-view
    width: 100%
    text-align: center
    padding-bottom: 56px

.posts
  display: grid
  grid-template-columns: 25vw 25vw 25vw
  grid-gap: 80px 36px
  flex-wrap: wrap
  +sp-view
    grid-template-columns: 200px
    grid-gap: 40px
.posts__thumbnail
  width: 25vw
  height: 37.5vw
  +sp-view
    width: 200px
    height: 300px
.posts__title-box
  display: flex
  align-items: center
  +gap-right(16px)
  padding-top: 16px
.posts__title-box__bar
  height: 1px
  width: 32px
  background: var(--color-white)
  +sp-view
    width: 20px
.posts__title-box__text
  font-size: 15px
  font-weight: 300
  +sp-view
    font-size: 12px
</style>
