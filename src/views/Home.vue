<template lang="pug">
  div.home
    h1.title.visually-hidden Home
    a(@click="login()") Login with Google
    <br>
    a(@click="logout()") Logout
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'home',
  methods: mapActions('auth', ['login', 'logout'])
}
</script>

<style lang="scss">

</style>
