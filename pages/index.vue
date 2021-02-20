<template lang="pug">
  .container
    .top-content
      .top-content__title
        .top-content__title__wrap
          h2.top-content__title__text Diffrent From
        .top-content__title__wrap
          h2.top-content__title__text Others!!
      .top-content__scroll
        .top-content__scroll__circle
          .top-content__scroll__text-wrap
            p.top-content__scroll__text Scroll
            p.top-content__scroll__text.top-content__scroll__bottom Scroll
    .works-content
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
.container

.top-content
  +full-screen
  position: relative
  &__title
    position: absolute
    bottom: 80px
    left: 80px
    &__wrap
      overflow: hidden
    &__text
      font-size: 144px
      letter-spacing: 4px
  &__scroll
    position: absolute
    bottom: 80px
    right: 80px
    height: 160px
    width: 160px
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
      & .top-content__scroll__circle
        transform: scale(0.9)
      & .top-content__scroll__text-wrap
        transform: scale(1.2)
      & .top-content__scroll__text
        transform: translateY(-16px)
        transition: all .3s ease .2s
        animation: none

    @keyframes scroll-text
      0%
        transform: translateY(0px)
      100%
        transform: translateY(-16px)
</style>
