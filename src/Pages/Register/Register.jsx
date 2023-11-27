// import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import authImage from "../../assets/authImage.png"
import { useForm } from 'react-hook-form';
import useAuth from "../../hooks/useAuth";
import SocialLogin from "../../Components/SocialLogin";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import toast from "react-hot-toast";

const Register = () => {
    const { user, signup, update, logout } = useAuth()
    const axiosPublic = useAxiosPublic()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()
    const navigate = useNavigate()
    const onSubmit = (data) => {
        console.log(data)
        signup(data.email, data.password)
            .then(res => {
                console.log(res.user);
                update(data.name, data.photo)
                    .then(() => {
                        // insert the user in the database here 
                        const userInfo = {
                            name: data.name,
                            email: data.email.toLowerCase(),
                            role: data.role,
                            image: data.photo,
                            phone: data.phone.toString(),
                            bookingCount: 0,
                            totalPayment: 0
                        }
                        axiosPublic.post("/users", userInfo)
                            .then(res => {
                                console.log(res.data);
                                if (res.data.message == "success") {
                                    // todo here reset and navigate uncomment and logout the user 
                                    reset()
                                    logout()
                                        .then(res => {
                                            toast.success("signed successfull, login to continue")
                                            navigate("/login")

                                        })

                                }
                            })


                    })
                    .catch(err => {
                        console.log(err)
                    })

            })
            .catch(err => console.log(err))

    }
    return (
        <div className="p-0 ">
            <div>
                <Helmet>
                    <title>
                        Express | Signup
                    </title>
                </Helmet>
                <div className=" min-h-screen bg-base-200">
                    {/* <div className="hero-content flex-col lg:flex-row-reverse"> */}
                    <div className="flex flex-col lg:flex-row items-center justify-center py-8">
                        <div className="lg:w-1/2 text-center lg:text-left border-r-8">
                            <img src={authImage} className="max-w-2xl" alt="" />
                        </div>
                        {/* <div className="card flex-1 w-full max-w-sm md:max-w-lg shadow-2xl bg-base-100"> */}
                        <div className="lg:w-1/2  card  border-2 w-full max-w-lg h-fit  border-blue-500 shadow-2xl">
                            <form
                                onSubmit={handleSubmit(onSubmit)}
                                className="p-4 px-8">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name </span>
                                    </label>
                                    <input type="text" placeholder="Name" className="input  input-bordered input-info " {...register("name", {
                                        required: true
                                    })} />
                                    {errors.name?.type === "required" && <span className="py-2 pl-4 text-red-500">Name is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image Url </span>
                                    </label>
                                    <input type="text" placeholder="Image Url" className="input  input-bordered input-info " {...register("photo", {
                                        required: true
                                    })} />
                                    {errors.photo?.type === "required" && <span className="py-2 pl-4 text-red-500">Photo Url  is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" {...register("email", { required: true })} className="input  input-bordered input-info " />
                                    {errors.email?.type === "required" && <span className="py-2 pl-4 text-red-500">Email is required</span>}

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password"
                                        {...register("password", {
                                            required: true,
                                            minLength: 8,
                                            pattern: /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])/
                                        })}
                                        className="input  input-bordered input-info " />
                                    {errors.password?.type === "required" && <span className="py-2 pl-4 text-red-500">Password  is required</span>}
                                    {errors.password?.type === "minLength" && <span className="py-2 pl-4 text-red-500">Password should be at least 8 characters</span>}
                                    {errors.password?.type === "pattern" && <span className="py-2 pl-4 text-red-500">Password  must have atleast One special character , One uppercaseand lowercase letter and one number </span>}
                                </div>
                                <div className="flex flex-col md:items-center md:flex-row-reverse">
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Sign Up as?</span>
                                        </label>

                                        <select
                                            defaultValue={"user"}
                                            className="select select-bordered w-full max-w-xs"
                                            {...register("role", {
                                                required: true
                                            })}
                                        >
                                            <option value={"user"}>User </option>
                                            {/* <option value={"user"}>User</option> */}
                                            <option value={"deliveryman"}>Delivery Man</option>
                                        </select>
                                    </div>
                                    <div className="w-full">
                                        <label className="label">
                                            <span className="label-text">Phone Number</span>
                                        </label>
                                        <input type="tel" placeholder="Phone Number" {...register("phone", { required: true })} className="input  input-bordered input-info" />
                                        {errors.phone?.type === "required" && <span className="py-2 pl-4 text-red-500">Phone Number is required</span>}

                                    </div>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Register</button>
                                </div>
                            </form>
                            <SocialLogin text={"SignUp"}></SocialLogin>
                            <p className="text-center pb-2">Have an account? <Link to={"/login"} className='text-blue-600 font-medium'>login Here</Link> </p>
                        </div>
                    </div>
                </div>
                {/* <div className="hero p-0 h-screen bg-base-200">
                    <div className="flex flex-col justify-center lg:flex-row">
                        <div className="text-center hidden md:block lg:text-left">
                            <img src={authImage} className="" alt="" />
                        </div>
                        <div className="card mx-auto flex-shrink-0 w-[384px] max-w-sm shadow-2xl bg-base-100">
                            <form
                                onSubmit={handleSubmit(onSubmit)}
                                className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name </span>
                                    </label>
                                    <input type="text" placeholder="Name" className="input  input-bordered input-info " {...register("name", {
                                        required: true
                                    })} />
                                    {errors.name?.type === "required" && <span className="py-2 pl-4 text-red-500">Name is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image Url </span>
                                    </label>
                                    <input type="text" placeholder="Image Url" className="input  input-bordered input-info " {...register("photo", {
                                        required: true
                                    })} />
                                    {errors.photo?.type === "required" && <span className="py-2 pl-4 text-red-500">Photo Url  is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" {...register("email", { required: true })} className="input  input-bordered input-info " />
                                    {errors.email?.type === "required" && <span className="py-2 pl-4 text-red-500">Email is required</span>}

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password"
                                        {...register("password", {
                                            required: true,
                                            minLength: 8,
                                            pattern: /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])/
                                        })}
                                        className="input  input-bordered input-info " />
                                    {errors.password?.type === "required" && <span className="py-2 pl-4 text-red-500">Password  is required</span>}
                                    {errors.password?.type === "minLength" && <span className="py-2 pl-4 text-red-500">Password  is required</span>}
                                    {errors.password?.type === "pattern" && <span className="py-2 pl-4 text-red-500">Password  must have atleast One special character , One uppercaseand lowercase letter and one number </span>}
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Register</button>
                                </div>
                            </form>
                            <SocialLogin text={"SignUp"}></SocialLogin>
                            <p className="text-center pb-5">Have an account? <Link to={"/login"} className='text-blue-600 font-medium'>login Here</Link> </p>

                        </div>
                    </div>
                </div> */}

            </div>
        </div>
    );
};

export default Register;