import React from 'react';
import Sectiontitle from '../../../../Components/Title/Sectiontitle';
import useBooking from '../../../../hooks/useBooking';
import useAuth from '../../../../hooks/useAuth';
import Barchart from './Barchart';

const AdminHome = () => {
    const { loading } = useAuth()
    const [bookings, isLoadingBooking, refetchBooking] = useBooking()
    if (isLoadingBooking || loading) {
        return <h1>loading admin stats </h1>
    }

    return (
        <div className='w-full px-4'>
            <Sectiontitle heading={"Hello"} subHeading={"Home of Admin"}></Sectiontitle>
            <Barchart data={bookings}></Barchart>
        </div>
    );
};

export default AdminHome;