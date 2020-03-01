<template lang="pug">
  section.section-sidebar
    h2.section-sidebar__title.visually-hidden Sidebar
    .section-sidebar__wrapper.wrapper
      .section-sidebar__menu.menu
        ul.menu__list
          li.menu__item
            img.menu__svg
            a(src="#").menu__link Задачи
          li.menu__item
            img.menu__svg
            a(src="#").menu__link Проекты
          li.menu__item
            img.menu__svg
            a(src="#").menu__link Заметки
          li.menu__item
            img.menu__svg
            a(src="#").menu__link Лента
          li.menu__item
            img.menu__svg
            a(src="#").menu__link Статистика
          li.menu__item
            img.menu__svg
            a(src="#").menu__link Диалоги
      .section-sidebar__statistic.statistic
        ul.statistic__list
          li.statistic__item
            span.statistic__text Неделя:
            span.statistic__bar  Progress
          li.statistic__item
            span.statistic__text Месяц:
            span.statistic__bar  Progress
          li.statistic__item
            span.statistic__text Год:
            span.statistic__bar  Progress
</template>
<script>

export default {
  name: 'sidebar'
}
</script>
<style lang="scss">
.section-sidebar {
  width: 30%;
  padding-top: 28px;
  padding-left: 62px;
  padding-right: 62px;
}

.section-sidebar__wrapper {
  display: flex;
  flex-direction: column;
  padding-top: 28px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom:32px;
  background: linear-gradient(356.2deg, rgba(0, 0, 0, 0.4) 0%, rgba(255, 255, 255, 0.4) 105.18%), #EBECF0;
  background-blend-mode: soft-light, normal;
  box-shadow: 10px 10px 20px #A6ABBD, -10px -10px 20px #FAFBFF;
  border-radius: 50px;
}

.section-sidebar__menu {
  display: flex;
  flex-direction: column;
}

.menu__list {
  padding: 0;
  margin: 0;
}

.menu__item {
  display: flex;
  justify-content: flex-start;
  padding: 13px;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 33px;
  color: #4F4F4F;
}

.menu__item:hover {
  background: linear-gradient(350.28deg, rgba(0, 0, 0, 0.4) 0%, rgba(255, 255, 255, 0.4) 105.18%), #EBECF0;
  background-blend-mode: soft-light, normal;
  box-shadow: 5px 5px 10px #A6ABBD, -5px -5px 10px #FAFBFF;
  border-radius: 20px;
  cursor: pointer;
}

.menu__svg {
  margin-top: 8px;
  margin-right: 10px;
  width: 20px;
  height: 20px;
}

.section-sidebar__statistic {
  padding: 0;
  margin: 0;
  margin-top: 307px;
}

.statistic__list {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  margin-top: -20px;
}

.statistic__item {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #4F4F4F;
}

.statistic__bar {
  margin-top: 8px;
}

</style>
