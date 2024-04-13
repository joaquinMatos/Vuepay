
<template>
    <div>
      <h1>Tpagos</h1>
      <div>
        <h1>Cobrar con Mercado Pago</h1>
        <label for="amount">Monto:</label>
        <input type="number" id="amount" v-model.number="amount" required>
        <button @click="makePayment">Pagar</button>
      </div>
      <table>
        <!-- ... (resto de la tabla) ... -->
      </table>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  import Tpagos from '@/services/AuthService';
  import type ITpagos from '@/interface/ITpagos';
  import { MercadoPagoConfig, Payment } from 'mercadopago';
  
  const pagos = ref<ITpagos[]>([]);
  const amount = ref(0);
  
  onMounted(async () => {
    try {
      pagos.value = await Tpagos.getTpagos();
      console.log(pagos.value);
    } catch (error) {
      console.error('Failed to fetch payments:', error);
    }
  });
  
  const client = new MercadoPagoConfig({
    accessToken: 'TU_ACCESS_TOKEN'  // Reemplaza con tu token de Mercado Pago
  });
  
  const payment = new Payment(client);
  
  async function makePayment() {
    try {
      const body = {
        transaction_amount: amount.value,
        description: 'Pago con Mercado Pago',
        payment_method_id: 'visa', 
        payer: {
          email: 'balemema10@email.com'  // Reemplaza con el email del pagador
        },
      };
  
      const response = await payment.create({ body });
      window.location.href = response.body.init_point;
  
    } catch (error) {
      console.error('Error al procesar el pago:', error);
      alert('Error al procesar el pago. Por favor, inténtalo de nuevo.');
    }
  }
  </script>
  
  <style scoped>
  /* Estilos */
  </style>



<!-- <template>
    <div>
        <h1> Tpagos </h1>
        <div>
            <h1>Cobrar con Mercado Pago</h1>
            <label for="amount">Monto:</label>
            <input type="number" id="amount" v-model.number="amount" required>
            <button @click="makePayment">Pagar</button>
        </div>
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
                    <td>{{ pago.fechapago }}</td>
                    <td> {{ pago.referencia }}</td>
                    <td>{{ pago.monto }}</td>
                    <td>
                        <span v-if="pago.statuspago">Aprobado</span>
                        <span v-else> No Aprobado </span>
                    </td>
                    <td>
                        {{ pago.Tipopagos }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script lang="ts" setup>

import {ref, onMounted } from 'vue'
import Tpagos from '@/services/AuthService'
import type ITpagos from '@/interface/ITpagos'

import { MercadoPagoConfig, Payment } from 'mercadopago';


const pagos = ref<ITpagos[]>([]) 
const searchQuery = ref('')

onMounted(async () => {
  try {
    pagos.value = await Tpagos.getTpagos()
    console.log(pagos.value);
  } catch (error) {
    console.error('Failed to fetch users:', error)
  }
})

// Inicializar el cliente de Mercado Pago
const client = new MercadoPagoConfig({ accessToken: 'link.mercadopago.com.mx/vuepay' });  // Reemplaza 'TU_ACCESS_TOKEN' con tu access token

// Inicializar el objeto de pago
const payment = new Payment(client);

const amount = ref(0);

async function makePayment() {
  try {
    // Crear el objeto de solicitud para el cobro
    const body = {
      transaction_amount: amount.value,
      description: 'Pago con Mercado Pago',
      payment_method_id: 'visa',  // Puedes especificar el método de pago (ejemplo: 'visa', 'master', 'amex', etc.)
      payer: {
        email: 'usuario@email.com'  // Reemplaza con el email del usuario
      },
    };

    // Realizar el cobro
    const response = await payment.create({ body });

    // Redireccionar al usuario al proceso de pago en Mercado Pago
    window.location.href = response.body.init_point;

  } catch (error) {
    console.error('Error al procesar el pago:', error);
    alert('Error al procesar el pago. Por favor, inténtalo de nuevo.');
  }
}

</script>

<style scoped> </style> -->