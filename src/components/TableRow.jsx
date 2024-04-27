import React from 'react';
import { Link } from 'react-router-dom';

const TableRow = ({ tourSpot }) => {
    return (
        <tr className="hover">
            <td>{tourSpot.tourist_spot}</td>
            <td>{tourSpot.cost}</td>
            <td>{tourSpot.travel}</td>
            <td className='flex gap-2'><Link to={`/update/${tourSpot._id}`} className="btn btn-success">Update</Link><button className="btn btn-error">Delete</button></td>
            {/* <td><button className="btn btn-success">Update</button></td> */}
        </tr>
    );
};

export default TableRow;