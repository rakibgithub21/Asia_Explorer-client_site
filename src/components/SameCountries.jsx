import { useLoaderData } from "react-router-dom";
import SameCountry from "./SameCountry";


const SameCountries = () => {
    const countries = useLoaderData()
    
    return (
        <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-x-10 gap-y-8">
                {
                    countries.map(country => <SameCountry
                        key={country._id}
                        country={country}
                    ></SameCountry>)
                }
            </div>
        </div>
    );
};

export default SameCountries;