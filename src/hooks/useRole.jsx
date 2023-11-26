
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';

const useRole = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const { data: userRole, isPending: isRoleLoading } = useQuery({
        queryKey: ["isAdmin",],
        queryFn: async () => {
            const res = axiosSecure.get(`/users/roles/${user?.email}`)
            console.log(res.data);
            return res.data
        }
    })
    return [userRole, isRoleLoading]
};

export default useRole;