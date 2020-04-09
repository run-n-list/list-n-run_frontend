<template lang="pug">
  nav.main-nav
    .main-nav__logo.logo
      picture.logo__img
        | Логотип
        img(src="@/assets/img/icons/logo.svg")
    ul.main-nav__buttons.nav-buttons
      li.nav-buttons__item
        button.btn__message
          img.svg-icon(
            src="@/assets/img/icons/icon/main/Letter.svg"
            alt="Сообщения"
          )
      li.nav-buttons__item
        button.btn__info
          img.svg-icon(
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
  padding: px2rem(10) px2rem(30);
  justify-content: space-between;
  align-items: center;
  background: $bg-light;
  border-radius: $radius-big;
  box-shadow: $shadow-normal;
  margin-bottom: px2rem(28);
}

.main-nav__logo {
  width: px2rem(70);
  height: px2rem(70);
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
  margin-right: px2rem(14);
}

.nav-avatar {
  width: px2rem(70);
  height: px2rem(70);
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
  width: px2rem(60);
  height: px2rem(60);
}

.btn__info, .btn__message {
  width: px2rem(46);
  height: px2rem(46);
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
  padding: px2rem(38) px2rem(32);
  font-size: px2rem(24);
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
  margin-top: px2rem(8);
  width: auto;
}

.user-nav__link {
  display: flex;
  width: px2rem(200);
  flex-wrap: nowrap;
}

.svg-icon {
  width: px2rem(20);
  height: px2rem(20);
}

.user-nav__text {
  color: $text-dark;
  margin-left: px2rem(8);
}

.nav-avatar:hover .user-nav {
  display: flex;
}
</style>
