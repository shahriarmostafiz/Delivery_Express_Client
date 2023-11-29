// import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Sectiontitle from '../../../Components/Title/Sectiontitle';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import TopCard from './topCard';

const TopFive = () => {
    const axiosPublic = useAxiosPublic()
    const { data: topMan, isPending } = useQuery({
        queryKey: ["top5"],
        queryFn: async () => {
            const res = await axiosPublic.get("/topdeliveryman")
            return res.data
        }
    })
    if (isPending) {
        return <h1>loading top 5..</h1>
    }
    console.log(topMan);

    return (
        <div className='my-4 md:my-6 lg:my-8'>
            <Sectiontitle heading={"Delivery All-Starts"} subHeading={"Your Trusted Delivery Crew"}></Sectiontitle>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        topMan?.map(deliveryman => <TopCard key={deliveryman._id} deliveryman={deliveryman}></TopCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default TopFive;