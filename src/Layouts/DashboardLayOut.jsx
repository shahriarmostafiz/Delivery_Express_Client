import React from 'react';
import { Outlet } from 'react-router-dom';
import Dashbar from '../Pages/DashBoard/Shared/Dashbar';

const DashboardLayout = () => {
    return (
        <div>
            <Dashbar></Dashbar>
            <Outlet></Outlet>
        </div>
    );
};

export default DashboardLayout;