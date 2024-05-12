<template>
  <div class="v-aboutCollege">
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
        <h4>Eng Қаз Рус</h4>
      </div>
  
      <div class="v-aboutCollege-main">
        <div class="v-aboutCollege-main-img">
          <h1>О нас</h1>
        </div>
  
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
          <input id="tab4" type="radio" name="tab" data-tab="tab4" />
          <nav>
            <label for="tab1" data-tab-label="tab1" role="tab">История</label>
            <label for="tab2" data-tab-label="tab2" role="tab"
              >Миссия, Видение и Ценности</label
            >
            <label for="tab3" data-tab-label="tab3" role="tab">Библиотека</label>
          </nav>
  
          <section
            class="v-aboutCollege-main-section1"
            data-tab-panel="tab1"
            role="tabpanel"
            aria-labelledby="tab1"
          >
            <p>
              <strong>Евразийский аграрный колледж</strong> - негосударственное
              учебное заведение технического и профессионального образования в
              сфере аграрного сектора. Колледж ведет образовательную деятельность
              с 2001 года. 8 августа 2017 года колледж был переименован в
              учреждение "Евразийский аграрный колледж" и получил лицензию №
              КZ16LAA00009904. Приложение к лицензии на занятие образовательной
              деятельностью на основании приказа №59 от 13.04.2021 г. изменено
              наименование направления подготовки кадров. В настоящее время
              колледж имеет лицензию Управление экономики и бюджетного
              планирования г.Алматы в сфере образования и науки от 03.04.2009г.
              регистрационный №0101883, серия АА-5, не ограниченным сроком на
              право осуществления образовательной деятельности по программам
              технического и профессионального образования. <br />
              <br />
              В период с 11 по 15 ноября 2019 года Евразийский аграрный колледж
              прошел процесс аккредитации Независимым Казахстанским Центром
              Аккредитации (НКЦА), получил свидетельство-подтверждение об
              институциональной аккредитации на 5 лет, свидетельство об
              специализированной аккредитации по 12 образовательным программам со
              сроком действия до 24.12.2024, регистрационный номер IA № 0049. 22
              июля 2021 года колледж прошел внешний аудит на соответствие
              требованиям ISO 9001-2016.от товарищества с ограниченной
              ответственностью «КазСерт» системы технического регулирования
              Республики Казахстан выдан сертификат соответствия «Системы
              менеджмента качества» образовательной деятельности СТ РК ІЅО
              9001-2016 (ІЅО 9001: 2005) <br />
              <br />
              В период с 22 по 23 декабря 2021 года колледж успешно прошел процесс
              по прохождению постаккредитационного мониторинга. В период с 21 по
              28 декабря 2021 года колледж прошел процесс государственной
              асстестации по обеспечению качества в сфере образования и науки.
            </p>
            <div style="display: flex; justify-content: space-between">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/gCzYiRoZaEg"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
  
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/SBceQ2rd0kk"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </section>
  
          <section
            class="v-aboutCollege-main-section2"
            data-tab-panel="tab2"
            role="tabpanel"
            aria-labelledby="tab1"
          >
            <div class="v-aboutCollege-main-accordion-tab2">
              <div style="display: flex; justify-content: space-between">
                <div>
                  <div style="display: flex; margin-bottom: 20px">
                    <img src="../../assets/images/vision.png" width="30px" />
                    <h3>Видение</h3>
                  </div>
                  <p>
                    К 2025 году колледж будет интегрированной <br />
                    в республиканскую аграрную науку <br />
                    научно-образовательной организацией, <br />
                    предлагающие научно-технические решения <br />
                    практических проблем аграрной отрасли.
                  </p>
                </div>
  
                <div>
                  <div style="display: flex; margin: 0 300px 20px 0">
                    <img src="../../assets/images/values.png" width="30px" />
                    <h3>Ценности</h3>
                  </div>
                  <p>
                    Качество <br />
                    Этика <br />
                    Профессионализм <br />
                    Креатив.
                  </p>
                </div>
              </div>
  
              <div
                style="
                  display: flex;
                  justify-content: space-between;
                  margin-top: 50px;
                "
              >
                <div>
                  <div style="display: flex; margin-bottom: 20px">
                    <img src="../../assets/images/mission.png" width="30px" />
                    <h3>Миссия</h3>
                  </div>
                  <p>
                    Содействие развитию АПК Республики Казахстан <br />
                    через увеличение практического эффекта аграрной <br />
                    науки, обеспечивающим подготовку инновационно ориентированных
                    специалистов.
                  </p>
                </div>
  
                <div>
                  <img
                    class="v-aboutCollege-accordion-img"
                    src="../../assets/images/frontCollege2.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
  
            <div style="margin: 0 0 -1000px 0"></div>
          </section>
  
          <section
            class="v-aboutCollege-main-section3"
            data-tab-panel="tab3"
            role="tabpanel"
            aria-labelledby="tab1"
          >
            <p style="margin-top: -60px">
              <strong>Библиотека колледжа</strong> организует обслуживание
              студентов всех форм обучения и педагогических работников, эффективно
              используя материальные ресурсы, имеющиеся в наличии, для полного
              обеспечения учебного процесса в соответствии с законодательством РК.
              Миссия библиотечной деятельности в колледже состоит в том, чтобы
              обеспечить полное функционирование учебно-воспитательного процесса в
              колледже для формирования интеллектуально-развитой личности,
              высокопрофессионального специалиста в своей отрасли. <br />
              <br />
              Информационно-методическое и библиотечное обеспечение учебного
              процесса колледжа обеспечивается учебной, специализированной
              литературой, компьютерной техникой, наличием аудио-видеоматериалов,
              наглядных и методических пособий и рекомендаций в соответствии с
              требованиями учебных программ по специальностям колледжа. Фонд
              библиотеки ежегодно обновляется и пополняется казахстанскими и
              зарубежными изданиями, республиканскими и городскими газетами;
              комплектами журналов по учебно-методической, воспитательной работе.
              Пополнение фонда осуществляется с учетом требований ГОСО РК по
              специальностям, типовым учебным программам, рекомендаций
              работодателей. Общая площадь библиотеки – 415,6 кв.м., число
              посадочных мест в читальных залах – 75.(Таблица 1). Обслуживание
              читателей ведется в 4 абонементах и 3 читальных залах. Абонементы и
              читальные залы находятся в учебных корпусах №3 и №10.
            </p>
  
            <img
              src="../../assets/images/library.jpg"
              width="500px"
              style="margin: 50px 0 50px 0"
            />
            <img
              src="../../assets/images/library1.jpeg"
              width="500px"
              style="margin: 50px 0 50px 100px"
            />
          </section>
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
  margin: 20px 0 0 0;
}

.v-pay-header p {
  margin: 0 0 0 5px;
  font-weight: 600;
}

.v-pay-header-logo {
  width: 90px;
  height: 100px;
  margin: 0 0 0 0;
}

.v-pay-header h4 {
  margin: 0 20px 0 0;
  font-weight: 600;
}

.v-aboutCollege {
  width: 100%;
}

.v-aboutCollege-main {
  margin: 50px 0 0 0;
  padding: 0 200px;
}

.v-aboutCollege-main-img {
  width: 100%;
  height: 500px;
  border-radius: 10px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgb(0, 0, 0)),
    url("../../assets/images/eac.png");
  background-size: cover;
}

.v-aboutCollege-main-img h1 {
  padding: 380px 0 0 60px;
  color: #fff;
  font-size: 60px;
}

.v-aboutCollege-main-accordion {
  width: auto;
  height: auto;
  padding: 20px 0;
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
}

[data-tab-label] {
  padding: 10px 0;
  margin: 0 auto;
  position: relative;
  font-size: 25px;
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

.v-aboutCollege-main-section1 {
  width: 100%;
  margin: 50px 0 -500px 0;
  height: 100%;
}

.v-aboutCollege-main-section1 iframe {
  margin: 50px 10px -300px 10px;
}

.v-aboutCollege-main-section2 {
  width: 100%;
  margin: 10px 0 -500px 0;
}
.v-aboutCollege-main-section3 {
  width: 100%;
  margin: 530px 0 0 0;
  height: 100%;
}

.v-aboutCollege-main-accordion section p {
  font-size: 18px;
}

.v-aboutCollege-main-accordion-tab2 h3 {
  font-size: 25px;
  margin: 0 0 0 10px;
  font-weight: 600;
}

.v-aboutCollege-main-accordion-tab2 p {
  margin: 10px 0 0 0;
  line-height: 1.5;
}

.v-aboutCollege-accordion-img {
  width: 520px;
}
</style>
