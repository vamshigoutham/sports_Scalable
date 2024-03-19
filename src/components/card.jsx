import React from 'react';

export const Card = ({ location }) => {
    // Assuming location.details is an array of addresses and location.country is a string
    return (
        <div>
            {location.details?.map((address, index) => (
                <div key={index} className='rounded-lg p-4 bg-white' style={{ border: '1px solid lightgray', width: '90%', margin: 'auto', marginBottom: 20 }}>
                    <div>{address.address}</div>
                    <div>{address.pincode}</div>
                    <div>{address.city}</div>
                    <div>{location.country}</div> {/* location.country is accessed directly from the location object */}
                </div>
            ))}
        </div>
    );
};
