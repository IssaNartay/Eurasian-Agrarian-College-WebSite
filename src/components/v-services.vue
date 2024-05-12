<template>
  <div class="v-services">

    



      <div class="v-services-online">
        <h2>Онлайн услуги</h2>
        <p>На все программы Евразийского Аграрного Колледжа</p>
  
        <div class="v-services-online-item">
          <router-link to="/pay" class="router-link">
            <h4>Онлайн оплата за обучение</h4>
          </router-link>
          <router-link to="/consultation" class="router-link">
            <h4>Онлайн консультация</h4>
          </router-link>
        </div>
      </div>
  
      <div class="v-services-contacts">
        <h2>Контакты приемной комиссии</h2>
        <div class="v-services-contacts-item">
          <div style="display: flex">
            <img src="../assets/images/phone.svg" />
            <p>+7 (727) 262 90 41</p>
          </div>
          <div style="display: flex">
            <img src="../assets/images/home-phone.svg" />
            <p>+7 (727) 262 17 39</p>
          </div>
        </div>
        <div class="v-services-contacts-item-mail">
          <img src="../assets/images/mail.svg" />
          <p>almatyagrocollege@mail.ru</p>
        </div>
  
        <div style="margin: 40px 0 0 20px">
          <a href="https://api.whatsapp.com/send?phone=77272640613"
            >Написать в WhatsApp</a
          >
        </div>
      </div>
  </div>
</template>











<script>
export default {};
</script>

<style scoped>
.v-services {
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 100px;
  height: 350px;
}

.v-services-online {
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 10px;
  width: 550px;
  height: 250px;
  border-radius: 10px;
  margin: 0 0 0 100px;
}

.v-services-online h2 {
  margin: 30px 0 0 20px;
}
.v-services-online p {
  margin: 20px 0 0 20px;
}

.v-services-online-item {
  display: flex;
  justify-content: space-between;
  margin: 40px 20px 0 20px;
}
.v-services-online-item h4 {
  padding: 15px 15px;
  background-color: #fff;
  text-decoration: none;
  border-radius: 10px;
  color: #00b123;
  border: 1px solid #00b123;
  transition: 0.3s;
  cursor: pointer;
  font-weight: 600;
}

.v-services-online-item h4:hover {
  transition: 0.3s;
  color: #fff;
  background: #00b123;
}

.v-services-contacts {
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 10px;
  width: 500px;
  height: 250px;
  border-radius: 10px;
  margin: 0 100px 0 0;
}

.v-services-contacts img {
  width: 30px;
  filter: invert(48%) sepia(42%) saturate(4298%) hue-rotate(104deg)
    brightness(95%) contrast(102%);
}

.v-services-contacts-item {
  display: flex;
  justify-content: space-between;
  margin: 30px 20px 0 20px;
  align-items: center;
}
.v-services-contacts-item-mail {
  display: flex;
  margin: 20px 0 0 20px;
}

.v-services-contacts h2 {
  margin: 20px 0 0 20px;
}

.v-services-contacts p {
  margin: 5px 0 0 20px;
}

.v-services-contacts a {
  padding: 15px 140px;
  text-decoration: none;
  border-radius: 10px;
  background-color: #00ad82;
  color: #fff;
  border: #00ad82 1px solid;
  transition: 0.3s;
  font-weight: 600;
}
.v-services-contacts a:hover {
  transition: 0.3s;
  background-color: #fff;
  color: #00ad82;
}
</style>
