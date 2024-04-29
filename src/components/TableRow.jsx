import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const TableRow = ({ tourSpot, tourData, setTourData }) => {

    const handleDelete = (_id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://b9-a10-server-site-project.vercel.app/delete/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 1) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Tour Spot has been deleted.",
                                icon: "success"
                            });
                            const remaining = tourData.filter(data => data._id !== _id)
                            setTourData(remaining)
                        }

                    })
            }
        });

    }
    return (
        <tr className="hover">
            <td>{tourSpot.tourist_spot}</td>
            <td>{tourSpot.cost} $</td>
            <td>{tourSpot.seasonality} </td>
            <td>{tourSpot.travel}</td>
            <td className='flex gap-2'>
                <Link to={`/update/${tourSpot._id}`} className="btn btn-success">Update</Link>
                <button onClick={() => handleDelete(tourSpot._id)} className="btn btn-error">Delete</button></td>
            {/* <td><button className="btn btn-success">Update</button></td> */}
        </tr>
    );
};

export default TableRow;