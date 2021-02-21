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
            n-link(:to="`/${item.toLowerCase()}`").base-header__menu__link {{item}}
    .base-footer
      .base-footer__wrap
        .base-footer__info
          Logo.base-footer__logo
          ul.base-footer__menu
            li(v-for="item in ['Works','About','Contact']")
              n-link(:to="`/${item.toLowerCase()}`").base-footer__menu__link {{item}}
          ul.base-footer__social
            li
              a(href="/").base-footer__social__link Twitter
            li
              a(href="/").base-footer__social__link Instagram
            li
              a(href="/").base-footer__social__link Info@zypressen.org
        small.base-footer__copy ©2021ZYPRESSEN
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

.bg-movie
  +full-screen
  position: fixed
  top: 0
  z-index: -1
  &__movie
    +full-size
    object-fit: cover
</style>
