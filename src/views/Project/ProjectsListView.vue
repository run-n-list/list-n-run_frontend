<template lang="pug">
  section.projects-list
    .projects-list__wrapper.wrapper
      h1.title.visually-hidden Projects
      ul.projects__list.projects
        li.projects__item
          img.projects__icon(src="@/assets/img/icons/project.png")
          .projects__content
            ul.projects__about
              li.projects__about-txt
                h3.projects__about-title Изучить JavaScript
                p.projects__about-desc
                  |Изучить язык javascript на практике по курсам на ютубе.
                  |Выучить основы языка, необходимый стек для начала работы,
                  | выполнить учебный проект “Поиск по гитхаб” с использованием
                  | апи. Достаточным уровнем владения языком будет реализация
                  | собственного реактивного фреймворка на подобии
                  | Vue.js/Angular.js/React. Разумеется с сильно урезанными
                  | возможностями. Так же в целях развития кругозора и общего
                  | понимания внутреннего устройства языка необходимо разработать
                  | свой микрофреймворк на паттерне PIDOR.
              li.projects__about-edit.edit
                ul.edit__list
                  li.edit__item
                    button.btn__edit
                      img.btn-icon(
                        src="@/assets/img/icons/icon/Editor/Pen.svg"
                        alt="Редактировать"
                      )
                  li.edit__item
                    button.btn__edit
                      img.btn-icon(
                        src="@/assets/img/icons/icon/Editor/Share.svg"
                        alt="Поделиться"
                        )
                  li.edit__item
                    button.btn__edit
                      img.btn-icon(src="@/assets/img/icons/icon/Editor/Check.svg"
                      alt="Сохранить"
                      )
                  li.edit__item
                    button.btn__edit
                      img.btn-icon(src="@/assets/img/icons/icon/Editor/Trash.svg"
                      alt="Удалить"
                      )
            ul.projects__info.info
              li.info__tasks
                span.info__tasks-text Задачи:  1  |  2  |  3  |  4  |  5  |  6
                .info__tasks-bar(max="100", value="100")
              li.info__btns
                button.info__btn-likes
                  span.info__btn-amount 7
                  img.btn-icon(src="@/assets/img/icons/icon/Editor/Star.svg"
                      alt="Понравилось"
                  )
                button.info__btn-comments
                  span.info__btn-amount 27
                  img.btn-icon(src="@/assets/img/icons/icon/main/Message.svg"
                          alt="Комментарии"
                          )
        li.projects__item
          img.projects__icon(src="@/assets/img/icons/project.png")
          .projects__content
            ul.projects__about
              li.projects__about-txt
                h3.projects__about-title Изучить JavaScript
                p.projects__about-desc
                  |Изучить язык javascript на практике по курсам на ютубе.
                  |Выучить основы языка, необходимый стек для начала работы,
                  | выполнить учебный проект “Поиск по гитхаб” с использованием
                  | апи. Достаточным уровнем владения языком будет реализация
                  | собственного реактивного фреймворка на подобии
                  | Vue.js/Angular.js/React. Разумеется с сильно урезанными
                  | возможностями. Так же в целях развития кругозора и общего
                  | понимания внутреннего устройства языка необходимо разработать
                  | свой микрофреймворк на паттерне PIDOR.
              li.projects__about-edit.edit
                ul.edit__list
                  li.edit__item
                    button.btn__edit
                      img.btn-icon(
                        src="@/assets/img/icons/icon/Editor/Pen.svg"
                        alt="Редактировать"
                      )
                  li.edit__item
                    button.btn__edit
                      img.btn-icon(
                        src="@/assets/img/icons/icon/Editor/Share.svg"
                        alt="Поделиться"
                        )
                  li.edit__item
                    button.btn__edit
                      img.btn-icon(src="@/assets/img/icons/icon/Editor/Check.svg"
                      alt="Сохранить"
                      )
                  li.edit__item
                    button.btn__edit
                      img.btn-icon(src="@/assets/img/icons/icon/Editor/Trash.svg"
                      alt="Удалить"
                      )
            ul.projects__info.info
              li.info__tasks
                span.info__tasks-text Задачи:  1  |  2  |  3  |  4  |  5  |  6
                .info__tasks-bar(max="100", value="100")
              li.info__btns
                button.info__btn-likes
                  span.info__btn-amount 7
                  img.btn-icon(src="@/assets/img/icons/icon/Editor/Star.svg"
                      alt="Понравилось"
                  )
                button.info__btn-comments
                  span.info__btn-amount 27
                  img.btn-icon(src="@/assets/img/icons/icon/main/Message.svg"
                          alt="Комментарии"
                          )
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
  justify-content: space-between;
  flex-wrap: nowrap;
  margin-top: 30px;
  background: $bg-light;
  background-blend-mode: soft-light, normal;
  box-shadow: $shadow-normal;
  border-radius: $radius-big;
}
.projects__icon {
  width: 30%;
}

.projects__content {
  width: 80%;
  margin-left: 35px;
}

.projects__about {
  display: flex;
  justify-content: space-between;
  margin: 0;
}

.projects__about-txt {
  width: 85%;
  padding-top: 20px;
}

.projects__about-title {
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 33px;
  color: $text-dark;
}

.projects__about-desc {
  margin-top: 18px;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: black;
}

.projects__about-edit {
  display: flex;
  padding-right: 16px;
  padding-top: 20px;
}

.edit__list {
  display: flex;
  justify-self: flex-end;
  justify-content: space-between;
  width: 100%;
}

.edit__item {
  margin-right: 8px;
}

.btn__edit {
  width: 28px;
  height: 28px;
  border-radius: $radius-50;
  box-shadow: $shadow-normal;
  background: $bg-light;
  cursor: pointer;
}

.btn-icon{
  width: 14px;
  height: 14px;
}

.projects__info {
  margin-top: 36px;
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.info__tasks-bar {
  margin-top: 8px;
  width: 100%;
  height: 14px;
  background: $bg-green;
}

.info__btns {
  padding-right: 24px;
  padding-bottom: 20px;
}

.info__btn-likes, .info__btn-comments {
  width: 70px;
  padding-top: 16px;
  padding-bottom: 14px;
  border-radius: $radius-big;
  box-shadow: $shadow-minimal;
  color: $text-dark;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  cursor: pointer;
}

.info__btn-comments {
  margin-left: 16px;
}

.btn-icon {
  width: 19px;
  height: 18px;
}

.info__btn-amount {
  padding-right: 10px;
  text-align: center;
}

</style>
<script>
export default {
  name: 'projects'
}
</script>
