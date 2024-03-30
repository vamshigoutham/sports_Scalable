import React from 'react';
import { Link } from 'react-router-dom';

export const WorkshopCard = ({ data }) => {
    const slotsAvailability = data.participantLimit - data.registrationCount;

    return (
        <tr className="border-b border-gray-200 hover:bg-gray-100">
            <td className="px-6 py-4 whitespace-nowrap">{data.title}</td>
            <td className="px-6 py-4 whitespace-nowrap">{data.category}</td>
            <td className="px-6 py-4 whitespace-nowrap">{data.location}</td>
            <td className="px-6 py-4 whitespace-nowrap">{new Date(data.date).toLocaleDateString()}</td>
            <td className="px-6 py-4 whitespace-nowrap">€{data.price}</td>
            <td className="px-6 py-4 whitespace-nowrap">{slotsAvailability} / {data.participantLimit}</td>
            <td className="px-6 py-4 whitespace-nowrap">{data.instructorBio}</td>
            <td className="px-6 py-4 whitespace-nowrap">
                {slotsAvailability > 0 ? (
                    <Link
                        to={`/payment/${data._id}`}
                        state={{ price: data.price }}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
                    >
                        Book
                    </Link>
                ) : (
                    <div className="bg-gray-300 text-white py-2 px-4 rounded cursor-not-allowed">
                        Sold Out
                    </div>
                )}
            </td>
        </tr>
    );
};
