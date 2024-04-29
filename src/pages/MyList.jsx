import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContextComponent";
import Loading from "../components/Loading";
import TableRow from "../components/TableRow";


const MyList = () => {
    const { user } = useContext(AuthContext)

    const [tourData, setTourData] = useState([])


    useEffect(() => {
        fetch(`https://b9-a10-server-site-project.vercel.app/tourist-spot-email/${user?.email}`)
            .then(res => res.json())
            .then(data => setTourData(data))
    }, [user, tourData])

    return (
        <div className="overflow-x-auto min-h-[calc(100vh-367px)]">
            <table className="table">
                {/* head */}
                <thead className="lg:text-xl md:text-lg text-gray-500">
                    <tr>
                        <th>Tourist Spot Name</th>
                        <th>Average Cost</th>
                        <th>Travel Time</th>
                        <th>Update/Delete</th>

                    </tr>
                </thead>
                <tbody className="lg:text-lg">

                    {
                        tourData.map(tourSpot => <TableRow
                            tourData={tourData}
                            setTourData={setTourData}
                            key={tourSpot._id}
                            tourSpot={tourSpot}
                        ></TableRow>)
                    }

                </tbody>
            </table>
        </div>
    );

}


export default MyList;