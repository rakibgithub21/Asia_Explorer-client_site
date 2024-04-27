import React from 'react';
import { Link } from 'react-router-dom';

const SameCountry = ({country}) => {
    return (
        <div className="card  bg-base-100 shadow-xl image-full">
            <figure><img src={country.image} alt="Shoes" /></figure>
            <div className="card-body">
                <div className='space-y-1'>
                    <h2 className="text-4xl">{country.tourist_spot}</h2>
                    <p className='text-xl'>{country.country}</p>
                    <p>{country.description}</p>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/view-details/${country._id}`} className="btn btn-outline btn-info">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default SameCountry;