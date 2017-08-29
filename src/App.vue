<template>
  <div id="app">
    <navbar>
      <h1 slot="brand">
        Site Header
      </h1>
      <router-link to="/" class="navbar-item is-tab">Home</router-link>
      <router-link to="/" class="navbar-item is-tab">Contact</router-link>
    </navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import 'bulma'
import Navbar from './components/bulma/Navbar'
export default {
  name: 'App',
  components: { Navbar }
}
</script>

<style>

</style>
