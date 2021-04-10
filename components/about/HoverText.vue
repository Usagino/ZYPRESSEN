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
    const elements = Array.from(this.$$('.hover-text__text'))
    const sliceByNumber = (array, number) => {
      const length = Math.ceil(array.length / number)
      return new Array(length)
        .fill()
        .map((_, i) => array.slice(i * number, (i + 1) * number))
    }
    console.log(sliceByNumber(elements, 12))
    sliceByNumber(elements, 12).forEach((item, i) => {
      if (i % 2 === 0) {
        item.forEach((el, i) => {
          gsap.set(el, { x: '-50%' })
        })
      }
    })
  },
  created() {},
  methods: {
    anime(e) {
      const elements = [].slice.call(this.$$('.hover-text__text'))
      const tl = gsap.timeline({})
      gsap.to('.hover-text__text', {
        fontWeight: 700,
        duration: 1,
        stagger: {
          grid: 'auto',
          from: elements.indexOf(e.target),
          amount: 6,
        },
      })
      gsap.to('.hover-text__text', {
        fontWeight: 400,
        duration: 0.7,
        delay: 1,
        stagger: {
          grid: 'auto',
          from: elements.indexOf(e.target),
          amount: 6,
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
    transition: font-weight 0.5s ease
    text-align: center
    +sp-view
      font-size: 16px
    &:hover
      +pc-view
        font-weight: 700
</style>
