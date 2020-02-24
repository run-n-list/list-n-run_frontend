<template>
  <div class="home">
    <h1>Home</h1>
    <a @click="login()">Login with Google</a>
    <br>
    <a @click="logout()">Logout</a>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'home',
  methods: mapActions('auth', ['login', 'logout'])
}
</script>
