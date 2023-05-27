<template>
<nav class="navbar navbar-dark bg-primary">
  <div class="container-fluid">
    <span class="navbar-text">
      
      <h1>Pajaros Chilenos</h1>
      
    </span>
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