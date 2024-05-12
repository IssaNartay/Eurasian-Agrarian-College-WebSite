<template>
  <button @click="close">
    <img src="../../assets/images/x.png" />
  </button>
</template>

<script>
export default {
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
button {
  border: none;
  width: 50px;
  margin: 0 0 0 950px;
  background-color: transparent;
  cursor: pointer;
}
img {
  width: 30px;
}
</style>
