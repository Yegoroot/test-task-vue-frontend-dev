
export default {
  state: {
    contacts: [] 
  },
  getters: {
    getContacts: state => state.contacts || [],
    getContact: state => id => {
      const contact = state.contacts.find(c => c.id == id ) || {}
      localStorage.setItem('currentContact', JSON.stringify(contact))
      return contact
    }
  },
  actions: {
    setContacts({ commit }, payload) {
      commit('SET_CONTACTS', payload)
    },
    deleteContact({ commit }, payload) {
      commit('DELETE_CONTACT', payload)
    },
    saveContact({ commit }, payload) {
      commit('SAVE_CONTACT', payload)
    },
    createContact({ commit }, payload) {
      commit('CREATE_CONTACT', payload)
    }
  },
  mutations: {
    SET_CONTACTS(state, contacts) {
      state.contacts = contacts
    } ,
    DELETE_CONTACT(state, id) {
      state.contacts = state.contacts.filter((el)=> el.id !== id)
    },
    SAVE_CONTACT(state, contact) {
      state.contacts = state.contacts.map(c=> {
        if (c.id === contact.id) {
          return contact
        } 
        return c
      })
    },
    CREATE_CONTACT(state, newContact) {
      state.contacts.push(newContact)
    }
  }

}
