<template lang="pug">
  nav.main-nav
    .main-nav__logo.logo
      picture.logo__img
        | Логотип
        img(src="@/assets/img/icons/logo.svg")
    ul.main-nav__buttons.nav-buttons
      li.nav-buttons__item
        button.btn__message
          img.btn-icon(
            src="@/assets/img/icons/icon/main/Letter.svg"
            alt="Сообщения"
          )
      li.nav-buttons__item
        button.btn__info
          img.btn-icon(
            src="@/assets/img/icons/icon/main/Bell.svg"
            alt="Уведомления"
          )
      li.nav-buttons__item-userpic
        button.main-nav__avatar.nav-avatar
          img.nav-avatar__img(src="@/assets/img/icons/avatar.svg" alt="Юзерпик")
          ul.nav-avatar__dropdown.user-nav
            li.user-nav__item
              a.user-nav__link
                img.user-nav__icon.svg-icon(
                  src="@/assets/img/icons/icon/User/User.svg"
                )
                span.user-nav__text Профиль
            li.user-nav__item
              a.user-nav__link
                img.user-nav__icon.svg-icon(
                  src="@/assets/img/icons/icon/main/Gear.svg"
                )
                span.user-nav__text Настройки
            li.user-nav__item
              a.user-nav__link
                img.user-nav__icon.svg-icon(
                  src="@/assets/img/icons/icon/main/Logout.svg"
                )
                span.user-nav__text Выход
            li.user-nav__item
                img.user-nav__icon.svg-icon
                img.user-nav__icon.svg-icon
                img.user-nav__icon.svg-icon

</template>
<script>
export default {
  name: 'navbar'
}
</script>
<style lang="scss">
.main-nav {
  width: 100%;
  display: flex;
  padding: 15px 40px;
  justify-content: space-between;
  align-items: center;
  background: $bg-light;
  border-radius: $radius-big;
  box-shadow: $shadow-normal;
  margin-bottom: 28px;
}

.main-nav__logo {
  width: 70px;
  height: 70px;
}

.nav-buttons {
  display: flex;
  flex-direction: row;
}

.logo__img {
  font-size: 0;
}

.nav-buttons {
  display: flex;
  align-items: center;
}

.nav-buttons__item {
  margin-right: 14px;
}

.section-navbar__buttons {
  padding: 0;
  margin: 0;
}

.nav-avatar {
  width: 70px;
  height: 70px;
  position: relative;
  border-radius: $radius-50;
  box-shadow: $shadow-normal;
  background: $bg-light;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.nav-avatar__img {
  width: 60px;
  height: 60px;
}

.btn__info, .btn__message {
  width: 46px;
  height: 46px;
  font-size: 0;
  border-radius: $radius-50;
  box-shadow: $shadow-normal;
  background: $bg-light;
  cursor: pointer;
}

.user-nav {
  display: none;
  position: absolute;
  flex-direction: column;
  right: 0;
  top: calc(100% + 8px);
  padding: 38px 32px;
  font-size: 24px;
  width: auto;
  border-radius: $radius-big;
  background: $bg-light;
  box-shadow: $shadow-normal;
}

.user-nav::before {
  position: absolute;
  content: '';
  display: block;
  bottom: 100%;
  width: 100%;
  height: 30px;
}

.user-nav__item {
  margin-top: 8px;
  width: auto;
}

.user-nav__link {
  display: flex;
  width: 200px;
  flex-wrap: nowrap;
}

.svg-icon {
  width: 20px;
  height: 20px;
}

.user-nav__text {
  color: $text-dark;
  margin-left: 8px;
}

.nav-avatar:hover .user-nav {
  display: flex;
}
</style>
