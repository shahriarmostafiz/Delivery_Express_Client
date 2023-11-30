import React from 'react';
import { useRouteError } from 'react-router-dom';
// import { BiError } from "react-icons/bi";
import errorlogo from "../../../public/error.svg"


const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div>
            <div className="flex flex-col h-screen justify-center items-center font-mono">
                <div className="border rounded border-info  p-5 text-center py-20 text-info">
                    <div className=" flex justify-center items-center">
                        <img src={errorlogo} className='w-24' alt="" />
                    </div>

                    <h2 className="text-4xl font-semibold my-4 ">{error.statusText}</h2>
                    <h3 className="text-3xl text-info">{error.error.message}</h3>
                </div>
            </div>

        </div>
    );
};

export default ErrorPage;