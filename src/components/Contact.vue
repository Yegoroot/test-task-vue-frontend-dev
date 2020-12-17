<template>
  <div class="contact">
    <div
      v-for="field in fields"
      :key="field.name"
      :class="`contact__${field.name}`"
    >
      {{ contact[field.name] }}
    </div>

    <div class="contact__actions">
      <span
        class="contact__edit"
        role="img"
        aria-label="show"
      > <router-link :to="`/contacts/${contact.id}`">👈</router-link></span>
      <span
        class="contact__edit"
        role="img"
        aria-label="edit"
      > <router-link :to="`/contacts/${contact.id}/edit`">✏️</router-link></span>
      <span
        class="contact__delete"
        role="img"
        aria-label="delete"
        @click="() => deleteContact(contact.id)"
      >❌</span>
    </div>
  </div>
</template>

<script>
import { getFields } from '@/mock/fields'

export default {
  name: 'Contact',
  props: {
    contact: { type: Object, default: ()=> {} },
    onDelete: { type: Function, default: ()=> console.warn('default props func') }
  },
  emits: ['onDelete'],
  data() {
    return {
      fields: getFields()
    }
  },

  methods: {
    deleteContact(id) {
      this.$emit('onDelete', id)
    }
  }
    
}
</script>

<style >
.contact {
  display: grid;
  grid-template-columns: 60px 1fr 1fr 1fr 1fr 1fr 160px;
  padding: 30px;
  align-items: center;
  border-bottom: solid 1px #cccccc30;
}
.contact:hover {
  background: #42b98305;
}
.contact__name {
  font-weight: bold;
}
.contact__lastName {
  font-weight: bold;
}
.contact__actions {
  padding: 10px;
}
.contact__actions span {
  padding: 8px;
  cursor: pointer;
  border: solid 1px #ccc0;
  border-radius: 6px;
}
.contact__delete {
  margin-left: 4px;
}
.contact__actions span:hover {
  border: solid 1px #ccc;
}
</style>