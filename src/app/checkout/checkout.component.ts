import { Component } from '@angular/core';
import { loadStripe, Stripe, StripeCardElement } from '@stripe/stripe-js';

@Component({
selector: 'app-checkout',
templateUrl: './checkout.component.html',
styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
form: any; // declare a form property
stripePromise: Promise<Stripe | null>;
card!: StripeCardElement; // create a card property

constructor() {
// Initialize Stripe with your API public key
this.stripePromise = loadStripe('pk_test_51MdoZSC8gOLcVvt1j758f50RoVGs2eKEIRDDE3V8sMPqn8G4vqgofEHMtM5uhRwGjRhiQsryOReSIIKfopD6vnRK00iv1pX5it');
}

async onSaveAndContinue(){
const stripe = await this.stripePromise;
const { firstName, lastName, address, address2, city, state, zipCode, email, phone } = this.form.value;

const payload = {
    payment_method_types: ['card'],
    billing_details: {
        name: `${firstName} ${lastName}`,
        address: {
            line1: address,
            line2: address2,
            city: city,
            state: state,
            postal_code: zipCode,
            country: 'US',
        },
        email: email,
        phone: phone,
    },
};

const response = await fetch('/api/create-payment-intent', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
});

const { clientSecret } = await response.json();

// check if 'loadStripe' returned null
if (!stripe) {
    console.error('Failed to load Stripe');
    return;
}

const result = await stripe.confirmCardPayment(clientSecret, {
    payment_method: {
        card: this.card,
        billing_details: {
            name: `${firstName} ${lastName}`,
            address: {
                line1: address,
                line2: address2,
                city: city,
                state: state,
                postal_code: zipCode,
                country: 'US',
            },
            email: email,
            phone: phone,
        },
    },
});

if (result.error) {
    console.error(result.error.message);
} else {
    console.log(result.paymentIntent);
}
}

}
