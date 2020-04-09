<template lang="pug">
  aside.main-sidebar
    ul.main-sidebar__menu.sidebar-menu
      li.sidebar-menu__item
        router-link(:to="{name: 'tasks'}").sidebar-menu__link.sidebar-menu__link--active
          img.sidebar-menu__svg
          span.sidebar-menu__text Задачи
      li.sidebar-menu__item
        router-link(:to="{name: 'projects'}").sidebar-menu__link
          img.sidebar-menu__svg
          span.sidebar-menu__text Проекты
      li.sidebar-menu__item
        router-link(:to="{name: 'notes'}").sidebar-menu__link
          img.sidebar-menu__svg
          span.sidebar-menu__text Заметки
      li.sidebar-menu__item
        router-link(:to="{name: 'feed'}").sidebar-menu__link
          img.sidebar-menu__svg
          span.sidebar-menu__text Лента
      li.sidebar-menu__item
        router-link(:to="{name: 'statistics'}").sidebar-menu__link
          img.sidebar-menu__svg
          span.sidebar-menu__text Статистика
      li.sidebar-menu__item
        router-link(:to="{name: 'dialogs'}").sidebar-menu__link
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
  text-decoration: none;
  border-radius: $radius-normal;
  color: $text-dark;
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
  margin-left: px2rem(12);
  font-size: px2rem(28);
}

.main-sidebar__statistic {
  margin-top: auto;
  width: 100%;
  font-size: px2rem(18);
}

.sidebar-statistic__item {
  width: 100%;
  margin-top: px2rem(20);
}

.sidebar-statistic__bar {
  margin-top: px2rem(8);
  width: 100%;
  height: px2rem(14);
  background: $bg-green;
}
</style>
