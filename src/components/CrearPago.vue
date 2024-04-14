<template>
    <div>
        <h1> Cobro Persona </h1>
        <form @submit.prevent="registerUser">
            <label for="monto">Monto:</label>
            <input type="text" id="monto" v-model="monto" required>
            <label for="persona">Persona cobrar:</label>
            <input type="text" id="persona" v-model="persona" required>
            <label for="fechaP">Fecha de pagar:</label>
            <input type="date" id="fechaP" v-model="fechaP" required>
        </form>
    </div>
    <div>
        <div class="flex justify-center items-center h-screen bg-gray-100">
            <div class="bg-white p-8 rounded-lg shadow-md w-1/2 border border-gray-300">
                <div class="flex justify-between mb-6">
                    <div>
                        <h1 class="text-2xl font-bold text-blue-500">Pagaré</h1>
                        <p class="text-sm text-gray-600">Fecha: {{ fechaP }}</p>
                    </div>
                    <div class="text-right">
                        <img src="@/assets/logo.png" alt="Logo" class="w-24">
                    </div>
                </div>
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-600 mb-1">Monto:</label>
                    <span class="text-lg font-semibold">${{ monto }}</span>
                </div>
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-600 mb-1">Apellido:</label>
                    <span class="text-lg font-semibold">{{ persona }}</span>
                </div>
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-600 mb-1">Referencia de Pago:</label>
                    <span class="text-lg font-semibold">{{ referenciaDePago }}</span>
                </div>
                <div class="mt-8 border-t border-gray-300 pt-4">
                    <p class="text-sm text-gray-600">Firma del Deudor: ________________________</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import { ref } from 'vue'
import UserService from '@/services/AuthService'

const monto = ref('');
const persona = ref('')
const referenciaDePago = ref('');

function generarReferencia(): string {
    const caracteres: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const longitud: number = 10;
    let referencia: string = '';

    for (let i: number = 0; i < longitud; i++) {
        const indice: number = Math.floor(Math.random() * caracteres.length);
        referencia += caracteres.charAt(indice);
    }

    return referencia;
}

// Generar y almacenar la referencia de pago
referenciaDePago.value = generarReferencia();



</script>

<style scoped>
/* Estilos para la hoja de pagaré */
span.text-lg {
    color: #4A5568;
    /* Color de texto para los detalles */
}

img {
    object-fit: contain;
}
</style>