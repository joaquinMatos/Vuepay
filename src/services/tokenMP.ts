import { MercadoPagoConfig, Payment } from 'mercadopago';

// Step 2: Initialize the client object
const client = new MercadoPagoConfig({ accessToken: 'access_token', options: { timeout: 5000, idempotencyKey: 'abc' } });

// Step 3: Initialize the API object
const payment = new Payment(client);

// Step 4: Create the request object
const body = {
	transaction_amount: 12.34,
	description: '<DESCRIPTION>',
	payment_method_id: '<PAYMENT_METHOD_ID>',
	payer: {
		email: '<EMAIL>'
	},
};

// Step 5: Create request options object - Optional
const requestOptions = {
	idempotencyKey: '<IDEMPOTENCY_KEY>',
};

// Step 6: Make the request
payment.create({ body, requestOptions }).then(console.log).catch(console.log);