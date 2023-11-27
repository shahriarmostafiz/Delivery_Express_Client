import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosPublic from './useAxiosPublic';

const useStatData = () => {
    const axiosPublic = useAxiosPublic()
    const { data: statsData = {}, refetch: refetchStats, isPending: isStatPending } = useQuery({
        queryKey: ["stats"],
        queryFn: async () => {
            const res = await axiosPublic.get("/stats ")
            return res.data
        }
    })
    return [statsData, refetchStats, isStatPending]
};

export default useStatData;