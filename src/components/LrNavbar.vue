<template lang="pug">
  section.section-navbar
    h2.section-navbar__title.visually-hidden Navbar
    .section-navbar__wrapper.wrapper
      .section-navbar__logo.logo
        picture.logo__img Логотип
      .section-navbar__buttons.buttons
        ul.buttons__list
          li.buttons__item
            button.btn__message Личка
          li.buttons__item
            button.btn__info Уведомления
          li.buttons__item-userpic
            button.btn__userpic Юзерпик
            .btn__dropdown
              ul.btn__dropdown-list
                li.btn__dropdown-item
                  img.btn__dropdown-svg
                  span.btn__dropdown-text Профиль
                li.btn__dropdown-item
                  img.btn__dropdown-svg
                  span.btn__dropdown-text Настройки
                li.btn__dropdown-item
                  img.btn__dropdown-svg
                  span.btn__dropdown-text Выход
                li.btn__dropdown-item
                  img.btn__dropdown-svg
                  img.btn__dropdown-svg
                  img.btn__dropdown-svg

</template>
<script>
export default {
  name: 'navbar'
}
</script>
<style lang="scss">
.section-navbar {
  width: 100%;
  padding-top: 40px;
  padding-left: 62px;
  padding-right: 62px;
}

.section-navbar__wrapper {
  display: flex;
  justify-content: space-between;
  padding-top: 14px;
  padding-left: 49px;
  padding-right: 49px;
  padding-bottom:14px;
  background: linear-gradient(356.2deg, rgba(0, 0, 0, 0.4) 0%, rgba(255, 255, 255, 0.4) 105.18%), #EBECF0;
  background-blend-mode: soft-light, normal;
  box-shadow: 10px 10px 20px #A6ABBD, -10px -10px 20px #FAFBFF;
  border-radius: 50px;
}

.section-navbar__logo {
  width: 90px;
  height: 90px;
  padding-top: 14px;
  padding-bottom: 14px;
  border: .5px solid gray;
}

.logo__img {
  font-size: 0;
}

.section-navbar__buttons {
  padding: 0;
  margin: 0;
}

.buttons__list {
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  padding: 0;
  padding-top: 14px;
  padding-bottom: 14px;
  margin: 0;
  margin-right: -14px;
}

.buttons__item {
  margin-right: 14px;
}

.buttons__item-userpic {
  margin-left: 8px;
}

.btn__userpic {
  width: 69px;
  height: 69px;
  font-size: 0;
}

.btn__info, .btn__message {
  width: 46px;
  height: 46px;
  font-size: 0;
}

.btn__info, .btn__message, .btn__userpic {
  background: linear-gradient(317.7deg, rgba(0, 0, 0, 0.4) 0%, rgba(255, 255, 255, 0.4) 105.18%), #EBECF0;
  background-blend-mode: soft-light, normal;
  box-shadow: 10px 10px 20px #A6ABBD, -10px -10px 20px #FAFBFF;
  border-radius: 50px;
  border: .5px solid transparent;
  cursor: pointer;
}

.buttons__item-userpic {
  position: relative;
}

.btn__dropdown {
  display: block;
  position: absolute;
  right: 0px;
  top: 87px;
  padding-left: 20px;
  padding-right: 56px;
  padding-top: 53px;
  padding-bottom: 41px;
  background: linear-gradient(319.53deg, rgba(0, 0, 0, 0.4) 0%, rgba(255, 255, 255, 0.4) 105.18%), #EBECF0;
  background-blend-mode: soft-light, normal;
  box-shadow: 10px 10px 20px #A6ABBD, -10px -10px 20px #FAFBFF;
  border-radius: 50px;
  transition: all 0.5s ease;
  transition-duration: 0.5s;
  cursor: pointer;
}

.btn__dropdown::before {
  content: '';
  position: absolute;
  display: block;
  bottom: 100%;
  width: 100px;
  height: 100px;
  background-color: transparent;
}

.buttons__item-userpic:hover .btn__dropdown {
  display: block;
}

.btn__dropdown-list{
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.btn__dropdown-item {
  display: flex;
  flex-wrap: nowrap;
}

.btn__dropdown-text {
  width: 80%;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  color: #4F4F4F;
  text-align: left;
}

.btn__dropdown-svg {
  width: 20px;
  height: 20px;
  margin-top: 5px;
}

</style>
