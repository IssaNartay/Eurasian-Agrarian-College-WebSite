<template>
  <div class="v-login">
    <div id="loading" v-if="$store.state.has_loading"></div>
    <div v-else>
      <div class="v-pay-header">
        <div
          style="
            display: flex;
            justify-content: space-between;
            align-items: center;
          "
        >
          <img src="../../assets/images/left-arrow.png" width="15px" />
          <router-link to="/" class="router-link">
            <p>Вернуться на главную</p>
          </router-link>
        </div>

        <router-link to="/">
          <img
            class="v-pay-header-logo"
            src="../../assets/images/logo-eac.png"
          />
        </router-link>
        <h4>Eng Қаз Рус</h4>
      </div>
      <div class="v-login-main">
        <h1>Войти как Админ</h1>
        <form @submit.prevent="userLogin">
          <div class="group">
            <input type="text" v-model.trim="user.email" />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Эл. Почта</label>
          </div>
          <div class="group">
            <input type="password" v-model.trim="user.password" />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Пароль</label>
          </div>

          <button type="submit">Войти</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      user: {
        email: "adminIssa@mail.com",
        password: "123456789",
      },
    };
  },
  methods: {
    userLogin() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.user.email, this.user.password)
        .then(() => {
          this.$router.push("/adminProfile");
        })
        .catch(() => {
          alert("Неверный логин или пароль");
        });
    },
  },
};
</script>
<style scoped>
.v-pay-header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.v-pay-header p {
  margin: 0 0 0 5px;
  font-weight: 600;
}

.v-pay-header-logo {
  width: 90px;
  height: 100px;
  margin: 0 40px 0 0;
}

.v-pay-header h4 {
  margin: 0 20px 0 0;
  font-weight: 600;
}

/* Input */

.v-login {
  width: 100%;
}

.v-login-main {
  width: 350px;
  height: 350px;
  padding: 50px;
  margin: 100px 550px 300px 550px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 20px;
}

.v-login-main h1 {
  margin: 0 0 100px 50px;
  font-size: 25px;
}

.v-login-main button {
  background-color: #00b123;
  color: #fff;
  border-radius: 10px;
  padding: 10px 20px;
  outline: none;
  border: none;
  font-weight: 600;
  transition: 0.3s;
  margin: 0 140px;
}

.v-login-main button:hover {
  background-color: #006a15;
  transition: 0.3s;
}

.container {
  font-family: "Roboto";
  width: 100%;
  text-align: center;
  display: flex;
}

.group {
  position: relative;
  margin-bottom: 3em;
}
input {
  font-size: 18px;
  padding: 0.625em 0.625em 0.625em 0.3125em;
  display: block;
  width: 18.75em;
  border: none;
  border-bottom: 1px solid #757575;
  background-color: transparent;
}
input:focus {
  outline: none;
}

/* LABEL ======================================= */
label {
  font-family: "Arial";
  color: #999;
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 0.3125em;
  top: 0.625em;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

/* active state */
input:focus ~ label,
input:valid ~ label {
  top: -20px;
  left: -2px;
  font-size: 14px;
  color: #00b123;
}

.bar {
  position: relative;
  display: block;
}

.bar:before,
.bar:after {
  content: "";
  height: 2px;
  width: 0;
  bottom: 1px;
  position: absolute;
  background: #00b123;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}
.bar:before {
  left: 50%;
}
.bar:after {
  right: 50%;
}

/* active state */
input:focus ~ .bar:before,
input:focus ~ .bar:after {
  width: 50%;
}
</style>
