<template>
  <div class="v-students">

      <div class="v-students-about">
        <h3>
          Евразийский Аграрный Колледж предоставляет инклюзивное образование. Это дает
          возможности обучения в учебных заведениях всем, независимо от имеющихся
          физических, интеллектуальных, социальных, эмоциональных, языковых и
          других особенностей.
        </h3>
        <p>
          На сегодняшний день в нашем Колледже обучаются 599 студентов (1-4 курс), из
          которых:
        </p>
        <p>365 - дети из многодетных семей;</p>
        <p>131 - представители этнических меньшинств;</p>
        <p>48 - лица казахской национальности, не являющиеся гражданами РК;</p>
        <p>37 - сироты;</p>
        <p>18 - дети с ограниченными возможностями.</p>
      </div>
  
      <div id="accomon" class="v-students-header">
        <h1>Абитуриентам</h1>
        <h2>Важная информация</h2>
      </div>
      
      <div class="v-students-info">
        <div class="v-students-info-left">
          <router-link to="/aboutCollege" class="router-link">
            <h1 >О нашем Колледже</h1>
          </router-link>
          <img src="../assets/images/logo-eac.png" alt="" />
        </div>
  
        <div class="v-students-info-right">
          <div class="v-students-info-right-dormitory">
            <router-link to="/accomondation" class="router-link">
              <h2>Проживание</h2>
            </router-link>
          </div>
          <div class="v-students-info-right-pay">
            <router-link to="/aboutPrice" class="router-link">
              <h2>Стоимость обучение</h2>
            </router-link>
          </div>
        </div>
  
        <div class="v-students-contacts">
          <h2>Контакты приемной комиссии</h2>
          <div class="v-students-contacts-item-mail">
            <img src="../assets/images/phone.svg" />
            <p>+7 (727) 262 90 41</p>
          </div>
          <div class="v-students-contacts-item-mail">
            <img src="../assets/images/home-phone.svg" />
            <p>+7 (727) 262 17 39</p>
          </div>
          <div class="v-students-contacts-item-mail">
            <img src="../assets/images/mail.svg" />
            <p>almatyagrocollege@mail.ru</p>
          </div>
        </div>
      </div>
  
      <div class="v-students-partners">
        <h1>Наши партнеры</h1>
  
        <div class="v-students-partners-items">
          <div class="v-students-partners-items-img">
            <img src="../assets/images/partner1.png" width="135px">
          </div>
          <div class="v-students-partners-items-img">
            <img src="../assets/images/partner2.png" width="135px">
          </div>
          <div class="v-students-partners-items-img">
            <img src="../assets/images/partner3.png" width="135px">
          </div>
          <div class="v-students-partners-items-img">
            <img src="../assets/images/partner4.png" width="135px">
          </div>
          <div class="v-students-partners-items-img">
            <img src="../assets/images/partner5.png" width="235px">
          </div>
        </div>
        
      </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.v-students {
  width: 100%;
  margin: 0 0 50px 0;
}
.v-students-about {
  width: 1140px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 30px;
  margin: 50px 0 0 160px;
  border-radius: 10px;
}

.v-students-about h3 {
  font-weight: 600;
  margin: 0 0 20px 0;
}

.v-students-about p {
  line-height: 1.5;
  font-size: 18px;
}

.v-students-header {
  margin: 50px 0 0 160px;
}

.v-students-header h2 {
  margin: 10px 0 0 0;
  font-weight: 500;
}

.v-students-info {
  display: flex;
  margin: 50px 0 0 160px;
}

.v-students-info-left {
  width: 400px;
  height: 300px;
  background-color: #252525;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  transition: 0.3s;
}


.v-students-info-left:hover{
  transform: translate(10px, 0) scale(1.01);
  transition: 0.3s;
  box-shadow: rgb(112, 112, 112) -5px 5px 30px;
}

.v-students-info-left h1 {
  color: #fff;
  margin: 50px 0 0 80px;
  font-size: 25px;
}

.v-students-info-left img {
  width: 150px;
  margin: 20px 0 0 125px;
}

.v-students-info-right {
  margin: 0 0 0 50px;
}




.v-students-info-right-pay {
  margin: 40px 0 0 0; 
}

.v-students-info-right-pay h2:hover{
  transform: translate(10px, 0) scale(1.01);
  transition: 0.3s;
  box-shadow: rgb(185, 185, 185) -5px 5px 30px;
}

.v-students-info-right-dormitory{
  transition: 0.3s;
}


.v-students-info-right-dormitory h2:hover{
  transform: translate(10px, 0) scale(1.01);
  transition: 0.3s;
  box-shadow: rgb(185, 185, 185) -5px 5px 30px;
}

.v-students-info-right-dormitory h2{
  padding: 30px 190px 70px 30px;
  background-color: #00b123;
  text-decoration: none;
  border-radius: 10px;
  color: #fff;
  font-size: 23px;
  font-weight: 600;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  transition: 0.3s;

}

.v-students-info-right-pay h2{
  padding: 30px 100px 70px 30px;
  background-color: #fff;
  text-decoration: none;
  border-radius: 10px;
  color: #00b123;
  font-size: 23px;
  font-weight: 600;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  transition: 0.3s;

}

.v-students-contacts {
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 10px;
  width: 300px;
  height: 280px;
  border-radius: 10px;
  margin: 0 0 0 50px;
  transition: 0.3s;
}

.v-students-contacts:hover{
  transform: translate(10px, 0) scale(1.01);
  transition: 0.3s;
  box-shadow: rgb(185, 185, 185) -5px 5px 30px;
}


.v-students-contacts img {
  width: 30px;
  filter: invert(48%) sepia(42%) saturate(4298%) hue-rotate(104deg)
    brightness(95%) contrast(102%);
}


.v-students-contacts-item-mail {
  display: flex;
  margin: 20px 0 0 20px;
}

.v-students-contacts h2 {
  margin: 20px 0 0 20px;
}

.v-students-contacts p {
  margin: 5px 0 0 20px;
}



.v-students-partners{
  width: 100%;
  height: 300px;
}


.v-students-partners h1{
  margin: 100px 0 0 170px;
}

.v-students-partners-items{
  display: flex;
  align-items: center;
  margin: 50px 0 0 170px;
}

.v-students-partners-items-img{
  border-right: 3px solid #00b123;
  padding: 0 50px 0 0;
}

.v-students-partners-items-img:nth-child(2){
  padding: 0 50px;
}
.v-students-partners-items-img:nth-child(3){
  padding: 0 50px;
}
.v-students-partners-items-img:nth-child(4){
  padding: 0 50px;
}

.v-students-partners-items-img:nth-child(5){
  border: none;
  padding: 0 50px;
}


.v-students-partners-items img{
  filter: grayscale(1);
  /* opacity: 0.7; */
  transition: 0.3s;
}

.v-students-partners-items img:hover{
  filter: grayscale(0);
  transition: 0.3s;
  opacity: 1;

}
</style>
