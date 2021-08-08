import dayjs from 'dayjs'

export const state = () => ({
  works: [],
  latestWorks: [],
  lang: 'jp',
})

export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('getWorks')
  },
  async getWorks({ commit, state }) {
    const defaultHeader = {
      headers: { 'X-API-KEY': process.env.CMSKEY },
    }
    const { data } = await this.$axios.get(
      'https://zypressen.microcms.io/api/v1/works?limit=999&orders=created',
      defaultHeader
    )
    const originalWorksArray = data.contents
    const newWorksArray = []
    const originalWorksLength = data.contents.length - 1
    const zeroPadding = (i) => {
      return ('000' + i).slice(-3)
    }
    const setId = (str) => str.toLowerCase().replace(' ', '_')
    originalWorksArray.forEach((item, i) => {
      const nextNum = i - 1 === -1 ? originalWorksLength : i - 1
      const imageArray = []
      if (item.images) {
        item.images.forEach((item, i) => {
          imageArray.push(item.IMAGE.url)
        })
      }
      const worksObj = {
        num: zeroPadding(i),
        nextLinkId: setId(originalWorksArray[nextNum].title),
        title: item.title,
        projectLink: item.link,
        linkId: setId(item.title),
        created: dayjs(item.created).format('MMM , D , YYYY'),
        thumbnailVertical: item.thumbnail_vertical.url,
        thumbnailHorizontal: item.thumbnail_horizontal.url,
        nextthumbnailHorizontal:
          originalWorksArray[nextNum].thumbnail_horizontal.url,
        media: item.media.name,
        client: item.client,
        bodyEn: item.body_en,
        bodyJa: item.body_ja,
        gallery: imageArray,
      }
      newWorksArray.push(worksObj)
    })
    state.works = newWorksArray.reverse()
    // commit('setWorks', newWorksArray.reverse())
  },
}

export const mutations = {
  setWorks(state, works) {
    state.works = works
  },
  setLatestWorks(state, works) {
    const worksArray = works.slice(0, 5)
    const latestWorksArray = worksArray.map((item, index) => {
      const obj = item
      obj.index = index + 1
      return obj
    })
    state.latestWorks = latestWorksArray
  },
  changeLang(state, lang) {
    state.lang = lang
  },
}
