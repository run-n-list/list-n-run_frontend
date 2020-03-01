<template lang="pug">
  .inner-page
    LrNavbar
      ul.main-nav
        li.main-nav__item
          router-link(:to="{name: 'home'}") Home
        li.main-nav__item
          router-link(:to="{name: 'about'}") About
    LrSidebar
    router-view
</template>

<script>
import '@/assets/scss/main.scss'
import LrNavbar from '../components/LrNavbar'
import LrSidebar from '../components/LrSidebar'

export default {
  components: {
    LrNavbar,
    LrSidebar
  }
}
</script>

<style lang="scss">
</style>
