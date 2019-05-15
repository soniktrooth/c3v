import 'vuex'
const _ = require('lodash')

export const state = () => ({
  list: [],
  featured: []
})

export const mutations = {
  add(state, events) {
    // Pull out featured image items and stick them in the featured store.
    const featured = _.find(events, item => {
      return item.attributes.featured
    })
    state.featured.push(featured)
    _.remove(events, featured)

    // Remove events that shouldn't show based on publish or expiry dates.
    _.remove(events, item => {
      const pub = Date.parse(item.attributes.pub_date)
      const exp = Date.parse(item.attributes.exp_date)
      const now = Date.now()
      return exp < now || pub > now
    })

    // Sort the list by order.
    state.list = _.orderBy(events, 'attributes.order', 'asc')
  }
}
