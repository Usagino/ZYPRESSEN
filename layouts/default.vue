<template lang="pug">
  div(:style="style")
    nuxt
    .base-header
      .base-header__right
        Logo.base-header__logo
        .base-header__lang
          button.base-header__lang--en En
          button.base-header__lang--ja Ja
      .base-header__left
        ul.base-header__menu
          li(v-for="item in ['Works','About','Contact']")
            n-link(:to="/").base-header__menu__link {{item}}
    .base-footer
      .base-footer__wrap
        .base-footer__info
          Logo.base-footer__logo
          ul.base-footer__menu
            li(v-for="item in ['Works','About','Contact']")
              n-link(to="/").base-footer__menu__link {{item}}
          ul.base-footer__social
            li
              a(href="/").base-footer__social__link Twitter
            li
              a(href="/").base-footer__social__link Instagram
            li
              a(href="/").base-footer__social__link Info@zypressen.org
        small.base-footer__copy ©2021ZYPRESSEN
        .base-footer__scroll
          .base-footer__scroll__circle
            .base-footer__scroll__text-wrap
              p.base-footer__scroll__text Back Top
              p.base-footer__scroll__text.base-footer__scroll__bottom Back Top
    .bg-movie
      img.bg-movie__movie(src="/bg_img.png")
</template>

<script>
import deviceMixin from '@/assets/mixin/device.js'
export default {
  mixins: [deviceMixin],
}
</script>

<style lang="sass">
.base-header
  +default-width
  position: fixed
  width: 100vw
  height: auto
  top: 80px
  z-index: 2
  display: flex
  justify-content: space-between
  align-items: center
  &__right
    display: flex
    align-items: center
  &__logo
    margin-right: 88px
  &__lang
    +gap-right(32px)
    *
      font-size: 15px
    &--ja
      opacity: .5
  &__menu
    display: flex
    align-items: center
    +gap-right(32px)
    &__link
      font-size: 15px
      letter-spacing: 0.6px

.base-footer
  +default-width
  padding-bottom: 80px
  &__wrap
    border-top: 2px solid var(--color-white)
    padding-top: 200px
    position: relative
  &__info
    display: flex
  &__logo
    margin-right: 80px
  &__menu, &__social
    margin-right: 40px
    +gap-bottom(32px)
    &__link
      font-size: 15px
      letter-spacing: 0.6px
  &__social
    &__link
      text-decoration: underline
  &__copy
    display: block
    margin-top: 200px
    font-size: 15px
    letter-spacing: 0.6px
  &__scroll
    position: absolute
    bottom: 0px
    right: 0px
    height: 160px
    width: 160px
    z-index: 2
    cursor: pointer
    &__circle
      height: 160px
      width: 160px
      background: var(--color-white)
      border-radius: 100%
      +flex-middle
      transition: all .4s ease
    &__text-wrap
      position: relative
      overflow: hidden
      transition: all .4s ease
    &__text
      font-size: 12px
      letter-spacing: 0.6px
      color: #888888
      animation: scroll-text 1s ease 1s normal infinite
    &__bottom
      position: absolute
      top: 16px
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
      100%
        transform: translateY(-16px)

.bg-movie
  +full-screen
  position: fixed
  top: 0
  z-index: -1
  &__movie
    +full-size
    object-fit: cover
</style>
