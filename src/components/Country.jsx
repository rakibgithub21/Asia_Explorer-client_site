import { Link } from "react-router-dom";


const Country = ({ country }) => {
    console.log(country);
    return (
        <Link to={`/country/${country.country_name}`} className="card  card-compact  bg-base-100 shadow-2xl">
            <figure><img src={country.image} className="h-[350px] w-full" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{country.country_name}</h2>
                <p>{country.description}</p>
                
            </div>
        </Link>
    );
};

export default Country;