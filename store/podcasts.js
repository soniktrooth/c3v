import 'vuex'

export const state = () => ({
  episodes: [],
  services: [
    {
      name: 'Apple Podcasts',
      url: 'https://itunes.apple.com/us/podcast/c3-vancouver/id1416953951',
      colour: '#9933CC',
      icon: 'IconApplePodcasts',
      textDark: false
    },
    {
      name: 'Breaker',
      url: 'https://www.breaker.audio/c3-church-vancouver',
      colour: '#5D9FFF',
      icon: 'IconBreaker',
      textDark: false
    },
    {
      name: 'Castbox',
      url: 'https://castbox.fm/channel/id1410862?country=us',
      colour: '#FF6D34',
      icon: 'IconCastbox',
      textDark: true
    },
    {
      name: 'Google Podcasts',
      url:
        'https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy81NjkyYzRjL3BvZGNhc3QvcnNz',
      colour: '#4285F4',
      icon: 'IcongooglePodcasts',
      textDark: false
    },
    {
      name: 'Overcast',
      url: 'https://overcast.fm/itunes1416953951/c3-church-vancouver',
      colour: '#fc7e0f',
      icon: 'IconOvercast',
      textDark: true
    },
    {
      name: 'Pocket Casts',
      url: 'https://pca.st/5ozW',
      colour: '#F74132',
      icon: 'IconPocketCasts',
      textDark: false
    },
    {
      name: 'Radio Public',
      url: 'https://radiopublic.com/c3-church-vancouver-Wa3lEb',
      colour: '#CE202B',
      icon: 'IconRadioPublic',
      textDark: false
    },
    {
      name: 'Spotify',
      url: 'https://open.spotify.com/show/0p2pmUwFkTwlili2BEZXSa',
      colour: '#1ED760',
      icon: 'IconSpotify',
      textDark: true
    }
  ]
})

export const mutations = {
  add(state, podcasts) {
    const pc = []
    podcasts.forEach((item, i) => {
      pc.push(item.attributes)
    })

    state.episodes = _.orderBy(pc, 'id', 'asc')
  },
  load(state, i) {
    _.find(state.episodes, { id: i }).load = true
  }
}
