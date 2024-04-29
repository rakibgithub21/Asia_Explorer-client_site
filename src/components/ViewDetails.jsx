import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";
import { GiMoneyStack } from "react-icons/gi";
import { GrGroup } from "react-icons/gr";
import { CiCalendarDate } from "react-icons/ci";
import { SiUnitednations } from "react-icons/si";
import { TiWeatherPartlySunny } from "react-icons/ti";

const ViewDetails = () => {
    const data = useLoaderData()
    console.log(data);
    console.log(data);
    const { image, tourist_spot, country, location, description, cost, seasonality, travel, visitor, email, name } = data;
    return (
        <section className='px-5'>
            <div className="bg-slate-600 rounded-xl">
                <div className="container  px-4 py-16 pb-24 mx-auto  lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-50">
                    <div className='space-y-2 text-lg'>
                        <h1 className="text-5xl font-bold mb-4 leading-none sm:text-6xl xl:max-w-3xl text-gray-50">{tourist_spot}</h1>
                        <p>{description}</p>
                        <p className='flex items-center gap-1'><SiUnitednations />{country}</p>
                        <p className='flex items-center gap-1'><FaLocationDot /> Location : {location}</p>
                        <p className='flex items-center gap-1'><GiMoneyStack /> Average Cost: {cost} $</p>
                        <p className='flex gap-1 items-center'><GrGroup />Total Visitor Per Year: {visitor}</p>
                        <p className='flex items-center gap-1'><CiCalendarDate /> Travel Time: {travel} days</p>
                        <p className='flex gap-1 items-center'><TiWeatherPartlySunny /> Season: {seasonality}</p>
                        <div className='text-center bg-slate-800 w-2/3 mx-auto  text-base py-2 rounded-md'>
                            <h3>Post By: {name}</h3>
                            <h3>Email: {email}</h3>
                       </div>
                    </div>
                </div>
            </div>
            <img src={image} alt="" className="w-5/6 md:h-[500px] mx-auto mb-12 -mt-20 bg-gray-500 rounded-lg shadow-md lg:-mt-40" />
        </section>
    );
};

export default ViewDetails;