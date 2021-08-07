<template lang="pug">
  .container.scroll-paper
    backMovie(name="works")
    .container__back-blur.offset-pos
    .first
      ScrollButton
      .first__title-box
        p.first__title-box__text
          span.first__title-box__text-item 01
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
            time.posts__title-box__text {{item.media}}
    baseFooter
</template>

<script>
import Scrollbar, { ScrollbarPlugin } from 'smooth-scrollbar'
import gsap from 'gsap' // eslint-disable-line
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.min.js'
import transitionAnime from '@/assets/js/transition.js'
import CustomEase from '@/assets/js/CustomEase.min.js'

export default {
  transition: transitionAnime(),
  data() {
    return {
      bodyScrollBar: null,
    }
  },
  async mounted() {
    gsap.registerPlugin(ScrollTrigger)
    gsap.registerPlugin(CustomEase)
    this.enterAnime()
    this.scrollBlur()
    gsap.to('.first__title-box__title, .first__title-box__text-item', {
      duration: 1,
      delay: 2,
      y: '0%',
      ease: CustomEase.create('custom', 'M0,0 C0,1.304 0.502,1 1,1 '),
    })
    await this.scrollCustom()
  },
  created() {},
  methods: {
    enterAnime() {
      gsap.set('.posts__thumbnail', {
        y: 50,
        opacity: 0,
      })
      gsap.utils.toArray('.posts__thumbnail').forEach((el, i) => {
        gsap.to(el, {
          duration: 0.5,
          y: 0,
          opacity: 1,
          clearProps: 'clipPath',
          scrollTrigger: {
            trigger: el,
            start: 'top center',
          },
        })
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
  padding: 12vw 0
  z-index: 2
  position: relative
  width: fit-content
  margin: auto
  +sp-view
    width: auto
    padding: 80px 20px 160px
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
    display: flex
    flex-direction: column
    align-items: center
  .posts__item
    position: relative
    +pc-view
      &:hover
        & .posts__thumbnail
          transform: scale(0.72)
          box-shadow: 0px 20px 30px 0px rgb(167 167 167 / 20%)
  .posts__thumbnail-box
    width: 25vw
    height: 37.5vw
    background: white
    +flex-middle
    overflow: hidden
    position: relative
    +sp-view
      width: 280px
      height: 420px
  .posts__thumbnail
    width: 100%
    height: 100%
    transform: scale(0.7)
    box-shadow: 0px 20px 30px -20px rgba(167, 167, 167, 0.6)
    transition: all 0.5s ease 0s
    +sp-view
      width: 200px
      height: 300px
      transform: scale(1)
  .posts__title-box
    position: absolute
    bottom: -40px
    left: 0
    right: 0
    margin: auto
    display: flex
    align-items: center
    +gap-right(16px)
    padding-top: 16px
    +sp-view
      bottom: -28px
      padding-top: 0px
      width: 100%
      +flex-middle
  .posts__title-box__bar
    height: 1px
    width: 20px
    background: #ffffff
    +sp-view
      width: 20px
  .posts__title-box__text
    font-size: 15px
    font-weight: 300
    color: #ffffff
    +sp-view
      font-size: 12px
</style>
