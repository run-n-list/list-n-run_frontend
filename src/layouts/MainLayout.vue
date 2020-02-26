<template lang="pug">
  .inner-page
    nav
      ul.main-nav
        li.main-nav__item
          router-link(:to="{name: 'home'}") Home
        li.main-nav__item
          router-link(:to="{name: 'about'}") About
    sidebar
    router-view
</template>

<script>
import '@/assets/scss/main.scss'
export default {
}
</script>

<style lang="scss">
</style>
