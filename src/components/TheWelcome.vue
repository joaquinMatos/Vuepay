<template>
  <div>
    <h1>Lista de datos</h1>
    <ul>
      <li v-for="item in data" :key="item.id_usuario">{{ item.Nombre }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      data: []
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get('http://localhost:5000/api/data');
        this.data = response.data;
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    }
  }
};
</script>
