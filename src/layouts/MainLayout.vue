<template lang="pug">
  .inner-page
    LrNavbar
      ul.main-nav
        li.main-nav__item
          router-link(:to="{name: 'home'}") Home
        li.main-nav__item
          router-link(:to="{name: 'about'}") About
    .page-bottom
      LrSidebar
      main.page-main
        router-view
</template>

<script>
import '@/assets/scss/main.scss'
import LrNavbar from '../components/LrNavbar'
import LrSidebar from '../components/LrSidebar'
import LrDialogs from '../components/LrDialogs'
import LrFeed from '../components/LrFeed'
import LrNotes from '../components/LrNotes'
import LrProjects from '../components/LrProjects'
import LrStatistics from '../components/LrStatistics'
import LrTasks from '../components/LrTasks'

export default {
  components: {
    LrNavbar,
    LrSidebar,
    LrDialogs,
    LrFeed,
    LrNotes,
    LrProjects,
    LrStatistics,
    LrTasks
  }
}
</script>

<style lang="scss">
body {
  background: $bg-light;
  background-blend-mode: $bg-mode;
}

* {
  background-blend-mode: inherit;
}

.inner-page {
  width: 1316px;
  min-height: 100vh;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
}

.page-bottom {
  flex-grow: 1;
  display: flex;
}

.page-main {
  flex-grow: 1;
  align-items: stretch;
}
</style>
