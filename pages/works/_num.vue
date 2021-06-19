<template lang="pug">
  .container(ref="workContainer" @mousemove="mousemoveNext")
    .container__back-blur.offset-pos
    .next-thumbnail
      img.next-thumbnail__image(:src="work.nextthumbnailHorizontal")
    .work
      .work__info
        h2.work__title
          .work__title__wrap
            span.work__title__move-text {{work.title}}
        .work__info__created
          p.work__text Created
          p.work__text.work__info__gray {{work.created}}
        a.work__text.work__text--link(
          v-if="work.projectLink"
          :href="work.projectLink" target="_blank") View Project
      .work__thumbnail-wrap
        img.work__thumbnail(:src="work.thumbnailHorizontal")
      .work__description
        p.work__description__text {{work.bodyEn}}
        .work__detail
          .work__detail__box
            p.work__detail__title Media
            p.work__detail__text {{work.media}}
          .work__detail__box
            p.work__detail__title Client
            p.work__detail__text {{work.client}}
      .work__gallery
        img.work__gallery__image(
          v-for="(item, index) in work.gallery"
          :key="index"
          :src="item"
          )
    .next-work(
      @mouseover="mouseoverNext"
      @mouseleave="mouseleaveNext"
      )
      n-link.next-work__wrap(:to="`/works/${work.nextLinkId}`")
        p.next-work__text(v-for="item of 8") Next
    baseFooter(:scrollBar="bodyScrollBar")
</template>

<script>
import Scrollbar, { ScrollbarPlugin } from 'smooth-scrollbar'
import gsap from 'gsap' // eslint-disable-line
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.min.js'
import transitionAnime from '@/assets/js/transition.js'

export default {
  transition: transitionAnime(),
  data() {
    return {
      bodyScrollBar: null,
      work: {},
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
    console.log(this.work)
  },
  created() {
    this.loadWorksData()
  },
  methods: {
    loadWorksData() {
      this.work = this.$store.state.works.find(
        (item) => item.linkId === this.$route.params.num
      )
    },
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
      this.bodyScrollBar = null
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
  +sp-view
    opacity: 0
    pointer-events: none
.next-thumbnail__image
  width: 300px
  height: auto
  clip-path: inset(0 100% 0 0%)

.work
  +default-width(80px,2000px)
  padding: 200px 140px 12vw
  position: relative
  z-index: 2
  +sp-view
    +default-width(20px)
    padding: 100px 0 80px
  .work__info
    width: 100%
    +sp-view
      width: 50vw
    .work__text
      padding-top: 32px
  .work__info__created
    margin-top: 24px
    +gap-bottom(8px)
    .work__text
      padding-top: 0px
    .work__info__gray
      opacity: 0.5
  .work__title
    *
      display: block
      font-size: 88px
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
    margin-top: 74px
    .work__thumbnail
      width: 100%
      height: auto
    +sp-view
      margin-top: 40px
  .work__thumbnail
    width: 500px
    height: 750px
    +sp-view
      width: 200px
      height: 300px
  .work__description
    width: 500px
    margin: 112px 0
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
  .work__detail
    display: flex
    +gap-right(56px)
    margin-top: 32px
  // .work__detail__title
  .work__detail__title
    padding-top: 8px
    +sp-view
      font-size: 12px
  .work__detail__text
    opacity: 0.5
    padding-top: 8px
    +sp-view
      font-size: 12px
  .work__gallery
    width: 100%
    +gap-bottom(104px)
    +sp-view
      +gap-bottom(56px)
  .work__gallery__image
    width: 100%
    height: auto
    +sp-view
      width: 100%
      height: auto

.next-work
  position: relative
  z-index: 2
  margin-bottom: 12vw
  height: 144px
  width: 100vw
  overflow: hidden
  display: flex
  align-items: center
  +sp-view
    margin-bottom: 140px
    height: 44px
.next-work__wrap
  display: flex
  width: fit-content
  animation: marquee 10s linear 0s normal infinite
.next-work__text
  font-size: 6vw
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
