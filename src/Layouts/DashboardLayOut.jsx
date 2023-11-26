import React from 'react';
import { Outlet } from 'react-router-dom';
import Dashbar from '../Pages/DashBoard/Shared/Dashbar';

const DashboardLayout = () => {
    return (
        <div className='flex flex-col md:flex-row'>
            <Dashbar></Dashbar>
            <Outlet></Outlet>
        </div>
    );
};

export default DashboardLayout;