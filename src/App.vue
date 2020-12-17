<template>
  <div>
    <div id="nav">
      <router-link to="/">
        Home
      </router-link> |
      <router-link to="/fields">
        Fields
      </router-link> |
      <router-link to="/contacts">
        Contacts
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import { getFields, getContacts } from '@/mock'

export default {
  created() {
    this.$store.dispatch('setFields', getFields())
    this.$store.dispatch('setContacts', getContacts())
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  max-width: 1400px;
  margin: auto;
  margin-top: 70px;
}

h1 {
  color: #2c3e50;
  margin-top: 50px;
  margin-bottom: 100px;
}

#nav {
  display: flex;
  justify-content: flex-end;
}
#nav a {
  margin-left: 8px;
  margin-right: 8px;
}
a {
  font-weight: bold;
  color: #2c3e50;
}
a.router-link-exact-active {
  color: #42b983;
}

.button {
  padding: 14px 18px;
  background: #42b983;
  border-radius: 4px;
  text-transform: uppercase;
  text-decoration: none;
  color: #fff;
  display: inline-block;
}
.button:hover {
  background: #2c3e50;
  color: #f6f6f6;
}

.button-edit {
  margin-top: 40px;
}
.input {
  padding: 10px;
  margin-right: 16px;
  border: solid 1px #ccc;
  border-radius: 4px;
  margin-bottom: 16px;
}
</style>
