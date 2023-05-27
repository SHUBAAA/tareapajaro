<template>
    <div>
      <h1>Detalles del ave</h1>
      <img :src="imageUrl" alt="Imagen del ave" />
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      this.imageUrl = this.$route.query.imageUrl;
    },
    data() {
      return {
        imageUrl: '',
      };
    },
  };
  </script>
  