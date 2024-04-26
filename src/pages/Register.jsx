import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContextComponent";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";


const Register = () => {
    const { createUser, setLoading, updateUser, logout } = useContext(AuthContext);
    const [error, setError] = useState('')
    const {
        register,
        handleSubmit,
       
        formState: { errors },
    } = useForm()

    const [showPassword, setShowPassword] = useState(false)
    const handlePassword = () => {
        setShowPassword(!showPassword)
    }

    const navigate = useNavigate()

    const onSubmit = (data) => {
        const { name, email, image, password } = data;
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                // toast.success("Registration success.Login now")

                updateUser(name, image)
                    .then(() => {
                        logout()
                        navigate('/login')
                    })
                    .catch(() => {
                        console.log('error');
                    })


            })
            .catch(error => {
                setLoading(false)
                setError(error.message)
                console.log(error.message);
            })
    }

    return (
        
           
        <div className="w-full md:w-4/6 lg:w-3/6 shadow-2xl   mx-auto p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
                <div className="mb-10 space-y-4 raleway">
                    <p className="text-4xl text-center ">Registration your <span className="font-bold raleway text-rose-400">account</span></p>
                    <p className="text-xl text-center  ">Welcome to our platform! Please fill out the following information to create your account. </p>
                </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4  inter ring-purple-500 rounded-lg px-10 py-4">
                    <div className="space-y-1 text-lg">
                        <label htmlFor="Text" className="block  dark:text-gray-600">Name</label>
                    <input {...register("name", { required: true })} type="text" id="name" placeholder="Type Your Name" className="ring-1 focus:ring-2 focus:ring-green-600 focus:bg-slate-200 focus:text-black ring-black input input-bordered w-full" />
                    {errors.name && <span className="text-red-500">This field is required</span>}
                        

                    </div>
                    <div className="space-y-1 text-lg">
                        <label htmlFor="email" className="block  dark:text-gray-600">Email</label>
                    <input {...register("email", { required: true })} type="email" id="email" placeholder="Type Your Email" className="focus:ring-2 focus:ring-green-600 focus:bg-slate-200 focus:text-black input ring-1 ring-black input-bordered w-full" />
                    {errors.name && <span className="text-red-500">This field is required</span>}
                        
                    </div>
                    <div className="space-y-1 text-lg">
                        <label htmlFor="image" className="block dark:text-gray-600">Profile Image </label>
                    <input {...register("image", { required: true })} type="text" id="image" placeholder="Your Image Link" className="input focus:ring-2 focus:ring-green-600 focus:bg-slate-200 focus:text-black ring-1 ring-black input-bordered w-full" />
                    {errors.name && <span className="text-red-500">This field is required</span>}
                       
                    </div>
                    <div className="space-y-1 relative text-lg">
                        <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                    <input {...register("password", {
                        required: true, validate: {
                            minLength: value => value.length >= 6,
                            uppercase: value => /[A-Z]/.test(value),
                            lowercase: value => /[a-z]/.test(value)
                        }
                    })}
                        type={showPassword ? "text" : "password"} placeholder="Type Your Password" className="input focus:ring-2 focus:ring-green-600 focus:bg-slate-200  focus:text-black ring-1 ring-black input-bordered w-full" />
                    <p onClick={handlePassword} className="absolute top-11 right-5">
                        {
                            showPassword ? <FaRegEye className="text-xl text-black" /> : <FaRegEyeSlash className="text-xl text-black" />
                        }
                    </p>
                    {errors.name && <span className="text-red-500">This field is required</span>}
                    {errors.password && errors.password.type === "minLength" && (
                        <p className="text-red-500">Password must be at least 6 characters long</p>
                    )}
                    {errors.password && errors.password.type === "uppercase" && (
                        <p className="text-red-500">Password must contain at least one capital letter</p>
                    )}
                    {errors.password && errors.password.type === "lowercase" && (
                        <p className="text-red-500">Password must contain at least one lowercase letter</p>
                    )}
                       
                    </div>
                {
                    error && <p className="text-red-500">{error}</p>
                }
                    <button type="submit" className="block text-xl font-medium text-white bg-[#4556ebea] hover:text-black hover:bg-[#4652c081] py-4 rounded-xl w-full">Login</button>
                </form>
                <p className="text-lg text-center  sm:px-6 dark:text-gray-600 ">Already have an account?
                    <Link className="underline font-medium ml-2 hover:text-blue-400 text-lg" to={'/login'}>Login</Link>
                </p>
            </div>
    );
};

export default Register;