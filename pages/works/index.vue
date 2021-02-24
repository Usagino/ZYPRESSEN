<template lang="pug">
  .container(ref="worksContainer")
    .container__back-blur.offset-pos
    .all-works
      h1.all-works__title All Works
      .posts
        n-link.posts__item(
          v-for="(item,i) of 5"
          :to="`/works/${i}`"
          :key="i"
          )
          .posts__thumbnail-box
            img(src="https://images.microcms-assets.io/protected/ap-northeast-1:5f222472-49ae-43ef-9009-85b89c98d6be/service/uchida/media/20201203_1.jpeg?auto=compress&h=500&w=500&fit=clip").posts__thumbnail
          .posts__title-box
            p.posts__title-box__text Zypressen
            span.posts__title-box__bar
            time.posts__title-box__text Mar 6.2020
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
    grid-template-columns: 300px 300px 300px
    grid-gap: 80px 36px
    flex-wrap: wrap
    +sp-view
      grid-template-columns: 200px
      grid-gap: 40px
    .posts__thumbnail
      width: 300px
      height: 450px
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
