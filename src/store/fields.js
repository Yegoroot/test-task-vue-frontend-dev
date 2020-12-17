export default {
  state: {
    fields: []
  },
  getters: {
    getFields: state => state.fields || []
  },
  actions: {
    setFields({ commit }, payload) {
      commit('SET_FIELDS', payload)
    },
    createField({ commit }, payload) {
      commit('CREATE_FIELD', payload)
    }
    
  },
  mutations: {
    SET_FIELDS(state, payload) {
      state.fields = payload
    } ,
    CREATE_FIELD(state, field) {
      console.log(field)
      state.fields.push(field)
    } 
  }
}