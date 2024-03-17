import React, { useState, useEffect } from 'react';

export const WorkshopCard = ({ data }) => {
    return (
        <div className='w-56 h-96 rounded-md bg-white' style={{ border: '1px solid lightgray' }}>
            <div>
                {/* <img src={data?.image} style={{ width: '100%', height: '200px', borderRadius:'5px' }} /> */}
                <div style={{width: '100%', height: '200px', borderRadius:'5px', backgroundColor:'lightgray'}}></div>
                <div className='p-4'>
                    <div className='font-semibold text-md'>{data?.title}</div>
                    <div className='text-gray-600'>{data?.description}</div>
                    <div>{data?.registrationCount} slots available</div>
                </div>
            </div>
        </div>
    )
}