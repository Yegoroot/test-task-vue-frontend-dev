<template>
  <div class="contacts">
    <h1> {{ title }} </h1>
    <div>
      <input
        :disabled="disabled"
        type="text"
        class="input"
        name="name"
        placeholder="Name"
        :value="user.name"
        @input="onChange"
      >
      <input
        :disabled="disabled"
        type="text"
        placeholder="Last Name"
        class="input"
        name="lastName"
        :value="user.lastName"
        @input="onChange"
      >
      <input
        :disabled="disabled"
        placeholder="Telephone"
        type="text"
        class="input"
        name="tel"
        :value="user.tel"
        @input="onChange"
      >
      <input
        :disabled="disabled"
        type="text"
        placeholder="City"
        class="input"
        name="city"
        :value="user.city"
        @input="onChange"
      >
      <input
        :disabled="disabled"
        type="text"
        placeholder="Email"
        class="input"
        name="email"
        :value="user.email"
        @input="onChange"
      >
    </div>
    <div>
      <div
        class="button"
        @click="onReset"
      >
        Reset Changes
      </div>
      <div
        class="button button-edit"
        @click="onSave"
      >
        Save Contact
      </div>
    </div>
  </div>
</template>

<script>
import { getContact } from '@/services/contacts'

export default {
  data() {
    return {
      disabled: false,
      user: getContact(this.$route.params.id),
      title: `Edit contact - ${getContact(this.$route.params.id).name}`,
      inputs: []
    }
  },

  methods: {
    onChange(val){
      const { name, value } = val.target 
      this.user[name] = value
    },
    onSave() {
      console.warn('sent')
    },
    onReset() {
      this.user = JSON.parse(localStorage.getItem('currentContact'))
    }
  }
}
</script>

<style >
.input {
  padding: 10px;
  margin-right: 16px;
  border: solid 1px #ccc;
  border-radius: 4px;
}
.button-edit {
  margin-left: 8px;
}
</style>