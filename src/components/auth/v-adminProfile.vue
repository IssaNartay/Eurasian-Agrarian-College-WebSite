<template>
  <div class="v-adminProfile">
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
            <button
              type="submit"
              class="btn btn-dark btn-lg btn-block"
              @click="logOut()"
            >
              Выйти
            </button>
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

      <div class="v-adminProfile-main">
        <body>
          <div class="main-container">
            <!-- HEADER -->
            <header class="block">
              <ul class="header-menu horizontal-list">
                <li>
                  <a class="header-menu-tab" href="#1"
                    ><span class="icon entypo-cog scnd-font-color"></span
                    >Настройки</a
                  >
                </li>
                <li>
                  <router-link to="/adminProfilePay" class="router-link applyBtn">
                    <a class="header-menu-tab" href="#3"
                      ><span
                        class="icon fontawesome-envelope scnd-font-color"
                      ></span
                      >Оплата</a
                    >
                    <a class="header-menu-number" href="#4">
                      {{ payLength }}
                    </a>
                  </router-link>
                </li>
                <li>
                  <router-link to="/adminProfileApply" class="router-link applyBtn">
                    <a class="header-menu-tab" href="#3"
                      ><span
                        class="icon fontawesome-envelope scnd-font-color"
                      ></span
                      >Заявки</a
                    >
                    <a class="header-menu-number" href="#4">
                      {{ applyLength }}
                    </a>
                  </router-link>
                </li>
              </ul>
              <div class="profile-menu">
                <p>
                  Админ
                  <a href="#26"
                    ><span class="entypo-down-open scnd-font-color"></span
                  ></a>
                </p>
                <div class="profile-picture small-profile-picture">
                  <img width="40px" src="../../assets/images/logo-eac.png" />
                </div>
              </div>
            </header>

            <!-- LEFT-CONTAINER -->
            <div class="left-container container">
              <div class="menu-box block">
                <!-- MENU BOX (LEFT-CONTAINER) -->
                <h2 class="titular">МЕНЮ</h2>
                <ul class="menu-box-menu">
                  <li>
                    <a class="menu-box-tab" href="#6"
                      ><span
                        class="icon fontawesome-envelope scnd-font-color"
                      ></span
                      >Сообщение
                      <div class="menu-box-number">24</div></a
                    >
                  </li>
                  <li>
                    <a class="menu-box-tab" href="#8"
                      ><span
                        class="icon entypo-paper-plane scnd-font-color"
                      ></span
                      >Приглашения
                      <div class="menu-box-number">3</div></a
                    >
                  </li>
                  <li>
                    <a class="menu-box-tab" href="#10"
                      ><span class="icon entypo-calendar scnd-font-color"></span
                      >События
                      <div class="menu-box-number">5</div></a
                    >
                  </li>
                  <li>
                    <a class="menu-box-tab" href="#12"
                      ><span class="icon entypo-cog scnd-font-color"></span
                      >Параметры аккаунта</a
                    >
                  </li>
                  <li>
                    <a class="menu-box-tab" href="#13"
                      ><span
                        class="icon entypo-chart-line scnd-font-color"
                      ></span
                      >Статистика</a
                    >
                  </li>
                </ul>
              </div>
              <div class="donut-chart-block block">
                <!-- DONUT CHART BLOCK (LEFT-CONTAINER) -->
                <h2 class="titular">АУДИТОРИЯ</h2>
                <div class="donut-chart">
                  <!-- DONUT-CHART by @kseso https://codepen.io/Kseso/pen/phiyL -->
                  <div id="porcion1" class="recorte">
                    <div class="quesito ios" data-rel="21"></div>
                  </div>
                  <div id="porcion2" class="recorte">
                    <div class="quesito mac" data-rel="39"></div>
                  </div>
                  <div id="porcion3" class="recorte">
                    <div class="quesito win" data-rel="31"></div>
                  </div>
                  <div id="porcionFin" class="recorte">
                    <div class="quesito linux" data-rel="9"></div>
                  </div>
                  <!-- END DONUT-CHART by @kseso https://codepen.io/Kseso/pen/phiyL -->
                  <p class="center-date">
                    Июнь<br /><span class="scnd-font-color">2023</span>
                  </p>
                </div>
                <ul class="os-percentages horizontal-list">
                  <li>
                    <p class="ios os scnd-font-color">ИС</p>
                    <p class="os-percentage">21<sup>%</sup></p>
                  </li>
                  <li>
                    <p class="mac os scnd-font-color">ВН</p>
                    <p class="os-percentage">48<sup>%</sup></p>
                  </li>
                  <li>
                    <p class="linux os scnd-font-color">ЗУ</p>
                    <p class="os-percentage">9<sup>%</sup></p>
                  </li>
                  <li>
                    <p class="win os scnd-font-color">ЭО</p>
                    <p class="os-percentage">32<sup>%</sup></p>
                  </li>
                </ul>
              </div>
              <div class="line-chart-block block clear">
                <!-- LINE CHART BLOCK (LEFT-CONTAINER) -->
                <div class="line-chart">
                  <!-- LINE-CHART by @kseso https://codepen.io/Kseso/pen/phiyL -->
                  <div class="grafico">
                    <ul class="eje-y">
                      <li data-ejeY="30"></li>
                      <li data-ejeY="20"></li>
                      <li data-ejeY="10"></li>
                      <li data-ejeY="0"></li>
                    </ul>
                    <ul class="eje-x">
                      <li>Март</li>
                      <li>Апрель</li>
                      <li>Май</li>
                    </ul>
                    <span data-valor="25">
                      <span data-valor="8">
                        <span data-valor="13">
                          <span data-valor="5">
                            <span data-valor="23">
                              <span data-valor="12">
                                <span data-valor="15">
                                </span></span></span></span></span></span
                    ></span>
                  </div>
                  <!-- END LINE-CHART by @kseso https://codepen.io/Kseso/pen/phiyL -->
                </div>
                <ul class="time-lenght horizontal-list">
                  <li><a class="time-lenght-btn" href="#14">Неделя</a></li>
                  <li><a class="time-lenght-btn" href="#15">Месяц</a></li>
                  <li><a class="time-lenght-btn" href="#16">Год</a></li>
                </ul>
                <ul class="month-data clear">
                  <li>
                    <p>МАРТ<span class="scnd-font-color"> 2023</span></p>
                    <p>
                      <span class="entypo-plus increment"> </span>21<sup>%</sup>
                    </p>
                  </li>
                  <li>
                    <p>АПРЕЛЬ<span class="scnd-font-color"> 2023</span></p>
                    <p>
                      <span class="entypo-plus increment"> </span>48<sup>%</sup>
                    </p>
                  </li>
                  <li>
                    <p>МАЙ<span class="scnd-font-color"> 2023</span></p>
                    <p>
                      <span class="entypo-plus increment"> </span>35<sup>%</sup>
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <!-- MIDDLE-CONTAINER -->
            <div class="middle-container container">
              <div class="profile block">
                <!-- PROFILE (MIDDLE-CONTAINER) -->
                <a class="add-button" href="#28"
                  ><span class="icon entypo-plus scnd-font-color"></span
                ></a>
                <div class="profile-picture big-profile-picture clear">
                  <img
                    width="150px"
                    alt="Anne Hathaway picture"
                    src="../../assets/images/logo-eac.png"
                  />
                </div>
                <h1 class="user-name">Админ EAC</h1>
                <div class="profile-description">
                  <p class="scnd-font-color">
                    Страница Администрации Приемной Комиссии
                  </p>
                </div>
                <ul class="profile-options horizontal-list">
                  <li>
                    <a class="comments" href="#40">
                      <p>
                        <span
                          class="icon fontawesome-comment-alt scnd-font-color"
                        >
                        </span>
                        23
                      </p>
                    </a>
                  </li>

                  <li>
                    <a class="views" href="#41">
                      <p>
                        <span
                          class="icon fontawesome-eye-open scnd-font-color"
                        ></span
                        >841
                      </p></a
                    >
                  </li>
                  <li>
                    <a class="likes" href="#42">
                      <p>
                        <span
                          class="icon fontawesome-heart-empty scnd-font-color"
                        ></span
                        >49
                      </p></a
                    >
                  </li>
                </ul>
              </div>
              <div class="weather block clear">
                <!-- WEATHER (MIDDLE-CONTAINER) -->
                <h2 class="titular">
                  <span class="icon entypo-location"></span
                  ><strong>АЛМАТЫ</strong>
                </h2>
                <div class="current-day">
                  <p class="current-day-date">ПН 29/06</p>
                  <p class="current-day-temperature">
                    24º<span class="icon-cloudy">
                      <img src="../../assets/images/cloud.png" width="50px" />
                    </span>
                  </p>
                </div>
                <ul class="next-days">
                  <li>
                    <a href="#43">
                      <p class="next-days-date">
                        <span class="day">ВТ</span>
                        <span class="scnd-font-color">29/06</span>
                      </p>
                      <p class="next-days-temperature">
                        25º<span
                          class="icon icon-cloudy scnd-font-color"
                        ></span>
                      </p>
                    </a>
                  </li>
                  <li>
                    <a href="#44">
                      <p class="next-days-date">
                        <span class="day">СР</span>
                        <span class="scnd-font-color">30/06</span>
                      </p>
                      <p class="next-days-temperature">
                        22º<span
                          class="icon icon-cloudy2 scnd-font-color"
                        ></span>
                      </p>
                    </a>
                  </li>
                  <li>
                    <a href="#45">
                      <p class="next-days-date">
                        <span class="day">ЧТ</span>
                        <span class="scnd-font-color">01/07</span>
                      </p>
                      <p class="next-days-temperature">
                        24º<span
                          class="icon icon-cloudy2 scnd-font-color"
                        ></span>
                      </p>
                    </a>
                  </li>
                  <li>
                    <a href="#46">
                      <p class="next-days-date">
                        <span class="day">ПТ</span>
                        <span class="scnd-font-color">02/07</span>
                      </p>
                      <p class="next-days-temperature">
                        26º<span
                          class="icon icon-cloudy scnd-font-color"
                        ></span>
                      </p>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <p class="next-days-date">
                        <span class="day">СБ</span>
                        <span class="scnd-font-color">03/07</span>
                      </p>
                      <p class="next-days-temperature">
                        27º<span class="icon icon-sun scnd-font-color"></span>
                      </p>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <p class="next-days-date">
                        <span class="day">ВС</span>
                        <span class="scnd-font-color">04/07</span>
                      </p>
                      <p class="next-days-temperature">
                        29º<span class="icon icon-sun scnd-font-color"></span>
                      </p>
                    </a>
                  </li>
                </ul>
              </div>

              <ul class="social block">
                <!-- SOCIAL (MIDDLE-CONTAINER) -->
                <li>
                  <a href="#50"
                    ><div class="facebook icon">
                      <img
                        src="../../assets/images/facebook.png"
                        width="25px"
                      />
                    </div>
                    <h2 class="facebook titular">ПОДЕЛИТЬСЯ</h2></a
                  >
                </li>
                <li>
                  <a href="#51"
                    ><div class="twitter icon">
                      <img
                        src="../../assets/images/instagram.png"
                        width="25px"
                      />
                    </div>
                    <h2 class="twitter titular">ПОДЕЛИТЬСЯ</h2></a
                  >
                </li>
                <li>
                  <a href="#52"
                    ><div class="googleplus icon">
                      <img
                        src="../../assets/images/whatsapp.png"
                        width="25px"
                      />
                    </div>
                    <h2 class="googleplus titular">ПОДЕЛИТЬСЯ</h2></a
                  >
                </li>
              </ul>
            </div>

            <!-- RIGHT-CONTAINER -->
            <div class="right-container container">
              <div class="join-newsletter block">
                <!-- JOIN NEWSLETTER (RIGHT-CONTAINER) -->
                <h2 class="titular">ПРИСОЕДИНИТЬСЯ</h2>
                <div class="input-container">
                  <input
                    type="text"
                    placeholder="almatyagrocollege@mail.ru"
                    class="email text-input"
                  />
                  <div class="input-icon envelope-icon-newsletter">
                    <span class="fontawesome-envelope scnd-font-color"></span>
                  </div>
                </div>
                <a class="subscribe button" href="#21">ПОДПИСАТЬСЯ</a>
              </div>

              <div class="loading block">
                <!-- LOADING (RIGHT-CONTAINER) -->
                <div class="progress-bar downloading"></div>
                <p>
                  <span
                    class="icon fontawesome-cloud-download scnd-font-color"
                  ></span
                  >Скачивание...
                </p>
                <p class="percentage">81<sup>%</sup></p>
                <div class="progress-bar uploading"></div>
                <p>
                  <span
                    class="icon fontawesome-cloud-upload scnd-font-color"
                  ></span
                  >Отправка...
                </p>
                <p class="percentage">43<sup>%</sup></p>
              </div>

              <div class="calendar-month block">
                <!-- CALENDAR MONTH (RIGHT-CONTAINER) -->
                <div class="arrow-btn-container">
                  <a class="arrow-btn left" href="#202"
                    ><img
                      src="../../assets/images/circle-left-arrows.png"
                      width="25px"
                  /></a>
                  <h2 class="titular">ИЮНЬ 2023</h2>
                  <a class="arrow-btn right" href="#203"
                    ><img
                      src="../../assets/images/circle-right-arrows.png"
                      width="25px"
                  /></a>
                </div>
                <table class="calendar">
                  <thead class="days-week">
                    <tr>
                      <th>П</th>
                      <th>В</th>
                      <th>С</th>
                      <th>Ч</th>
                      <th>П</th>
                      <th>С</th>
                      <th>В</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td><a class="scnd-font-color" href="#100">1</a></td>
                    </tr>
                    <tr>
                      <td><a class="scnd-font-color" href="#101">2</a></td>
                      <td><a class="scnd-font-color" href="#102">3</a></td>
                      <td><a class="scnd-font-color" href="#103">4</a></td>
                      <td><a class="scnd-font-color" href="#104">5</a></td>
                      <td><a class="scnd-font-color" href="#105">6</a></td>
                      <td><a class="scnd-font-color" href="#106">7</a></td>
                      <td><a class="scnd-font-color" href="#107">8</a></td>
                    </tr>
                    <tr>
                      <td><a class="scnd-font-color" href="#108">9</a></td>
                      <td><a class="scnd-font-color" href="#109">10</a></td>
                      <td><a class="scnd-font-color" href="#110">11</a></td>
                      <td><a class="scnd-font-color" href="#111">12</a></td>
                      <td><a class="scnd-font-color" href="#112">13</a></td>
                      <td><a class="scnd-font-color" href="#113">14</a></td>
                      <td><a class="scnd-font-color" href="#114">15</a></td>
                    </tr>
                    <tr>
                      <td><a class="scnd-font-color" href="#115">16</a></td>
                      <td><a class="scnd-font-color" href="#116">17</a></td>
                      <td><a class="scnd-font-color" href="#117">18</a></td>
                      <td><a class="scnd-font-color" href="#118">19</a></td>
                      <td><a class="scnd-font-color" href="#119">20</a></td>
                      <td><a class="scnd-font-color" href="#120">21</a></td>
                      <td><a class="scnd-font-color" href="#121">22</a></td>
                    </tr>
                    <tr>
                      <td><a class="scnd-font-color" href="#122">23</a></td>
                      <td><a class="scnd-font-color" href="#123">24</a></td>
                      <td><a class="scnd-font-color" href="#124">25</a></td>
                      <td><a class="today" href="#125">26</a></td>
                      <td><a href="#126">27</a></td>
                      <td><a href="#127">28</a></td>
                      <td><a href="#128">29</a></td>
                    </tr>
                    <tr>
                      <td><a href="#129">30</a></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="tweets block">
                <!-- TWEETS (MIDDLE-CONTAINER) -->
                <h2 class="titular">
                  <img src="../../assets/images/news.png" width="30px" />
                  ПОСЛЕДНИЕ НОВОСТИ
                </h2>
                <div class="tweet first">
                  <p>
                    Успеваемость студентов колледжа повысилась на +23% <a class="tweet-link" href="#17">@AdminEAC</a>
                  </p>
                  <p>
                    <a class="time-ago scnd-font-color" href="#18"
                      >3 минуты назад</a
                    >
                  </p>
                </div>
                <div class="tweet">
                  <p>
                    Последний поток подготовки студентов к защите дипломной работы идет полным ходом
                    <a class="tweet-link" href="#19">#ALGA_EAC</a>
                  </p>
                  <p><a class="scnd-font-color" href="#20">6 часов назад</a></p>
                </div>
              </div>
              <!-- end calendar-month block -->
            </div>
            <!-- end right-container -->
          </div>
          <!-- end main-container -->
        </body>
      </div>
    </div>
  </div>
</template>
<script>
import firebase from "firebase";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      user: null,
    };
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  },
  computed: {
    ...mapGetters([
      'STUDENT_APPLY',
      'STUDENT_PAY'
    ]),
    applyLength(){
      return this.STUDENT_APPLY.length
    },
    payLength(){
      return this.STUDENT_PAY.length
      
    }
  },
  methods: {
    logOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          firebase.auth().onAuthStateChanged(() => {
            this.$router.push("/login");
          });
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

.v-pay-header button {
  background-color: transparent;
  border: none;
  font-size: 16px;
  margin: 0 0 0 5px;
  font-weight: 600;
  cursor: pointer;
}

/* |||||||||||||||||||||||||||||| */

/** Inspired by: http://graphicburger.com/flat-design-ui-components/ **/
/** Line-chart and donut-chart made by @kseso https://codepen.io/Kseso/pen/phiyL **/

/************************************ FONTS ************************************/
@import url(https://fonts.googleapis.com/css?family=Ubuntu:400,700);
@import url(http://weloveiconfonts.com/api/?family=entypo|fontawesome|zocial);
/* entypo */
[class*="entypo-"]:before {
  font-family: "entypo", sans-serif;
}
/* fontawesome */
[class*="fontawesome-"]:before {
  font-family: "FontAwesome", sans-serif;
}
/* zocial */
[class*="zocial-"]:before {
  font-family: "zocial", sans-serif;
}
@font-face {
  font-family: "icomoon";
  src: url("https://jlalovi-cv.herokuapp.com/font/icomoon.eot");
  src: url("https://jlalovi-cv.herokuapp.com/font/icomoon.eot?#iefix")
      format("embedded-opentype"),
    url("https://jlalovi-cv.herokuapp.com/font/icomoon.ttf") format("truetype"),
    url("https://jlalovi-cv.herokuapp.com/font/icomoon.woff") format("woff"),
    url("https://jlalovi-cv.herokuapp.com/font/icomoon.svg#icomoon")
      format("svg");
  font-weight: normal;
  font-style: normal;
}

[class^="icon-"],
[class*=" icon-"] {
  font-family: "icomoon";
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/************************************* END FONTS *************************************/

* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  background: #f4f4f4;
  padding: 10px 0;
}

ul {
  list-style-type: none;
  margin: 0;
  padding-left: 0;
}

h1 {
  font-size: 23px;
}

h2 {
  font-size: 17px;
}

p {
  font-size: 15px;
}

a {
  text-decoration: none;
  font-size: 15px;
}
a:hover {
  text-decoration: underline;
}

h1,
h2,
p,
a,
span {
  color: #252525;
}
.scnd-font-color {
  color: #9099b7;
}

.input-container {
  position: relative;
}
input[type="text"] {
  width: 260px;
  height: 50px;
  margin-left: 20px;
  margin-bottom: 20px;
  padding-left: 45px;
  background: #e7e7e7;
  color: #252525;
  outline: none;
  border-radius: 5px;
  border: none;
}

.input-icon {
  font-size: 22px;
  position: absolute;
  left: 31px;
  top: 10px;
}
.input-icon.password-icon {
  left: 35px;
}

.horizontal-list {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.horizontal-list li {
  float: left;
}

.clear {
  clear: both;
}

.icon {
  font-size: 25px;
}

.titular {
  display: block;
  line-height: 60px;
  margin: 0;
  text-align: center;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.button {
  display: block;
  width: 175px;
  line-height: 50px;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  margin: 0 auto;
  border-radius: 5px;
  -webkit-transition: background 0.3s;
  transition: background 0.3s;
}
.button:hover {
  text-decoration: none;
}

.arrow-btn-container {
  position: relative;
}
.arrow-btn {
  position: absolute;
  display: block;
  width: 60px;
  height: 60px;
  -webkit-transition: background 0.3s;
  transition: background 0.3s;
}
.arrow-btn:hover {
  text-decoration: none;
}
.arrow-btn.left {
  border-top-left-radius: 5px;
}
.arrow-btn.right {
  border-top-right-radius: 5px;
  right: 0;
  top: 0;
}
.arrow-btn .icon {
  display: block;
  font-size: 18px;
  border: 2px solid #252525;
  border-radius: 100%;
  line-height: 17px;
  width: 21px;
  margin: 20px auto;
  text-align: center;
}
.arrow-btn.left .icon {
  padding-right: 2px;
}

.profile-picture {
  border-radius: 100%;
  overflow: hidden;
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
}
.big-profile-picture {
  margin: 0 auto;
  border: 5px solid #e7e7e7;
  width: 150px;
  height: 150px;
}
.small-profile-picture {
  border: 2px solid #e7e7e7;
  width: 40px;
  height: 40px;
}

/** MAIN CONTAINER **/

.main-container {
  font-family: "Ubuntu", sans-serif;
  width: 950px;
  height: 1500px;
  margin: 6em auto;
}
/*********************************************** HEADER ***********************************************/
header {
  height: 80px;
}
.header-menu {
  font-size: 17px;
  line-height: 80px;
}
.header-menu li {
  position: relative;
}
.header-menu-tab {
  padding: 0 27px;
  display: block;
  line-height: 74px;
  font-size: 17px;
  -webkit-transition: background 0.3s;
  transition: background 0.3s;
  text-decoration: none;
}

.header-menu-tab:hover {
  background: #e7e7e7;
  border-bottom: 4px solid #00b123;
  text-decoration: none;
}

.applyBtn{
  text-decoration: none;
}

.applyBtn:hover{
  text-decoration: none;
}
.header-menu-tab .icon {
  padding-right: 15px;
}
.header-menu-number {
  position: absolute;
  line-height: 22px;
  padding: 0 6px;
  font-weight: 700;
  background: #e64c65;
  border-radius: 100%;
  top: 15px;
  right: 2px;
  color: #fff;
}

.profile-menu {
  float: right;
  height: 80px;
  padding-right: 20px;
}
.profile-menu p {
  font-size: 17px;
  display: inline-block;
  line-height: 76px;
  margin: 0;
  padding-right: 10px;
}
.profile-menu a {
  padding-left: 5px;
}
.profile-menu a:hover {
  text-decoration: none;
}
.small-profile-picture {
  display: inline-block;
  vertical-align: middle;
}
/** CONTAINERS **/
.container {
  float: left;
  width: 300px;
}
.block {
  margin-bottom: 25px;
  background: #fff;
  border-radius: 5px;
}
/******************************************** LEFT CONTAINER *****************************************/

.menu-box {
  height: 360px;
}
.menu-box .titular {
  background: #00b123;
  color: #fff;
}
.menu-box-menu .icon {
  display: inline-block;
  vertical-align: top;
  width: 28px;
  margin-left: 20px;
  margin-right: 15px;
}
.menu-box-number {
  width: 36px;
  line-height: 22px;
  background: #e7e7e7;
  text-align: center;
  border-radius: 15px;
  position: absolute;
  top: 15px;
  right: 15px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
.menu-box-menu li {
  height: 60px;
  position: relative;
}
.menu-box-tab {
  line-height: 60px;
  display: block;
  -webkit-transition: background 0.2s;
  transition: background 0.2s;
}
.menu-box-tab:hover {
  background: #e7e7e7;
  text-decoration: none;
}
.menu-box-tab:hover .icon {
  color: #252525;
}
.menu-box-tab:hover .menu-box-number {
  background: #e64c65;
  color: #fff;
}
.donut-chart-block {
  height: 434px;
}
.donut-chart-block .titular {
  padding: 10px 0;
}
.donut-chart {
  height: 270px;
}
/******************************************
				DONUT-CHART by @kseso https://codepen.io/Kseso/pen/phiyL
				******************************************/
.donut-chart {
  position: relative;
  width: 200px;
  height: 200px;
  margin: 0 auto 2rem;
  border-radius: 100%;
}
p.center-date {
  background: #fff;
  position: absolute;
  text-align: center;
  font-size: 28px;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 130px;
  height: 130px;
  margin: auto;
  border-radius: 50%;
  line-height: 35px;
  padding: 15% 0 0;
}
.center-date span.scnd-font-color {
  line-height: 0;
}
.recorte {
  border-radius: 50%;
  clip: rect(0px, 200px, 200px, 100px);
  height: 100%;
  position: absolute;
  width: 100%;
}
.quesito {
  border-radius: 50%;
  clip: rect(0px, 100px, 200px, 0px);
  height: 100%;
  position: absolute;
  width: 100%;
  font-family: monospace;
  font-size: 1.5rem;
}
#porcion1 {
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
}

#porcion1 .quesito {
  background-color: #e64c65;
  -webkit-transform: rotate(76deg);
  transform: rotate(76deg);
}
#porcion2 {
  -webkit-transform: rotate(76deg);
  transform: rotate(76deg);
}
#porcion2 .quesito {
  background-color: #00b123;
  -webkit-transform: rotate(140deg);
  transform: rotate(140deg);
}
#porcion3 {
  -webkit-transform: rotate(215deg);
  transform: rotate(215deg);
}
#porcion3 .quesito {
  background-color: #4fc4f6;
  -webkit-transform: rotate(113deg);
  transform: rotate(113deg);
}
#porcionFin {
  -webkit-transform: rotate(-32deg);
  transform: rotate(-32deg);
}
#porcionFin .quesito {
  background-color: #fcb150;
  -webkit-transform: rotate(32deg);
  transform: rotate(32deg);
}
/******************************************
				END DONUT-CHART by @kseso https://codepen.io/Kseso/pen/phiyL
				******************************************/
.os-percentages {
  padding-top: 36px;
}
.os-percentages li {
  width: 75px;
  border-left: 1px solid #fff;
  text-align: center;
  background: #e7e7e7;
}
.os {
  margin: 0;
  padding: 10px 0 5px;
  font-size: 15px;
}
.os.ios {
  border-top: 4px solid #e64c65;
}
.os.mac {
  border-top: 4px solid #00b123;
}
.os.linux {
  border-top: 4px solid #fcb150;
}
.os.win {
  border-top: 4px solid #4fc4f6;
}
.os-percentage {
  margin: 0;
  padding: 0 0 15px 10px;
  font-size: 25px;
}
.line-chart-block {
  height: 400px;
}
.line-chart {
  height: 200px;
  background: #00b123;
}
/******************************************
				LINE-CHART by @kseso https://codepen.io/Kseso/pen/phiyL
				******************************************/
.grafico {
  padding: 2rem 1rem 1rem;
  width: 100%;
  height: 100%;
  position: relative;
  color: #252525;
  font-size: 80%;
  background-color: #fff;
}
.grafico span {
  display: block;
  position: absolute;
  bottom: 3rem;
  left: 2rem;
  height: 0;
  border-top: 2px solid;
  -webkit-transform-origin: left center;
  transform-origin: left center;
  color: #00b123;
}
.grafico span > span {
  left: 100%;
  bottom: 0;
}
[data-valor="25"] {
  width: 75px;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
[data-valor="8"] {
  width: 24px;
  -webkit-transform: rotate(65deg);
  transform: rotate(65deg);
}
[data-valor="13"] {
  width: 39px;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
[data-valor="5"] {
  width: 15px;
  -webkit-transform: rotate(50deg);
  transform: rotate(50deg);
}
[data-valor="23"] {
  width: 69px;
  -webkit-transform: rotate(-70deg);
  transform: rotate(-70deg);
}
[data-valor="12"] {
  width: 36px;
  -webkit-transform: rotate(75deg);
  transform: rotate(75deg);
}
[data-valor="15"] {
  width: 45px;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

[data-valor]:before {
  content: "";
  position: absolute;
  display: block;
  right: -4px;
  bottom: -3px;
  padding: 4px;
  background: #00b123;
  border-radius: 50%;
}
[data-valor="23"]:after {
  content: "+" attr(data-valor) "%";
  position: absolute;
  right: -2.7rem;
  top: -1.7rem;
  padding: 0.3rem 0.5rem;
  background: #e7e7e7;
  border-radius: 0.5rem;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
[class^="eje-"] {
  position: absolute;
  left: 0;
  bottom: 0rem;
  width: 100%;
  padding: 1rem 1rem 0 2rem;
  height: 80%;
}
.eje-x {
  height: 2.5rem;
}
.eje-y li {
  height: 25%;
  border-top: 1px solid #777;
}
[data-ejeY]:before {
  content: attr(data-ejeY);
  display: inline-block;
  width: 2rem;
  text-align: right;
  line-height: 0;
  position: relative;
  left: -2.5rem;
  top: -0.5rem;
}
.eje-x li {
  width: 33%;
  float: left;
  text-align: center;
}
/******************************************
				END LINE-CHART by @kseso https://codepen.io/Kseso/pen/phiyL
				******************************************/
.time-lenght {
  padding-top: 22px;
  padding-left: 38px;
}
.time-lenght-btn {
  display: block;
  width: 70px;
  line-height: 32px;
  background: #e7e7e7;
  border-radius: 5px;
  font-size: 14px;
  text-align: center;
  margin-right: 5px;
  -webkit-transition: background 0.3s;
  transition: background 0.3s;
}
.time-lenght-btn:hover {
  text-decoration: none;
  background: #00b123;
  color: #fff;
  transition: 0.3s;
}
.month-data {
  padding-top: 28px;
}
.month-data p {
  display: inline-block;
  margin: 0;
  padding: 0 25px 15px;
  font-size: 16px;
}
.month-data p:last-child {
  padding: 0 25px;
  float: right;
  font-size: 15px;
}
.increment {
  color: #00b123;
}
.media {
  height: 216px;
}
#media-display {
  position: relative;
  height: 180px;
  background: #787878
    url("https://www.fancinema.com.ar/wp-content/uploads/catwoman1.jpg") center
    top;
}
#media-display .play {
  position: absolute;
  top: 75px;
  right: 32px;
  border: 2px solid #252525;
  border-radius: 100%;
  padding: 2px 5px 2px 9px;
}
#media-display .play:hover {
  border: 2px solid #e64c65;
}
.media-control-bar {
  padding: 6px 0 0 15px;
}
.media-btn,
.time-passed {
  display: inline-block;
  margin: 0;
}
.media-btn {
  font-size: 19px;
}
.media-btn:hover,
.media-btn:hover span {
  text-decoration: none;
  color: #e64c65;
}
.play {
  margin-right: 100px;
}
.volume {
  margin-left: 30px;
}
.resize {
  margin-left: 12px;
}
.left-container .social {
  height: 110px;
}
.left-container .social li {
  width: 75px;
  height: 110px;
}
.left-container .social li .icon {
  text-align: center;
  font-size: 20px;
  margin: 0;
  line-height: 75px;
}
.left-container .social li .number {
  text-align: center;
  margin: 0;
  line-height: 34px;
}
.left-container .social .facebook {
  background: #3468af;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
.left-container .social .facebook .number {
  background: #1a4e95;
  border-bottom-left-radius: 5px;
}
.left-container .social .twitter {
  background: #ff00b7;
}
.left-container .social .twitter .icon {
  font-size: 18px;
}
.left-container .social .twitter .number {
  background: #ff00b7;
}
.left-container .social .googleplus {
  background: #00b123;
}
.left-container .social .googleplus .number {
  background: #00b123;
}
.left-container .social .mailbox {
  background: #e7e7e7;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
.left-container .social .mailbox .number {
  background: #363f61;
  border-bottom-right-radius: 5px;
}
/************************************************** MIDDLE CONTAINER **********************************/
.middle-container {
  margin: 0 25px;
}
.profile {
  height: 410px;
}
.add-button .icon {
  float: right;
  line-height: 18px;
  width: 23px;
  border: 2px solid;
  border-radius: 100%;
  font-size: 18px;
  text-align: center;
  margin: 10px;
}
.add-button .icon:hover {
  color: #e64c65;
  border-color: #e64c65;
}
.user-name {
  margin: 25px 0 16px;
  text-align: center;
}
.profile-description {
  width: 210px;
  margin: 0 auto;
  text-align: center;
}
.profile-options {
  padding-top: 23px;
}

.profile-options p {
  margin: 0;
}
.profile-options a {
  display: block;
  width: 99px;
  line-height: 60px;
  text-align: center;
  -webkit-transition: background 0.3s;
  transition: background 0.3s;
}
.profile-options a:hover {
  text-decoration: none;
  background: #e7e7e7;
}
.profile-options a:hover.comments .icon {
  color: #fcb150;
}
.profile-options a:hover.views .icon {
  color: #00b123;
}
.profile-options a:hover.likes .icon {
  color: #e64c65;
}
.profile-options .icon {
  padding-right: 10px;
}
.profile-options .comments {
  border-top: 4px solid #fcb150;
}
.profile-options .views {
  border-top: 4px solid #00b123;
}
.profile-options .likes {
  border-top: 4px solid #e64c65;
}
.weather {
  height: 555px;
}
.weather .titular {
  background: #cc324b;
  color: #fff;
}
.weather .titular .icon {
  padding-right: 15px;
  font-size: 26px;
  filter: invert(1);
}
.weather .current-day {
  height: 135px;
  background: #e64c65;
}
.weather .current-day p {
  margin: 0;
  padding-left: 50px;
  color: #fff;
}
.current-day-date {
  font-size: 16px;
  padding-top: 16px;
}
.current-day-temperature {
  font-size: 70px;
}
.current-day-temperature .icon-cloudy {
  padding-left: 20px;
}

.weather .next-days p {
  margin: 0;
  display: inline-block;
  font-size: 16px;
}
.weather .next-days a {
  display: block;
  line-height: 58px;
  -webkit-transition: background 0.3s;
  transition: background 0.3s;
}
.weather .next-days a:hover {
  background: #e7e7e7;
}
.weather .next-days a:hover .day {
  color: #e64c65;
}
.weather .next-days-date {
  padding-left: 20px;
}
.weather .next-days-temperature {
  float: right;
  padding-right: 20px;
}
.weather .next-days-temperature .icon {
  padding-left: 10px;
}
.tweets {
  height: 375px;
}
.tweets .titular {
  background: #35aadc;
  color: #fff;
  display: flex;
  align-items: center;
}
.tweets .titular img {
  width: 30px;
  margin: 0 10px 0 20px;
}
.tweet.first {
  height: 150px;
  border-bottom: 1px solid #cfcfcf;
}
.tweet p:first-child {
  margin: 0;
  padding: 30px 30px 0;
}
.tweet p:last-child {
  margin: 0;
  padding: 15px 30px 0;
}
.tweet-link {
  color: #4fc4f6;
}
.middle-container .social {
  height: 205px;
  background: transparent;
}
.middle-container .social li {
  margin-bottom: 12px;
}
.middle-container .social a {
  line-height: 60px;
}
.middle-container .social a:hover {
  text-decoration: none;
}
.middle-container .social .titular {
  border-radius: 5px;
  color: #fff;
}
.middle-container .social .facebook {
  background: #3468af;
  -webkit-transition: background 0.3s;
  transition: background 0.3s;
}
.middle-container .social a:hover .facebook {
  background: #1a4e95;
}
.middle-container .social a:hover .icon.facebook {
  background: #3468af;
}
.middle-container .social .twitter {
  background: #780086;
  -webkit-transition: background 0.3s;
  transition: background 0.3s;
}
.middle-container .social a:hover .twitter {
  background: #4f0058;
}
.middle-container .social a:hover .icon.twitter {
  background: #660071;
}
.middle-container .social .googleplus {
  background: #00b123;
  -webkit-transition: background 0.3s;
  transition: background 0.3s;
}
.middle-container .social a:hover .googleplus {
  background: #008f1d;
}
.middle-container .social a:hover .icon.googleplus {
  background: #00b123;
}
.middle-container .social .icon {
  float: left;
  width: 60px;
  height: 60px;
  text-align: center;
  font-size: 20px;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
}
.middle-container .social .icon.facebook {
  background: #1a4e95;
  padding: 5px 0 0 0;
}
.middle-container .social .icon.twitter {
  background: #4f0058;
  padding: 5px 0 0 0;
}

.middle-container .social img {
  filter: invert(1);
}
.middle-container .social .icon.googleplus {
  background: #008f1d;
  padding: 5px 0 0 0;
}
/********************************************* RIGHT CONTAINER ****************************************/

.join-newsletter {
  height: 230px;
}
.join-newsletter .titular {
  padding-top: 10px;
}
.subscribe.button {
  background: #00b123;
  margin-top: 10px;
  color: #fff;
}
.subscribe.button:hover {
  background: #007718;
}
.account {
  height: 390px;
}
.account .titular {
  padding: 10px 0;
}
.sign-in.button {
  background: #e64c65;
  margin: 10px auto;
}
.sign-in.button:hover {
  background: #cc324b;
}
.account p {
  text-align: center;
}
.fb-sign-in {
  margin-top: 28px;
  display: block;
  line-height: 50px;
  background: #3468af;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  -webkit-transition: background 0.3s;
  transition: background 0.3s;
}
.fb-sign-in:hover {
  background: #1a4e95;
  text-decoration: none;
}
.fb-sign-in .icon {
  line-height: 20px;
  font-size: 12px;
  padding-right: 3px;
}
.fb-border {
  display: inline-block;
  width: 23px;
  line-height: 20px;
  border: 2px solid #252525;
  border-radius: 100%;
  margin-right: 10px;
}
.loading {
  height: 200px;
  padding-top: 35px;
}
.loading p {
  display: inline-block;
  padding-left: 30px;
  margin: 5px 0 20px;
}
.loading .icon {
  padding-right: 15px;
}
.loading .percentage {
  float: right;
  padding: 6px 35px 0 0;
}
.loading .progress-bar {
  width: 250px;
  height: 20px;
  background: #e7e7e7;
  border-radius: 5px;
  margin: 0 auto;
}
.progress-bar.downloading {
  background: -webkit-linear-gradient(
    left,
    #00b123 81%,
    #e7e7e7 81%
  ); /* Chrome10+,Safari5.1+ */
  background: -ms-linear-gradient(left, #00b123 81%, #e7e7e7 81%); /* IE10+ */
  background: linear-gradient(to right, #00b123 81%, #e7e7e7 81%); /* W3C */
}
.progress-bar.uploading {
  background: -webkit-linear-gradient(
    left,
    #4fc4f6 43%,
    #e7e7e7 43%
  ); /* Chrome10+,Safari5.1+ */
  background: -ms-linear-gradient(left, #4fc4f6 43%, #e7e7e7 43%); /* IE10+ */
  background: linear-gradient(to right, #4fc4f6 43%, #e7e7e7 43%); /* W3C */
}
.calendar-day {
  height: 320px;
  background: #3468af;
}
.calendar-day .titular {
  background: #1a4e95;
}
.calendar-day .arrow-btn:hover {
  background: #16417e;
}
.calendar-day .the-day {
  margin: 0;
  text-align: center;
  font-size: 146px;
}
.add-event.button {
  background: #4fc4f6;
}
.add-event.button:hover {
  background: #35aadc;
}
.calendar-month {
  height: 380px;
}
.calendar-month .titular {
  background: #3468af;
  color: #fff;
}

.calendar-month img {
  margin: 18px;
}
.calendar-month .arrow-btn:hover {
  background: #1a4e95;
}
.calendar {
  margin: 22px 15px;
  text-align: center;
}
.calendar a {
  font-size: 17px;
}
.calendar td,
.calendar th {
  width: 40px;
  height: 38px;
}
.calendar .days-week {
  color: #4fc4f6;
}
.calendar .today {
  display: block;
  width: 34px;
  line-height: 34px;
  background: #e64c65;
  color: #fff;
  border-radius: 100%;
}
</style>
