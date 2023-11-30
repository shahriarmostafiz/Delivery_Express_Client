import React from 'react';
import useAuth from '../../../hooks/useAuth';
import Navbar from '../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import OurFeatures from '../OurFeatures/OurFeatures';
import Stats from '../Stats/Stats';
import TopFive from '../TopFive/TopFive';
import Footer from '../Footer/Footer';
import AboutUs from '../AboutUs/About';

const Home = () => {
    const { user } = useAuth()
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <OurFeatures></OurFeatures>
            <AboutUs></AboutUs>
            <Stats></Stats>
            <TopFive></TopFive>
            {/* home of {user} */}
            <Footer></Footer>
        </div>
    );
};

export default Home;