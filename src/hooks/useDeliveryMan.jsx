import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useDeliveryMan = () => {
    const axiosSecure = useAxiosSecure()
    const { data: AllDeliveryMan = [], isPending: isAllDeliveryPending, refetch: refetchAllDeliveryMan } = useQuery({
        queryKey: ["allDeliveryMan"],
        queryFn: async () => {
            const res = await axiosSecure.get("/users/deliveryMan")
            return res.data
        }
    })
    return [AllDeliveryMan, isAllDeliveryPending, refetchAllDeliveryMan]
};

export default useDeliveryMan;