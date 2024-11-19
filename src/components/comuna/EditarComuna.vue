<template>
  <div>
    <h1>Editar Comuna</h1>
    <form @submit.prevent="actualizarComuna">
      <div>
        <label for="nombre">Nombre</label>
        <input v-model="comuna.nombre" type="text" id="nombre" required />
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
      comuna: {},
    };
  },
  mounted() {
    axios.get(`http://localhost:8000/api/comunas/${this.$route.params.id}`).then((response) => {
      this.comuna = response.data;
    });
  },
  methods: {
    actualizarComuna() {
      axios.put(`http://localhost:8000/api/comunas/${this.$route.params.id}`, this.comuna).then(() => {
        this.$router.push('/');
      });
    },
  },
};
</script>
