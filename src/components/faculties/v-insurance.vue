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
          <h1>
            Банковское и <br />
            страховое дело
          </h1>
        </div>
        <div class="v-softWare-main-right">
          <img src="../../assets/images/facultiesBD.jpg" />
        </div>
      </div>

      <div class="v-softWare-info">
        <div class="v-softWare-info-left">
          <h1>01</h1>
          <h2>
            Что такое Банковское и <br />
            страховое дело
          </h2>
          <h3>Кто такой Банкир</h3>
          <p>
            Экономист по финансовой работе – специалист в области экономики,
            эксперт по экономическим вопросам. Объектами профессиональной
            деятельности экономиста по финансовой работе являются: анализ и
            планирование, учет финансовой деятельности организаций различных
            организационно-правовой форм собственности. Работает в плановых,
            финансовых и статистических органах, на предприятиях, в учреждениях
            и организации.
          </p>
        </div>
        <div class="v-softWare-info-right">
          <p>
            Понятие специалиста банковского дела включает обширный перечень
            должностей, необходимых для нормального функционирования любого
            банка. В их числе кассир, операционист, сотрудник кредитного отдела,
            бухгалтер и многие другие. Но не стоит забывать о дополнительных
            возможностях трудоустройства специалиста, например, в качестве
            аудитора, работника страховой компании или аналитика фондового
            рынка. Очевидно, что для каждой из перечисленных специальностей
            характерен собственный набор должностных обязанностей. Его ожидаемым
            следствием становится высокий уровень требований к профессиональной
            подготовке работника, а также обязательное наличие умения к
            самостоятельному обучению.
          </p>
          <h4>Основные виды деятельности банкира:</h4>
          <ul>
            <li>Отдел кредитования</li>
          </ul>
          <ul>
            <li>Отдел инвестиций</li>
          </ul>
          <ul>
            <li>Фондовый отдел и отдел ценных бумаг</li>
          </ul>
        </div>
      </div>
      <div class="v-softWare-info">
        <div class="v-softWare-info-left">
          <h1>02</h1>
          <h2>
            Характеристика и <br />
            особенности профессии
          </h2>
          <h4>Срок обучения:</h4>
          <ul>
            <li>на базе 11 классов (очное, дистанционное)— 1 г 10 мес</li>
          </ul>
        </div>
        <div class="v-softWare-info-right">
          <p>
            Успешный банкир должен обладать такими личными качествами как
            внимательность, ответственность, целеустремленность, инициативность,
            готовность к самообразованию; оперативность, способность быстро
            находить верные решения; собранность, четкость при исполнении
            профессиональных обязанностей, дисциплинированность; бережливость,
            стремление зарабатывать деньги, а не тратить их; коммуникабельность;
            умение проводить взвешенную политику.

            <br /><br />
            Образовательная программа специальности «Банковское дело»
            предусматривает фундаментальное и специальное изучение студентами
            правовых и организационных основ деятельности кредитных организаций,
            сущности и технологии совершения банковских операций и сделок,
            правил ведения бухгалтерского учета в кредитных организациях, угрозы
            банковской безопасности и мер по их устранению, правовых основ
            аудиторской деятельности.
          </p>
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

.v-softWare-info-left p {
  width: 500px;
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
}

.v-softWare-info-right li {
  list-style-type: none;
  line-height: 1.5;
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
