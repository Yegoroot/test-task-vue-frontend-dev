<template>
  <div class="contacts">
    <h1> {{ title }} </h1>
    <div>
      <input
        v-for="input in contactToArray"
        :key="input[0]"
        :disabled="fieldsToObj[input[0]].primary"
        type="text"
        class="input"
        :name="input[0]"
        :placeholder="fieldsToObj[input[0]].title"
        :value="input[1]"
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

export default {
  data() {
    return {
      disabled: false,
      title: `Edit contact - ${this.$store.getters.getContact(this.$route.params.id).name}`,
      contact: this.$store.getters.getContact(this.$route.params.id),
      fields: this.$store.getters.fields
    }
  },
  computed: {
    fieldsToObj() {
      const obj = {}
      this.fields.map( field => obj[field.name] = field )
      return obj
    },
    contactToArray() {
      return Object.entries(this.contact)
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
}
.button-edit {
  margin-left: 8px;
}
</style>