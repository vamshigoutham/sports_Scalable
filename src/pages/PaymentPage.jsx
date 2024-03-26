import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import CheckoutForm from '../components/CheckoutForm'; // We'll create this next

// Load the Stripe script
const stripePromise = loadStripe('pk_test_51OqcmHGqN7wCQ2epvilXNfqoKjthYS6RthN4G0SPz393Ss9JaBmNloX1VjwNLERsc6s4z44vSQlYtsr98eB01K4B00sev480JK');

export const PaymentPage = () => {
    return (
        <div className="payment-page">
            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
        </div>
    );
}
