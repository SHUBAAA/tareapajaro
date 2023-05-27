<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Fecha</th>
          <th>Tipo</th>
          <th>Ley</th>
          <th>Información</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="feriado in feriados" :key="feriado.id">
          <td>{{ feriado.id }}</td>
          <td>{{ feriado.nombre }}</td>
          <td>{{ feriado.fecha }}</td>
          <td>{{ feriado.tipo }}</td>
          <td>{{ feriado.ley }}</td>
          <td>{{ feriado.info }}</td>
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
      feriados: [],
    };
  },
  mounted() {
    this.getFeriados();
  },
  methods: {
    getFeriados() {
      axios.get('https://apis.digital.gob.cl/fl/feriados')
        .then(response => {



          this.feriados = response.data;

          console.log(this.feriados)
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
};


</script>

<style>

</style>