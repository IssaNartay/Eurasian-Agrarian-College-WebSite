<template>
  <div class="v-payForm">
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
          <router-link to="/pay" class="router-link">
            <p>Вернуться к услугам</p>
          </router-link>
        </div>
        <router-link to="/">
          <img
            class="v-pay-header-logo"
            src="../../assets/images/logo-eac.png"
          />
        </router-link>
        <p>Eng Қаз Рус</p>
      </div>

      <div class="v-payForm-inputs">
        <div class="v-payForm-inputs-left">
          <h1>Оплата</h1>

          <div class="container">
            <form @submit.prevent="submitHandler">
              <div class="group">
                <label class="selectLabel" for="facultativ"
                  >Выберите услугу оплаты:</label
                >
                <select id="facultativ" v-model="selectFac">
                  <option
                    v-for="(category, i) in categories"
                    :key="i"
                    :value="category.label"
                  >
                    {{ category.label }}
                  </option>
                </select>
              </div>
              <div class="group">
                <input
                  type="text"
                  v-model="fullName"
                  :class="{
                    invalid: $v.fullName.$dirty && !$v.fullName.required,
                  }"
                />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label>ФИО</label>
                <small
                  class="helper-text invalid"
                  v-if="$v.fullName.$dirty && !$v.fullName.required"
                >
                  Поле ФИО не должно быть пустым
                </small>
              </div>
              <div class="group">
                <input
                  type="text"
                  v-model.trim="email"
                  :class="{
                    invalid:
                      ($v.email.$dirty && !$v.email.required) ||
                      ($v.email.$dirty && !$v.email.email),
                  }"
                />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label>Email</label>
                <small
                  class="helper-text invalid"
                  v-if="$v.email.$dirty && !$v.email.required"
                >
                  Поле Email не должно быть пустым
                </small>
                <small
                  class="helper-text invalid"
                  v-else-if="$v.email.$dirty && !$v.email.email"
                >
                  Введите корректный Email
                </small>
              </div>
              <div class="group">
                <input
                  type="number"
                  v-model.trim="IIN"
                  :class="{
                    invalid:
                      ($v.IIN.$dirty && !$v.IIN.required) ||
                      ($v.IIN.$dirty && !$v.IIN.minLength),
                  }"
                />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label>ИИН</label>
                <small
                  class="helper-text invalid"
                  v-if="$v.IIN.$dirty && !$v.IIN.required"
                >
                  Поле ИИН не должно быть пустым
                </small>
                <small
                  class="helper-text invalid"
                  v-else-if="$v.IIN.$dirty && !$v.IIN.minLength"
                >
                  Введите корректный ИИН
                </small>
              </div>
              <div class="group">
                <input
                  type="number"
                  v-model.trim="payment"
                  :class="{
                    invalid: $v.payment.$dirty && !$v.payment.required,
                  }"
                />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label>Cумма оплаты</label>
                <small
                  class="helper-text invalid"
                  v-if="$v.payment.$dirty && !$v.payment.required"
                >
                  Поле Сумма оплаты не должно быть пустым
                </small>
              </div>

              <button type="submit" @click="toast">Оплатить</button>
              <div id="toast">
                <div id="img">
                  <img src="../../assets/images/success.png" width="30px" />
                </div>
                <div id="desc">Оплата отправлена</div>
              </div>
            </form>
          </div>
        </div>

        <div class="v-payForm-inputs-right">
          <div class="v-payForm-inputs-card">
            <br /><br />
            <div class="card payment mastercard">
              <div class="header">
                <h1>Детали оплаты</h1>
                <img src="../../assets/images/Visa_Logo.png" width="100px" />
              </div>
              <div class="content">
                <div class="input-group">
                  <span> Номер карты</span>
                  <input
                    type="number"
                    class="card-number"
                    placeholder="0000  0000  0000  0000"
                  />
                </div>

                <div class="input-group">
                  <span
                    ><i class="lnr lnr-calendar-full"></i> Дата окончания</span
                  >
                  <select class="expiry-date">
                    <option value="1">January</option>
                    <option value="2">February</option>
                    <option value="3">March</option>
                    <option value="4">April</option>
                    <option value="5">May</option>
                    <option value="6">June</option>
                    <option value="7">July</option>
                    <option value="8">August</option>
                    <option value="9">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                  </select>
                </div>

                <div class="input-group">
                  <span>Год</span>
                  <select class="expiry-date-year">
                    <option value="2029">2029</option>
                    <option value="2028">2028</option>
                    <option value="2027">2027</option>
                    <option value="2026">2026</option>
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                  </select>
                </div>

                <div class="input-group">
                  <span><i class="lnr lnr-lock"></i>CVC</span>
                  <input type="text" class="code" placeholder="000" />
                </div>

                <div class="input-group">
                  <span><i class="lnr lnr-lock"></i>Имя на карте</span>
                  <input type="text" class="card-number" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { email, required, minLength } from "vuelidate/lib/validators";

export default {
  data: () => ({
    selectFac: "Не выбрано",
    email: "isanartayuly@gmail.com",
    fullName: "Иса Нартайұлы",
    IIN: "031013500081",
    payment: "10000",
    dateTime: new Date(),
    categories: [
      {
        label: "Не выбрано",
        valueId: 0,
      },
      {
        label: "Обучение",
        valueId: 1,
      },
      {
        label: "Задолжность",
        valueId: 2,
      },
      {
        label: "Тестирование",
        valueId: 3,
      },
      {
        label: "Проживание",
        valueId: 4,
      },
    ],
  }),
  validations: {
    fullName: { required },
    email: { email, required },
    IIN: { required, minLength: minLength(12) },
    payment: { required },
  },
  methods: {
    ...mapActions(["SET_STUDENT_PAY"]),
    submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      const pay = {
        email: this.email,
        fullName: this.fullName,
        IIN: this.IIN,
        selectFac: this.selectFac,
        payment: this.payment,
        dateTimeNow: this.dateTime.toLocaleString()
      };

      this.SET_STUDENT_PAY(pay);
    },
    toast() {
			let x = document.getElementById("toast")
			x.className = "show"
			if (!this.$v.$invalid) {
				setTimeout(function () {
					x.className = x.className.replace("show", "")
				}, 5000)
			}
			else{
				x.className = x.className.replace("", "show")
			}
    },
    computed: {
      ...mapGetters(["STUDENT_APPLY"]),
    },
  },
};
</script>

<style scoped>
.v-pay-header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 20px 0 0 0;
  padding: 0 0 50px 0;
}

.v-pay-header p {
  margin: 0 0 0 5px;
  font-weight: 600;
}

.v-pay-header-logo {
  width: 90px;
  height: 100px;
}

.v-payForm-inputs {
  width: 100%;
  padding: 100px 200px;
  display: flex;
  align-self: center;
  background-color: #f2f2f2;
}

.v-payForm-inputs h1 {
  margin: 0px 0 100px 0;
}

.v-payForm-inputs-right {
  padding: 0 0 0 100px;
  width: 700px;
  display: flex;
}

.v-payForm-inputs-right h1 {
  margin: 0 0 100px 0;
}

.v-payForm-inputs-right p {
  font-weight: 500;
  margin: 0 0 50px 0;
}

.group select {
  margin: 0 0 0 -40px;
  width: 300px;
  padding: 15px;
  font-size: large;
}

.selectLabel {
  color: #00b123;
  margin: -40px 0 0 0;
}

/* .v-payForm-inputs-right a {
  padding: 15px 20px;
  background-color: #00b123;
  text-decoration: none;
  border-radius: 10px;
  color: #fff;
  font-weight: 600;
  border: 1px solid #fff;
  transition: 0.3s;
} */

/* .v-payForm-inputs-right a:hover {
  transition: 0.3s;
  color: #fff;
  background: #007918;
} */

/*Material Input Design*/

.container {
  font-family: "Roboto";
  width: 100%;
  text-align: center;
  display: flex;
}

* {
  box-sizing: border-box;
}

/* form starting stylings ------------------------------- */
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

/* BOTTOM BARS ================================= */
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

/* ssssssssssssssssssss */

.center {
  text-align: center;
}

.card {
  display: inline-block;
  vertical-align: top;
  width: 350px;
  position: relative;
  overflow: hidden;
  margin: 10px;
  background: #fff;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  color: #272727;
  border-radius: 2px;
}

.payment.mastercard {
  width: 500px;
  height: 450px;
  border-radius: 10px;
}

.payment.mastercard .content {
  padding: 20px 0px 0px 30px;
}

.payment.mastercard .header {
  text-align: left;
  height: 70px;
  background: #00b123;
  padding: 25px 20px 0 20px;
}

.payment.mastercard .header > h1 {
  margin: 0;
  color: #fff;
  float: left;
}

.payment.mastercard .header > h1,
.payment.mastercard .input-group span {
  font-size: 20px;
  font-weight: 400;
}

.payment.mastercard .header > img {
  float: right;
}

.payment.mastercard .input-group {
  float: left;
  text-align: left;
  margin-bottom: 20px;
}

.payment.mastercard .input-group:after,
.payment.mastercard .header > img:after {
  content: "";
  display: block;
  clear: both;
}

.payment.mastercard .input-group:last-child {
  margin-bottom: 0;
}

.payment.mastercard .input-group span {
  color: #77797a;
  text-align: left;
  display: block;
  margin: 0 0 10px 0;
}

.payment.mastercard .input-group span i {
  font-size: 20px;
}

.payment.mastercard input[type="text"],
.payment.mastercard select {
  border: 1px solid #dbdbde;
  border-radius: 5px;
  padding-left: 24px;
  font-size: 20px;
  font-weight: 400;
  height: 64px;
}

.payment.mastercard .card-number {
  width: 440px;
}

.payment.mastercard .expiry-date,
.payment.mastercard .expiry-date-year,
.payment.mastercard .code {
  margin-right: 40px;
}

.payment.mastercard .expiry-date {
  width: 196px;
}

.payment.mastercard .expiry-date-year {
  width: 100px;
}

.payment.mastercard .code {
  width: 70px;
  margin-right: 0;
  padding-left: 12px !important;
}

.container button {
  padding: 15px 20px;
  background-color: #00b123;
  text-decoration: none;
  border-radius: 10px;
  color: #fff;
  font-weight: 600;
  border: 1px solid #fff;
  transition: 0.3s;
  margin: 50px 0 0 0;
  font-size: 16px;
}

.container button:hover {
  transition: 0.3s;
  color: #fff;
  background: #007918;
}

/* TOAST */

#toast {
  visibility: hidden;
  max-width: 50px;
  height: 50px;
  /* margin-left: -125px; */
  margin: auto;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 2px;
  position: fixed;
  z-index: 1;
  left: 0;
  right: 0;
  bottom: 30px;
  font-size: 17px;
  white-space: nowrap;
}
#toast #img {
  width: 50px;
  height: 50px;

  float: left;

  padding-top: 16px;
  padding-bottom: 16px;

  box-sizing: border-box;

  background-color: #111;
  color: #fff;
}

#toast img {
  margin: -5px 0 0 0;
}
#toast #desc {
  color: #fff;

  padding: 16px;

  overflow: hidden;
  white-space: nowrap;
}

#toast.show {
  visibility: visible;
  -webkit-animation: fadein 0.5s, expand 0.5s 0.5s, stay 3s 1s, shrink 0.5s 2s,
    fadeout 0.5s 2.5s;
  animation: fadein 0.5s, expand 0.5s 0.5s, stay 3s 1s, shrink 0.5s 4s,
    fadeout 0.5s 4.5s;
}

@-webkit-keyframes fadein {
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: 30px;
    opacity: 1;
  }
}

@keyframes fadein {
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: 30px;
    opacity: 1;
  }
}

@-webkit-keyframes expand {
  from {
    min-width: 50px;
  }
  to {
    min-width: 350px;
  }
}

@keyframes expand {
  from {
    min-width: 50px;
  }
  to {
    min-width: 350px;
  }
}
@-webkit-keyframes stay {
  from {
    min-width: 350px;
  }
  to {
    min-width: 350px;
  }
}

@keyframes stay {
  from {
    min-width: 350px;
  }
  to {
    min-width: 350px;
  }
}
@-webkit-keyframes shrink {
  from {
    min-width: 350px;
  }
  to {
    min-width: 50px;
  }
}

@keyframes shrink {
  from {
    min-width: 350px;
  }
  to {
    min-width: 50px;
  }
}

@-webkit-keyframes fadeout {
  from {
    bottom: 30px;
    opacity: 1;
  }
  to {
    bottom: 60px;
    opacity: 0;
  }
}

@keyframes fadeout {
  from {
    bottom: 30px;
    opacity: 1;
  }
  to {
    bottom: 60px;
    opacity: 0;
  }
}
</style>
