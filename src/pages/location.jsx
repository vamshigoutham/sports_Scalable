import React, { useState } from 'react';
import { Form } from '../components/form';
import { getAllLocation } from '../apis';
import { Card } from '../components/card';

export const Location = () => {
    const [allLocations, setAllLocations] = useState([]);
    const [error, setError] = useState("");

    function onSubmitData({ sport, country }) {
        console.log('submit');
        console.log('values', sport, country);
        if (sport && country) {
            getAllLocation({ sport, country, successCb: onSuccess, errorCb: onFailure });
        }
    }

    function onSuccess(data) {
        console.log('Fetched Data:', data);
        setError("");
        setAllLocations(data);
    }

    function onFailure(data) {
        console.log('Error Data:', typeof (data));
        setAllLocations([]);
        setError("No locations found"); // Customize this message as needed
    }

    return (
        <div>
            <Form onSubmit={onSubmitData} />
            {allLocations.length > 0 && (
                <>
                    <div className='text-center p-4 mt-6 text-2xl font-semibold'>Locations</div>
                    {allLocations.map((location) => (
                        <Card key={location._id} location={location} />
                    ))}
                </>
            )}
            {error && (
                <div className='error-message text-center' style={{
                    animation: 'popUp 0.5s ease-out forwards',
                    color: '#D8000C',
                    backgroundColor: '#FFD2D2',
                    margin: '20px auto',
                    padding: '20px',
                    borderRadius: '10px',
                    width: '90%',
                    maxWidth: '600px',
                    opacity: 0,
                    transform: 'scale(0.5)',
                }}>
                    {error}
                </div>
            )}
            <style jsx>{`
                @keyframes popUp {
                    0% {
                        opacity: 0;
                        transform: scale(0.5);
                    }
                    70% {
                        opacity: 0.7;
                        transform: scale(1.2);
                    }
                    100% {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
            `}</style>
        </div>
    );
};
