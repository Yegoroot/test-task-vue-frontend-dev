
export default {
  state: {
    contacts: [] 
  },
  getters: {
    getContacts: state => state.contacts || []
  },
  actions: {
    setContacts({ commit }, payload) {
      commit('SET_CONTACTS', payload)
    },
    deleteContact({ commit }, payload) {
      commit('DELETE_CONTACTS', payload)
    }
  },
  mutations: {
    SET_CONTACTS(state, payload) {
      state.contacts = payload
    } ,
    DELETE_CONTACTS(state, payload) {
      console.log(state.contacts.filter((el)=> el.id !== payload), payload)
      state.contacts = state.contacts.filter((el)=> el.id !== payload)
    } 
  }

}
