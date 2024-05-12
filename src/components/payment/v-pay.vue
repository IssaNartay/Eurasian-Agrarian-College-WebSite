<template>
  <div class="v-pay">
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
          <img class="v-pay-header-logo" src="../../assets/images/logo-eac.png" />
        </router-link>
        <p>Eng Қаз Рус</p>
      </div>
  
      <div class="v-pay-main">
        <h1>Добро пожаловать</h1>
        <p>
          Оплачивай образовательные услуги <br />
          НАО «Евразийского Аграрного Колледжа» через EAC e-Pay.
        </p>
        <a href="#categories">Выбрать услуги</a>
      </div>
  
      <div class="v-pay-categories">
        <div id="categories" class="v-pay-categories-first">
          <h1 id="info">Услуги</h1>
        </div>
  
        <div class="v-pay-categories-second">
          <div class="v-pay-categories-second-pay-edu-items">
            <div class="v-pay-categories-second-pay-edu-items-left">
              <h2>Oбучение</h2>
              <p>В этом разделе вы можете оплатить за учебный курс</p>
              <router-link to="/payForm">
                <a href="#">Выбрать</a>
                <img
                  class="v-pay-categories-second-pay-arrow"
                  src="../../assets/images/right-arrow.png"
                  width="13px"
                />
              </router-link>
            </div>
  
            <div class="v-pay-categories-second-pay-edu-items-right">
              <img
                class="v-pay-categories-second-background"
                src="../../assets/images/blob.svg"
                width="300px"
              />
              <img
                class="v-pay-categories-second-books"
                src="../../assets/images/education.png"
                width="200px"
                style="margin: 50px"
              />
            </div>
          </div>
  
          <div class="v-pay-categories-second-pay-edu-items">
            <div class="v-pay-categories-second-pay-edu-items-left">
              <h2>Задолженность</h2>
              <p>В этом разделе вы можете оплатить за задолженность</p>
              <router-link to="/payForm">
                <a href="#">Выбрать</a>
                <img
                  class="v-pay-categories-second-pay-arrow"
                  src="../../assets/images/right-arrow.png"
                  width="13px"
                />
              </router-link>
            </div>
            <div class="v-pay-categories-second-pay-edu-items-right">
              <img
                class="v-pay-categories-second-background"
                src="../../assets/images/blob_2.svg"
                width="300px"
              />
              <img
                class="v-pay-categories-second-books"
                src="../../assets/images/debt.png"
                width="200px"
                style="margin: 50px"
              />
            </div>
          </div>
        </div>
  
        <div class="v-pay-categories-second">
          <div class="v-pay-categories-second-pay-edu-items">
            <div class="v-pay-categories-second-pay-edu-items-left">
              <h2>Проживание</h2>
              <p>В этом разделе вы можете оплатить за проживание</p>
              <router-link to="/payForm">
                <a href="#">Выбрать</a>
                <img
                  class="v-pay-categories-second-pay-arrow"
                  src="../../assets/images/right-arrow.png"
                  width="13px"
                />
              </router-link>
            </div>
            <div class="v-pay-categories-second-pay-edu-items-right">
              <img
                class="v-pay-categories-second-background"
                src="../../assets/images/blob_2.svg"
                width="300px"
              />
              <img
                class="v-pay-categories-second-books"
                src="../../assets/images/accommodation (1).png"
                width="200px"
                style="margin: 50px"
              />
            </div>
          </div>
  
          <div class="v-pay-categories-second-pay-edu-items">
            <div class="v-pay-categories-second-pay-edu-items-left">
              <h2>Тестирование</h2>
              <p>В этом разделе вы можете оплатить за тестирование</p>
              <router-link to="/payForm">
                <a href="#">Выбрать</a>
                <img
                  class="v-pay-categories-second-pay-arrow"
                  src="../../assets/images/right-arrow.png"
                  width="13px"
                />
              </router-link>
            </div>
            <div class="v-pay-categories-second-pay-edu-items-right">
              <img
                class="v-pay-categories-second-background"
                src="../../assets/images/blob.svg"
                width="300px"
              />
              <img
                class="v-pay-categories-second-books"
                src="../../assets/images/test.png"
                width="200px"
                style="margin: 50px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>


.v-pay {
  width: 100%;
  margin: 0 0 50px 0;
}

.v-pay-header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 20px 0 0 0;
}

.v-pay-header p {
  margin: 0 0 0 5px;
  font-weight: 600;
}

.v-pay-header-logo {
  width: 90px;
  height: 100px;
}

.v-pay-main {
  padding: 100px 0 100px 160px;
  margin: 50px 0 0 0;
  background-color: #f5f5f5;
}

.v-pay-main p {
  margin: 40px 0 40px 0;
  line-height: 1.5;
}

.v-pay-main a {
  background-color: #00b123;
  padding: 15px 20px;
  width: 120px;
  border-radius: 10px;
  color: #fff;
  transition: 0.3s;
  cursor: pointer;
  font-size: 14px;
  text-decoration: none;
  font-weight: 900;
}

.v-pay-main a:hover {
  background-color: #00801a;
  transition: 0.3s;
}

.v-pay-categories {
  width: 100%;
}

.v-pay-categories-first h1 {
  margin: 100px 0 0 160px;
  font-weight: 900;
}

.v-pay-categories-second {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 160px 0 160px;
  margin: 50px 0 0 0;
}

.v-pay-categories-second-pay-edu-items {
  display: flex;
  justify-content: space-between;
  align-self: center;
  height: 300px;
  width: 550px;
  border-radius: 10px;
  background-color: #ededed;
}

.v-pay-categories-second-pay-edu-items-left {
  padding: 0 0 0 50px;
}

.v-pay-categories-second-pay-edu-items-left h2 {
  margin: 50px 0 0 0;
  font-weight: 600;
}

.v-pay-categories-second-pay-edu-items-left p {
  margin: 30px 0 50px 0;
}

.v-pay-categories-second-pay-edu-items-left a {
  text-decoration: none;
  color: #00b123;
  font-weight: 600;
  transition: 0.3s;
}

.v-pay-categories-second-pay-edu-items-left a:hover {
  color: #00801a;
  transition: 0.3s;
}

.v-pay-categories-second-pay-arrow {
  filter: invert(48%) sepia(42%) saturate(4298%) hue-rotate(104deg)
    brightness(95%) contrast(102%);
  margin: 0 0 -2px 0;
}

.v-pay-categories-second-pay-edu-items-right {
  width: 300px;
}

.v-pay-categories-second-background {
  position: absolute;
  z-index: 0;
}
.v-pay-categories-second-books {
  position: relative;
  z-index: 1;
  margin: 0 0 0 30px;
}
</style>
