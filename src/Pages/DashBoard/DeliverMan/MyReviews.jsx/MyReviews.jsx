import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useUserInfo from '../../../../hooks/useUserInfo';
import ReviewCard from './ReviewCard';
import Sectiontitle from '../../../../Components/Title/Sectiontitle';

const MyReviews = () => {
    const [userInfo, isUserInfoLoading, reloadUserInfo] = useUserInfo()
    // const reviews = userInfo?.reviews 
    if (isUserInfoLoading) {
        return (
            <h1>loading reviews </h1>
        )
    }
    // let reviews = []
    const allReviews = userInfo?.reviews ? userInfo?.reviews : []
    if (!allReviews.length) {
        return (<div className='w-full min-h-screen flex justify-center items-center'>
            <h1 className='text-center text-4xl font-medium text-red-500'>
                You dont have  any reviews yet
            </h1>
        </div>)
    }
    // if (reviews)
    console.log(allReviews);

    return (
        <div className='w-full'>
            <Sectiontitle heading={"Reviews"} subHeading={"What our users say"}></Sectiontitle>
            <div className='w-full  flex justify-center '>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>

                    {
                        allReviews?.map(review => <ReviewCard key={review.bookingId} review={review}></ReviewCard>)
                    }
                </div>

            </div>

        </div>
    );
};

export default MyReviews;