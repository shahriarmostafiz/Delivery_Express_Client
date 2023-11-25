import React from 'react';
import bannerCycle from '../../../assets/bannerCycle.png'

const Banner = () => {
    return (
        <div className='flex flex-col lg:flex-row-reverse items-center gap-6'>
            <div className='flex-1 flex justify-center'>
                {/* banner text here  */}
                <div className="max-w-lg space-y-4 text">
                    <h1 className="text-5xl font-bold text-blue-500">

                        Express: Where Speed Meets Reliability
                    </h1>
                    <h4 className='text-gray-700'>
                        Trust in Express for lightning-fast deliveries without compromising on reliability. Your packages are in safe hands
                    </h4>
                </div>
            </div>
            <div className='flex-1 '>
                <img src={bannerCycle} alt="" />
            </div>
        </div>
    );
};

export default Banner;