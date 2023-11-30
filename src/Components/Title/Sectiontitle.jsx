import React from 'react';

const Sectiontitle = ({ heading, subHeading, dashboard }) => {
    return (
        <div className={`my-5 md:my-8 lg:my-10 text-center text-cyan-500 ${dashboard && "text-white"} `}>
            <h1 className='text-2xl font-semibold md:text-3xl '>{heading}</h1>
            <h4 className='text-xl text-slate-700'>
                {subHeading}
            </h4>
        </div>
    );
};

export default Sectiontitle;