import React from 'react';
import { averageReview } from '../../../utilites/utility';
import { Rating, Star } from '@smastrom/react-rating';

const myStyles = {
    itemShapes: Star,
    activeFillColor: '#ffb700',
    inactiveFillColor: '#fbf1a9'
}

const TopCard = ({ deliveryman }) => {
    const { name, image, parcelDelivered, reviews } = deliveryman
    const rating = averageReview(reviews)
    return (
        <div className='w-80 flex flex-col cursor-context-menu gap-5 hover: justify-center items-center p-4 shadow-xl    rounded-xl group hover:scale-110 transform ease-in-out duration-500 '>
            <div className='flex w-full justify-center '>
                <img src={image} className='w-full rounded-xl' alt="" />
            </div>
            <h1 className="group-hover:text-info text-2xl font-medium">{name} </h1>
            <p className="text-lg group-hover:animate-bounce">{parcelDelivered} Parcels delivered</p>
            <div className='flex justify-center group-hover:animate-pulse'>
                <div className='flex justify-end w-full'>
                    <Rating
                        style={{ maxWidth: 120 }}
                        value={rating}
                        readOnly
                        itemStyles={myStyles}
                    />
                </div>
            </div>


        </div>
    );
};

export default TopCard;