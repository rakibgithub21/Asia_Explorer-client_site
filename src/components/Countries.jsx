import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Country from "./Country";


const Countries = () => {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/country')
            .then(res => res.json())
        .then(data =>setCountries(data))
    }, [])
    
    return (
        <div className="grid px-2 grid-cols-1 gap-10 lg:grid-cols-2 my-10">
            {
                countries.map(country => <Country
                    key={country._id}
                    country={country}
                ></Country>)
            }
        </div>
    );
};

export default Countries;