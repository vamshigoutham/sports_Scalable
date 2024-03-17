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
            getAllLocation({ sport, country, onSuccess });
            // setAllLocations(copyData)

        }
    }

    function onSuccess() {

    }


    return (
        <div>
            <div>
                <Form onSubmit={(value) => onSubmitData(value)} />
                {console.log('allLocations', allLocations)}
                {allLocations?.length !== 0 &&
                    <>
                        <div className='text-center p-4 mt-6 text-2xl font-semibold'>Locations</div>
                        <Card location={allLocations} />
                    </>
                }
            </div>
        </div>
    )
}