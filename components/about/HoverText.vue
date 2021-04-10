<template lang="pug">
  .hover-text
    .hover-text__box
      .hover-text__row(v-for="i of 12")
        p.hover-text__text(v-for="n of i % 2 === 0 ? 9 : 8" @click="anime") ZYPRESSEN
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
    anime() {
      const tl = gsap.timeline({ repeat: -1 })
      this.$$('.hover-text__text').forEach((el, i) => {
        tl.to(el, {
          fontWeight: 700,
          duration: 0.3,
        })
      })
      this.$$('.hover-text__text').forEach((el, i) => {
        tl.to(el, {
          fontWeight: 400,
          duration: 0.3,
        })
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
  backdrop-filter: blur(10px)
  .hover-text__box
    +absolute-middle
    flex-direction: column
    +flex-middle
    +gap-bottom(32px)
    +sp-view
      +gap-bottom(8px)
    transform: rotate(20deg)
  .hover-text__row
    display: flex
    align-items: center
    +gap-right(36px)
    +sp-view
      +gap-right(8px)
  .hover-text__text
    font-size: 50px
    line-height: 100%
    font-family: 'Maven Pro', sans-serif
    font-weight: 400
    cursor: pointer
    //transition: all 0.5s ease
    +sp-view
      font-size: 16px
    &:nth-child(odd)
      font-family: 'Lora', serif
    // &:hover
    //   font-weight: 700
</style>
