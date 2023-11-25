import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';

const useAdmin = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: ["isAdmin",],
        queryFn: async () => {
            const res = axiosSecure.get(`/users/isAdmin/${user?.email}`)
            return res.data?.admin
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;