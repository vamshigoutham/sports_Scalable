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

    const price = location.state?.price || 1000;

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

    // Inline styles
    const checkoutFormStyle = {
        boxSizing: 'border-box',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)', // Increased box shadow for depth
        maxWidth: '400px',
        margin: '20px auto',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        background: '#ffffff', // Changed background color to white
    };

    const buttonStyle = {
        background: '#3f51b5', // Changed button color to a shade of blue
        color: 'white',
        padding: '15px 30px', // Increased button padding
        border: 'none',
        borderRadius: '4px',
        marginTop: '20px',
        cursor: 'pointer',
        fontSize: '18px', // Increased font size
        fontWeight: 'bold', // Added bold font weight
    };

    const errorMessageStyle = {
        color: '#d32f2f', // Changed error message color to a shade of red
        background: '#ffebee', // Changed error message background color to light red
        padding: '15px', // Increased padding
        borderRadius: '4px',
        margin: '20px 0', // Increased margin
    };

    const successMessageStyle = {
        color: '#388e3c', // Changed success message color to a shade of green
        background: '#e8f5e9', // Changed success message background color to light green
        padding: '15px', // Increased padding
        borderRadius: '4px',
        margin: '20px 0', // Increased margin
    };

    return (
        <div className="checkout-form" style={checkoutFormStyle}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
                <CardElement options={cardStyleOptions} />
                <div style={{ marginTop: '20px', marginBottom: '10px', fontSize: '16px', fontWeight: 'bold' }}>Amount: €{price}</div>
                <button type="submit" disabled={!stripe || isLoading} style={buttonStyle}>
                    {isLoading ? 'Processing...' : 'Pay'}
                </button>
            </form>
            {error && <div style={errorMessageStyle}>{error}</div>}
            {success && <div style={successMessageStyle}>{success}</div>}
        </div>
    );
}

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
