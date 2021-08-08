<template lang="pug">
  .base-header
    .base-header__right
      n-link(to="/").base-header__logo-wrap
        img.base-header__logo(src="/logo.png" onselectstart="return false;" onmousedown="return false;")
      .base-header__lang
        button.base-header__lang__text(@click="changeLang('en')" :class="{'base-header__lang__text--active':$store.state.lang==='en'}") EN
        button.base-header__lang__text(@click="changeLang('jp')" :class="{'base-header__lang__text--active':$store.state.lang==='jp'}") JP
    .base-header__left
      ul.base-header__menu
        li
          n-link(to="/").base-header__menu__link Top
        li
          n-link(to="/works").base-header__menu__link Works
        li
          n-link(to="/about").base-header__menu__link About
</template>

<script>
// import Scrollbar, { ScrollbarPlugin } from 'smooth-scrollbar'
import gsap from 'gsap' // eslint-disable-line
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.min.js'
import CustomEase from '@/assets/js/CustomEase.min.js'

export default {
  data() {
    return {}
  },
  mounted() {
    // gsap.registerPlugin(ScrollTrigger)
    gsap.registerPlugin(CustomEase)
  },
  created() {},
  methods: {
    changeLang(lang) {
      const tl = gsap.timeline()
      tl.to('.transition-curtain__item', {
        // duration: 0.5,
        ease: CustomEase.create(
          'custom',
          'M0,0 C0.6,0 0.604,1 0.9,1 0.958,1 0.818,1.001 1,1 '
        ),
        stagger: {
          amount: 0.5,
          from: 'start',
        },
        clipPath: 'inset(-10% 0 0% 0)',
      })
      tl.call(() => {
        this.$store.commit('changeLang', lang)
      })
      tl.to('.transition-curtain__item', {
        // duration: 0.5,
        ease: CustomEase.create(
          'custom',
          'M0,0 C0.075,0 0.013,0 0.1,0 0.4,0 0.6,1 1,1'
        ),
        stagger: {
          amount: 0.5,
          from: 'start',
        },
        clipPath: 'inset(0% 0 110% 0)',
      })
      tl.set('.transition-curtain__item', {
        clipPath: 'inset(110% 0 0% 0)',
      })
    },
  },
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

    +sp-view
      overflow: auto
  .base-header__logo
    margin-right: 88px
    width: 120px
    +sp-view
      margin-right: 0px
      width: 82px
  .base-header__lang
    +gap-right(20px)
    +sp-view
      display: none
  .base-header__lang__text
    font-size: 15px
    opacity: 0.5
    transition: opacity 0.5s ease-out
  .base-header__lang__text--active
    opacity: 1
  .base-header__menu
    display: flex
    align-items: center
    +gap-right(32px)
    .base-header__menu__link
      font-size: 15px
      letter-spacing: 0.6px
</style>
