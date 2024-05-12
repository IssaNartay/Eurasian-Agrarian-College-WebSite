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
          <h1>Лесное хозяйство</h1>
        </div>
        <div class="v-softWare-main-right">
          <img src="../../assets/images/facultiesFTjpg.jpg" />
        </div>
      </div>

      <div class="v-softWare-info">
        <div class="v-softWare-info-left">
          <h1>01</h1>
          <h2>Что такое Лесное хозяйство</h2>
          <h3>Кто такой Лесник</h3>
          <p>
            «Лесное хозяйство»- это работники в системе лесного хозяйства,
            лесоустроители, ландшафтные дизайнеры, лесомелиораторы, мастеры
            лесного питомника, лесничии и др. Специалист лесопаркового и лесного
            хозяйства - это специалист, занимающийся слежением, уходом и охраной
            за лесными и парковыми массивами. Естественно, что вопросы
            воспроизведения, охраны и защиты лесов имеют стратегическую важность
            для страны.
          </p>
        </div>
        <div class="v-softWare-info-right">
          <p>
            Подготовка специалиста по данной специальности предполагает
            формирование определенных профессиональных компетенций, включающих
            знания и умения в области организации и руководства всем комплексом
            производственных работ в лесу; осуществления функций государственной
            лесной охраны; надзора за состоянием лесов и обеспечением
            рационального использования лесных ресурсов; организации всех видов
            лесопользования; разработки планов и проектов по организации и
            ведению лесного хозяйства и др.
          </p>
          <h4>В обязанности агронома входит:</h4>
          <ul>
            <li>
              Леснику нужны знания в области ботаники, зоологии, экологии,
              природопользования.
            </li>
          </ul>
          <ul>
            <li>Он должен хорошо ориентироваться на местности</li>
          </ul>
          <ul>
            <li>
              уметь читать и составлять карты, владеть методами ведения лесного
              хозяйства.
            </li>
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
            <li>на базе 11 классов (очное, дистанционное)— 2 г 6 мес</li>
          </ul>
        </div>
        <div class="v-softWare-info-right">
          <p>
            Преимущества специальности входят такие критерии как
            востребованность профессии на рынке труда. Стабильный доход.
            Полезные навыки в быту а также реальные перспективы карьерного
            роста. Объектами профессиональной деятельности выпускников являются:
            государственные учреждения лесного хозяйства, национальные и
            природные леса, парки, заповедники, лесоустроительные предприятия,
            озеленительные организации, питомники.
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

.v-softWare-info-right p {
  line-height: 1.5;
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
