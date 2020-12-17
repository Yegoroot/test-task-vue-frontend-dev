<template>
  <div class="contacts">
    <h1> Show contact - {{ contact.name }} {{ contact.lastName }}</h1>
    <div class="contact">
      <div
        v-for="(val, key) in contact"
        :key="key"
      >
        <span>{{ fieldsToObj[key].title }}</span>
        <span>{{ val }}</span>
      </div>
    </div>
  
    <router-link
      :to="`/contacts/${contact.id}/edit`"
      class="button-edit button"
    >
      Edit Contact
    </router-link>
  </div>
</template>

<script>
import { fieldsMixin } from '@/mixins/fields'
export default {
  mixins: [fieldsMixin],
  data() {
    return {
      contact: this.$store.getters.getContact(this.$route.params.id)
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
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
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