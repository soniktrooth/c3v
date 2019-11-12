import 'vuex'
const _ = require('lodash')

export const state = () => ({
  list: []
})

export const getters = {
  getFeatured(state) {
    return _.filter(state.list, item => {
      return 'featured' in item.attributes && item.attributes.featured === true
    })
  },
  getList(state) {
    return _.chain(state.list)
      .reject(event => {
        return (
          'featured' in event.attributes && event.attributes.featured === true
        )
      })
      .filter(event => {
        // Assume not expired because some events just won't have an exp date.
        let notExpired = true
        if ('exp_date' in event.attributes) {
          notExpired = new Date() < new Date(event.attributes.exp_date)
        }
        return notExpired
      })
      .sortBy(event => {
        return event.attributes.order
      })
  }
}

export const mutations = {
  add(state, events) {
    state.list = events
  }
}
