<template lang="pug">
  .container(ref="aboutContainer")
    .transition-screen
    backMovie(name="about")
    .first
      ScrollButton
      .first__title-box
        p.first__title-box__text
          span.first__title-box__text-item 02
        h2.first__title-box__title About
    .question
      .question__first
        .question__first__title-box
          p.question__first__degree
            span.question__move-text 01.About
          h2.question__first__title
            span.question__move-text Who We Are?
        .question__first__sentence-box
          p.question__first__sentence ZYPRESSEN is a creative team that creates digital product designs. We don't believe in stereotypes, and each member of our team is always working with a cutting-edge philosophy. In order to create something new and different, we observe and absorb what our predecessors have built and find new values that have never been seen before.<br>We call this "Different from Others".

      .question__picture-first
        img.question__picture-first__image(src="/about_1.png")
        // aboutHoverText

      .question__first.question__first--right
        .question__first__title-box
          p.question__first__degree
            span.question__move-text 02. Philosophy
          h2.question__first__title
            span.question__move-text Different From <br>Others!!
        .question__first__sentence-box
          p.question__first__sentence ZYPRESSEN is a creative team that creates digital product designs. We don't believe in stereotypes, and each member of our team is always working with a cutting-edge philosophy. In order to create something new and different, we observe and absorb what our predecessors have built and find new values that have never been seen before.<br>We call this "Different from Others".

      .question__picture-first
        img.question__picture-first__image(src="/about_2.png")
        // aboutHoverText
      a.mail-address(
        @mouseover="mailAnime(true)"
        @mouseleave="mailAnime(false)"
        href="mailto:info@zypressen.org"
        target="_blank")
        p.mail-address__text.mail-address__text--parent
          span.mail-address__minion(v-for="t in 'info@zypressen.org'.split('')") {{t}}
        p.mail-address__text.mail-address__text--child
          span.mail-address__minion(v-for="t in spaceReplace('Please contact us')" v-html="t")

    baseFooter(:scrollBar="bodyScrollBar")
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
      mailAnimeToggle: true,
    }
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger)
    gsap.registerPlugin(CustomEase)

    this.scrollCustom()
    gsap.to('.first__title-box__title, .first__title-box__text-item', {
      duration: 1,
      delay: 2,
      y: '0%',
      ease: CustomEase.create('custom', 'M0,0 C0,1.304 0.502,1 1,1 '),
    })

    gsap.utils.toArray('.question__first').forEach((el, i) => {
      console.log(el)
      const tl = gsap.timeline()
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
  },
  created() {},
  methods: {
    scrollCustom() {
      Scrollbar.destroyAll()
      this.bodyScrollBar = null
      const el = this.$refs.aboutContainer
      this.bodyScrollBar = Scrollbar.init(el, {
        damping: 0.1,
        delegateTo: document,
        thumbMinSize: 20,
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
    transform: translateY(100%)

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
    transform: translateY(100px)
    opacity: 0
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
