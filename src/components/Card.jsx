import { Link } from "react-router-dom";


const Card = ({card}) => {
    return (
        <div className="card  bg-base-100 shadow-xl image-full">
            <figure><img src={card.image} alt="Shoes" /></figure>
            <div className="card-body">
                <div className='space-y-1'>
                    <h2 className="text-4xl">{card.tourist_spot}</h2>
                    <p className='text-xl'>{card.country}</p>
                    <p>{card.description}</p>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/view-details/${card._id}`} className="btn btn-outline btn-info">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Card;