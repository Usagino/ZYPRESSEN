<template lang="pug">
.scroll-button
  .scroll-button__circle
    .scroll-button__text-wrap
      p.scroll-button__text {{text}}
      p.scroll-button__text.scroll-button__bottom {{text}}
</template>

<script>
// import Scrollbar, { ScrollbarPlugin } from 'smooth-scrollbar'
// import gsap from 'gsap' // eslint-disable-line
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.min.js'

export default {
  props: {
    text: {
      type: String,
      default: 'Scroll',
    },
  },
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
.scroll-button
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
.scroll-button__circle
  height: 160px
  width: 160px
  background: var(--color-white)
  border-radius: 100%
  +flex-middle
  transition: all .4s ease
  +sp-view
    height: 64px
    width: 64px
.scroll-button__text-wrap
  position: relative
  overflow: hidden
  transition: all .4s ease
.scroll-button__text
  font-size: 12px
  letter-spacing: 0.6px
  color: #888888
  animation: scroll-text 1s ease 1s normal infinite
  +sp-view
    font-size: 10px
.scroll-button__bottom
  position: absolute
  top: 16px
.scroll-button:hover
  & .scroll-button__circle
    transform: scale(0.9)
  & .scroll-button__text-wrap
    transform: scale(1.2)
  & .scroll-button__text
    transform: translateY(-16px)
    transition: all .3s ease .2s
    animation: none

@keyframes scroll-text
  0%
    transform: translateY(0px)
  100%
    transform: translateY(-16px)
</style>
