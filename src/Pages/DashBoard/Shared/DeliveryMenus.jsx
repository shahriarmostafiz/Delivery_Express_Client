import React from 'react';
import { MdOutlineRateReview } from 'react-icons/md';
import { GoPackageDependents } from "react-icons/go";

import { NavLink } from 'react-router-dom';

const DeliveryMenus = () => {
    return (
        <>
            <li><NavLink to={"/dashboard/myDeliveryList"}> <GoPackageDependents /> My Deliveries  </NavLink></li>
            <li><NavLink to={"/dashboard/myReviews"}><MdOutlineRateReview /> My Reviews </NavLink></li>
        </>
    );
};

export default DeliveryMenus;