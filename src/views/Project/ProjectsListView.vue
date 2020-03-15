<template lang="pug">
  section.projects-list
    .projects-list__wrapper.wrapper
      h1.title.visually-hidden Projects
      ul.projects__list.projects
        li.projects__item
          img.projects__icon(src="@/assets/img/icons/project.png")
          ul.projects__desc
            li.projects__desc-title Изучить JavaScript
            li.projects__desc-text
              |Изучить язык javascript на практике по курсам на ютубе.
              |Выучить основы языка, необходимый стек для начала работы,
              | выполнить учебный проект “Поиск по гитхаб” с использованием
              | апи. Достаточным уровнем владения языком будет реализация
              | собственного реактивного фреймворка на подобии
              | Vue.js/Angular.js/React. Разумеется с сильно урезанными
              | возможностями. Так же в целях развития кругозора и общего
              | понимания внутреннего устройства языка необходимо разработать
              | свой микрофреймворк на паттерне PIDOR.
            li.projects__desc-edit
          ul.projects__info
            li.projects__tasks
            li.projects__likes
            li.projects__comments
        li.projects__item
          img.projects__icon(src="@/assets/img/icons/project.png")
          ul.projects__desc
            li.projects__desc-title Изучить JavaScript
            li.projects__desc-text
              |Изучить язык javascript на практике по курсам на ютубе.
              |Выучить основы языка, необходимый стек для начала работы,
              | выполнить учебный проект “Поиск по гитхаб” с использованием
              | апи. Достаточным уровнем владения языком будет реализация
              | собственного реактивного фреймворка на подобии
              | Vue.js/Angular.js/React. Разумеется с сильно урезанными
              | возможностями. Так же в целях развития кругозора и общего
              | понимания внутреннего устройства языка необходимо разработать
              | свой микрофреймворк на паттерне PIDOR.
            li.projects__desc-edit
          ul.projects__info
            li.projects__tasks
            li.projects__likes
            li.projects__comments

</template>
<style lang="scss">
.projects__list {
  display: flex;
  flex-direction: column;
  margin-top: -30px;
}
.projects__item {
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  background: $bg-light;
  background-blend-mode: soft-light, normal;
  box-shadow: $shadow-normal;
  border-radius: $radius-big;
}

.projects__icon {
  width: 314px;
  height: 294px;
}

.projects__desc-title {
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 33px;
  color: $text-dark;
}

.projects__desc-text {
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: black;
}

</style>
<script>
export default {
  name: 'projects'
}
</script>
