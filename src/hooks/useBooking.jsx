import React from 'react';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useBooking = (startDate, endDate) => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const { data: bookings = [], isPending: isLoadingBooking, refetch: refetchBooking } = useQuery({
        queryKey: [],
        queryFn: async () => {
            const res = await axiosSecure.get(`/bookings/${user?.email}`)
            return res.data
        }
    })
    return [bookings, isLoadingBooking, refetchBooking]
};

export default useBooking;