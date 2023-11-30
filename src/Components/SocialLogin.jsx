/* eslint-disable react/prop-types */
import { FcGoogle } from "react-icons/fc"
import { useNavigate } from 'react-router-dom';
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import toast from "react-hot-toast";

const SocialLogin = ({ text }) => {
    const { googleLogin } = useAuth()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const handleGoogleLogin = () => {
        console.log("google login");
        googleLogin()
            .then(res => {
                console.log(res.user);
                const userInfo = {
                    email: res.user?.email,
                    name: res.user?.displayName,
                    image: res.user?.photoURL,
                    role: "user",
                    phone: "N/A",
                    bookingCount: 0
                }
                axiosPublic.post("/socialLoginUsers", userInfo)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.insertedId) {
                            toast.success("signed Up")
                        } else {
                            toast.success("Logged in ")
                        }

                        navigate("/")
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
            .catch()
    }
    return (
        <div className='pb-2 text-center'>
            <div className='divider'></div>
            <button className='btn '
                onClick={handleGoogleLogin}
            ><FcGoogle /> {text} </button>
        </div>
    );
};
export default SocialLogin;
