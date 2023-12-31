
import toast from "react-hot-toast";
import loginphoto from "../../assets/login.png"
import useAuth from "../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../Components/SocialLogin";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
const Login = () => {
    const { login } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()
    const [showPass, setShowPass] = useState(false)

    const handleLogin = e => {
        // e.preventDefault()
        e.preventDefault()

        const form = e.target
        // const email = form.email.value
        const email = form.email.value

        const password = form.password.value
        console.log(email, password);
        login(email, password)
            .then(() => {
                toast.success("Logged in")
                return navigate(location?.state ? location.state : "/")
            })
            .catch(err => {
                toast.error("email or pass did not match")
            })
    }

    return (
        <>
            <Helmet>
                <title>
                    Express | Login
                </title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row-reverse ">
                    <div className="text-center lg:text-left">
                        <img src={loginphoto} alt="login.png" className="max-w-sm md:max-w-xs  lg:max-w-2xl" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-center py-4 text-info text-2xl font-bold">Login</h1>
                        <form className="card-body" onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="you email" name="email" className="input input-bordered input-info w-full max-w-sm" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                {/* <input type="password" placeholder="password" className="input input-bordered" required /> */}
                                <div className="relative ">

                                    <input type={showPass ? "text" : "password"} name='password' placeholder='Password' className=' input input-bordered input-info w-full max-w-sm' />
                                    <p onClick={() => { setShowPass(!showPass) }} className='absolute top-3 px-2 right-4 cursor-pointer '>{showPass ? "hide" : "show"}</p>
                                </div>

                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-info text-white">Login</button>
                            </div>
                        </form>
                        <SocialLogin text={"Login"}></SocialLogin>
                        <p className="text-center pb-4">Don have an account? <Link to={"/register"} className='text-info font-medium'>Sign up</Link> </p>

                    </div>
                </div>

            </div>
        </>
    );
};

export default Login;