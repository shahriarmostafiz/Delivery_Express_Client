import React from 'react';

const Sectiontitle = ({ heading, subHeading }) => {
    return (
        <div className='my-5 md:my-8 lg:my-10 text-center'>
            <h1 className='text-2xl font-semibold md:text-3xl '>{heading}</h1>
            <h4 className='text-xl'>
                {subHeading}
            </h4>
        </div>
    );
};

export default Sectiontitle;