<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>uid</th>
          <th>Nombre Español </th>
          <th>Nombre Ingles</th>
          <th>Nombre Latin</th>
          <th>imgurl</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="bird in birds" :key="bird.id" @click="openBirdDetails(bird)">
          <td>{{ bird.uid }}</td>
          <td>{{ bird.name.spanish }}</td>
          <td>{{ bird.name.english }}</td>
          <td>{{ bird.name.latin }}</td>
          <td>{{ bird.images.full }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "PaginaPrincipal",
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
  methods: {
    openBirdDetails(bird) {
      const birdId = bird.uid;
      const imageUrl = bird.images.full;
      this.$router.push({ name: 'BirdDetails', params: { id: birdId }, query: { imageUrl } });
    },

  }
}
</script>

