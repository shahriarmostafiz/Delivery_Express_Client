/* eslint-disable react/prop-types */
import { Rating } from '@smastrom/react-rating';
import React from 'react';

const ReviewCard = ({ review }) => {
    const { user, userImage, rating, reviewText } = review
    return (
        <div>
            <div className="relative flex w-full max-w-[26rem] h-60 flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-lg px-6 py-3">
                <div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
                    <img
                        src={userImage}
                        alt="user image"
                        className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
                    />
                    <div className="flex w-full flex-col gap-0.5">
                        <div className="flex items-center justify-between">
                            <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                {user}
                            </h5>
                            <div className="flex items-center gap-0 5">


                                <div className='flex justify-end w-full'>
                                    <Rating
                                        style={{ maxWidth: 120 }}
                                        value={rating}
                                        readOnly
                                    />
                                </div>

                            </div>
                        </div>
                        <p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
                            User @ Express Delivery
                        </p>
                    </div>
                </div>
                <div className="p-0 mb-6">
                    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                        {reviewText}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;