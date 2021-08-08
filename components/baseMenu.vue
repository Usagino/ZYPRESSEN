<template lang="pug">
  .base-menu
    button.button(@click="menuDisplay()")
      .button__touch
      span.button__bar-top.button__bar
      span.button__bar-bottom.button__bar
    .display
      img.display__logo(src="/logo_gray.svg")
      .display__menu.display__social
        ul.display__menu__list
          li.display__menu__item-wrap
            n-link.display__menu__item(to="/" @click.native="close()") Top
          li.display__menu__item-wrap
            n-link.display__menu__item(to="/works" @click.native="close()") Works
          li.display__menu__item-wrap
            n-link.display__menu__item(to="/about" @click.native="close()") About
        ul.display__social__list
          li.display__social__item-wrap
            a(href="/" target="_blank").display__social__item Twitter
          li.display__social__item-wrap
            a(href="/" target="_blank").display__social__item Instagram
          li.display__social__item-wrap
            a(href="/" target="_blank").display__social__item Info@zypressen.org
        .display__lang
          button.display__lang__text(@click="$store.commit('changeLang', 'en')" :class="{'display__lang__text--active':$store.state.lang==='en'}") EN
          button.display__lang__text(@click="$store.commit('changeLang', 'jp')" :class="{'display__lang__text--active':$store.state.lang==='jp'}") JP
</template>

<script>
import gsap from 'gsap' // eslint-disable-line

export default {
  data() {
    return {
      menuToggle: true,
    }
  },
  mounted() {},
  created() {},
  methods: {
    open() {
      const tl = gsap.timeline({
        onComplete: () => {
          this.menuToggle = false
        },
      })
      tl.set('.display', {
        display: 'block',
      })
      tl.to(
        '.display',
        {
          duration: 0.6,
          ease: 'expo.in',
          clipPath: 'inset(0% 0% 0% 0%)',
        },
        'open'
      )
      tl.to(
        '.button__bar',
        {
          duration: 0.6,
          background: '#888888',
        },
        'open'
      )
      tl.to(
        '.button__bar-top',
        {
          duration: 1,
          y: 1.5,
          rotate: '16deg',
        },
        'open'
      )
      tl.to(
        '.button__bar-bottom',
        {
          duration: 1,
          y: -1.5,
          rotate: '-16deg',
        },
        'open'
      )
    },
    close() {
      const tl = gsap.timeline({
        onComplete: () => {
          this.menuToggle = true
        },
      })
      tl.to(
        '.display',
        {
          duration: 0.6,
          ease: 'expo.in',
          clipPath: 'inset(0% 0% 100% 0%)',
          onComplete: () => {
            gsap.set('.display', { clipPath: 'inset(100% 0% 0% 0%)' })
          },
        },
        'close'
      )
      tl.to(
        '.button__bar',
        {
          duration: 0.6,
          background: '#ffffff',
        },
        'close'
      )
      tl.to(
        '.button__bar-top, .button__bar-bottom',
        {
          duration: 1,
          y: 0,
          rotate: '0deg',
        },
        'close'
      )
      tl.set('.display', {
        display: 'none',
      })
    },
    menuDisplay() {
      if (this.menuToggle) {
        this.open()
      } else {
        this.close()
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.base-menu
  +pc-sm-view-over
    display: none

.button
  position: fixed
  top: 26px
  right: 20px
  height: 16px
  width: 16px
  z-index: 20
  &__touch
    height: 60px
    width: 60px
    position: absolute
    display: block
    // background: red
    top: 50%
    left: 50%
    transform: translateX(-50%) translateY(-50%)
  &__bar
    width: 16px
    height: 1px
    background: #ffffff
    content: ""
    display: block
  &__bar-top
    position: absolute
    top: 6px
  &__bar-bottom
    position: absolute
    bottom: 6px

.display
  clip-path: inset(100% 0 0% 0)
  position: fixed
  top: 0
  left: 0
  background: var(--color-white)
  +full-screen
  z-index: 10
  display: none
  *
    color: #888888
  .display__logo
    position: absolute
    top: 32px
    left: 20px
    width: 82px
  .display__menu
    +default-width
    display: flex
    align-items: center
    height: 100%
    position: relative
    .display__menu__item
      font-size: 56px
      line-height: 96%
      font-weight: 300
  .display__social
    .display__social__list
      position: absolute
      bottom: 160px
      width: fit-content
      +gap-bottom(8px)
    .display__social__item
      font-size: 12px
      font-weight: 300
  .display__lang
    display: block
    position: absolute
    bottom: 20px
    +gap-right(12px)
    .display__lang__text
      opacity: 0.5
      transition: opacity 0.3s ease
      &--active
        opacity: 1
</style>
