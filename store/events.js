import 'vuex'

export const state = () => ({
  list: [],
  featured: []
})

export const mutations = {
  add(state, events) {
    // eslint-disable-next-line
    //console.log(events)
    events.forEach((item, i) => {
      debugger
      // If the event has the featured flag then remove it and add it to the
      // featured list.
      // eslint-disable-next-line
      console.log(item.attributes.title)
      if (item.attributes.featured) {
        state.featured.push(events[i])
        events.splice(i, 1)
        // eslint-disable-next-line
        console.log('here 1')
      } else {
        const pub = Date.parse(item.attributes.pub_date)
        const exp = Date.parse(item.attributes.exp_date)
        const now = Date.now()
        // eslint-disable-next-line
        console.log(pub < now)
        // eslint-disable-next-line
        console.log(exp > now)
        // eslint-disable-next-line
        //console.log(now)
        if (pub < now && exp > now) {
          events.splice(i, 1)
          // eslint-disable-next-line
          console.log('here 2')
        }
      }
    })
    // eslint-disable-next-line
    console.log(events);
    state.list = events
  }
}
