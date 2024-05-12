<template>
  <div class="v-consultation">
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
          <img src="../assets/images/left-arrow.png" width="15px" />
          <router-link to="/" class="router-link">
            <p>Вернуться на главную</p>
          </router-link>
        </div>
  
        <router-link to="/">
          <img class="v-pay-header-logo" src="../assets/images/logo-eac.png" />
        </router-link>
        <h4>Eng Қаз Рус</h4>
      </div>
  
      <div class="v-consultation-main">
        <img
          src="../assets/images/baseBuild.jpg"
          class="v-consultation-main-img"
        />
        <h1>Виртуальная приемная</h1>
        <div class="v-information-button">
          <div class="arrow-7">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
  
      <div class="v-consultation-info">
        <div class="v-consultation-info-items">
          <h1>Приемная комиссия</h1>
          <p>
            Для подачи документов на поступление Вам необходимо связаться с
            Приемной комиссией по указанной ссылке. Если оператор недоступен
            просим написать на почту almatyagrocollege@mail.ru
            <br />
            Телефон: +7 (727) 262 90 41
          </p>
        </div>
        <div class="v-consultation-info-items">
          <h1>Офис регистратора</h1>
          <p>
            Email: agrocollege@mail.ru
            <br />
            Телефон: +7 (727) 262 17 39
          </p>
  
          <h1 style="margin-top: 30px">Администратор по работе со студентами</h1>
          <p>Email: studentlife-agrocollege@email.ru</p>
        </div>
        <div class="v-consultation-info-items">
          <h1>Офис эдвайзеров</h1>
          <p>
            Email: advice-agrocollege@email.ru
            <br />
            office-advice-agrocollege@email.ru Телефон: +7 (727) 262 90 41
  
            <br />
            Телефон: +7 (727) 262 17 39
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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

.v-consultation {
  width: 100%;
}

.v-consultation-main-img {
  width: 100%;
  filter: brightness(20%);
  position: absolute;
}
.v-consultation-main h1 {
  color: #ffffff;
  position: relative;
  top: 80px;
  left: 0;
  margin: 0 0 0 170px;
  padding: 20px;
  width: 411px;
  background-color: #00b123;
  font-weight: 900;
}

/* ----------- */
.v-information-button {
  /* border: #ddd 1px solid; */
  border-radius: 50%;
  width: 30px;
  height: 30px;
  padding: 10px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  margin: 180px 0 0 700px;
  position: relative;
}

.arrow-7 {
  margin: 0px auto 0px auto;
  width: 38px;
  height: 50px;
}
.arrow-7 span {
  display: block;
  width: 10px;
  height: 10px;
  border-bottom: 4px solid #fff;
  border-right: 4px solid #fff;
  transform: rotate(45deg);
  margin: -15px 0 0 7px;
  animation: arrow-7 2s infinite;
}
.arrow-7 span:nth-child(2) {
  animation-delay: -0.2s;
}
.arrow-7 span:nth-child(3) {
  animation-delay: -0.4s;
}
@keyframes arrow-7 {
  0% {
    opacity: 0;
    transform: translate(0, -20px) rotate(45deg);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translate(0, 30px) rotate(45deg);
  }
}

.v-consultation-info {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px 0;
}

.v-consultation-info-items {
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 50px;
  width: 300px;
  transition: 0.3s;
  height: 250px;
}

.v-consultation-info-items:hover {
  transform: scale(1.05);
  transition: 0.3s;
}

.v-consultation-info-items:nth-child(2) {
  margin: 0 30px;
}

.v-consultation-info-items h1 {
  font-size: 23px;
  margin: 0 0 20px 0;
}


.v-consultation-info-items p {
  line-height: 1.7;
}
</style>
