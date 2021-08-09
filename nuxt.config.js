import metaData from './assets/js/metaData.js' // eslint-disable-line
const host = 'https://zypressen.org/'
const meta = metaData(host).data

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
  plugins: ['@/plugins/globalMethods.js', '@/plugins/axios'],
  components: true,
  css: ['~/assets/stylesheet/style.sass'],
  buildModules: ['@nuxtjs/style-resources'],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/dayjs',
    'nuxt-user-agent',
    '@nuxtjs/sitemap',
  ],
  axios: { proxy: true },
  env: {
    CMSKEY: process.env.CMSKEY,
  },
  styleResources: {
    sass: ['~/assets/stylesheet/style.sass'],
  },
  'google-gtag': {
    id: 'G-SDCDK9VMLF',
    debug: false,
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
      twitterCard: 'summary_large_image',
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
      skipWaiting: false,
      clientsClaim: false,
    },
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: host,
  },
  generate: {
    crawler: true,
  },
  build: {},
}
