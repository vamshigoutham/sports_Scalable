import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useNavigate

export default function CheckoutForm() {
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate(); // useNavigate hook for redirection
    const location = useLocation();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const price = location.state?.price || 0;

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');
        setSuccess('');
        setIsLoading(true);

        if (!stripe || !elements) {
            setError('Stripe has not fully loaded. Please try again shortly.');
            setIsLoading(false);
            return;
        }

        try {
            const paymentIntentResponse = await fetch('http://payemnt-env.eba-z2yqwtde.us-east-1.elasticbeanstalk.com/create-payment-intent ', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ amount: price }),
            });

            if (!paymentIntentResponse.ok) throw new Error('Network response was not ok');

            const { clientSecret } = await paymentIntentResponse.json();

            const result = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                },
            });

            if (result.error) {
                throw new Error(result.error.message);
            } else if (result.paymentIntent.status === 'succeeded') {
                setSuccess('Payment successful! You will be redirected shortly.');
                setTimeout(() => navigate('/'), 3000);
            }
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="checkout-form" style={checkoutFormStyle}>
            <form onSubmit={handleSubmit} style={formStyle}>
                <CardElement options={cardStyleOptions} />
                <button type="submit" disabled={!stripe || isLoading} style={buttonStyle}>
                    {isLoading ? 'Processing...' : 'Pay'}
                </button>
            </form>
            {error && <div style={errorMessageStyle}>{error}</div>}
            {success && <div style={successMessageStyle}>{success}</div>}
        </div>
    );
}

// Inline styles
const checkoutFormStyle = {
    boxSizing: 'border-box',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    maxWidth: '400px',
    margin: '20px auto',
    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
};



const formStyle = {
    display: 'flex',
    flexDirection: 'column',
};

const buttonStyle = {
    background: '#4CAF50', // This is a green color, you can change it to match your brand
    color: 'white',
    padding: '12px 20px',
    border: 'none',
    borderRadius: '4px',
    marginTop: '20px',
    cursor: 'pointer',
    fontSize: '16px',
};

const cardStyleOptions = {
    style: {
        base: {
            fontSize: '16px',
            color: '#424770',
            '::placeholder': {
                color: '#aab7c4',
            },
        },
        invalid: {
            color: '#9e2146',
        },
    },
    hidePostalCode: true,
};

const errorMessageStyle = {
    color: '#FF6B6B',
    background: '#FFF0F0',
    padding: '10px',
    borderRadius: '4px',
    margin: '10px 0',
};

const successMessageStyle = {
    color: '#31C48D',
    background: '#E3FCEF',
    padding: '10px',
    borderRadius: '4px',
    margin: '10px 0',
};
