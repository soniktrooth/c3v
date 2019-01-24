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
  }
})
