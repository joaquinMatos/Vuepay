<template>
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
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="pago in pagos" :key="pago.id_Tpago">
                    <td>{{ pago.descripcion }}</td>
                    <td>{{ pago.fechapago }}</td>
                    <td>{{ pago.referencia }}</td>
                    <td>{{ pago.monto }}</td>
                    <td>
                        <span v-if="pago.statuspago">Aprobado</span>
                        <span v-else>No Aprobado</span>
                    </td>
                    <td>{{ pago.Tipopagos }}</td>
                    <td>
                        <input type="checkbox" v-model="selectedPayments" :value="pago.id_Tpago">
                    </td>
                </tr>
            </tbody>
        </table>
        <div>
            {{ selectedPaymentReferences.join(', ') }}
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue';
import Tpagos from '@/services/AuthService';
import type ITpagos from '@/interface/ITpagos';
import { MercadoPagoConfig, Payment } from 'mercadopago';

const pagos = ref<ITpagos[]>([]);
const amount = ref(0);
const selectedPayments = ref<number[]>([]);

const selectedPaymentReferences = computed(() => {
    return pagos.value
        .filter(pago => selectedPayments.value.includes(pago.id_Tpago))
        .map(pago => pago.referencia);
});

onMounted(async () => {
    try {
        pagos.value = await Tpagos.getTpagos();
    } catch (error) {
        console.error('Failed to fetch payments:', error);
    }
});

// Inicializar el cliente de Mercado Pago
const client = new MercadoPagoConfig({ accessToken: 'link.mercadopago.com.mx/vuepay' });

// Inicializar el objeto de pago
const payment = new Payment(client);

async function makePayment() {  // Corrige la definición de la función 'makePayment'
    try {
        const body = {
            transaction_amount: amount.value,
            description: 'Pago con Mercado Pago',
            payment_method_id: 'visa',
            payer: {
                email: 'usuario@email.com'
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
