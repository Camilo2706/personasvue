<template>
  <div>
    <h1>Comunas</h1>
    <ul>
      <li v-for="comuna in comunas" :key="comuna.id">
        {{ comuna.nombre }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      comunas: []
    };
  },
  mounted() {
    axios.get('http://localhost:8000/api/comunas')
      .then(response => {
        this.comunas = response.data;
      })
      .catch(error => {
        console.error(error);
      });
  }
};
</script>
