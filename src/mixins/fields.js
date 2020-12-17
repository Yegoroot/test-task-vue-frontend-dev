export const fieldsMixin = {
  data(){
    return {
      fields: this.$store.getters.fields
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