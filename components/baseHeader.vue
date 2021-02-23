<template lang="pug">
  .base-header
    .base-header__right
      n-link(to="/").base-header__logo-wrap
        img.base-header__logo(src="/logo.svg")
      .base-header__lang
        button.base-header__lang--en En
        button.base-header__lang--ja Ja
    .base-header__left
      ul.base-header__menu
        li(v-for="item in ['Works','About','Contact']")
          n-link(to="/").base-header__menu__link {{item}}
</template>

<script>
// import Scrollbar, { ScrollbarPlugin } from 'smooth-scrollbar'
// import gsap from 'gsap' // eslint-disable-line
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.min.js'

export default {
  data() {
    return {}
  },
  mounted() {
    // gsap.registerPlugin(ScrollTrigger)
  },
  created() {},
  methods: {},
}
</script>

<style lang="sass" scoped>
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
  +sp-view
    top: 32px
  .base-header__right
    display: flex
    align-items: center
  .base-header__left
    +sp-view
      display: none
  .base-header__logo-wrap
    line-height: 0px
  .base-header__logo
    margin-right: 88px
    +sp-view
      width: 80px
  .base-header__lang
    +gap-right(32px)
    *
      font-size: 15px
    +sp-view
      display: none
    &--ja
      opacity: .5
  .base-header__menu
    display: flex
    align-items: center
    +gap-right(32px)
    .base-header__menu__link
      font-size: 15px
      letter-spacing: 0.6px
</style>
