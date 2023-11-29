/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
// import React from 'react';

const CheckoutForm = ({ data }) => {
    const stripe = useStripe()
    const [payError, setPayError] = useState("")
    const elements = useElements()
    const navigate = useNavigate()

    const axiosSecure = useAxiosSecure()
    const price = data.price
    const [clientSecret, setClientSecret] = useState()

    const [trxId, setTrxId] = useState("")
    useEffect(() => {
        if (price > 0) {
            axiosSecure.post("/create-payment-intent", { price: price })
                .then(res => {
                    console.log(res.data);
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [axiosSecure, price])
    const handlePayment = async (e) => {

        e.preventDefault()


        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement)
        if (card === null) {
            return
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card
        })
        if (error) {
            console.log("payment error", error);
            setPayError(error.message)

        }
        else {
            console.log("payment method", paymentMethod);
            setPayError("")
        }


        // confirm payment

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: data?.name || "anonymous",
                    email: data?.email || "anonymous"
                }

            }
        })
        if (confirmError) {
            console.log("confirm error ", confirmError);
        }
        else {
            console.log("paymentIntent", paymentIntent);
            if (paymentIntent.status === "succeeded") {
                toast.success("payment completed")
                setTrxId(paymentIntent.id)
                return navigate("/dashboard/paymentCompleted")
                // todo update the status of the booking
            }
        }
    }
    return (
        <div>
            <form onSubmit={handlePayment}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-wide btn-info text-white my-6' type="submit" disabled={!stripe || !clientSecret}>
                    Pay {data?.price}
                </button>
                <p className='text-red-600 font-semibold '>{payError}</p>
                {
                    trxId && <p className='text-info'> your trxId {trxId}</p>
                }
            </form>
        </div>
    );
};

export default CheckoutForm;