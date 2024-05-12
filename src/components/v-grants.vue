<template>
  <div id="grants" class="v-grants">
    <div class="v-grants-header">
      <h1>Гранты и скдики</h1>
      <h2>Евразийского Аграрного Колледжа</h2>
    </div>

    <div class="v-grants-info">
      <router-link to="/aboutGrants" class="router-link">
        <h2>Гранты и скидки</h2>
      </router-link>
      <router-link :to="{path: '/aboutGrants'}" class="router-link">
        <h2 style="margin: 0 0 0 40px">Информация по Государственному гранту</h2>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.v-grants {
  width: 100%;
}

.v-grants-header {
  margin: 50px 0 0 160px;
}

.v-grants-header h2 {
  margin: 20px 0 0 0;
  font-weight: 500;
}

.v-grants-info {
  display: flex;
  margin: 50px 0 0 160px;
}

.v-grants-info h2 {
  padding: 30px 180px 30px 30px;
  text-decoration: none;
  border-radius: 10px;
  background-color: #00b123;
  color: #fff;
  border: #00b123 1px solid;
  transition: 0.3s;
  font-weight: 900;
  font-size: 23px;
  transition: 0.3s;
}

.v-grants-info h2:hover {
  background-color: #00931d;
  transition: 0.3s;
}
</style>
