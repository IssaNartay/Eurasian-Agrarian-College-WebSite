<template>
  <div class="v-accomondation">
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

    <div class="v-accomondation-main">
      <h1>Проживание</h1>
      <h2>в Евразийском Аграрном Колледже</h2>
      <div class="v-aboutCollege-main">
        <div class="v-aboutCollege-main-accordion">
          <input
            checked="checked"
            id="tab1"
            type="radio"
            name="tab"
            data-tab="tab1"
          />
          <input id="tab2" type="radio" name="tab" data-tab="tab2" />
          <input id="tab3" type="radio" name="tab" data-tab="tab3" />
          <nav>
            <label for="tab1" data-tab-label="tab1" role="tab"
              >Описание общежития</label
            >
            <label for="tab2" data-tab-label="tab2" role="tab"
              >Процедура заселения</label
            >
            <label for="tab3" data-tab-label="tab3" role="tab"
              >Для иностранных граждан</label
            >
          </nav>

          <section
            class="v-aboutCollege-main-section1"
            data-tab-panel="tab1"
            role="tabpanel"
            aria-labelledby="tab1"
          >
            <ul>
              <li>
                Все студенты, нуждающиеся в жилье, будут размещены в одном из
                трех общежитий. Здания общежитий расположены рядом с учебными
                корпусами. Общая площадь общежитий составляет 18819,9 кв.
              </li>
            </ul>
            <ul>
              <li>Вместительность до 821 студентов.</li>
            </ul>
            <ul>
              <li>Жилая площадь на одного человека — 6,6 кв.м</li>
            </ul>
            <ul>
              <li>
                Каждая комната в общежитии рассчитана на 2-3 человека и
                оборудована кроватями, прикроватными тумбами, пуфиками, шкафами
                и холодильником.
              </li>
            </ul>
            <ul>
              <li>
                В каждом здании общежития есть кухня, комнаты отдыха, спортивные
                комнаты, душевые и прачечные, оснащенные современной техникой —
                стиральными и сушильными машинами, гладильными досками и
                утюгами.
              </li>
            </ul>
            <ul>
              <li>
                Во всех общежитиях есть Wi-Fi интернет. Комнаты отдыха оснащены
                плазменными телевизорами со спутниковым и местным телевидением.
                Для обеспечения безопасности всех жителей, общежитие
                круглосуточно охраняется
              </li>
            </ul>
          </section>

          <section
            class="v-aboutCollege-main-section2"
            data-tab-panel="tab2"
            role="tabpanel"
            aria-labelledby="tab1"
          >
            <h2>
              Процедура заселения в общежитие для граждан Казахстана,
              проживающих вне Алматы
            </h2>

            <ul>
              <li>Подать документы на поступление</li>
            </ul>
            <ul>
              <li>
                Выбрать тип проживания (2,3,4-х местное проживание) и сообщить
                менеджеру Приемной комиссии.
              </li>
            </ul>
            <ul>
              <li>
                Оплатить депозит за 10 месяцев проживания (в случае отказа от
                проживания, сумма неиспользованных месяцев проживания
                возвращается студенту)
              </li>
            </ul>
            <ul>
              <li>
                Получить ордер на заселение (по электронной почте и
                распечатанный ордер, по прибытии в колледж)
              </li>
            </ul>
            <ul>
              <li>
                На основании ордера о заселении колледж проводит процедуру
                регистрации по месту проживания студента.
              </li>
            </ul>
          </section>

          <section
            class="v-aboutCollege-main-section3"
            data-tab-panel="tab3"
            role="tabpanel"
            aria-labelledby="tab1"
          >
            <h2>Процедура заселения в общежитие для иностранных граждан</h2>

            <ul>
              <li>Подать документы на поступление</li>
            </ul>
            <ul>
              <li>
                Выбрать тип проживания (2,3,4-х местное проживание) и сообщить
                менеджеру Приемной комиссии.
              </li>
            </ul>
            <ul>
              <li>
                Оплатить депозит за 10 месяцев проживания (в случае отказа от
                проживания, сумма неиспользованных месяцев проживания
                возвращается студенту)
              </li>
            </ul>
            <ul>
              <li>
                Получить ордер на заселение (по электронной почте и
                распечатанный ордер, по прибытии в колледж)
              </li>
            </ul>
            <ul>
              <li>
                На основании ордера о заселении колледж проводит процедуру
                регистрации по месту проживания студента.
              </li>
            </ul>

            <h3>Примечание:</h3>

            <ul>
              <li>
                иностранные студенты обязаны предоставить справку 086-У и снимок
                флюорографии, сделанные на территории Республики Казахстан.
              </li>
            </ul>
            <ul>
              <li>
                иностранные граждане, прибывшие из стран с безвизовым режимом
                самостоятельно, планирующие остаться в стране для получения
                обучения должны быть зарегистрированы в общежитии, если они
                планируют проживать в общежитии колледжа (Например, если вы
                приехали до начала учебы и решили погостить у родственников,но
                будете жить в общежитии, то важно заранее позаботиться о том,
                чтобы вы были зарегистрированы в общежитии колледжа, а не у
                родственников)
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>

    <div class="v-accomondation-tariff">
      <h2>
        Тариф по платным услугам "Евразийский Аграрный Колледж" на 2023-2024
        учебный год
      </h2>
      <div class="v-accomondation-tariff-info">
        <div class="v-accomondation-tariff-info-text">
          <h2>КОМНАТА 2-Х МЕСТНАЯ</h2>
          <h3>35,000.00</h3>
        </div>
        <p>1 койко/место в месяц. Без удобств</p>
      </div>
      <div class="v-accomondation-tariff-info">
        <div class="v-accomondation-tariff-info-text">
          <h2>КОМНАТА 3-Х МЕСТНАЯ</h2>
          <h3>40,000.00</h3>
        </div>
        <p>1 койко/место в месяц. Без удобств</p>
      </div>
      <div class="v-accomondation-tariff-info">
        <div class="v-accomondation-tariff-info-text">
          <h2>КОМНАТА 4-Х МЕСТНАЯ</h2>
          <h3>45,000.00</h3>
        </div>
        <p>1 койко/место в месяц. Без удобств</p>
      </div>
    </div>

    <div class="v-accomondation-slider">
      <h2>Фотоотчет общежитии</h2>

      <div id="slider">
        <transition-group tag="div" :name="transitionName" class="slides-group">
          <div
            v-if="show"
            :key="current"
            class="slide"
            :class="slides[current].src"
          >
            <img :src="slides[current].src" />
          </div>
        </transition-group>
        <div
          class="btn btn-prev"
          aria-label="Previous slide"
          @click="slide(-1)"
        >
          <img src="../assets/images/left-arrow.png" />
        </div>
        <div class="btn btn-next" aria-label="Next slide" @click="slide(1)">
          <img src="../assets/images/right-arrow.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-accomondation",
  data: () => ({
    current: 0,
    direction: 1,
    transitionName: "fade",
    show: false,
    slides: [
      { src: require("../assets/images/accomondation1.jpg") },
      { src: require("../assets/images/accomondation2.jpg") },
      { src: require("../assets/images/accomondation3.jpg") },
      { src: require("../assets/images/accomondation4.jpg") },
    ],
  }),
  methods: {
    slide(dir) {
      this.direction = dir;
      dir === 1
        ? (this.transitionName = "slide-next")
        : (this.transitionName = "slide-prev");
      var len = this.slides.length;
      this.current = (this.current + (dir % len) + len) % len;
    },
  },
  mounted() {
    this.show = true;
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

.v-accomondation {
  width: 100%;
}

.v-accomondation-main {
  background-color: #efefef;
  height: auto;
  padding: 70px 170px;
}

.v-accomondation-main h2{
  font-weight: 600;
}

.v-aboutCollege-main-accordion {
  width: auto;
  height: auto;
  padding: 20px 0;
  background-color: #fff;
  margin: 50px 0 0 0;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

[data-tab] {
  display: none;
}

[data-tab-panel] {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  visibility: hidden;
  height: 0;
  position: relative;
  z-index: 1;
}

nav {
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  margin: 0 0 30px 0;
}

[data-tab-label]:nth-child(1) {
  padding: 10px 0;
  margin: 0 0 0 250px;
  position: relative;
  font-size: 16px;
  font-weight: 600;
  bottom: -1px;
  cursor: pointer;
}
[data-tab-label]:nth-child(2) {
  padding: 10px 0;
  margin: 0 50px;
  position: relative;
  font-size: 16px;
  font-weight: 600;
  bottom: -1px;
  cursor: pointer;
}
[data-tab-label]:nth-child(3) {
  padding: 10px 0;
  margin: 0 0 0 0;
  position: relative;
  font-size: 16px;
  font-weight: 600;
  bottom: -1px;
  cursor: pointer;
}

/* Tab Label Active State */

[data-tab="tab1"]:checked ~ nav [data-tab-label="tab1"],
[data-tab="tab2"]:checked ~ nav [data-tab-label="tab2"],
[data-tab="tab3"]:checked ~ nav [data-tab-label="tab3"] {
  /* --tab-background-color: #fff; */
  border-bottom: 5px solid #00b123;
  /* z-index: 10; */
}

/* Tab Panel Active State */

[data-tab="tab1"]:checked ~ nav ~ [data-tab-panel="tab1"],
[data-tab="tab2"]:checked ~ nav ~ [data-tab-panel="tab2"],
[data-tab="tab3"]:checked ~ nav ~ [data-tab-panel="tab3"] {
  opacity: 1;
  visibility: visible;
  padding: 15px 20px;
  width: 100%;
  height: auto;
}

.v-aboutCollege-main-accordion section ul {
  margin: 0px 100px 0 30px;
  line-height: 1.5;
}

.v-aboutCollege-main-accordion section h2 {
  margin: 0px 0 10px 30px;
  font-size: 20px;
}

.v-aboutCollege-main-accordion section h3 {
  margin: 30px 0 10px 30px;
  font-size: 16px;
  font-weight: 600;
}

.v-accomondation-tariff {
  height: 500px;
  padding: 70px 170px;
}

.v-accomondation-tariff-info {
  padding: 20px 0;
  width: 1150px;
  margin: 40px 0 0 0;
}

.v-accomondation-tariff-info-text {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 0 0 10px 0;
}

.v-accomondation-tariff-info-text h2 {
  font-size: 20px;
}

.v-accomondation-tariff-info p {
  margin: 10px 0 0 0;
}

/* -------------------------------------- */

.v-accomondation-slider {
  width: 100%;
  background-color: #efefef;
  padding: 70px 0;
}

.v-accomondation-slider h2 {
  margin: 0 0 0 170px;
}

/* FADE IN */
.fade-enter-active {
  transition: opacity 1s;
}
.fade-enter {
  opacity: 0;
}

/* GO TO NEXT SLIDE */
.slide-next-enter-active,
.slide-next-leave-active {
  transition: transform 0.5s ease-in-out;
}
.slide-next-enter {
  transform: translate(100%);
}
.slide-next-leave-to {
  transform: translate(-100%);
}

/* GO TO PREVIOUS SLIDE */
.slide-prev-enter-active,
.slide-prev-leave-active {
  transition: transform 0.5s ease-in-out;
}
.slide-prev-enter {
  transform: translate(-100%);
}
.slide-prev-leave-to {
  transform: translate(100%);
}

/* SLIDER STYLES */

#slider {
  width: 100%;
  height: 100vh;
  position: relative;
}

.slide {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.slide img {
  width: 1170px;
  border-radius: 10px;
}

.btn {
  z-index: 10;
  cursor: pointer;
  border: 3px solid #00b123;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  position: absolute;
  top: calc(50% - 35px);
  left: 5%;
  transition: transform 0.3s ease-in-out;
  user-select: none;
  background-color: #fff;
}

.btn-next {
  left: auto;
  right: 5%;
}

.btn:hover {
  transform: scale(1.1);
}

.btn img {
  filter: invert(48%) sepia(42%) saturate(4298%) hue-rotate(104deg)
    brightness(95%) contrast(102%);
  width: 20px;
}
</style>
