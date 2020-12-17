export default {
  state: {
    fields: []
  },
  getters: {
    fields: state => state.fields || []
  },
  actions: {
    setFields({ commit }, payload) {
      commit('SET_FIELDS', payload)
    }
  },
  mutations: {
    SET_FIELDS(state, payload) {
      state.fields = payload
    } 
  }
}