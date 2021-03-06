export const state = () => ({
  works: [
    {
      title: 'Coalowl',
      thumbnail: '/dummy/thumbnail/coalowl.png',
      created: 'Mar 6.2020',
    },
    {
      title: 'UK',
      thumbnail: '/dummy/thumbnail/uk.png',
      created: 'Mar 6.2020',
    },
    {
      title: 'Yudohu',
      thumbnail: '/dummy/thumbnail/yudouhu.png',
      created: 'Mar 6.2020',
    },
    {
      title: 'HINOKI MEDIA',
      thumbnail: '/dummy/thumbnail/hinoki_media.png',
      created: 'Mar 6.2020',
    },
  ],
  latestWorks: [],
})

export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('getWorks')
  },
  getWorks({ commit }) {
    const worksArray = []
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
}
