<template>
  <div class="contacts">
    <h1> {{ title }} </h1>
    <div v-if="isEdited">
      <input
        v-for="(val, key) in contact"
        :key="key"
        :disabled="fieldsToObj[key].primary"
        type="text"
        class="input"
        :name="key"
        :placeholder="fieldsToObj[key].title"
        :value="val"
        @input="onChange"
      >
    </div>
    <div v-if="!isEdited">
      <input
        v-for="(val, key) in fieldsToObj"
        :key="key"
        :disabled="fieldsToObj[key].primary"
        type="text"
        class="input"
        :name="key"
        :placeholder="fieldsToObj[key].title"
        :value="newContact[fieldsToObj[key].name]"
        @input="onChangeNew"
      >
    </div>
    <div>
      <div
        v-if="isEdited"
        class="button"
        @click="onReset"
      >
        Reset to previous
      </div>
      <div
        v-if="isEdited"
        class="button button-edit"
        @click="onSave"
      >
        Save Changes
      </div>
      <div
        v-else
        class="button button-edit"
        @click="onCreate"
      >
        Create Contact
      </div>
    </div>
  </div>
</template>

<script>
import { fieldsMixin } from '@/mixins/fields'
import shortid from 'shortid'

export default {
  mixins: [fieldsMixin],
  data() {
    return {
      contact: this.$store.getters.getContact(this.$route.params.id),
      isEdited: this.$route.params.id ? true : false,
      newContact: {
        id: shortid.generate()
      }
    }
  },
  computed: {
    title() {
      return this.isEdited ? 'Edit Contact' : 'Create new Contact'
    }
  },
  methods: {
    onChange(val){
      const { name, value } = val.target 
      this.contact[name] = value
    },
    onChangeNew(val){
      const { name, value } = val.target 
      this.newContact[name] = value
    },
    onSave() {
      this.$store.dispatch('saveContact', this.contact)
      this.$router.push('/contacts') // @FIXME - need push after changes
    },
    onCreate() {
      this.$store.dispatch('createContact', this.newContact)
      this.$router.push('/contacts') // @FIXME - need push after create
    },
    onReset() {
      this.contact = JSON.parse(localStorage.getItem('currentContact'))
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
  margin-bottom: 16px;
}
.button-edit {
  margin-left: 8px;
}
</style>