<template>
    <div>
        <h1> Tpagos </h1>
        <table>
            <thead>
                <tr>
                    <th>Descripcion</th>
                    <th>Fecha de pago</th>
                    <th>Referencia</th>
                    <th>Monto</th>
                    <th>Estado de pago</th>
                    <th>Tipo de pago</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="pago in pagos" :key="pago.id_Tpago">
                    <td>{{ pago.descripcion }}</td>
                    <td>{{ pago.fechapago  }}</td>
                    <td> {{ pago.referencia }}</td>
                    <td>{{ pago.monto }}</td>
                    <td>
                        
                    </td>
                    <td> {{ pago.Tipopagos }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script lang="ts" setup>

import {ref, onMounted } from 'vue'
import Tpagos from '@/services/AuthService'
import type ITpagos from '@/interface/ITpagos'


const pagos = ref<ITpagos[]>([]) 
const searchQuery = ref('')

onMounted(async () => {
  try {
    pagos.value = await Tpagos.getTpagos()
    console.log(pagos.value[0]);
  } catch (error) {
    console.error('Failed to fetch users:', error)
  }
})

</script>

<style scoped> </style>