<template lang="pug">
  aside.main-sidebar
    ul.main-sidebar__menu.sidebar-menu
      li.sidebar-menu__item
        a(src="#").sidebar-menu__link.sidebar-menu__link--active
          img.sidebar-menu__svg
          span.sidebar-menu__text Задачи
      li.sidebar-menu__item
        a(src="#").sidebar-menu__link
          img.sidebar-menu__svg
          span.sidebar-menu__text Проекты
      li.sidebar-menu__item
        a(src="#").sidebar-menu__link
          img.sidebar-menu__svg
          span.sidebar-menu__text Заметки
      li.sidebar-menu__item
        a(src="#").sidebar-menu__link
          img.sidebar-menu__svg
          span.sidebar-menu__text Лента
      li.sidebar-menu__item
        a(src="#").sidebar-menu__link
          img.sidebar-menu__svg
          span.sidebar-menu__text Статистика
      li.sidebar-menu__item
        a(src="#").sidebar-menu__link
          img.sidebar-menu__svg
          span.sidebar-menu__text Диалоги
    ul.main-sidebar__statistic.sidebar-statistic
      li.sidebar-statistic__item
        span.sidebar-statistic__text Неделя:  1  |  2  |  3  |  4  |  5  |  6
        .sidebar-statistic__bar(max="100", value="100")
      li.sidebar-statistic__item
        span.sidebar-statistic__text Месяц:  1  |  2  |  3  |  4  |  5  |  6
        .sidebar-statistic__bar(max="100", value="100")
      li.sidebar-statistic__item
        span.sidebar-statistic__text Год:  1  |  2  |  3  |  4  |  5  |  6
        .sidebar-statistic__bar(max="100", value="100")
</template>
<script>

export default {
  name: 'sidebar'
}
</script>
<style lang="scss">
.main-sidebar {
  padding: 28px 20px;
  margin-right: 42px;
  width: 312px;
  background: $bg-light;
  box-shadow: $shadow-normal;
  border-radius: $radius-big;
  display: flex;
  flex-direction: column;
}

.main-sidebar__menu {
  width: 100%;
}

.sidebar-menu__item {
  width: 100%;
  padding: 3px;
}

.sidebar-menu__link {
  width: 100%;
  padding: 8px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: $radius-normal;
}

.sidebar-menu__link:hover,
.sidebar-menu__link.sidebar-menu__link--active {
  background: $bg-light;
  box-shadow: $shadow-minimal;
}

.sidebar-menu__svg {
  width: 20px;
  height: 20px;
}

.sidebar-menu__text {
  margin-left: 12px;
  font-size: 28px;
}

.main-sidebar__statistic {
  margin-top: auto;
  width: 100%;
  font-size: 18px;
}

.sidebar-statistic__item {
  width: 100%;
  margin-top: 20px;
}

.sidebar-statistic__bar {
  margin-top: 8px;
  width: 100%;
  height: 14px;
  background: $bg-green;
}
</style>
