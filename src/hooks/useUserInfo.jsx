import React from 'react';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useUserInfo = () => {
    // const handleUpdateInfo = 
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const { data: userInfo = {}, isPending: isUserInfoLoading, refetch: reloadUserInfo } = useQuery({
        queryKey: ["user", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/${user.email}`)
            return res.data
        }
    })
    return [userInfo, isUserInfoLoading, reloadUserInfo]
};

export default useUserInfo;