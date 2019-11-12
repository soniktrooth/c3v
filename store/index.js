import 'vuex'

export const state = () => ({
  mainMenu: [
    {
      title: 'Find us',
      url: '#find-us'
    },
    {
      title: 'Events',
      url: '#events'
    },
    {
      title: 'About us',
      url: '#about-us'
    },
    {
      title: 'Podcast',
      url: '#podcast'
    },
    {
      title: 'Giving',
      url: '#giving'
    }
  ],
  socialMenu: {
    instagram: {
      url: 'https://www.instagram.com/c3vancouver.ca/',
      icon: 'IconInstagram'
    },
    Twitter: {
      url: 'https://twitter.com/c3vancouver/',
      icon: 'IconTwitter'
    },
    facebook: {
      url: 'https://www.facebook.com/C3Vancouver/',
      icon: 'IconFacebook'
    }
  },
  c3vAddress: {
    street: '2520 Ontario Street',
    locality: 'Vancouver',
    region: 'British Columbia',
    postcode: 'V5T1V6'
  },
  bodyScroll: true,
  mobile: true
})

// Note the duplication in fetchEvents and fetchPodcasts. Webpack requires
// literal strings for require.context because it can't resolve runtime
// variables during bundling. This prevents a generic function for loading the
// markdown files.
export const actions = {
  fetchEvents({ commit }) {
    // Grab all the event markdown files and add them to the store.
    const md = require.context('~/content/events', true, /\.md$/)
    const mdContent = []
    md.keys().forEach(function(key) {
      mdContent.push(md(key))
    })

    commit('events/add', mdContent)
  },
  fetchPodcasts({ commit }) {
    // Grab all the podcast markdown files and add them to the store.
    const md = require.context('~/content/podcasts', true, /\.md$/)
    const mdContent = []
    md.keys().forEach(function(key) {
      mdContent.push(md(key))
    })
    commit('podcasts/add', mdContent)
  },
  bodyScrollToggle() {
    const vpH = window.innerHeight
    const body = document.getElementsByTagName('BODY')[0]
    document.documentElement.style.height = vpH.toString() + 'px'
    body.style.height = vpH.toString() + 'px'
    body.document.getElementsByTagName('BODY')[0].classList.toggle('no-scroll')
  },
  setMobile({ commit }, mobile) {
    commit('SET_MOBILE', mobile)
  }
}

export const mutations = {
  SET_MOBILE(state, mobile) {
    state.mobile = mobile
  }
}
