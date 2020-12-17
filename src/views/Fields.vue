<template>
  <div class="contacts">
    <h1> Fields of Contact </h1>
    <div>
      <div
        v-for="field in fields"
        :key="field.name"
      >
        {{ field.title }}
      </div>
      <!-- <input
        :disabled="disabled"
        type="text"
        class="input"
        name="name"
        placeholder="Name"
        :value="user.name"
        @input="onChange"
      > -->
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
import { getFields } from '@/mock/fields'

export default {
  data() {
    return {
      fields: getFields()
    }
  },

  methods: {

  }
}
</script>

