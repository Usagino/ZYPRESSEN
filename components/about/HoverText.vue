<template lang="pug">
  .hover-text
    .hover-text__box
      p.hover-text__text(v-for="n of 12*12" @click="anime") ZYPRESSEN
</template>

<script>
// import Scrollbar, { ScrollbarPlugin } from 'smooth-scrollbar'
import gsap from 'gsap' // eslint-disable-line
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.min.js'

export default {
  data() {
    return {}
  },
  mounted() {
    // gsap.registerPlugin(ScrollTrigger)
  },
  created() {},
  methods: {
    anime(e) {
      const elements = [].slice.call(this.$$('.hover-text__text'))
      const tl = gsap.timeline({})
      gsap.to('.hover-text__text', {
        fontWeight: 700,
        duration: 0.4,
        stagger: {
          grid: 'auto',
          from: elements.indexOf(e.target),
          amount: 4,
        },
      })
      gsap.to('.hover-text__text', {
        fontWeight: 400,
        duration: 0.4,
        delay: 0.5,
        stagger: {
          grid: 'auto',
          from: elements.indexOf(e.target),
          amount: 4,
        },
      })
    },
  },
}
</script>

<style lang="sass" scoped>
.hover-text
  +full-size
  border: 2px solid white
  position: relative
  background: rgba(#b1c7e0, 0.3)
  backdrop-filter: blur(5px)
  .hover-text__box
    position: absolute
    top: 50%
    left: 50%
    transform: translateX(-50%) translateY(-50%) rotate(20deg)
    display: grid
    grid-template-columns: repeat(12, 300px)
    grid-template-rows: repeat(12, auto)
    gap: 32px 32px
    +sp-view
      grid-template-columns: repeat(12, 100px)
      gap: 8px 8px
  .hover-text__text
    font-size: 50px
    line-height: 100%
    font-family: 'Maven Pro', sans-serif
    font-weight: 400
    cursor: pointer
    transition: all 0.5s ease
    text-align: center
    +sp-view
      font-size: 16px
    &:nth-of-type(2n)
      font-family: 'Lora', serif
    +pc-view
      &:hover
        font-weight: 700
</style>
