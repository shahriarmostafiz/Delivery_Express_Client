import React from 'react';
import useAuth from '../../../hooks/useAuth';
import Navbar from '../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import OurFeatures from '../OurFeatures/OurFeatures';
import Stats from '../Stats/Stats';

const Home = () => {
    const { user } = useAuth()
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <OurFeatures></OurFeatures>
            <Stats></Stats>
            {/* home of {user} */}
        </div>
    );
};

export default Home;