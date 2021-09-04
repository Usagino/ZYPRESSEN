import Vue from 'vue'
import Scrollbar, { ScrollbarPlugin } from 'smooth-scrollbar'
import gsap from 'gsap' // eslint-disable-line
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.min.js'

Vue.mixin({
  data() {
    return {
      smoothScrollBar: null,
      bodyScrollBar: null,
    }
  },
  watch: {
    $route() {
      console.clear()
      this.ZypressenProof()
    },
  },
  methods: {
    ZypressenProof() {
      const babseStyle = [
        'padding:4px 12px',
        'font-size: 8px',
        'border:1px solid #020202',
      ]
      const textStyle = [
        ...babseStyle,
        'background-color: #020202',
        'color: white',
        'border-right: none',
      ].join(';')
      const iconStyle = [
        ...babseStyle,
        'text-decoration: none;',
        'background-color: #5e5e5e',
        'border-right: none',
        'border-left: none',
        'padding:4px 2px',
      ].join(';')
      const linkStyle = [...babseStyle, 'border-left: none'].join(';')
      console.log(
        '%cMADE WITH BY ZYPRESSEN%c🌲%chttps://zypressen.org',
        textStyle,
        iconStyle,
        linkStyle
      )
    },
    $(selector, el) {
      if (!el) {
        el = document
      }
      return el.querySelector(selector)
    },
    $$(selector, el) {
      if (!el) {
        el = document
      }
      return el.querySelectorAll(selector)
    },
    setVideo() {
      if (this.$('.already_loaded')) {
        this.resetVideo()
        this.playVideo()
      }
    },
    spaceReplace(str) {
      const strBefore = str.replace(/\s/g, '_')
      const strArray = strBefore.split('')
      const textArray = strArray.map((t) => (t === '_' ? '&nbsp;' : t))
      return textArray
    },
    resetVideo(el) {
      const $ = (element) => {
        return el.querySelectorAll(element)
      }
      const inVideoEl = this.$('.video-in')
      const loopVideoEl = this.$('.video-loop')
      inVideoEl.currentTime = 0
      loopVideoEl.currentTime = 0.01
    },
    playVideo(el) {
      if (this.$('.video-in')) {
        const $ = (element) => {
          return el.querySelectorAll(element)
        }
        const inVideoEl = this.$('.video-in')
        const loopVideoEl = this.$('.video-loop')

        inVideoEl.play()
        inVideoEl.addEventListener('timeupdate', function () {
          loopVideoEl.currentTime = 0.01
          if (inVideoEl.currentTime === inVideoEl.duration) {
            inVideoEl.style.opacity = 0
            loopVideoEl.play()
          }
        })
      }
    },
    scrollCustom() {
      Scrollbar.destroyAll()
      const el = this.$('.scroll-paper')
      const bodyScrollBar = Scrollbar.init(el, {
        damping: 0.1,
        delegateTo: document,
        thumbMinSize: 20,
      })

      bodyScrollBar.addListener(({ offset }) => {
        if (this.$('.offset-pos')) {
          gsap.set('.offset-pos', {
            x: offset.x,
            y: offset.y,
          })
        }
      })

      bodyScrollBar.setPosition(0, 0)
      ScrollTrigger.scrollerProxy(el, {
        scrollTop(value) {
          if (arguments.length) {
            bodyScrollBar.scrollTop = value
          }
          return bodyScrollBar.scrollTop
        },
      })

      bodyScrollBar.addListener(() => {
        ScrollTrigger.refresh()
      })

      if (this.$('.scroll-button')) {
        this.$('.scroll-button').addEventListener('click', () => {
          bodyScrollBar.scrollTo(0, window.innerHeight, 1000)
        })
      }
      if (this.$('.base-footer__scroll')) {
        this.$('.base-footer__scroll').addEventListener('click', () => {
          bodyScrollBar.scrollTo(0, 0, 1000)
        })
      }
    },
  },
})
