<template>
  <div class="v-header">
    <div class="v-header-logo">
      <img src="../../assets/images/logo-eac.png" />
      <div style="margin-left: 10px">
        <h1>Евразийский</h1>
        <h1>Аграрный</h1>
        <h1>Колледж</h1>
      </div>
    </div>

    <div class="v-header-navbar">
      <div class="v-header-navbar-dropdown">
        <a href="#faculties" class="v-header-navbar-dropbtn">Специальности</a>
        <div class="v-header-navbar-dropdown-content">
          <router-link to="/softWare" class="router-link">
            <a href="#">Програмное обеспечение</a>
          </router-link>
          <router-link to="/veterinary" class="router-link">
            <a href="#">Ветеренария</a>
          </router-link>
          <router-link to="/landManagment" class="router-link">
            <a href="#">Земляустройство</a>
          </router-link>
          <router-link to="/audit" class="router-link">
            <a href="#">Учет и аудит</a>
          </router-link>
          <router-link to="/insurance" class="router-link">
            <a href="#">Банковское дело</a>
          </router-link>
          <router-link to="/electrical" class="router-link">
            <a href="#">Электрооборудование</a>
          </router-link>
          <router-link to="/agronomy" class="router-link">
            <a href="#">Агрономия</a>
          </router-link>
          <router-link to="/forestly" class="router-link">
            <a href="#">Лесное хозяйство</a>
          </router-link>
        </div>
      </div>
      <router-link to="/aboutGrants" class="router-link">
        <a href="#grants">Гранты и скидки</a>
      </router-link>
      <router-link to="/accomondation" class="router-link">
        <a href="#grants">Общежитие</a>
      </router-link>
      <router-link to="/pay">
        <a href="">Оплата за обучение</a>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
.v-header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: relative;
  z-index: 1;
  margin: 0 0 -110px 0;
}

.v-header-logo {
  margin: 30px 0 0 40px;
  display: flex;
  align-items: center;
  color: #ddd;
}

.v-header-logo h1 {
  font-size: 19px;
}

.v-header-navbar {
  display: flex;
  margin: 40px 50px 0 0;
  height: 20px;
}

.v-header-navbar a {
  margin: 0 20px;
  font-size: 18px;
  color: #ddd;
  transition: 0.3s;
  cursor: pointer;
  text-decoration: none;
  font-weight: 900;

  /* background-image: linear-gradient(
    to bottom,
    transparent 0%,
    transparent 90%,
    #00b123 90%
    #00b123 100%
  );

  background-repeat: no-repeat;
  background-size: 0% 100%;
  background-position-x: right;
  transition: background-size 300ms; */
}

.v-header-navbar a:hover {
  color: #00b123;
  transition: 0.3s;
  /* background-size: 100% 100%;
  background-position-x: left; */
}

.v-header-logo img {
  width: 65px;
  height: 70px;
}

.v-header-navbar-dropdown {
  position: relative;
  display: inline-block;
}

.v-header-navbar-dropdown-content {
  display: none;
  position: absolute;
  background-color: #ffffff;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  margin: 0 0 0 10px;
}

.v-header-navbar-dropdown-content a {
  padding: 5px 0;
  display: block;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  font-weight: 400;
  color: #000;
}

.v-header-navbar-dropdown-content a:hover {
  color: #00b123;
}

.v-header-navbar-dropdown:hover .v-header-navbar-dropdown-content {
  display: block;
}

.v-header-navbar-dropdown:hover .v-header-navbar-dropbtn {
  color: #00b123;
}




</style>
