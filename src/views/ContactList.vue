<template>
  <div class="contacts">
    <h1>My Contact List 📖</h1>
    <div
      v-for="contact in contacts"
      :key="contact.id"
    >
      <Contact
        :key="contact.id"
        :contact="contact"
        @onDelete="onDelete"
      />
    </div>
    <router-link
      :to="`/contacts/create`"
      class="contacts__create button"
    >
      Create New
    </router-link>
  </div>
</template>

<script>

import Contact from '@/components/Contact'

export default {
  name: 'Contacts',
  components: { Contact },
  computed: {
    contacts() {
      return this.$store.getters.getContacts
    }
  },
  methods: {
    onDelete(id) {
      if (confirm('Delete this line'))
        this.$store.dispatch('deleteContact', id)
    }
  }
}

</script>

<style  scoped>
.contacts {
  margin-bottom: 80px;
}
.contacts__create {
  bottom: 50px;
  position: fixed;
  right: 50px;
}

</style>

