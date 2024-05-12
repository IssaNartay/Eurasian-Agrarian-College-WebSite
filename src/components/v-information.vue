<template>
  <div class="v-information">
    <img class="v-information-img" src="../assets/images/students.jpeg" />
    <div class="v-information-text">
      <h1>Приёмная комиссия</h1>
      <h3>Период работы приёмной комиссии с 16 мая по 25 августа</h3>
    </div>
    <div class="v-information-button">
        <div class="arrow-7">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>



<script>
export default {};
</script>

<style scoped>
.v-information {
  width: 100%;
}
.v-information-img {
  filter: brightness(40%);
  width: 100%;
}

.v-information-text {
  position: relative;
  z-index: 0;
  margin: -450px 0 0 100px;
}

.v-information-text h1 {
  color: #ddd;
  font-size: 60px;
}
.v-information-text h3 {
  color: #ddd;
  margin: 10px 0 0 0;
  font-size: 20px;
}

.v-information-button {
  /* border: #ddd 1px solid; */
  border-radius: 50%;
  width: 30px;
  height: 30px;
  padding: 10px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  margin: 250px 0 0 700px;
  position: relative;
}



.arrow-7 {
  margin: 0px auto 0px auto;
  width: 38px;
  height: 50px;
}
.arrow-7 span {
  display: block;
  width: 10px;
  height: 10px;
  border-bottom: 4px solid #fff;
  border-right: 4px solid #fff;
  transform: rotate(45deg);
  margin: -15px 0 0 7px;
  animation: arrow-7 2s infinite;
}
.arrow-7 span:nth-child(2) {
  animation-delay: -0.2s;
}
.arrow-7 span:nth-child(3) {
  animation-delay: -0.4s;
}
@keyframes arrow-7 {
  0% {
    opacity: 0;
    transform: translate(0, -20px) rotate(45deg);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translate(0, 30px) rotate(45deg);
  }
}
</style>
