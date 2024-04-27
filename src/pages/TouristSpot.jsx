import { useLoaderData } from "react-router-dom";
import TourSpot from "../components/TourSpot";


const TouristSpot = () => {
    const touristSpots = useLoaderData()
    return (
        <div className="grid lg:grid-cols-3 gap-x-10 gap-y-8 md:grid-cols-2 grid-cols-1">
            {
                touristSpots.map(tourSpot => <TourSpot
                    key={tourSpot._id}
                    tourSpot={tourSpot}
                ></TourSpot>)
           }
        </div>
    );
};

export default TouristSpot;