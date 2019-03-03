import 'vuex'

export const state = () => ({
  list: [],
  featured: []
})

export const mutations = {
  add(state, events) {
    events.forEach((item, i) => {
      // If the event has the featured flag then remove it and add it to the
      // featured list.
      if (item.attributes.featured) {
        state.featured.push(events[i])
        events.splice(i, 1)
      } else {
        // Remove expired posts from the list.
        const pub = Date.parse(item.attributes.pub_date)
        const exp = Date.parse(item.attributes.exp_date)
        const now = Date.now()
        if (pub < now && exp > now) {
          events.splice(i, 1)
        }
      }
    })
    // eslint-disable-next-line
    state.list = _.orderBy(events, 'attributes.order', 'asc')
  }
}
