import React from 'react';
import Sectiontitle from '../../../../Components/Title/Sectiontitle';
import useBooking from '../../../../hooks/useBooking';
import useAuth from '../../../../hooks/useAuth';
import Barchart from './Barchart';
import LoadingComponent from '../../../../Components/LoadingComponent/LoadingComponent';

const AdminHome = () => {
    const { loading } = useAuth()
    const [bookings, isLoadingBooking, refetchBooking] = useBooking()
    if (isLoadingBooking || loading) {
        return <LoadingComponent />
    }

    return (
        <div className='w-full px-4'>
            <Sectiontitle heading={"Admin DashBoard"} subHeading={"Home of Admin"}></Sectiontitle>
            <Barchart data={bookings}></Barchart>
        </div>
    );
};

export default AdminHome;