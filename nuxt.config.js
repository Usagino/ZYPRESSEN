import metaData from './assets/js/metaData.js' // eslint-disable-line
const meta = metaData('https://zypressen.vercel.app/').data
import gsap from 'gsap' // eslint-disable-line

require('dotenv').config()
export default {
  target: 'static',
  head: {
    title: 'ZYPRESSEN',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  plugins: [
    '@/plugins/globalMethods.js',
    // { src: '@/plugins/dat-gui.js', mode: 'client' },
    // { src: '@/plugins/ga.js', mode: 'client' },
    { src: '@/plugins/draggabilly.js', mode: 'client' },
  ],
  components: true,
  css: ['~/assets/stylesheet/style.sass'],
  styleResources: {
    sass: ['~/assets/stylesheet/style.sass'],
  },
  buildModules: [
    // '@nuxtjs/style-resources',
    // '@nuxtjs/google-analytics'
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/pwa',
    '@nuxtjs/dayjs',
    'nuxt-user-agent',
    // '@nuxtjs/sitemap',
  ],

  axios: { proxy: true },
  env: {
    CMSKEY: process.env.CMSKEY,
  },
  pwa: {
    meta: {
      name: meta.title,
      author: 'Zypressen',
      description: meta.description,
      ogSiteName: meta.title,
      ogTitle: meta.title,
      ogDescription: meta.description,
      ogImage: meta.image,
      twitterCard: 'summary',
    },
    manifest: {
      name: meta.title,
      short_name: meta.title,
      title: meta.title,
      description: meta.description,
      theme_color: '#f2f2f2',
      background_color: '#f2f2f2',
    },
    workbox: {
      skipWaiting: true,
      clientsClaim: true,
    },
  },
  sitemap: {
    path: '/sitemap.xml',
    // hostname: 'https://example.com',
  },
  generate: {
    crawler: true,
  },
  build: {
    // transpile: ['gsap'],
  },
  transition: 'hogehogehoge',
}
