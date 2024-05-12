<template>
  <div class="v-softWare">
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

      <div class="v-softWare-main">
        <div class="v-softWare-main-left">
          <h1>Учет и аудит</h1>
        </div>
        <div class="v-softWare-main-right">
          <img src="../../assets/images/facultiesUA.jpg" />
        </div>
      </div>

      <div class="v-softWare-info">
        <div class="v-softWare-info-left">
          <h1>01</h1>
          <h2>Что такое Учет и аудит</h2>
          <h3>Кто такой Бухгалтер</h3>
          <h4>Преимущества специальности:</h4>
          <ul>
            <li>высокооплачиваемая, стабильная работа</li>
          </ul>
          <ul>
            <li>широкий выбор мест для трудоустройства</li>
          </ul>
          <ul>
            <li>хорошие возможности для карьерного роста</li>
          </ul>
        </div>
        <div class="v-softWare-info-right">
          <p>
            Учет и аудит – это профессия на века, она всегда востребована и
            перспективна. Обучаясь по данной специальности, Вы освоите
            управленческий учет, принципы налогообложения, казахстанские и
            международные стандарты бухгалтерского учета, овладеете методиками
            анализа деятельности предприятия.
            <br /><br />
            Специальность бухгалтера — одна из наиболее востребованных на
            сегодняшний день профессий в сфере экономики и финансов. Обучение
            бакалавров в области бухгалтерского учета и аудита нацелено на
            подготовку квалифицированных бухгалтеров, понимающих концепции и
            конкретные правила формирования информации в бухгалтерском учете и
            отчетности, владеющих современными навыками ведения бухгалтерского
            учета и аудита финансовой отчетности.
          </p>
        </div>
      </div>
      <div class="v-softWare-info">
        <div class="v-softWare-info-left">
          <h1>02</h1>
          <h2>
            Характеристика и <br />
            особенности профессии
          </h2>
          <h5>
            Выпускники специальности «Учет и аудит» могут работать бухгалтерами,
            финансовыми консультантами, финансовыми директорами, помощниками
            аудитора, менеджерами, финансовыми аналитиками в казахстанских и
            международных компаниях, в национальных и частных компаниях, в
            банковской сфере. Доскональное знание правил финансового учета
            помогает при управлении собственным бизнесом.
          </h5>
        </div>
        <div class="v-softWare-info-right">
          <p>
            По данной специальности владеют современной методикой сбора,
            обработки и представления информации о хозяйственных процессах на
            предприятиях различных организационно-правовых форм и отраслей
            экономики, имеют навыки составления финансовой отчетности и умение
            ее анализировать, владеют различными программами по ведению
            бухгалтерского учета и проведению аудита с использованием
            международных стандартов финансовой отчетности и аудита в
            практических ситуациях.
          </p>
          <h4>Срок обучения:</h4>
          <ul>
            <li>на базе 9 классов — 2 г 10 мес</li>
          </ul>
          <ul>
            <li>на базе 11 классов (очное, дистанционное)— 1 г 10 мес</li>
          </ul>
        </div>
      </div>
      <div class="v-apply">
        <router-link to="/applyForm" class="router-link">
          <a href="#">Подать заявку на поступление</a>
        </router-link>
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

.v-softWare {
  width: 100%;
}

.v-softWare-main {
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: space-between;
}

.v-softWare-main-left h1 {
  margin: 170px 0 0 170px;
  font-size: 40px;
  font-weight: 900;
}
/* .v-softWare-main-right{
  } */

.v-softWare-main-right img {
  width: 100%;
  height: 500px;
  clip-path: polygon(20% 0%, 100% 0%, 80% 100%, 0 100%);
}

.v-softWare-info {
  width: 100%;
  display: flex;
  padding: 100px 0;
  background-color: #f6f6f6;
}

.v-softWare-info-left {
  margin: 0 0 0 170px;
  line-height: 1.5;
}

.v-softWare-info-left h1 {
  color: #00b123;
  font-size: 40px;
}

.v-softWare-info-left h2 {
  font-size: 40px;
  margin: 0 0 10px 0;
}

.v-softWare-info-left h3 {
  font-size: 40px;
  padding: 10px 0 0 0;
  border-top: 3px solid #00b123;
}

.v-softWare-info-left h4 {
  color: #00b123;
  font-size: 25px;
  margin: 20px 0 10px 0;
}

.v-softWare-info-left li {
  list-style-type: none;
  line-height: 1.7;
  font-size: 17px;
}

.v-softWare-info-left li:before {
  color: #00b123;
  content: "●";
  padding-right: 1px;
}

.v-softWare-info-right {
  margin: 0 0 0 150px;
  width: 500px;
  padding: 50px 0 0 0;
}

.v-softWare-info-right h4 {
  color: #00b123;
  margin: 20px 0 10px 0;
  font-size: 20px;
}

.v-softWare-info-left h5 {
  width: 500px;
  font-weight: 500;
  font-size: 16px;
}

.v-softWare-info-right li {
  list-style-type: none;
  line-height: 1.7;
}

.v-softWare-info-right li:before {
  color: #00b123;
  content: "●";
  padding-right: 1px;
}

.v-apply {
  background: #f6f6f6;
  padding: 0 0 100px 600px;
}
.v-apply a {
  padding: 15px 30px;
  background-color: #00b123;
  text-decoration: none;
  color: #fff;
  border-radius: 10px;
  transition: 0.3s;
  font-size: 18px;
  font-weight: 600;
}

.v-apply a:hover {
  background-color: #006314;
  transition: 0.3s;
}
</style>
