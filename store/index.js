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
      url: '#',
      icon: 'IconInstagram'
    },
    Twitter: {
      url: '#',
      icon: 'IconTwitter'
    },
    facebook: {
      url: '#',
      icon: 'IconFacebook'
    }
  }
})
