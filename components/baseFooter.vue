<template lang="pug">
.base-footer
  .base-footer__wrap
    .base-footer__info
      .base-footer__logo-wrap
        img.base-footer__logo(src="/logo.svg")
      ul.base-footer__menu
        li(v-for="item in ['Works','About']" :key="item")
          n-link(:to="`/${item.toLowerCase()}`").base-footer__menu__link {{item}}
      ul.base-footer__social
        li
          a(href="https://twitter.com/zypjp/" target="_blank" rel="noopener noreferrer").base-footer__social__link Twitter
        li
          a(href="https://www.instagram.com/zypjp/" target="_blank" rel="noopener noreferrer").base-footer__social__link Instagram
        li
          a(href="mailto:info@zypressen.org" target="_blank" rel="noopener noreferrer").base-footer__social__link Info@zypressen.org
    small.base-footer__copy ©2021ZYPRESSEN
    .base-footer__scroll
      .base-footer__scroll__circle
        .base-footer__scroll__text-wrap
          p.base-footer__scroll__text Back Top
          p.base-footer__scroll__text.base-footer__scroll__bottom Back Top
</template>

<script>
// import Scrollbar, { ScrollbarPlugin } from 'smooth-scrollbar'
import gsap from 'gsap' // eslint-disable-line

export default {
  props: {},
  data() {
    return {}
  },
  mounted() {
    // gsap.registerPlugin(ScrollToPlugin)
  },
  created() {},
  methods: {},
}
</script>

<style lang="sass" scoped>
.base-footer
  +default-width
  padding-bottom: 80px
  +sp-view
    padding-bottom: 28px
  .base-footer__wrap
    border-top: 2px solid var(--color-white)
    padding-top: 140px
    position: relative
    +sp-view
      padding-top: 32px
  .base-footer__info
    display: flex
    +sp-view
      width: 100%
  .base-footer__logo
    margin-right: 80px
    width: 120px
    height: auto
    +sp-view
      margin-right: 48px
      width: 80px
  .base-footer__menu, .base-footer__social
    margin-right: 40px
    +gap-bottom(32px)
    +sp-view
      margin-right: 24px
      +gap-bottom(16px)
    &__link
      font-size: 15px
      letter-spacing: 0.6px
      +sp-view
        font-size: 12px
        font-weight: 300
  .base-footer__social
    &__link
      text-decoration: underline
  .base-footer__copy
    display: block
    margin-top: 140px
    font-size: 15px
    letter-spacing: 0.6px
    +sp-view
      font-size: 12px
      font-weight: 300
      margin-top: 32px
  &__scroll
    position: absolute
    bottom: 0px
    right: 0px
    height: 160px
    width: 160px
    z-index: 2
    cursor: pointer
    +sp-view
      height: 64px
      width: 64px
      bottom: auto
      top: calc(-64px - 32px)
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
      animation: scroll-text 4s ease 0s normal infinite
      +sp-view
        font-size: 10px
    &__bottom
      position: absolute
      top: 16px
    +sp-view-over
      &:hover
        & .base-footer__scroll__circle
          transform: scale(0.9)
        & .base-footer__scroll__text-wrap
          transform: scale(1.2)
        & .base-footer__scroll__text
          transform: translateY(-16px)
          transition: all .3s ease .2s
          animation: none

@keyframes scroll-text
  0%
    transform: translateY(0px)
  25%
    transform: translateY(-16px)
  100%
    transform: translateY(-16px)
</style>
