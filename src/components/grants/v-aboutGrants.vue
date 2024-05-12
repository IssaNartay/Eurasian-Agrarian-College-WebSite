<template>
  <div class="v-aboutGrants">
    <div id="loading" v-if="$store.state.has_loading"></div>
    <div v-else>
      <div>
        <v-modal
          v-if="isModalOpenGos"
          @close="isModalOpenGos = false"
          :grantsInfo="'Государственный грант — это государственный образовательный заказ на подготовку специалистов с средним образованием в организациях образования, финансируемых из республиканского бюджета.Абитуриент вправе сам выбрать Колледж и специальность, согласно правилам размещения государственного образовательного заказа.'"
          :discountSize="'не менее 2 лет 50% от стоимости обучения не менее 4 лет 90% от стоимости обучения'"
          :requiredDocument1="'скан версии следующих документов'"
          :requiredDocument2="'аттестат (с приложением)'"
          :requiredDocument3="'фото 3х4'"
          :requiredDocument4="'справка 075-У (при наличии)'"
          :requiredDocument5="'эцп'"
          :rules1="'не должно быть академической задолженности,'"
          :rules2="'родитель должен работать в Колледже'"
          :rules3="'дочерних организация и не увольняться в течение 3 лет минимум'"
        />
        <v-modal
          v-if="isModalOpenInt"
          @close="isModalOpenInt = false"
          :grantsInfo="'Победитель олимпиады имеет 4 года бесплатного обучения, с условием сохранения академической успеваемости GPA не менее 3.0 за семестр. Лишение внутреннего гранта может быть в случае не сохранения успеваемости, не соблюдения этического кодекса и академической честности.'"
          :discountSize="'не менее 2 лет 50% от стоимости обучения не менее 4 лет 90% от стоимости обучения'"
          :requiredDocument1="'скан версии следующих документов'"
          :requiredDocument2="'аттестат (с приложением)'"
          :requiredDocument3="'фото 3х4'"
          :requiredDocument4="'справка 075-У (при наличии)'"
          :requiredDocument5="'эцп'"
          :rules1="'Уроки, которые мы извлекаем из препятствий, с которыми мы сталкиваемся, могут иметь фундаментальное значение для дальнейшего успеха.'"
          :rules2="'Опишите проблему, которую вы решили или проблему, которую хотели бы решить.'"
          :rules3="'Обсудите достижение, событие или осознание, которое вызвало период личностного роста и нового понимания себя или других.'"
        />
        <v-modal
          v-if="isModalOpenAgro"
          @close="isModalOpenAgro = false"
          :grantsInfo="'Для получения грантов от Кампании AlemAgro необходимо: 1) Сдать документы не позднее 23 июля (ee@agrocollege@gmail.ru) 2) Готовиться к вступительному экзамену по двум дисциплинам (Агрономия и землеустройство) 3) Успешно сдать тестирование'"
          :discountSize="'20 скидок в размере 70% от стоимости годового обучения на образовательные программы. 50 - 100% грантов от Кампании AlemAgro'"
          :requiredDocument1="'заявление на присуждение образовательного гранта при подаче заявления на'"
          :requiredDocument2="'поступление на ППФ'"
          :requiredDocument3="'фото 3х4'"
          :requiredDocument4="'эцп'"
          :requiredDocument5="'аттестат'"
          :rules1="'Обладатель образовательного гранта ППФ должен показывать успеваемость по результатам каждого академического периода (декада, семестр) не менее 2,67 по 4-х балльной шкале цифрового эквивалента, рассчитанную по методике определения GPA.'"
          :rules2="'Иметь опыт не менее 3 олимпиад'"
          :rules3="'Иметь при себе портфолио с работами'"
        />
        <v-modal
          v-if="isModalOpenSW"
          @close="isModalOpenSW = false"
          :grantsInfo="'Для получения грантов от Кампании DataArt необходимо: 1) Сдать документы не позднее 23 июля (ee@agrocollege@gmail.ru) 2) Готовиться к вступительному экзамену по двум дисциплинам (Алгоритмы и структуры данных и Высшая Математика) 3) Успешно сдать тестирование'"
          :discountSize="'30 скидок в размере 50% от стоимости годового обучения на образовательные программы. 30 - 100% грантов от Кампании DataArt'"
          :requiredDocument1="'• заявление на присуждение образовательного гранта при подаче заявления на'"
          :requiredDocument2="'поступление на ППФ'"
          :requiredDocument3="'фото 3х4'"
          :requiredDocument4="'эцп'"
          :requiredDocument5="'аттестат'"
          :rules1="'Обладатель образовательного гранта ППФ должен показывать успеваемость по результатам каждого академического периода (декада, семестр) не менее 2,67 по 4-х балльной шкале цифрового эквивалента, рассчитанную по методике определения GPA.'"
          :rules2="'Иметь опыт в спортивном программировании'"
          :rules3="'Иметь при себе портфолио с работами'"
        />
        <v-modal
          v-if="isModalOpenBenefit"
          @close="isModalOpenBenefit = false"
          :grantsInfo="'Дети-сироты, Дети- оставшиеся без попечения родителей, не достигшие 23 лет'"
          :discountSize="'30-50% от стоимости годового обучения.'"
          :requiredDocument1="'копии свидетельства о смерти родителей;'"
          :requiredDocument2="'копия решения уполномоченного органа об установлении опеки/попечительства и/или о лишении родительских прав (при наличии)'"
          :requiredDocument3="'фото 3х4'"
          :requiredDocument4="'транскрипт, оформленный в соответствии с внутренними требованиями Университета.'"
          :requiredDocument5="'эцп'"
          :rules1="'Уровень среднего балла GPA обучающегося – не ниже 2,67-30%, 3,0-50% за весь период обучения.'"
          :rules2="'Обучающиеся с ограниченными возможностями (инвалиды первой и второй групп, инвалиды с детства)'"
          :rules3="'Иметь при себе данные тестирования'"
        />
        <v-modal
          v-if="isModalOpenWorker"
          @close="isModalOpenWorker = false"
          :grantsInfo="'Близким родственникам, супругам работников Колледжа/ дочерних организаций Колледжа предоставляется скидка'"
          :discountSize="'не менее 2 лет 50% от стоимости обучения не менее 4 лет 90% от стоимости обучения'"
          :requiredDocument1="'заявление (выдет приемная комиссия)'"
          :requiredDocument2="'справка о месте работы работника Колледжа'"
          :requiredDocument3="'фото 3х4'"
          :requiredDocument4="'транскрипт, оформленный в соответствии с внутренними требованиями Университета.'"
          :requiredDocument5="'копия документа, удостоверяющего родственные связи работника Колледжа / дочерних организаций и обучающегося;'"
          :rules1="'Уровень среднего балла GPA обучающегося - не ниже 3,00 за весь период обучения. Пересмотр скидки проводится каждый семестр.'"
          :rules2="'родитель должен работать в Колледже'"
          :rules3="'дочерних организация и не увольняться в течение 3 лет минимум'"
        />
      </div>

      <div class="v-pay-header">
        <div
          style="
            display: flex;
            justify-content: space-between;
            align-items: center;
          "
        >
          <img src="../../assets/images/left-arrow.png" width="15px" />
          <router-link to="/" class="router-link">
            <p>Вернуться на главную</p>
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

      <div class="v-aboutGrants-main">
        <img class="v-aboutGrants-main-img" src="../../assets/images/eac.png" />
        <h1>Гранты</h1>
        <div class="v-aboutGrants-main-first">
          <div class="v-aboutGrants-main-first-item">
            <h2>Государственные гранты</h2>
            <p>
              Все образовательные <br />
              программы
            </p>
            <h5>100%</h5>
            <a @click="isModalOpenGos = true"
              >Подробнее
              <img src="../../assets/images/right-arrow.png" width="12px"
            /></a>
          </div>
          <div class="v-aboutGrants-main-first-item">
            <h2>Международные гранты</h2>
            <p>
              Все образовательные <br />
              программы
            </p>
            <h5>90%</h5>
            <a @click="isModalOpenInt = true"
              >Подробнее
              <img src="../../assets/images/right-arrow.png" width="12px"
            /></a>
          </div>
        </div>
        <div class="v-aboutGrants-main-first">
          <div class="v-aboutGrants-main-first-item">
            <h2>
              Для программы <br />
              програмное обеспечение <br />
              и технологии
            </h2>
            <p>Гранты от IT-кампании "DataArt"</p>
            <h5>80%</h5>
            <a @click="isModalOpenSW = true"
              >Подробнее
              <img src="../../assets/images/right-arrow.png" width="12px"
            /></a>
          </div>
          <div class="v-aboutGrants-main-first-item">
            <h2>
              Для программы сельскохозяйственная <br />
              Агрономия
            </h2>
            <p>Гранты от Кампании "AlemAgro"</p>
            <h5>80%</h5>
            <a @click="isModalOpenAgro = true"
              >Подробнее
              <img src="../../assets/images/right-arrow.png" width="12px"
            /></a>
          </div>
        </div>
      </div>
      <div class="v-aboutGrants-discount" id="discount">
        <h1>Скидки</h1>
        <div style="display: flex">
          <div class="v-aboutGrants-discount-item">
            <div>
              <h2>Социальные льготы <br /><br /></h2>
              <p>
                Выпускникам школ <br />
                2023-го года выпуска
              </p>
              <a @click="isModalOpenBenefit = true"
                >Подробнее
                <img src="../../assets/images/right-arrow.png" width="12px"
              /></a>
            </div>
            <div>
              <img src="../../assets/images/school-bag.png" width="150px" />
            </div>
          </div>
          <div class="v-aboutGrants-discount-item">
            <div>
              <h2>Скидки работникам и детям работников</h2>
              <p>
                Детям работников <br />
                Евразийского Аграрного Колледжа
              </p>
              <a @click="isModalOpenWorker = true"
                >Подробнее
                <img src="../../assets/images/right-arrow.png" width="12px"
              /></a>
            </div>
            <div>
              <img src="../../assets/images/family.png" width="150px" />
            </div>
          </div>
        </div>
      </div>
      <div class="v-aboutGrants-info">
        <div class="v-aboutGrants-info-item">
          <h1>
            ЕНТ — для выпускников школ, поступающих в Колледж на образовательные гранты.
          </h1>
          <div class="v-aboutGrants-info-item-text">
            <p>
              Место тестирования будет проводится в базовых вузах. Дата прием
              заявлений в школах начинается от 01.04.23 до 10.05.23. Дата
              тестирование от 20.06.23 до 05.07.23. Формат ЕНТ будет
              представлять себе(ТиПО)который будет 2 предмета. Всего тестовых
              заданий — 60. Общее время тестирования будет длится 1 час 40 минут
              (100 минут). Даты письменных экзаменов ожидаются позже…
            </p>
          </div>
        </div>
      </div>
      <div class="v-aboutGrants-documents">
        <div class="v-aboutGrants-documents-info">
          <div class="v-aboutGrants-documents-info-text">
            <h2>Перечень документов</h2>
            <p>
              - Аттестат об окончании школы <br />- Медицинская справка № 063, №
              086 (со снимком флюорографии) <br />- Фотографии размером 3х4 - 6
              шт. <br />- Приписное свидетельство призывника <br />- Копия аттестата <br />
              - Копия удостоверения личности - 4 шт.
            </p>
          </div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/bS3W1SBNQgI"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vModal from "./v-modal.vue";
export default {
  components: { vModal },
  data() {
    return {
      isModalOpenGos: false,
      isModalOpenInt: false,
      isModalOpenSW: false,
      isModalOpenAgro: false,
      isModalOpenBenefit: false,
      isModalOpenWorker: false,
    };
  },
};
</script>

<style scoped>
.v-aboutGrants {
  width: 100%;
}
.v-pay-header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 20px 0 0 0;
}

.v-pay-header p {
  margin: 0 0 0 5px;
  font-weight: 600;
}

.v-pay-header-logo {
  width: 90px;
  height: 100px;
  margin: 0 100px 0 0;
}

.v-pay-header h4 {
  margin: 0 20px 0 0;
  font-weight: 600;
}

.v-aboutGrants-main {
  width: 100%;
  height: 950px;
  margin: 30px 0 0 0;
}

.v-aboutGrants-main-img {
  width: 100%;
  filter: brightness(20%);
  position: absolute;
}
.v-aboutGrants-main h1 {
  color: #ffffff;
  position: relative;
  margin: 0 0 0 170px;
  padding: 100px 0 0 0;
}

.v-aboutGrants-main-first {
  display: flex;
  justify-content: space-between;
  position: relative;
  margin: 70px 0 0 0;
}

.v-aboutGrants-main-first h2 {
  color: #000000;
}

.v-aboutGrants-main-first-item:nth-child(1) {
  background-color: #ffffff;
  padding: 30px;
  width: 500px;
  border-radius: 10px;
  margin: 0 0 0 170px;
}

.v-aboutGrants-main-first-item:nth-child(2) {
  background-color: #ffffff;
  padding: 30px;
  width: 500px;
  border-radius: 10px;
  margin: 0 170px 0 0;
}

.v-aboutGrants-main-first-item p {
  margin: 20px 0 0 0;
}

.v-aboutGrants-main-first-item h5 {
  color: white;
  background-color: #252525;
  padding: 7px 14px;
  width: 35px;
  border-radius: 7px;
  margin: 20px 0 30px 0;
}

.v-aboutGrants-main-first-item a {
  color: #00b123;
  text-decoration: none;
  font-weight: 600;
  transition: 0.3s;
  cursor: pointer;
}

.v-aboutGrants-main-first-item a:hover {
  color: #007c19;
  transition: 0.3s;
}

.v-aboutGrants-main-first-item img {
  margin: 0 0 -1px 0;
  filter: invert(48%) sepia(42%) saturate(4298%) hue-rotate(104deg)
    brightness(95%) contrast(102%);
}

.v-aboutGrants-discount {
  height: auto;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  background-color: #ffffff;
  position: relative;
  padding: 50px 0 0 160px;
  margin: 0 0 50px 0;
}

.v-aboutGrants-discount-item:nth-child(1) {
  display: flex;
  justify-content: space-between;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 30px;
  width: 500px;
  margin: 50px 0 0 0;
  border-radius: 10px;
}
.v-aboutGrants-discount-item:nth-child(2) {
  display: flex;
  justify-content: space-between;
  padding: 30px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  width: 500px;
  margin: 50px 0 0 80px;
  border-radius: 10px;
}

.v-aboutGrants-discount-item h2 {
  font-weight: 600;
}

.v-aboutGrants-discount-item p {
  margin: 30px 0 30px 0;
}

.v-aboutGrants-discount-item a {
  color: #00b123;
  text-decoration: none;
  font-weight: 600;
  transition: 0.3s;
  cursor: pointer;
}

.v-aboutGrants-discount-item a:hover {
  color: #007c19;
  transition: 0.3s;
}

.v-aboutGrants-discount-item img {
  margin: 0 0 -1px 0;
}

.v-aboutGrants-info {
  width: auto;
  padding: 50px 0 50px 160px;
  background-color: #f4f4f4;
}

.v-aboutGrants-info-item {
  background-color: #fff;
  padding: 50px;
  width: 1100px;
  border-radius: 10px;
}

.v-aboutGrants-info p {
  margin: 30px 0 0 0;
  font-size: 18px;
  line-height: 1.5;
}

.v-aboutGrants-documents {
  width: auto;
  padding: 50px 0 50px 160px;
}

.v-aboutGrants-documents-info {
  display: flex;
  padding: 50px;
  background-color: #f4f4f4;
  width: 1100px;
  border-radius: 10px;
}

.v-aboutGrants-documents-info-text h2 {
  margin: 0 0 30px 0;
}

.v-aboutGrants-documents-info-text p {
  line-height: 2;
}
</style>
