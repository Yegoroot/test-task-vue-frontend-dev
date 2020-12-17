<template>
  <div class="contacts">
    <h1> {{ title }} </h1>
    <div>
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
import { fieldsMixin } from '@/mixins/fields'
export default {
  mixins: [fieldsMixin],
  data() {
    return {
      disabled: false,
      title: `Edit contact - ${this.$store.getters.getContact(this.$route.params.id).name}`,
      contact: this.$store.getters.getContact(this.$route.params.id)
    }
  },
  methods: {
    onChange(val){
      const { name, value } = val.target 
      this.contact[name] = value
    },
    onSave() {
      this.$store.dispatch('saveContact', this.contact)
      this.$router.push('/contacts') // @FIXME - need push after changes
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