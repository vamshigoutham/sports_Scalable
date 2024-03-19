import React, { useState, useEffect } from 'react';
import { WorkshopCard } from '../components/workshopCard';
import { getWorkshopData } from '../apis';

export const Workshop = () => {
    const [workshop, setWorkshop] = useState([]);
    const [workshopFixed, setWorkshopFixed] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        getWorkshopData({ searchValue, successCb: (data) => { setWorkshop(data); setWorkshopFixed(data) } })
        document.body.style.overflow = 'hidden'
    }, [])


    const onChangeHandler = (value) => {
        setSearchValue(value);
        if (value.length > 0) {
            //const result = workshopFixed.filter(item => item.tags.toLowerCase().includes(value.toLowerCase()));
            const result = workshopFixed.filter(item =>
                item.tags.some(tag => tag.toLowerCase().includes(value.toLowerCase()))
            );

            setWorkshop(result);
        }
        else {
            setWorkshop(workshopFixed)
        }
    }

    return (
        <>
            <div className='p-8 flex'>
                <div class="px-64 mb-4 flex-1">
                    <input
                        type="text"
                        placeholder="Search for a workshop"
                        class="border border-gray rounded w-full p-3"
                        value={searchValue}
                        onChange={(e) => onChangeHandler(e.target.value)}
                    />
                </div>
            </div>
            <div className='flex gap-12 flex-wrap px-12 pl-16 py-2 pb-64' style={{ maxHeight: '800px', overflow: 'scroll' }}>
                {workshop?.map((element, index) => {
                    return (
                        <WorkshopCard data={element} key={index} />
                    )
                })}
            </div>
        </>
    )
}