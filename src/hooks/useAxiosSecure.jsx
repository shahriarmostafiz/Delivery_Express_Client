import axios from 'axios';
import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
const instance = axios.create({
    baseURL: "http://localhost:5000"

})

const useAxiosSecure = () => {
    const { logout } = useAuth()
    const navigate = useNavigate()

    instance.interceptors.request.use(function (config) {
        // sending the token to verify
        const token = localStorage.getItem("access-token")
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });

    // instance.interceptors. 
    instance.interceptors.response.use(function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data

        return response;
    }, async (error) => {
        const status = error.response.status
        // parsing error
        if (status === 401 || status === 403) {
            await logout()
            // todo  check if this toast will work
            // toast.error(error.response.message)
            navigate("/login")
        }
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    });
    return instance
};

export default useAxiosSecure;