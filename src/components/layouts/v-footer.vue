<template>
  <div class="v-footer">
    <div class="v-loader" id="loading" v-if="$store.state.has_loading">
      <div class="atom-spinner">
        <div class="spinner-inner">
          <div class="spinner-line"></div>
          <div class="spinner-line"></div>
          <div class="spinner-line"></div>
          <!--Chrome renders little circles malformed :(-->
          <div class="spinner-circle">&#9679;</div>
        </div>
      </div>
    </div>

    <div v-else>
      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="footer-col">
              <h4>КОНТАКТЫ</h4>
              <ul>
                <li>
                  <a
                    href="https://2gis.kz/almaty/search/%D0%90%D0%BB%D0%BC%D0%B0%D1%82%D1%8B%2C%20%D1%83%D0%BB.%20%D0%9C%D0%B0%D0%BC%D0%B5%D1%82%D0%BE%D0%B2%D0%BE%D0%B9%20404%2F67%2F9/geo/9430047374981842/76.933436%2C43.267609?m=76.933454%2C43.267619%2F17.62"
                    target="_blank"
                    >г. Алматы, ул. Маметовой 404/67/9</a
                  >
                </li>
                <li><a href="#">Алматы, Казахстан, 050035</a></li>
                <li>
                  <a
                    href="https://api.whatsapp.com/send?phone=77272629041"
                    target="_blank"
                    >Ссылка на WhatsApp</a
                  >
                </li>
                <li><a href="#">Тел: 8 (727) 262 90 41</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>СПЕЦИАЛЬНОСТИ</h4>
              <ul>
                <router-link to="/softWare" class="router-link">
                  <li><a href="#">Программное обеспечение</a></li>
                </router-link>
                <router-link to="/audit" class="router-link">
                  <li><a href="#">Учет и аудит</a></li>
                </router-link>
                <router-link to="/agronomy" class="router-link">
                  <li><a href="#">Агрономия</a></li>
                </router-link>
                <router-link to="/insurance" class="router-link">
                  <li><a href="#">Банковское дело</a></li>
                </router-link>
                <router-link to="/veterinary" class="router-link">
                  <li><a href="#">Ветеринария</a></li>
                </router-link>
                <router-link to="/landManagment" class="router-link">
                  <li><a href="#">Землеустройство</a></li>
                </router-link>
              </ul>
            </div>
            <div class="footer-col">
              <h4>О КОЛЛЕДЖЕ</h4>
              <ul>
                <router-link to="/aboutCollege" class="router-link">
                  <li><a href="#">О нас</a></li>
                </router-link>
                <router-link to="/accomondation" class="router-link">
                  <li><a href="#">Проживание</a></li>
                </router-link>
                <router-link to="/aboutGrants" class="router-link">
                  <li><a href="#">Гранты и скидки</a></li>
                </router-link>
                <router-link to="/pay" class="router-link">
                  <li><a href="#">Оплата обучение</a></li>
                </router-link>
              </ul>
            </div>
            <div class="footer-col">
              <h4>СОЦИАЛЬНЫЕ СЕТИ</h4>
              <div class="social-links">
                <a href="https://www.instagram.com/eac_edu_/"
                  ><img src="../../assets/images/instagram.png" alt=""
                /></a>
                <a href="https://ru-ru.facebook.com/euagrocollege/"
                  ><img src="../../assets/images/facebook.png" alt=""
                /></a>
                <a href="https://vk.com/agracollege_kz"
                  ><img
                    src="../../assets/images/vk-logo-of-social-network.png"
                    alt=""
                /></a>
                <a href="https://api.whatsapp.com/send?phone=77272640613"
                  ><img src="../../assets/images/whatsapp.png" alt=""
                /></a>
              </div>
              <router-link to="/login" class="router-link">
                <a class="admin-login" href="#">Войти как Админ</a>
              </router-link>
            </div>
          </div>
        </div>
        <div class="footer-last">
          <p>© Евразийский Аграрный Колледж - 2023. Все права защищены</p>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

/* ssssssssssssssssss */

.container {
  max-width: 1170px;
  margin: auto;
}
.row {
  display: flex;
}
.footer {
  background-color: #262626;
  padding: 70px 0 0 0;
  margin: 0px 0 0 0;
}
.footer-col {
  width: 25%;
  padding: 0 15px;
}
.footer-col h4 {
  font-size: 18px;
  color: #fff;
  text-transform: capitalize;
  margin-bottom: 35px;
  padding: 0 0 10px 0;
  font-weight: 600;
  /* border-bottom: 1px solid #00b123;
  border-width: 2px; */
  position: relative;
}
.footer-col h4::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: -10px;
  background-color: #00b123;
  height: 2px;
  width: 50px;
}
.fotter-col ul li:not(:last-child) {
  margin-bottom: 10px;
}
.footer-col ul li a {
  font-size: 16px;
  text-transform: capitalize;
  color: #fff;
  text-decoration: none;
  font-weight: 300;
  display: block;
  transition: all 0.3s ease;
  line-height: 1.8;
}
.footer-col ul li a:hover {
  color: #b9b9b9;
  padding-left: 5px;
}
.footer-col .social-links a {
  display: inline-block;
  height: 40px;
  width: 40px;
  background-color: rgba(0, 0, 0, 0.2);
  margin: 0 10px 0 0;
  text-align: center;
  line-height: 40px;
  border-radius: 50%;
  color: #fff;
  transition: 0.3s;
}

.footer-col .social-links img {
  width: 25px;
  margin: 7px 0 50px 0;
  filter: invert(48%) sepia(42%) saturate(4298%) hue-rotate(104deg)
    brightness(95%) contrast(102%);
}
.footer-col .social-links a:hover {
  color: #24262b;
  background-color: #fff;
  transition: 0.3s;
}

.footer-last {
  background-color: rgba(0, 0, 0, 0.2);
  color: #fff;
  padding: 20px;
  text-align: center;
  margin: 30px 0 0 0;
}


.admin-login{
  text-decoration: none;
  color: #ffffff;
}
</style>
