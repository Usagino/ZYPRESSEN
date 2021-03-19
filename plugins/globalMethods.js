import Vue from 'vue'

Vue.mixin({
  data() {
    return {}
  },
  methods: {
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
    resetVideo(el) {
      if (this.$route.name === 'index') {
        const $ = (element) => {
          return el.querySelectorAll(element)
        }
        const inVideoEl = this.$('.video-in')
        const loopVideoEl = this.$('.video-loop')
        inVideoEl.currentTime = 0
        loopVideoEl.currentTime = 0
      }
    },
    playVideo(el) {
      if (this.$route.name === 'index') {
        const $ = (element) => {
          return el.querySelectorAll(element)
        }
        const inVideoEl = this.$('.video-in')
        const loopVideoEl = this.$('.video-loop')

        inVideoEl.play()
        inVideoEl.addEventListener('timeupdate', function () {
          if (inVideoEl.currentTime === inVideoEl.duration) {
            inVideoEl.style.opacity = 0
            loopVideoEl.play()
          }
        })
      }
    },
  },
})
