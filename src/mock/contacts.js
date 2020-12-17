import shortid from 'shortid'

export const getContacts = () => ([
  {
    id: shortid.generate(),
    name: 'Петр',
    lastName: 'Первый',
    tel: '+1 000 000 00 01',
    city: 'Санкт Петербург',
    email: 'petr1iy@mail.com'
  },
  {
    id: shortid.generate(),
    name: 'John',
    lastName: 'Nhoj',
    tel: '+0 999 999 99 99',
    city: 'London',
    email: 'jnhoj@gmail.com'
  },
  {
    id: shortid.generate(),
    name: 'Keyn',
    lastName: 'Melnikov',
    tel: '+1 0000 123 789',
    city: 'New York',
    email: 'keynm@gmail.com'
  }
])
