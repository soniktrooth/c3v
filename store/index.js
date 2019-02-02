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
    },
    {
      title: "'crosstown",
      url: '#crosstown'
    }
  ],
  socialMenu: {
    instagram: {
      url: 'https://www.instagram.com/c3vancouver/',
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
  podcastEpisodes: [
    'https://anchor.fm/c3vancouver/embed/episodes/Faith-Beyond-Belief---Ps--Graham-Fletcher---14th-October-2018-e2dbk2/a-a5rnkp',
    'https://anchor.fm/c3vancouver/embed/episodes/Faith-Cheque---Ps--Graham-Fletcher---7th-October-2018-e2c38p/a-a5o4qj',
    'https://anchor.fm/c3vancouver/embed/episodes/Ps--Graham-Nelson---September-2018-e2b5m6/a-a5l2k5'
  ]
})
