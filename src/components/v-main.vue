<template>
  <div class="v-main">
    <div id="loading" v-if="$store.state.has_loading"></div>
    <div v-else>
      <div class="message">
        <h3>Подать заявку на <br> грант прямо сейчас</h3>
        <router-link to="/applyForm" class="router-link applyBtn">
          <a href="">Подать заявку</a>
        </router-link>
      </div>
      <v-header />
      <v-information />
      <v-services />
      <v-faculties />
      <v-grants />
      <v-students />
      <!-- <v-footer/> -->
    </div>
  </div>
</template>

<script>
import vHeader from "./layouts/v-header.vue";
import vInformation from "./v-information.vue";
import vServices from "./v-services.vue";
import vFaculties from "./v-faculties.vue";
import VGrants from "./v-grants.vue";
import VStudents from "./v-students.vue";

// import VFooter from './layouts/v-footer.vue';
export default {
  components: {
    vHeader,
    vInformation,
    vServices,
    vFaculties,
    VGrants,
    VStudents,
  },
};
</script>

<style scoped>
.message {
  padding: 20px 0px;
  width: 300px;
  height: 110px;
  position: fixed;
  z-index: 1000;
  background-color: #fff;
  bottom: 50px;
  right: 25px;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
.message h3 {
  margin: 0 0 30px 0;
  text-align: center;
}
.message a {
  background-color: #00b123;
  color: #fff;
  border-radius: 10px;
  padding: 15px 20px;
  text-decoration: none;
  font-weight: 600;
  transition: 0.3s;
}
.message a:hover{
  background-color: #007417;
  transition: 0.3s;
}
.message .applyBtn{
  margin: 0 0 0 50px;
  transition: 0.3s;

}
</style>
