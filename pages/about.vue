<template lang="pug">
  .container.scroll-paper
    .transition-screen
    backMovie(name="about")
    .first
      ScrollButton
      .first__title-box
        p.first__title-box__text
          span.first__title-box__text-item 02
        h2.first__title-box__title About
    .question
      .question__first(v-show="$store.state.lang==='en'")
        .question__first__title-box
          p.question__first__degree
            span.question__move-text 01.About
          h2.question__first__title
            span.question__move-text Who We Are?
        .question__first__sentence-box
          p.question__first__sentence "ZYPRESSEN is a small, elite creative team based in Tokyo that produces digital product design for the web, advertising, and video. We are not bound by stereotypes, and each member of the team is always working with a cutting-edge philosophy. Please feel free to contact us at any time.<br>From your dear neighbor, ZYPRESSEN
      .question__first(v-show="$store.state.lang==='jp'")
        .question__first__title-box
          p.question__first__degree
            span.question__move-text 01.About
          h2.question__first__title
            span.question__move-text Who We Are?
        .question__first__sentence-box
          p.question__first__sentence 「ZYPRESSEN」は、東京を拠点として活動し、web・広告デザイン・映像などのデジタルプロダクトデザインを制作する少数精鋭のクリエイティブチームです。固定概念に囚われずチームの一人一人が常に最先端のフィロソフィーを持って活動しています。いつでもお気軽にお問い合わせください。<br>あなたの親愛なる隣人ZYPRESSENより。
      .question__picture-first
        img.question__picture-first__image(src="/about_1.png")
      .question__first.question__first--right(v-show="$store.state.lang==='en'")
        .question__first__title-box
          p.question__first__degree
            span.question__move-text 02. Philosophy
          h2.question__first__title
            span.question__move-text Different From <br>Others!!
        .question__first__sentence-box
          p.question__first__sentence In order to create something new and different, our designs are always observing and absorbing what our predecessors have built and finding new values that have never been seen before.<br>We call this "Different from Others".
      .question__first.question__first--right(v-show="$store.state.lang==='jp'")
        .question__first__title-box
          p.question__first__degree
            span.question__move-text 02. Philosophy
          h2.question__first__title
            span.question__move-text Different From <br>Others!!
        .question__first__sentence-box
          p.question__first__sentence 私たちのデザインは常に他とは違う新しいものを制作するために、今まで先人たちが築き上げてきたものを観察し吸収して今までにない新たな価値を見出しています。<br>そして私たちはこれを「Different from Others」と呼んでいます。

      .question__picture-first
        img.question__picture-first__image(src="/about_2.png")
      a.mail-address(
        @mouseover="mailAnime(true)"
        @mouseleave="mailAnime(false)"
        href="mailto:info@zypressen.org"
        target="_blank")
        p.mail-address__text.mail-address__text--parent
          span.mail-address__minion(v-for="t in 'info@zypressen.org'.split('')") {{t}}
        p.mail-address__text.mail-address__text--child
          span.mail-address__minion(v-for="t in spaceReplace('Please contact us')" v-html="t")
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
      mailAnimeToggle: true,
    }
  },
  async mounted() {
    gsap.registerPlugin(ScrollTrigger)
    gsap.registerPlugin(CustomEase)
    this.resetStyle()
    gsap.to('.first__title-box__title, .first__title-box__text-item', {
      duration: 1,
      delay: 2,
      y: '0%',
      ease: CustomEase.create('custom', 'M0,0 C0,1.304 0.502,1 1,1 '),
    })
    gsap.utils.toArray('.question__first').forEach((el, i) => {
      const tl = gsap.timeline()
      // tl.call(() => {
      //   this.resetStyle()
      // })
      tl.to(
        this.$$('.question__move-text', el),
        {
          y: '0%',
          duration: 1,
          ease: CustomEase.create('custom', 'M0,0 C0,1.304 0.502,1 1,1 '),
        },
        'show'
      )
      tl.to(
        this.$('.question__first__sentence', el),
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'power4.out',
        },
        'show'
      )
      ScrollTrigger.create({
        animation: tl,
        trigger: el,
        start: 'top center',
      })
    })
    await this.scrollCustom()
  },
  created() {
    if (process.client) {
      this.resetStyle()
    }
  },
  methods: {
    mailAnime(over) {
      if (this.mailAnimeToggle) {
        this.mailAnimeToggle = false
        window.setTimeout(() => {
          this.mailAnimeToggle = true
        }, 1000)
        if (over) {
          gsap.to('.mail-address__text--parent .mail-address__minion', {
            x: '-20%',
            opacity: 0,
            stagger: {
              amount: 1,
            },
          })
          gsap.to('.mail-address__text--child .mail-address__minion', {
            x: '0%',
            delay: 0.2,
            opacity: 1,
            stagger: {
              amount: 1,
            },
          })
        } else {
          gsap.to('.mail-address__text--child .mail-address__minion', {
            x: '-20%',
            opacity: 0,
            stagger: {
              amount: 1,
            },
          })
          gsap.to('.mail-address__text--parent .mail-address__minion', {
            x: '0%',
            delay: 0.2,
            opacity: 1,
            stagger: {
              amount: 1,
            },
          })
        }
      }
    },
    resetStyle() {
      gsap.set('.question__first__sentence', {
        y: 100,
        opacity: 0,
      })
      gsap.set('.question__move-text', {
        y: '100%',
      })
    },
  },
}
</script>

<style lang="sass" scoped>
// .container

.question
  +default-width(140px)
  +gap-bottom(120px)
  // padding-top: 240px
  margin: 12vw auto
  +sp-view
    +gap-bottom(80px)
    padding: 80px 0 120px
    +default-width(140px)
  .question__first
    width: fit-content
    margin-right: auto
    +sp-view
      margin: 0 0 56px
  .question__first__degree
    margin-bottom: 24px
    overflow: hidden
    +sp-view
      font-size: 12px
      letter-spacing: 0.6px
  .question__first__title
    font-size: 6vw
    letter-spacing: 4px
    font-weight: 300
    line-height: 100%
    width: fit-content
    overflow: hidden
    +sp-view
      font-size: 40px
      letter-spacing: 1.4px
  .question__move-text
    // transform: translateY(100%)

  .question__first__sentence-box
    margin-top: 120px
    width: 600px
    +sp-view
      width: 100%
      margin-top: 40px
  .question__first__sentence
    font-size: 15px
    line-height: 180%
    letter-spacing: 1px
    // transform: translateY(100px)
    // opacity: 0
    +sp-view
      font-size: 12px
      list-style: 0.6px

  .question__picture-first
    width: 100%
    position: relative
    overflow: hidden
    height: auto
    // border: 1px solid white
    +sp-view
      height: 36vh
  .question__picture-first__image
    width: 100%
    height: 100%
    object-fit: cover


.question__first--right
  margin-left: auto
  margin-right: 0 !important
  margin-top: 12vw

.mail-address
  margin: 12vw auto  !important
  display: block
  width: fit-content
  position: relative

  .mail-address__text
    cursor: pointer
    display: inline-block
    &--child
      width: fit-content
      +absolute-middle
      .mail-address__minion
        transform: translateX(20%)
        opacity: 0
  .mail-address__minion
    font-size: 6vw
    font-weight: 300
    display: inline-block
    +sp-view
      font-size: 8vw
</style>
