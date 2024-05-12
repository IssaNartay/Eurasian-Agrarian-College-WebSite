<template>
  <div class="v-modal" @click.self="close">
      
      <div class="v-modalWindow">
          
        <v-modalButtonClose @close="close" />
        <div class="v-modalWindow-items">
          <div class="v-modal-left">
            <h1>Обоснование:</h1>
            <p>
                {{ grantsInfo }}
            </p>
            <br /><br />
            <h1>Необходимые документы:</h1>
            <ul>
              <li>{{ requiredDocument1 }}</li>
            </ul>
            <ul>
              <li>{{requiredDocument2}}</li>
            </ul>
            <ul>
              <li>{{requiredDocument3}}</li>
            </ul>
            <ul>
              <li>{{requiredDocument4}}</li>
            </ul>
            <ul>
              <li>{{requiredDocument5}}</li>
            </ul>
          </div>
          <div class="v-modal-right">
            <h1>Размер скидки:</h1>
            <p>
              {{ discountSize }}
            </p>
            <br /><br />
            <h1>Условия поддержания скидки:</h1>
            <ul>
              <li>{{rules1}}</li>
            </ul>
            <ul>
              <li>{{rules2}}</li>
            </ul>
            <ul>
              <li>{{ rules3 }}</li>
            </ul>
          </div>
        </div>
    </div>

  </div>
</template>

<script>
import vModalButtonClose from "./v-modalButtonClose.vue";

export default {
  components: { vModalButtonClose },
  props: {
    rules1: {
      type: String,
      default: 'Err'
    },
    rules2: {
      type: String,
      default: 'Err'
    },
    rules3: {
      type: String,
      default: 'Err'
    },
    grantsInfo: {
      type: String,
      default: 'Error'
    },
    discountSize: {
      type: String,
      default: 'Error'
    },
    requiredDocument1: {
      type: String,
      default: 'Error'
    },
    requiredDocument2: {
      type: String,
      default: 'Error'
    },
    requiredDocument3: {
      type: String,
      default: 'Error'
    },
    requiredDocument4: {
      type: String,
      default: 'Error'
    },
    requiredDocument5: {
      type: String,
      default: 'Error'
    },
  },
  // data() {
  //   return{
  //       grantsInfo: '',
  //       discountSize: '',
  //       requiredDocuments: '',
  //       rules: ''
  //   }
  // },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.v-modal {
  width: 100%;
  height: 800px;
  border-radius: 10px;
  margin: -50px 0 0 0;
  position: fixed;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.8);
}

.v-modalWindow{
    background-color: #fff;
    border: 1px solid black;
    padding: 50px;
    width: 1000px;
    height: 500px;
    margin: 100px 0 0 200px;
    border-radius: 20px;
}

.v-modalWindow-items{
    display: flex;
    justify-content: space-between;
}

.v-modal-left{
    width: 400px;
}

.v-modal-right{
    width: 400px;
}

.v-modal h1 {
  font-size: 20px;
  margin: 0 0 20px 0;
}

.v-modal ul li{
    line-height: 2;
}



</style>
