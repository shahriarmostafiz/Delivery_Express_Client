
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';

const useRole = () => {
    const { user, loading } = useAuth()
    const axiosSecure = useAxiosSecure()
    const { data: userRole = {}, isPending: isRoleLoading } = useQuery({
        queryKey: [user?.email, "isAdmin"],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/roles/${user.email}`)
            console.log(res.data);
            return res.data
        }
    })
    return [userRole, isRoleLoading]
};

export default useRole;