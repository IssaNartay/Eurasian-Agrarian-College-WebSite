<template>
  <div class="v-adminProfileApply">
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
          <router-link to="/adminProfile" class="router-link">
            <p>Вернуться к профилю</p>
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
      <div class="v-adminProfileApply-main">
        <h1>Заявки</h1>
        <div class="v-adminProfileApply-main-info">
          <div
            class="v-adminProfileApply-main-items"
            v-for="(student, i) in STUDENT_APPLY"
            :key="i"
          >
            <h3>Поданное заявленние на грант</h3>
            <p><strong>Выбранный факультет:</strong> {{ student.selectFac }}</p>
            <p><strong>ФИО:</strong> {{ student.fullName }}</p>
            <p><strong>Эл. почта:</strong> {{ student.email }}</p>
            <p><strong>ИИН:</strong> {{ student.IIN }}</p>
            <p><strong>Дата подачи:</strong> {{ student.dateTimeNow }}</p>
            <p><strong>Фото 3х4:</strong></p>
            <img :src="imagePhoto" width="200px"/>
            <p><strong>Фото Аттестата:</strong></p>
            <img :src="imageAttestat" width="500px"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["STUDENT_APPLY"]),
    imagePhoto() {
      return this.$store.state.imagePhoto;
    },
    imageAttestat() {
      return this.$store.state.imageAttestat;
    }
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

.v-adminProfileApply {
  width: 100%;
  overflow-x: hidden;
}

.v-adminProfileApply-main {
  width: 100%;
  height: auto;
  padding: 0 0 0 120px;
}

.v-adminProfileApply-main h1{
  margin: 100px 0 0 50px;
}

.v-adminProfileApply-main-info {
  margin: 100px 0 0 0;
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
}

.v-adminProfileApply-main-info p {
  line-height: 2;
}

.v-adminProfileApply-main-items {
  width: 500px;
  padding: 30px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 10px;
  margin: 0 0 50px 50px;
}

.v-adminProfileApply-main-items h3 {
  text-align: center;
  margin: 0 0 50px 0;
}
</style>
