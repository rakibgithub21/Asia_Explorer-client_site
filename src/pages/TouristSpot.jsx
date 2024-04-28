import { useLoaderData } from "react-router-dom";
import TourSpot from "../components/TourSpot";
import { useState } from "react";


const TouristSpot = () => {
    const tourist = useLoaderData()

    const [touristSpots, setTouristSpots] = useState(tourist)
    
    const handleSorting = (e) => {
        let sortedList = [...touristSpots];

        if (e.target.value === 'Descending') {
            sortedList.sort((a, b) => b.cost - a.cost);
        }
        else if (e.target.value === 'Ascending') {
            sortedList.sort((a, b) => a.cost - b.cost)
        }

        setTouristSpots(sortedList)
    }

    return (
        <div>

            <div className="flex justify-center my-5">
                <select onChange={handleSorting} id="sortSelect" className="p-2 border  bg-[#23BE0A] border-gray-300 rounded-md text-white font-medium focus:outline-none focus:border-blue-500 " defaultValue="default">
                    <option value="default" disabled>Sort By</option>
                    <option value="Descending">Descending</option>
                    <option value="Ascending">Ascending</option>
                </select>
           </div>

             <div className="grid px-2 lg:grid-cols-3 gap-x-10 gap-y-8 md:grid-cols-2 grid-cols-1">
           
            {
                touristSpots.map(tourSpot => <TourSpot
                    key={tourSpot._id}
                    tourSpot={tourSpot}
                ></TourSpot>)
           }
            </div>
            
        </div>
         
       
    );
};

export default TouristSpot;