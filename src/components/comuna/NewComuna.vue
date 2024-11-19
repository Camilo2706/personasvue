<template>
  <div>
    <h1>Nueva Comuna</h1>
    <form @submit.prevent="crearComuna">
      <div>
        <label for="nombre">Nombre</label>
        <input v-model="nombre" type="text" id="nombre" required />
      </div>
      <button type="submit">Guardar</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      nombre: '',
    };
  },
  methods: {
    crearComuna() {
      axios.post('http://localhost:8000/api/comunas', { nombre: this.nombre }).then(() => {
        this.$router.push('/');
      });
    },
  },
};
</script>
