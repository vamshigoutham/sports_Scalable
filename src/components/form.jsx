import React, { useState } from 'react';
import { ALL_SPORTS } from '../utils';

export const Form = ({ onSubmit }) => {
    const [country, setCountry] = useState('');
    const [sport, setSport] = useState('');

    function submitHandler() {
        onSubmit({ sport, country });
    }

    return (
        <div className=''>
            <div class="max-w-md m-auto bg-white">
                <div class="border-t-2 border-blue-200 overflow-hidden rounded shadow-lg pt-6">
                    <div class="px-4 mb-4">
                        <input
                            type="text"
                            placeholder="Enter a sport"
                            class="border border-gray rounded w-full p-3"
                            value={sport}
                            onChange={(e) => setSport(e.target.value)}
                        />
                    </div>
                    <div class="px-4 mb-4">
                        <input
                            type="text"
                            placeholder="Enter a country"
                            class="border border-gray rounded w-full p-3"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                        />
                    </div>
                    <div class="px-4 mb-6" onClick={submitHandler}>
                        <button class="border border-blue-500 bg-blue-600 rounded w-full px-4 py-3 text-white font-semibold">
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}