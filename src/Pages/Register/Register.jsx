// import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import authImage from "../../assets/authImage.png"
import { useForm } from 'react-hook-form';
import useAuth from "../../hooks/useAuth";
import SocialLogin from "../../Components/SocialLogin";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Register = () => {
    const { user, signup, update } = useAuth()
    const axiosPublic = useAxiosPublic()
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm()
    const navigate = useNavigate()
    const onSubmit = (data) => {
        console.log(data)
        // signup(data.email, data.password)
        //     .then(res => {
        //         console.log(res.user);
        //         update(data.name, data.photo)
        //             .then(() => {
        //                 // insert the user in the database here 
        //                 const userInfo = {
        //                     name: data.name,
        //                     email: data.email,
        //                 }
        //                 axiosPublic.post("/users", userInfo)
        //                     .then(res => {
        //                         if (res.data.insertedId) {
        //                             reset()
        //                             alert("signed up")
        //                             navigate("/login")

        //                         }
        //                     })

        //             })
        //             .catch(err => {
        //                 console.log(err)
        //             })

        //     })
        //     .catch(err => console.log(err))

    }
    return (
        <div className="p-0">
            <div>
                <Helmet>
                    <title>
                        Express | Signup
                    </title>
                </Helmet>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <img src={authImage} alt="" />
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form
                                onSubmit={handleSubmit(onSubmit)}
                                className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name </span>
                                    </label>
                                    <input type="text" placeholder="Name" className="input input-bordered" {...register("name", {
                                        required: true
                                    })} />
                                    {errors.name?.type === "required" && <span className="py-2 pl-4 text-red-500">Name is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image Url </span>
                                    </label>
                                    <input type="text" placeholder="Image Url" className="input input-bordered" {...register("photo", {
                                        required: true
                                    })} />
                                    {errors.photo?.type === "required" && <span className="py-2 pl-4 text-red-500">Photo Url  is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" {...register("email", { required: true })} className="input input-bordered" />
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
                                        className="input input-bordered" />
                                    {errors.password?.type === "required" && <span className="py-2 pl-4 text-red-500">Password  is required</span>}
                                    {errors.password?.type === "minLength" && <span className="py-2 pl-4 text-red-500">Password should be at least 8 characters</span>}
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
                                    <input type="text" placeholder="Name" className="input input-bordered" {...register("name", {
                                        required: true
                                    })} />
                                    {errors.name?.type === "required" && <span className="py-2 pl-4 text-red-500">Name is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image Url </span>
                                    </label>
                                    <input type="text" placeholder="Image Url" className="input input-bordered" {...register("photo", {
                                        required: true
                                    })} />
                                    {errors.photo?.type === "required" && <span className="py-2 pl-4 text-red-500">Photo Url  is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" {...register("email", { required: true })} className="input input-bordered" />
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
                                        className="input input-bordered" />
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