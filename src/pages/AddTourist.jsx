import { useContext, useRef } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { AuthContext } from "../context/AuthContextComponent";
import Swal from 'sweetalert2'

const AddTourist = () => {
    const { user } = useContext(AuthContext)
    const formRef = useRef(null);

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
        // console.log(image, tourist_spot, country, location, description, cost, season, travel, visitor, email, name);
        fetch('https://b9-a10-server-site-project.vercel.app/tourist-spot', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Congratulations",
                        text: "Success Fully Added",
                        icon: "success"
                    }).then(() => {
                        formRef.current.reset(); // Reset the form fields
                    });


                }
            })
    }

    return (
        <div className="grid lg:grid-cols-7 gap-5">
            <div className="lg:col-span-2  inter p-2 space-y-3">
                <h3 className="text-2xl font-medium">Add Tourist Spots</h3>
                <p>Contribute to our global travel database with ease! Add tourist spots effortlessly through our intuitive form. Share images, descriptions, and essential details to help fellow travelers discover new destinations. Start adding now and be a part of the adventure</p>
            </div>
            <form ref={formRef} onSubmit={handleAddTourist} className="lg:col-span-5 shadow-lg  grid gap-5 md:grid-cols-2 p-4">
                <div>
                    <label htmlFor="image">Image URL</label>
                    <input required id="image" name="image" type="text" placeholder="Enter Your Image URL" className="input input-bordered w-full mt-1 " />
                </div>
                <div>
                    <label htmlFor="spot">Tourists Spot Name</label>
                    <input required id="spot" name="spot" type="text" placeholder="Tourist spot name" className="input input-bordered w-full mt-1 " />
                </div>
                <div className="relative">
                    <label htmlFor="country">Country Name</label>
                    <select required name="country" id="country" className="input input-bordered w-full mt-1">
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
                    <input required name="location" id="location" type="text" placeholder="Type here" className="input input-bordered w-full mt-1 " />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <input required name="description" type="text" id="description" placeholder="Type here" className="input input-bordered w-full mt-1 " />
                </div>
                <div>
                    <label htmlFor="cost">Average Cost <sup className="text-sm text-red-500">*Dollar*</sup></label>
                    <input required name="cost" type="number" id="cost" placeholder="Fill Data Like 450" className="input input-bordered w-full mt-1 " />
                </div>
                <div className="relative">
                    <label htmlFor="seasonality">Select Season</label>
                    <select required name="seasonality" id="seasonality" className="input input-bordered w-full mt-1">
                        <option value="Select Seasson" >Select Seasion</option>
                        <option value="Winter">Winter</option>
                        <option value="Summer">Summer</option>
                        <option value="Autumn">Autumn</option>
                        <option value="Spring">Spring</option>
                    </select>
                    <p className="absolute top-10 right-2"> <FaAngleDown className="text-2xl" /></p>
                    {/* <input required name="season" id="seasonality" type="text" placeholder="Type here" className="input input-bordered w-full mt-1 " /> */}

                </div>
                <div>
                    <label htmlFor="travel">Travel Time</label>
                    <input required name="travel" id="travel" type="text" placeholder="Fill Data like 3 - 5 days" className="input input-bordered w-full mt-1 " />
                </div>
                <div>
                    
                    <label htmlFor="visitor">Total Visitor Per Year </label>
                    <input required name="visitor" id="visitor" type="text" placeholder="Fill Data like Over 1 million " className="input input-bordered w-full mt-1 " />
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

export default AddTourist;