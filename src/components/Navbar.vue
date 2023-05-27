<template>
<nav class="navbar navbar-dark bg-primary">
  <div class="container-fluid">
    <span class="navbar-text">
      
      <h1>Pajaros Chilenos</h1>
    </span>
  
    <a href="/" class="btn btn-info" role="button">Ir a la página principal</a>

  </div>
</nav>
</template>

  
  <script>
  export default {
    name: "NavBar",
    props: {
      alertName: {
        type: String,
        default: "Default",
      },
    },
    data() {
      return {
        title: "Titulo",
        user: null,
      };
    },
    methods: {
      test() {
        alert(this.alertName);
      },
    },
  };
  </script>
  
  <style>
  </style>