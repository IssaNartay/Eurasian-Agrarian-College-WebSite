<template>
  <div class="v-aboutPrice">
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
          <img src="../assets/images/left-arrow.png" width="15px" />
          <router-link to="/" class="router-link">
            <p>Вернуться на главную</p>
          </router-link>
        </div>
  
        <router-link to="/">
          <img class="v-pay-header-logo" src="../assets/images/logo-eac.png" />
        </router-link>
        <h4>Eng Қаз Рус</h4>
      </div>
  
      <div class="v-accomondation-tariff">
        <h1>Стоимость обучения</h1>
        <div class="v-accomondation-tariff-info">
          <div class="v-accomondation-tariff-info-text">
            <h2>Програмное обеспечение</h2>
            <h3>420,000.00 тг</h3>
          </div>
          <p>Русский, Казахский</p>
        </div>
        <div class="v-accomondation-tariff-info">
          <div class="v-accomondation-tariff-info-text">
            <h2>Агрономия</h2>
            <h3>420,000.00 тг</h3>
          </div>
          <p>Русский, Казахский</p>
        </div>
        <div class="v-accomondation-tariff-info">
          <div class="v-accomondation-tariff-info-text">
            <h2>Ветеринария</h2>
            <h3>450,000.00 тг</h3>
          </div>
          <p>Русский, Казахский</p>
        </div>
        <div class="v-accomondation-tariff-info">
          <div class="v-accomondation-tariff-info-text">
            <h2>Землеустройство</h2>
            <h3>420,000.00 тг</h3>
          </div>
          <p>Русский, Казахский</p>
        </div>
        <div class="v-accomondation-tariff-info">
          <div class="v-accomondation-tariff-info-text">
            <h2>Учет и аудит</h2>
            <h3>420,000.00 тг</h3>
          </div>
          <p>Русский, Казахский</p>
        </div>
        <div class="v-accomondation-tariff-info">
          <div class="v-accomondation-tariff-info-text">
            <h2>Электрооборудование</h2>
            <h3>420,000.00 тг</h3>
          </div>
          <p>Русский, Казахский</p>
        </div>
        <div class="v-accomondation-tariff-info">
          <div class="v-accomondation-tariff-info-text">
            <h2>Логистика</h2>
            <h3>420,000.00 тг</h3>
          </div>
          <p>Русский, Казахский</p>
        </div>
        <div class="v-accomondation-tariff-info">
          <div class="v-accomondation-tariff-info-text">
            <h2>Лесное хозяйство</h2>
            <h3>420,000.00 тг</h3>
          </div>
          <p>Русский, Казахский</p>
        </div>
        <div class="v-accomondation-tariff-info">
          <div class="v-accomondation-tariff-info-text">
            <h2>
              Техническое обслуживание, ремонт и эксплуатация автомобильного
              транспорта
            </h2>
            <h3>420,000.00 тг</h3>
          </div>
          <p>Русский, Казахский</p>
        </div>
        <div class="v-accomondation-tariff-info">
          <div class="v-accomondation-tariff-info-text">
            <h2>
              Охотоведение и звероводство
            </h2>
            <h3>420,000.00 тг</h3>
          </div>
          <p>Русский, Казахский</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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

.v-accomondation-tariff {
  padding: 70px 170px;
}

.v-accomondation-tariff h1 {
  margin: 0 0 50px 0;
}

.v-accomondation-tariff-info {
  padding: 20px 0;
  width: 1150px;
  margin: 1 0px 0 0 0;
}

.v-accomondation-tariff-info-text {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 0 0 10px 0;
}

.v-accomondation-tariff-info-text h2 {
  font-size: 20px;
  color: #00b123;
}

.v-accomondation-tariff-info p {
  margin: 10px 0 0 0;
}
</style>
