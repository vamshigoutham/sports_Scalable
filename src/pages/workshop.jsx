import React, { useState, useEffect } from 'react';
import { WorkshopCard } from '../components/workshopCard';
import { getWorkshopData } from '../apis';

export const Workshop = () => {
    const [workshop, setWorkshop] = useState([]);
    const [workshopFixed, setWorkshopFixed] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        getWorkshopData({ searchValue, successCb: (data) => { setWorkshop(data); setWorkshopFixed(data) } });
        document.body.style.overflow = 'hidden';
    }, []);

    const onChangeHandler = (value) => {
        setSearchValue(value);
        if (value.length > 0) {
            const result = workshopFixed.filter(item =>
                item.tags.some(tag => tag.toLowerCase().includes(value.toLowerCase()))
            );
            setWorkshop(result);
        } else {
            setWorkshop(workshopFixed);
        }
    };

    return (
        <>
            <div className='p-8 flex'>
                <div className="px-64 mb-4 flex-1">
                    <input
                        type="text"
                        placeholder="Search for a workshop"
                        className="border border-gray rounded w-full p-3"
                        value={searchValue}
                        onChange={(e) => onChangeHandler(e.target.value)}
                    />
                </div>
            </div>
            <div className="container mx-auto bg-white rounded-lg shadow-md overflow-hidden" style={{ maxHeight: '600px', overflowY: 'scroll' }}>
                <table className="min-w-full">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            <th className="px-6 py-3 text-left">Title</th>
                            <th className="px-6 py-3 text-left">Category</th>
                            <th className="px-6 py-3 text-left">Location</th>
                            <th className="px-6 py-3 text-left">Date</th>
                            <th className="px-6 py-3 text-left">Price</th>
                            <th className="px-6 py-3 text-left">Slots Available</th>
                            <th className="px-6 py-3 text-left">Instructor</th>
                            <th className="px-6 py-3 text-left">Book</th>
                        </tr>
                    </thead>
                    <tbody>
                        {workshop.map((element, index) => (
                            <WorkshopCard data={element} key={index} />
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

