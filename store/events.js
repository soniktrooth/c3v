import 'vuex'

export const state = () => ({
  list: []
})

export const mutations = {
  add(state, events) {
    state.list = events
  }
}
