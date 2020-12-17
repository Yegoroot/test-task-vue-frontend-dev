<template>
  <div class="fields">
    <h1> Fields of Contact </h1>
    <div
      v-for="field in fields"
      :key="field.name"
      class="fields__item"
    >
      <div class="fields__title">
        {{ field.title }}
      </div>
      <div class="fields__name">
        {{ field.name }}
      </div>
    </div>
    <div class="fields__add">
      <input
        type="text"
        class="input"
        placeholder="Name"
        name="name"
        :value="newField.name"
        @input="onChange"
      >
      <input
        type="text"
        placeholder="Title"
        class="input"
        name="title"
        :value="newField.title"
        @input="onChange"
      >
      <div
        class="button"
        @click="onCreate"
      >
        Create Field
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      newField: {}
    }
  },
  computed: {
    fields() {
      console.log(this.fields)
      return this.$store.getters.getFields
    }
  },

  methods: {
    onChange(val) {
      const { name, value } = val.target 
      this.newField[name] = value
    },
    onCreate() {
      this.$store.dispatch('createField', this.newField )
      this.newField = {}
    }
  }
}
</script>

<style scoped>
.fields__add {
  margin-top: 40px;
}
.fields__item {
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.fields__title {
  font-size: 1.3rem;
  font-weight: bold;
  margin-right: 8px;
}
.fields__name {}

</style>