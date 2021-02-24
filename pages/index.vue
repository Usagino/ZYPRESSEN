<template lang="pug">
  .container(ref="topContainer")
    .top
      .top__title
        .top__title__wrap
          h2.top__title__text Diffrent From
        .top__title__wrap
          h2.top__title__text Others!!
      .top__scroll
        .top__scroll__circle
          .top__scroll__text-wrap
            p.top__scroll__text Scroll
            p.top__scroll__text.top__scroll__bottom Scroll
    .works
      .works__wrap
        .works__title-box
          h2.works__title-box__text Works
          span.works__title-box__bar
          n-link(to="/works").works__title-box__text All Works

        .works__list
          n-link.works__item(v-for="(item,i) of 5" :key="i" :to="`/works/${i}`")
            img.works__item__thumbnail(src="https://images.microcms-assets.io/protected/ap-northeast-1:5f222472-49ae-43ef-9009-85b89c98d6be/service/uchida/media/20201203_1.jpeg?auto=compress&h=500&w=500&fit=clip")
            .works__item__info
              p.works__item__text Zypressen
              span.works__item__bar
              p.works__item__text Mar 6.2020
    .about
      .about__wrap
        .about__box
          p.about__detail About
        .about__box
          h2.about__title Who We Are?
        .about__box
          p.about__description ZYPRESSEN is a creative team that creates digital product designs. We don't believe in stereotypes, and each member of our team is always working with a cutting-edge philosophy. In order to create something new and different, we observe and absorb what our predecessors have built and find new values that have never been seen before.<br>We call this "Different from Others".
    .contact
      .contact__wrap
        .contact__box
          p.contact__detail Contact
        .contact__box
          h2.contact__title Please<br>Contact!!
        .contact__box
          p.contact__description.contact__move-text Please feel free to contact me anytime. From your dear neighbor ZYPRESSEN.
          .contact__infomation.contact__move-text
            a.contact__infomation__link(href="/") info@zypressen.org
            span /
            a.contact__infomation__link(href="/") Twitter
            span /
            a.contact__infomation__link(href="/") Instagram
    baseFooter
</template>

<script>
import Scrollbar, { ScrollbarPlugin } from 'smooth-scrollbar'
import gsap from 'gsap' // eslint-disable-line
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.min.js'
import { Draggable } from 'gsap/dist/Draggable.min.js'

export default {
  data() {
    return {
      bodyScrollBar: null,
    }
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger, Draggable)
    this.worksDraggable()
    this.scrollCustom()
    this.scrollAnimation()
  },
  created() {},
  methods: {
    worksDraggable() {
      const windowWidth = gsap.getProperty('html', 'width')
      const listWidth = gsap.getProperty('.works__list', 'width')
      const maxXdiff = windowWidth - listWidth
      Draggable.create('.works__list', {
        type: 'x',
        edgeResistance: 0.65,
        bounds: { minX: 0, maxX: maxXdiff },
        onDragEnd(item) {
          const posX = gsap.getProperty('.works__list', 'x')
          if (this.getDirection() === 'left') {
            const move = posX + -100
            gsap.to('.works__list', {
              duration: 1,
              x: move < maxXdiff ? posX : move,
              ease: 'expo.out',
            })
          } else {
            const move = posX + 100

            gsap.to('.works__list', {
              duration: 1,
              x: move > 0 ? 0 : move,
            })
          }
        },
      })
    },
    scrollCustom() {
      Scrollbar.destroyAll()
      const el = this.$refs.topContainer
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
    scrollAnimation() {
      // works -----
      const worksTl = gsap.timeline()
      ScrollTrigger.create({
        trigger: '.works',
        animation: worksTl,
        start: 'top center',
      })
      gsap.utils.toArray('.works__item').forEach((el, i) => {
        gsap.set(el, { clipPath: 'inset(0 0 0 100%)' })
        worksTl.to(
          el,
          {
            duration: 1 + i / 10,
            clipPath: 'inset(0 0 0 0%)',
            ease: 'expo.out',
          },
          'works'
        )
      })

      // about ----
      const aboutTl = gsap.timeline()
      ScrollTrigger.create({
        trigger: '.about',
        animation: aboutTl,
        start: 'top center',
      })
      gsap.set('.about__title', { y: '110%' })
      gsap.set('.about__description', { opacity: 0, y: 50 })
      aboutTl.to(
        '.about__title',
        { duration: 1, y: '-10%', ease: 'expo.out' },
        'about'
      )
      aboutTl.to('.about__title', { duration: 1, y: '0%' })
      aboutTl.to(
        '.about__description',
        {
          duration: 1,
          opacity: 1,
          y: 0,
        },
        'about'
      )

      // contact ----
      const contactTl = gsap.timeline()
      ScrollTrigger.create({
        trigger: '.contact',
        animation: contactTl,
        start: 'top center',
      })
      gsap.set('.contact__title', { y: '110%' })
      gsap.set('.contact__move-text', { opacity: 0, y: 50 })

      contactTl.to(
        '.contact__title',
        {
          duration: 1,
          y: '-10%',
          ease: 'expo.out',
        },
        'contact'
      )
      contactTl.to('.contact__title', { duration: 1, y: '0%' })
      contactTl.to(
        '.contact__move-text',
        {
          duration: 1,
          opacity: 1,
          y: 0,
        },
        'contact'
      )
    },
  },
}
</script>

<style lang="sass" scoped>
.top
  +full-screen
  position: relative
  &__title
    position: absolute
    bottom: 80px
    left: 80px
    +sp-view
      bottom: 32px
      left: 20px
    &__wrap
      overflow: hidden
    &__text
      font-size: 144px
      letter-spacing: 4px
      font-weight: 300
      +sp-view
        font-size: 40px
        letter-spacing: 1.4px
  &__scroll
    position: absolute
    bottom: 80px
    right: 80px
    height: 160px
    width: 160px
    +sp-view
      right: 20px
      bottom: 32px
      height: 64px
      width: 64px
    &__circle
      height: 160px
      width: 160px
      background: var(--color-white)
      border-radius: 100%
      +flex-middle
      transition: all .4s ease
      +sp-view
        height: 64px
        width: 64px
    &__text-wrap
      position: relative
      overflow: hidden
      transition: all .4s ease
    &__text
      font-size: 12px
      letter-spacing: 0.6px
      color: #888888
      animation: scroll-text 1s ease 1s normal infinite
      +sp-view
        font-size: 10px
    &__bottom
      position: absolute
      top: 16px
    &:hover
      & .top__scroll__circle
        transform: scale(0.9)
      & .top__scroll__text-wrap
        transform: scale(1.2)
      & .top__scroll__text
        transform: translateY(-16px)
        transition: all .3s ease .2s
        animation: none

    @keyframes scroll-text
      0%
        transform: translateY(0px)
      100%
        transform: translateY(-16px)

.works
  padding: 140px 0px
  width: 100vw
  overflow-x: hidden
  +sp-view
    padding-top: 60px
    padding-bottom: 60px
  &__title-box
    margin-left: 80px
    display: flex
    align-items: center
    +gap-right(32px)
    +sp-view
      +gap-right(16px)
      margin-left: 20px
    &__text
      +sp-view
        font-size: 12px
        font-weight: 300
    &__bar
      height: 1px
      width: 20px
      background: var(--color-white)
  &__list
    padding: 0 200px
    padding-top: 36px
    display: flex
    +gap-right(36px)
    width: fit-content
    cursor: grab
    +sp-view
      padding: 0 56px
      padding-top: 21px
  &__item
    &__thumbnail
      width: 25vw
      height: 37.5vw
      +sp-view
        width: 200px
        height: 300px
    &__info
      display: flex
      align-items: center
      +gap-right(16px)
      margin-top: 16px
    &__text
      +sp-view
        font-size: 12px
        font-weight: 300
    &__bar
      height: 1px
      width: 20px
      background: var(--color-white)


.about
  +default-width
  padding-top: 140px
  padding-bottom: 140px
  +sp-view
    padding-top: 60px
    padding-bottom: 60px
  &__wrap
    margin-right: auto
  &__box
    overflow: hidden
  &__detail
    font-size: 15px
    +sp-view
      font-weight: 300
      font-size: 12px
  &__title
    padding-top: 24px
    font-size: 144px
    font-weight: 300
    letter-spacing: 4px
    +sp-view
      font-size: 40px
      letter-spacing: 4px
      padding-top: 16px
  &__description
    padding-top: 160px
    width: 480px
    font-size: 15px
    line-height: 200%
    letter-spacing: 1px
    +sp-view
      padding-top: 40px
      font-size: 12px
      line-height: 180%
      font-weight: 300
      width: 100%

.contact

  padding-top: 140px
  padding-bottom: 240px
  +default-width
  +sp-view
    padding-top: 60px
    padding-bottom: 120px
  &__wrap
    width: fit-content
    margin-left: auto
  &__box
    overflow: hidden
  &__detail
    font-size: 15px
    width: fit-content
    +sp-view
      font-weight: 300
      font-size: 12px
  &__title
    width: fit-content
    font-weight: 300
    font-size: 144px
    line-height: 100%
    padding-top: 24px
    +sp-view
      font-size: 40px
      letter-spacing: 4px
      padding-top: 16px

  &__description, &__infomation
    font-size: 15px
    line-height: 200%
    letter-spacing: 1px
    width: 480px
    +sp-view
      width: 100%
      font-weight: 300
      font-size: 12px
  &__description
    padding-top: 160px
    +sp-view
      padding-top: 40px
      line-height: 180%

  &__infomation
    +gap-right(16px)
    +sp-view
      +gap-right(8px)
    &__link
      text-decoration: underline
      +sp-view
        font-size: 12px
        font-weight: 300
</style>
