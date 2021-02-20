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

.bg-movie
  +full-screen
  position: fixed
  top: 0
  z-index: -1
  &__movie
    +full-size
    object-fit: cover
</style>
