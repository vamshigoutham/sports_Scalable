import React from 'react';

export const Card = ({ location }) => {
    return (
        <div className=''>
            {location?.map(address => {
                return (
                    address?.details?.map(address => {
                        return (
                            <div className='rounded-lg p-4 bg-white' style={{ border: '1px solid lightgray', width: '90%', margin: 'auto', marginBottom:20 }}>
                                <div>{address.address}</div><div>{address.pincode}</div>
                                <div>{address?.city}</div>
                                <div>{location?.country}</div>
                            </div>
                        )
                    })
                )

            })}
        </div>
    )
}