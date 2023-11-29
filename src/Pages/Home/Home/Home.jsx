import React from 'react';
import useAuth from '../../../hooks/useAuth';
import Navbar from '../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import OurFeatures from '../OurFeatures/OurFeatures';
import Stats from '../Stats/Stats';
import TopFive from '../TopFive/TopFive';
import Footer from '../Footer/Footer';

const Home = () => {
    const { user } = useAuth()
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <OurFeatures></OurFeatures>
            <Stats></Stats>
            <TopFive></TopFive>
            {/* home of {user} */}
            <Footer></Footer>
        </div>
    );
};

export default Home;