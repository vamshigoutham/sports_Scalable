import React, { useState } from 'react';
import { Form } from '../components/form';
import { getAllLocation } from '../apis';
import { Card } from '../components/card';

export const Location = () => {
    const [allLocations, setAllLocations] = useState([]);

    function onSubmitData({ sport, country }) {
        console.log('submit');
        console.log('values', sport, country);
        if (sport && country) {
            getAllLocation({ sport, country, successCb: onSuccess });
        }
    }

    function onSuccess(data) {
        console.log('Fetched Data:', data); // Debugging: Log the fetched data
        setAllLocations(data); // Assuming 'data' is the array of location objects you want to display
    }

    return (
        <div>
            <Form onSubmit={onSubmitData} />
            {allLocations.length > 0 && (
                <>
                    <div className='text-center p-4 mt-6 text-2xl font-semibold'>Locations</div>
                    {allLocations.map((location) => ( // Iterate over allLocations and render a Card for each
                        <Card key={location._id} location={location} />
                    ))}
                </>
            )}
        </div>
    );
};
