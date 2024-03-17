import React, { useState, useEffect } from 'react';

export const Recommender = () => {
    const [country, setCountry] = useState('');
    const [sports, setSports] = useState([]);

    useEffect(() => {

    }, [])

    const submitHandler = () => {
        // api call
        console.log('country', country);
    }


    return (
        <>
            <div className='p-4 flex'>
                <div class="px-4 mb-4 flex-1">
                    <input
                        type="text"
                        placeholder="Enter a country"
                        class="border border-gray rounded w-full p-3"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                    />
                </div>
                <div class="px-4 mb-6 flex-0 w-64" onClick={submitHandler}>
                    <button class="border border-blue-500 bg-blue-600 rounded w-full px-4 py-3 text-white font-semibold">
                        Search
                    </button>
                </div>
            </div>
        </>
    )
}