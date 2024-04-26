import { Link } from "react-router-dom";


const Register = () => {
    return (
        
           
        <div className="w-full md:w-4/6 lg:w-3/6 shadow-2xl   mx-auto p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
                <div className="mb-10 space-y-4 raleway">
                    <p className="text-4xl text-center ">Registration your <span className="font-bold raleway text-rose-400">account</span></p>
                    <p className="text-xl text-center  ">Welcome to our platform! Please fill out the following information to create your account. </p>
                </div>
                <form  className="space-y-4 bg-slate-100 inter ring-purple-500 rounded-lg px-10 py-4">
                    <div className="space-y-1 text-lg">
                        <label htmlFor="Text" className="block  dark:text-gray-600">Name</label>
                        <input type="text" id="name" placeholder="Type Your Name" className="ring-1 focus:ring-2 focus:ring-green-600 focus:bg-slate-200 focus:text-black ring-black input input-bordered w-full" />
                        

                    </div>
                    <div className="space-y-1 text-lg">
                        <label htmlFor="email" className="block  dark:text-gray-600">Email</label>
                        <input type="email" id="email" placeholder="Type Your Email" className="focus:ring-2 focus:ring-green-600 focus:bg-slate-200 focus:text-black input ring-1 ring-black input-bordered w-full" />
                        
                    </div>
                    <div className="space-y-1 text-lg">
                        <label htmlFor="image" className="block dark:text-gray-600">Profile Image </label>
                        <input type="text" id="image" placeholder="Your Image Link" className="input focus:ring-2 focus:ring-green-600 focus:bg-slate-200 focus:text-black ring-1 ring-black input-bordered w-full" />
                       
                    </div>
                    <div className="space-y-1 relative text-lg">
                        <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                        <input type="password" placeholder="Type Your Password" className="input focus:ring-2 focus:ring-green-600 focus:bg-slate-200 focus:text-black ring-1 ring-black input-bordered w-full" />
                       
                    </div>
                   
                    <button type="submit" className="block text-xl font-medium text-white bg-[#4556ebea] hover:text-black hover:bg-[#4652c081] py-4 rounded-xl w-full">Login</button>
                </form>
                <p className="text-lg text-center  sm:px-6 dark:text-gray-600 ">Already have an account?
                    <Link className="underline font-medium ml-2 hover:text-blue-400 text-lg" to={'/login'}>Login</Link>
                </p>
            </div>
    );
};

export default Register;