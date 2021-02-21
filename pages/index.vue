<template lang="pug">
  .container
    .top
      .top__title
        .top__title__wrap
          h2.top__title__text Diffrent From
        .top__title__wrap
          h2.top__title__text Others!!
      .top__scroll
        .top__scroll__circle
          .top__scroll__text-wrap
            p.top__scroll__text Scroll
            p.top__scroll__text.top__scroll__bottom Scroll
    .works
    .about
      .about__wrap
        .about__box
          p.about__detail About
        .about__box
          h2.about__title Who We Are?
        .about__box
          p.about__description ZYPRESSEN is a creative team that creates digital product designs. We don't believe in stereotypes, and each member of our team is always working with a cutting-edge philosophy. In order to create something new and different, we observe and absorb what our predecessors have built and find new values that have never been seen before.<br>We call this "Different from Others".
    .contact
      .contact__wrap
        .contact__box
          p.contact__detail Contact
        .contact__box
          h2.contact__title Please<br>Contact!!
        .contact__box
          p.contact__description Please feel free to contact me anytime. From your dear neighbor ZYPRESSEN.
          .contact__infomation
            a.contact__infomation__link(href="/") info@zypressen.org
            span /
            a.contact__infomation__link(href="/") Twitter
            span /
            a.contact__infomation__link(href="/") Instagram
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

.top
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
      font-weight: 300
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
      & .top__scroll__circle
        transform: scale(0.9)
      & .top__scroll__text-wrap
        transform: scale(1.2)
      & .top__scroll__text
        transform: translateY(-16px)
        transition: all .3s ease .2s
        animation: none

    @keyframes scroll-text
      0%
        transform: translateY(0px)
      100%
        transform: translateY(-16px)

.about
  +default-width
  margin: 140px 0px
  &__wrap
    margin-right: auto
  &__detail
    font-size: 15px
  &__title
    padding-top: 24px
    font-size: 144px
    font-weight: 300
    letter-spacing: 4px
  &__description
    padding-top: 160px
    width: 480px
    font-size: 15px
    line-height: 200%
    letter-spacing: 1px

.contact
  padding-top: 140px
  padding-bottom: 240px
  +default-width
  &__wrap
    width: fit-content
    margin-left: auto
  &__detail
    font-size: 15px
    width: fit-content
  &__title
    width: fit-content
    font-weight: 300
    font-size: 144px
    line-height: 100%
  &__description, &__infomation
    font-size: 15px
    line-height: 200%
    letter-spacing: 1px
    width: 480px
  &__description
    padding-top: 160px
  &__infomation
    +gap-right(16px)
    &__link
      text-decoration: underline
</style>
