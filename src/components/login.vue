<template>
    <div>
        <h1>User Login</h1>
        <form @submit.prevent="loginUser">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="email" required>
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="password" required>
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import UserService from '@/services/AuthService'

const email = ref('');
const password = ref('');

async function loginUser() {
    try {
        const userData = {
            email: email.value,
            password: password.value
        };

        console.log('Datos a enviar:', userData);  // Imprime los datos que se enviarán al backend

        const response = await UserService.loginUser(email.value, password.value);

        email.value = '';
        password.value = '';

        if (response && response.token) {
            // Guardar el token en el localStorage o en el state de la aplicación
            localStorage.setItem('token', response.token);
            window.alert('Login exitoso.');
        } else {
            throw new Error('Credenciales incorrectas.');
        }

    } catch (error) {
        console.error('Error al intentar hacer login:', error);
        window.alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
    }
}
</script>