import axios from 'axios';

const instance = axios.create({
    baseURL: "https://dex-server-1.vercel.app"

})
const useAxiosPublic = () => {
    return instance
};

export default useAxiosPublic;