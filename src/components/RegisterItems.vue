<template>
  <div>
    <h1>User Register</h1>
    <form @submit.prevent="registerUser">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" required>
      <label for="apellido">Apellido:</label>
      <input type="text" id="apellido" v-model="apellido" required>
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required>
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" required>
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import UserService from '@/services/AuthService'

const name = ref('');
const apellido = ref('');
const email = ref('');
const password = ref('');

async function registerUser() {
  try {
    const userData = {
      name: name.value,
      apellido: apellido.value,
      email: email.value,
      password: password.value
    };

    console.log('Datos a enviar:', userData);  // Imprime los datos que se enviarán al backend

    await UserService.registerUser(name.value, apellido.value, email.value, password.value);

    name.value = '';
    apellido.value = '';
    email.value = '';
    password.value = '';

    window.alert('Usuario registrado correctamente.');
  } catch (error) {
    console.error('No se pudo registrar el usuario:', error);
    window.alert('Error al registrar el usuario. Por favor, inténtalo de nuevo.');
  }
}
</script>
