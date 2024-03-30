import React, { useState } from 'react';
import { ALL_SPORTS, ALL_COUNTRIES } from '../utils'; // Assuming ALL_COUNTRIES is an array of country names

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
                        <select
                            value={sport}
                            onChange={(e) => setSport(e.target.value)}
                            class="border border-gray rounded w-full p-3"
                        >
                            <option value="">Select a sport</option>
                            {ALL_SPORTS.map((sport) => (
                                <option key={sport} value={sport}>{sport}</option>
                            ))}
                        </select>
                    </div>
                    <div class="px-4 mb-4">
                        <select
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            class="border border-gray rounded w-full p-3"
                        >
                            <option value="">Select a country</option>
                            {ALL_COUNTRIES.map((country) => (
                                <option key={country} value={country}>{country}</option>
                            ))}
                        </select>
                    </div>
                    <div class="px-4 mb-6" onClick={submitHandler}>
                        <button class="border border-blue-500 bg-blue-600 rounded w-full px-4 py-3 text-white font-semibold">
                            Search for Venues
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
