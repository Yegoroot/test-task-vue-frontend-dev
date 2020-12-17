import { getContacts } from '@/mock/contacts'

export const getContact = (id) => {
  let contact = {}
  contact = getContacts().find(u => u.id == id) || {}
  localStorage.setItem('currentContact', JSON.stringify(contact))
  return contact
}