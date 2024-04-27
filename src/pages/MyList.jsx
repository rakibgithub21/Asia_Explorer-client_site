import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContextComponent";
import Loading from "../components/Loading";
import TableRow from "../components/TableRow";


const MyList = () => {
    const { user } = useContext(AuthContext)

    const [data, setData] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/tourist-spot-email/${user?.email}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [user])
    console.log(data);
    if (data.length === 0) {
        return <Loading></Loading>
    } else {
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
                            data.map(tourSpot => <TableRow
                                key={tourSpot._id}
                                tourSpot={tourSpot}
                            ></TableRow>)
                        }

                    </tbody>
                </table>
            </div>
        );

    }

};

export default MyList;