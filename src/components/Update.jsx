import { useContext } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { AuthContext } from "../context/AuthContextComponent";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {
    const { user } = useContext(AuthContext)
    const data = useLoaderData()
    const { _id,image, tourist_spot, country, location, description, cost, seasonality, travel, visitor } = data;

    const handleAddTourist = (e) => {
        e.preventDefault()
        const form = e.target;
        const image = form.image.value;
        const tourist_spot = form.spot.value;
        const country = form.country.value;
        const location = form.location.value;
        const description = form.description.value;
        const cost = form.cost.value;
        const seasonality = form.seasonality.value;
        const travel = form.travel.value;
        const visitor = form.visitor.value;
        const email = form.email.value;
        const name = form.name.value;
        const info = { image, tourist_spot, country, location, description, cost, seasonality, travel, visitor, email, name }
        console.log(info);
        fetch(`http://localhost:5000/update/${_id}`, {
            method: "PUT",
            headers: {
                'content-type' : 'application/json'
            },
            body:JSON.stringify(info)
        })

            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Success?",
                        text: "Success Fully Update",
                        icon: "success"
                    });
                    
                }
        })

    }
    return (
        <div className="grid lg:grid-cols-7 gap-5">
            <div className="lg:col-span-2  inter p-2 space-y-3">
                <h3 className="text-2xl font-medium">Update Your Tourist Spots</h3>
                <p>Keep our travel database fresh and accurate by updating tourist spots! Help maintain the latest information by editing details, adding new images, or providing recent descriptions. Your contributions ensure that fellow travelers have access to the most relevant and up-to-date insights. Start updating now and make every journey unforgettable!</p>
            </div>
            <form onSubmit={handleAddTourist} className="lg:col-span-5 shadow-lg  grid gap-5 md:grid-cols-2 p-4">
                <div>
                    <label htmlFor="image">Image URL</label>
                    <input defaultValue={image} required id="image" name="image" type="text" placeholder="Type here" className="input input-bordered w-full mt-1 " />
                </div>
                <div>
                    <label htmlFor="spot">Tourists Spot Name</label>
                    <input defaultValue={tourist_spot} required id="spot" name="spot" type="text" placeholder="Type here" className="input input-bordered w-full mt-1 " />
                </div>
                <div className="relative">
                    <label htmlFor="country">Country Name</label>
                    <select defaultValue={country} required name="country" id="country" className="input input-bordered w-full mt-1">
                        <option value="Select Country" >Select Country</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="Thailand">Thailand</option>
                        <option value="Indonesia">Indonesia</option>
                        <option value="Malaysia">Malaysia</option>
                        <option value="Vietnam">Vietnam</option>
                        <option value="Cambodia">Cambodia</option>
                    </select>
                    <p className="absolute top-10 right-2"> <FaAngleDown className="text-2xl" /></p>
                </div>
                <div>
                    <label htmlFor="location">location</label>
                    <input defaultValue={location} required name="location" id="location" type="text" placeholder="Type here" className="input input-bordered w-full mt-1 " />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <input defaultValue={description} required name="description" type="text" id="description" placeholder="Type here" className="input input-bordered w-full mt-1 " />
                </div>
                <div>
                    <label htmlFor="cost">Average Cost</label>
                    <input defaultValue={cost} required name="cost" type="number" id="cost" placeholder="Type here" className="input input-bordered w-full mt-1 " />
                </div>
                <div className="relative">
                    <label htmlFor="seasonality">Select Season</label>
                    <select defaultValue={seasonality} required name="seasonality" id="seasonality" className="input input-bordered w-full mt-1">
                        <option value="Select Seasson" >Select Seasion</option>
                        <option value="Bangladesh">Winter</option>
                        <option value="Thailand">Summer</option>
                        <option value="Indonesia">Autumn</option>
                        <option value="Malaysia">Spring</option>
                    </select>
                    <p className="absolute top-10 right-2"> <FaAngleDown className="text-2xl" /></p>
                </div>
                <div>
                    <label htmlFor="travel">Travel Time</label>
                    <input defaultValue={travel} required name="travel" id="travel" type="number" placeholder="Type here" className="input input-bordered w-full mt-1 " />
                </div>
                <div>
                    <label htmlFor="visitor">Total Visitor Per Year</label>
                    <input defaultValue={visitor} required name="visitor" id="visitor" type="text" placeholder="Type here" className="input input-bordered w-full mt-1 " />
                </div>
                <div>
                    <label htmlFor="email">User Email</label>
                    <input defaultValue={user?.email} disabled name="email" id="email" type="email" placeholder="Type here" className="input input-bordered w-full mt-1 cursor-not-allowed" />
                </div>
                <div>
                    <label htmlFor="name">User Name</label>
                    <input defaultValue={user?.displayName} disabled name="name" id="name" type="text" placeholder="Type here" className="input input-bordered cursor-not-allowed w-full mt-1" />
                </div>
                <input className="md:col-span-2 w-full btn btn-outline btn-primary" type="submit" value="Add" />
            </form>
        </div>
    );
};

export default Update;