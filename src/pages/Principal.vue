<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>uid</th>
          <th>Nombre Español </th>
          <th>Nombre Ingles</th>
          <th>Nombre Latin</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="bird in birds" :key="bird.id">
          <td>{{ bird.uid }}</td>
          <td>{{ bird.name.spanish }}</td>
          <td>{{ bird.name.english }}</td>
          <td>{{ bird.name.latin }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name:"PaginaPrincipal",
  data() {
    return {
      birds: [],
    };
  },
  mounted() {
    axios.get('https://aves.ninjas.cl/api/birds')
      .then(response => {
        this.birds = response.data;

        console.log(response.data)
      })
      .catch(error => {
        console.error(error);
      });
  },
};
</script>

<style>

</style>
