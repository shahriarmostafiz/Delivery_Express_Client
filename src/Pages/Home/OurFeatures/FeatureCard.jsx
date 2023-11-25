/* eslint-disable react/prop-types */
// import React from 'react';


const FeatureCard = ({ feature }) => {
    const {
        name,
        imageLink,
        description
    } = feature
    return (
        <div>

            <div className="group hover:scale-110 transform ease-in-out duration-500 relative flex space-y-6 flex-col mt-6 text-gray-700 bg-white shadow-md w-96 h-[400px] rounded-xl bg-clip-border">
                <div className="p-6 space-y-6">
                    <div className="flex justify-center">
                        <img src={imageLink} className="w-40" alt="" />
                    </div>
                    <h5 className="group-hover:text-blue-500 block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {name}
                    </h5>
                    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                        {description}
                    </p>
                </div>
                {/* <div className="p-6 pt-0">
                    <a
                        className="!font-medium !text-blue-gray-900 !transition-colors hover:!text-pink-500"
                        href="#"
                    >
                        <button
                            className="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-pink-500 uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-dark="true"
                        >
                            Learn More
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="currentColor"
                                aria-hidden="true"
                                className="w-4 h-4"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                ></path>
                            </svg>
                        </button>
                    </a>
                </div> */}
            </div>
        </div>
    );
};

export default FeatureCard;