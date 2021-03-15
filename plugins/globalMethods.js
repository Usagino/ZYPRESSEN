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
  },
})
