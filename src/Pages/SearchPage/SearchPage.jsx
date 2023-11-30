import React from 'react';
import { FaHome, FaPlane } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';

const SearchPage = () => {
    const { place } = useParams()
    return (
        <div className='text-center text-info w-screen h-screen flex flex-col space-y-6 justify-center items-center'>
            <h1 className='text-2xl font-semibold'> Yes we can deliver  any package to {place}  </h1>
            <Link to={"/"} className='btn btn-info text-white'>Return Home <FaHome /> </Link>
        </div>
    );
};

export default SearchPage;