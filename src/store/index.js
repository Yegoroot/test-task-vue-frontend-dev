import { createStore } from 'vuex'
import contacts from './contacts'
import fields from './fields'

export default createStore({

  modules: {
    contacts: {
      ...contacts
    },
    fields: {
      ...fields
    }
  }
})
