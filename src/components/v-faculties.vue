<template>
  <div id="faculties" class="v-faculties">
    <div class="v-faculties-first">
      <div>
        <h1>Правила поступления</h1>
        <h2>Евразийского Аграрного Колледжа</h2>
      </div>

      <div style="display: flex; align-items: center">
        <!-- <p>Посмотреть все</p> -->
        <!-- <img src="../assets/images/right-arrow.png" alt="" /> -->
      </div>
    </div>

    <div class="v-faculties-second">
      <router-link to="/softWare" class="router-link">
        <div class="v-faculties-bakalavr">
          <h1>Программное обеспечение</h1>
          <img src="../assets/images/it-department.png" alt="" />
        </div>
      </router-link>

      <router-link to="/veterinary" class="router-link"> 
        <div class="v-faculties-magistratura">
          <h1>Ветеринария</h1>
          <img src="../assets/images/veterinarian.png" alt="" />
        </div>
      </router-link>
    </div>
    <div class="v-faculties-second">
      <router-link to="/landManagment" class="router-link">
        <div class="v-faculties-bakalavr">
          <h1>Землеустройство</h1>
          <img src="../assets/images/management.png" alt="" />
        </div>
      </router-link>

      <router-link to="/audit" class="router-link">        
        <div class="v-faculties-magistratura">
          <h1>Учет и аудит</h1>
          <img src="../assets/images/audit.png" alt="" />
        </div>
      </router-link>
    </div>
    <div class="v-faculties-second">
      <router-link to="/electrical" class="router-link">
        <div class="v-faculties-bakalavr">
          <h1>Электрооборудование</h1>
          <img src="../assets/images/electrical.png" alt="" />
        </div>
      </router-link>

      <router-link to="/forestly" class="router-link">
        <div class="v-faculties-magistratura">
          <h1>Лесное хозяйство</h1>
          <img src="../assets/images/forest.png" alt="" />
        </div>
      </router-link>
    </div>
    <div class="v-faculties-second">
      <router-link to="/logistic" class="router-link">
        <div class="v-faculties-bakalavr">
          <h1>Логистика</h1>
          <img src="../assets/images/logistic.png" alt="" />
        </div>
      </router-link>

      <router-link to="/hunting" class="router-link">
        <div class="v-faculties-magistratura">
          <h1>Охотоведение</h1>
          <img src="../assets/images/hunting.png" alt="" />
        </div>
      </router-link>
    </div>
    <div class="v-faculties-second">  
      <router-link to="/agronomy" class="router-link">
        <div class="v-faculties-magistratura">
          <h1>Агрономия</h1>
          <img src="../assets/images/agronomy.png" alt="" />
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.v-faculties {
  width: 100%;
  display: block;
}

.v-faculties-first {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.v-faculties-first h1 {
  margin: 20px 0 0 160px;
  font-weight: 900;
}

.v-faculties-first h2 {
  margin: 10px 0 0 160px;
  font-weight: 500;
}

.v-faculties-first p {
  font-weight: 600;
  cursor: pointer;
}

.v-faculties-first img {
  width: 15px;
  margin: 0 160px 0 3px;
}

.v-faculties-second {
  display: flex;
  margin: 30px 0 0 110px;
}

.v-faculties-second .v-faculties-bakalavr,
.v-faculties-magistratura {
  width: 500px;
  height: 300px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  margin: 10px 50px 0 50px;
  border-radius: 10px;
  padding: 30px 0 0 50px;
  transition: 0.3s;
  cursor: pointer;
}
.v-faculties-second .v-faculties-bakalavr:hover,
.v-faculties-magistratura:hover {
  transform: translate(5px, 0px);
  transition: 0.3s;
}

.v-faculties-bakalavr img {
  filter: invert(48%) sepia(42%) saturate(4298%) hue-rotate(104deg)
    brightness(95%) contrast(102%);
  width: 100px;
  margin: 130px 0 0 350px;
}
.v-faculties-doctorantura img {
  filter: invert(48%) sepia(42%) saturate(4298%) hue-rotate(104deg)
    brightness(95%) contrast(102%);
  width: 100px;
  margin: 130px 0 0 350px;
}
.v-faculties-magistratura img {
  filter: invert(48%) sepia(42%) saturate(4298%) hue-rotate(104deg)
    brightness(95%) contrast(102%);
  width: 100px;
  margin: 130px 0 0 350px;
}


</style>
