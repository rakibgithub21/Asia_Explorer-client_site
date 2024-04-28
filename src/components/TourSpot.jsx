import React from 'react';
import { Link } from 'react-router-dom';

const TourSpot = ({ tourSpot }) => {

    
    console.log(tourSpot._id); 
    
    return (
        <div className="card  bg-base-100 shadow-xl image-full">
            <figure><img src={tourSpot.image} alt="Shoes" /></figure>
            <div className="card-body flex flex-col justify-between">
                <div className='space-y-1'>
                    <h2 className="text-4xl">{tourSpot.tourist_spot}</h2>
                    <p className='text-xl'>{tourSpot.country}</p>
                    <p>Average Cost: {tourSpot.cost}</p>

                    <p>{tourSpot.description}</p>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/view-details/${tourSpot._id}`} className="btn btn-outline btn-info">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default TourSpot;