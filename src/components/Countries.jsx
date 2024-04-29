import { useEffect, useState } from "react";

// import { useLoaderData } from "react-router-dom";
import Country from "./Country";
import { useTypewriter, Cursor } from "react-simple-typewriter";


const Countries = () => {

    const [countries, setCountries] = useState([])
    const [typeEffect] = useTypewriter({
        words: ["Diverse Landscapes", "Eclectic Wonders", " Regions"],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 50,
        delaySpeed: 2000,
    })

    useEffect(() => {
        fetch('https://b9-a10-server-site-project.vercel.app/country')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    return (
        <div className="mt-10 px-2 ">
            <div className="space-y-3">
                <h3 className="lg:text-4xl text-xl font-bold raleway">Explore Southeast Asia's <span className="text-rose-500">{typeEffect}</span></h3>
                <p className="inter text-sm md:text-base">Discover the vibrant tapestry of Southeast Asia through our curated selection of must-visit countries. From the lush mangroves of Bangladesh to the ancient temples of Indonesia, each destination offers a unique blend of culture, history, and natural beauty. Dive into the bustling streets of Bangkok, unwind on the pristine beaches of Bali, or trek through the misty highlands of Malaysia. Whether you seek adventure, relaxation, or cultural immersion, Southeast Asia beckons with endless possibilities. Explore our collection of captivating countries and start planning your next unforgettable journey.</p>
            </div>
            <div className="grid px-2 grid-cols-1 gap-10 lg:grid-cols-2 my-10">
                {
                    countries.map(country => <Country
                        key={country._id}
                        country={country}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;