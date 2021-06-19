import gsap from 'gsap' // eslint-disable-line
import CustomEase from '@/assets/js/CustomEase.min.js'
gsap.registerPlugin(CustomEase)
export default function transitionAnime() {
  return {
    mode: 'out-in',
    css: false,
    enter(el, done) {
      const tl = gsap.timeline({
        onComplete: () => {
          done()
        },
      })
      tl.set('.transition-screen', { transformOrigin: 'top center' })
      tl.to('.transition-screen', {
        duration: 0.5,
        ease: CustomEase.create(
          'custom',
          'M0,0 C0.075,0 0.013,0 0.1,0 0.4,0 0.6,1 1,1'
        ),
        scaleY: 0,
      })
    },
    leave(el, done) {
      // done()
      const tl = gsap.timeline({
        onComplete: () => {
          done()
        },
      })
      tl.set('.transition-screen', { transformOrigin: 'bottom center' })
      tl.to('.transition-screen', {
        duration: 0.5,
        ease: CustomEase.create(
          'custom',
          'M0,0 C0.6,0 0.604,1 0.9,1 0.958,1 0.818,1.001 1,1 '
        ),
        scaleY: 1,
      })
    },
  }
}
