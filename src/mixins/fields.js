export const fieldsMixin = {
  data(){
    return {
      fields: this.$store.getters.getFields
    }
  },
  computed: {
    fieldsToObj() {
      const obj = {}
      this.fields.map( field => obj[field.name] = field )
      console.log(obj)
      return obj
    }
  }
}