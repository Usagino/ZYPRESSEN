<template lang="pug">
  .base-menu
    button.button(@click="menuDisplay()")
      .button__touch
      span.button__bar-top.button__bar
      span.button__bar-bottom.button__bar
    .display
      img.display__logo(src="/logo_gray.svg")
      .display__menu.display__social.display__lang
        ul.display__menu__list
          li.display__menu__item-wrap
            n-link.display__menu__item(to="/") Top
          li.display__menu__item-wrap
            n-link.display__menu__item(to="/") Works
          li.display__menu__item-wrap
            n-link.display__menu__item(to="/") About
          li.display__menu__item-wrap
            n-link.display__menu__item(to="/") Contact
        ul.display__social__list
          li.display__social__item-wrap
            a(href="/" target="_blank").display__social__item Twitter
          li.display__social__item-wrap
            a(href="/" target="_blank").display__social__item Instagram
          li.display__social__item-wrap
            a(href="/" target="_blank").display__social__item Info@zypressen.org
        .display__lang__wrap
          button.display__lang__text.display__lang--en En
          button.display__lang__text.display__lang--ja Ja
</template>

<script>
// import Scrollbar, { ScrollbarPlugin } from 'smooth-scrollbar'
import gsap from 'gsap' // eslint-disable-line
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.min.js'

export default {
  data() {
    return {
      menuToggle: true,
    }
  },
  mounted() {
    // gsap.registerPlugin(ScrollTrigger)
  },
  created() {},
  methods: {
    menuDisplay() {
      if (this.menuToggle) {
        const tl = gsap.timeline()
        tl.set('.display', {
          display: 'block',
        })
        tl.to(
          '.display',
          {
            duration: 0.6,
            opacity: 1,
          },
          'open'
        )
        tl.to(
          '.button__bar',
          {
            duration: 0.6,
            background: '#888888',
          },
          'open'
        )
        tl.to(
          '.button__bar-top',
          {
            duration: 1,
            y: 1.5,
            rotate: '10deg',
          },
          'open'
        )
        tl.to(
          '.button__bar-bottom',
          {
            duration: 1,
            y: -1.5,
            rotate: '-10deg',
          },
          'open'
        )
      } else {
        const tl = gsap.timeline()
        tl.to(
          '.display',
          {
            duration: 0.6,
            opacity: 0,
          },
          'close'
        )
        tl.to(
          '.button__bar',
          {
            duration: 0.6,
            background: '#ffffff',
          },
          'close'
        )
        tl.to(
          '.button__bar-top, .button__bar-bottom',
          {
            duration: 1,
            y: 0,
            rotate: '0deg',
          },
          'close'
        )
        tl.set('.display', {
          display: 'none',
        })
      }
      this.menuToggle = !this.menuToggle
    },
  },
}
</script>

<style lang="sass" scoped>
.base-menu
  +pc-sm-view-over
    display: none

.button
  position: fixed
  top: 26px
  right: 20px
  height: 16px
  width: 16px
  z-index: 20
  &__touch
    height: 60px
    width: 60px
    position: absolute
    display: block
    // background: red
    top: 50%
    left: 50%
    transform: translateX(-50%) translateY(-50%)
  &__bar
    width: 16px
    height: 1px
    background: #ffffff
    content: ""
    display: block
  &__bar-top
    position: absolute
    top: 6px
  &__bar-bottom
    position: absolute
    bottom: 6px

.display
  position: fixed
  top: 0
  left: 0
  background: var(--color-white)
  +full-screen
  z-index: 10
  display: none
  opacity: 0
  *
    color: #888888
  &__logo
    position: absolute
    top: 32px
    left: 20px
    width: 80px
  &__menu
    +default-width
    display: flex
    align-items: center
    height: 100%
    position: relative
    &__item
      font-size: 56px
      line-height: 96%
      font-weight: 300
  &__social
    &__list
      position: absolute
      bottom: 132px
      width: fit-content
      +gap-bottom(8px)
    &__item
      font-size: 12px
      font-weight: 300
  &__lang
    &__wrap
      position: absolute
      bottom: 20px
      right: 20px
      +gap-right(16px)
      &__text
        font-size: 12px
        font-weight: 300
    &--en
      text-decoration: underline
    &--ja
      opacity: 0.6
</style>
