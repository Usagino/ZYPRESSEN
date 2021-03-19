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
      const $ = (element) => {
        return el.querySelectorAll(element)
      }
      const inVideoEl = this.$('.video-in')
      const loopVideoEl = this.$('.video-loop')
      inVideoEl.currentTime = 0
      loopVideoEl.currentTime = 0
    },
    playVideo(el) {
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
    },
  },
})
