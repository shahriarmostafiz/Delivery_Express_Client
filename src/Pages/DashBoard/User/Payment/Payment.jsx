import React from 'react';
import Sectiontitle from '../../../../Components/Title/Sectiontitle';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
// todo here : add pk
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE)
const Payment = () => {
    const { id } = useParams()

    const axiosSecure = useAxiosSecure()
    const { data: ourbooking, isPending: isOurbookingPending, refetch: refetchOurBooking } = useQuery({
        queryKey: ["updatebooking"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/bookings/booking/${id}`)
            return res.data
        }
    })
    if (isOurbookingPending) {
        return <h1>loading data  </h1>
    }
    console.log(ourbooking);

    return (
        <div className='w-full px-4'>
            <Sectiontitle heading={"Secure and Seamless Payments"} subHeading={"Effortless Transactions for a Hassle-Free Experience"}></Sectiontitle>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm data={ourbooking}></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;