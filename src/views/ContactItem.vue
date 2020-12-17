<template>
  <div class="contacts">
    <h1> Show contact - {{ user.name }} {{ user.lastName }}</h1>
    <div class="contact">
      <div>
        <span>Name</span>
        <span>{{ user.name }}</span>
      </div>
      <div>
        <span>Last Name</span>
        <span>{{ user.lastName }}</span>
      </div>
      <div>
        <span>Telephone</span>
        <span>{{ user.tel }}</span>
      </div>
      <div>
        <span>City</span>
        <span>{{ user.city }}</span>
      </div>
      <div>
        <span>Email</span>
        <span>{{ user.email }}</span>
      </div>
    </div>
  
    <router-link
      :to="`/contacts/${user.id}/edit`"
      class="button-edit button"
    >
      Edit Contact
    </router-link>
  </div>
</template>

<script>
import { getContacts } from '@/mock/contacts'
export default {
  data() {
    return {
      disabled: true,
      user: getContacts().find(u => u.id == this.$route.params.id) || {}
    }
  }
}
</script>

<style >
.input {
  padding: 10px;
  margin-right: 4px;
  border: solid 1px #ccc;
  border-radius: 4px;
}

.contact {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}
.contact > div {
  display: flex;
  flex-direction: column;
}
.contact > div span:first-child {
  font-weight: bold;
  margin-bottom: 10px;
}
</style>