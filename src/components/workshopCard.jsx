import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const WorkshopCard = ({ data }) => {
    const slotsAvailability = (data.participantLimit - data.registrationCount)
    console.log("data",data.participantLimit - data.registrationCount)
    return (
        <div className='w-56 h-96 rounded-md bg-white shadow-md' style={{border: '1px solid #e1e1e1'}}>
            <div>
                <div style={{width: '100%', height: '200px', borderRadius: '5px', backgroundColor: '#f3f3f3'}}></div>
                <div className='p-4'>
                    <div className='font-semibold text-md'>{data?.title}</div>
                    <div className='text-gray-600 text-sm'>{data?.description}</div>
                    <div className='text-gray-500 text-xs'>{slotsAvailability} slots available</div>
                </div>
            </div>
            {
                slotsAvailability > 0 ?
                    <Link to={`/payment/${data._id}`} state={{price: data.price}}
                          className="block text-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-b-md transition duration-300">
                        Book
                    </Link> :
                    <div className="text-center bg-gray-300 text-white py-2 rounded-b-md cursor-not-allowed">
                        Sold Out
                    </div>
            }
        </div>
    )
}