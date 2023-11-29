import React, { useEffect, useState } from 'react';
import useBooking from '../../../../hooks/useBooking';
import useAuth from '../../../../hooks/useAuth';
import Sectiontitle from '../../../../Components/Title/Sectiontitle';
import GiveReview from '../../../../Components/GiveReview/GiveReview';
import { Rating } from '@smastrom/react-rating';

import '@smastrom/react-rating/style.css'
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import auth from '../../../../Firebase/firebase.config';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const MyParcels = () => {
    const { user, loading } = useAuth()
    // const [myFilter, setFilter] = useState("")
    // console.log(myFilter);

    const [bookings, isLoadingBooking, refetchBooking] = useBooking()
    // const { data: bookings, isPending: isLoadingBooking, refetch: refetchBooking } = useQuery({
    //     queryKey: ["Userbookings"],
    //     queryFn: async () => {
    //         const res = await axiosSecure.get(`/bookings/${user?.email}/user?myfilter=${myFilter}`)
    //         // return res.data
    //     }


    // })
    // const [rating, setRating] = useState(3);
    // const handleFilter = e => {
    //     const selectedValue = e.target.value
    //     setFilter(selectedValue)
    //     // console.log();
    //     refetchBooking()
    // }
    // const [myBookings, setMyBooking] = useState([])
    const axiosSecure = useAxiosSecure()
    console.log(bookings);
    if (isLoadingBooking || loading) {
        return <h1>loading parcels ... </h1>
    }
    // // let myBookings = []


    // if (myFilter === "all") {

    //     setMyBooking(bookings)

    // }
    // else if (myFilter === "on the way") {
    //     const result = bookings.filter(booking => booking.status === "on the way")
    //     setMyBooking(result)
    // }
    // else if (myFilter === "delivered") {
    //     const result = bookings.filter(booking => booking.status === "delivered")
    //     setMyBooking(result)
    // }
    // else if (myFilter === "pending") {
    //     const result = bookings.filter(booking => booking.status === "pending")
    //     setMyBooking(result)

    // }

    // else if (myFilter === "cancelled") {
    //     const result = bookings.filter(booking => booking.status === "cancelled")
    //     setMyBooking(result)

    // }


    const handleCancel = (id) => {
        axiosSecure.put(`/bookings/update/user/${id}`, { status: "cancelled" })
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    toast.error("booking was cancelled ")
                }
            })
    }
    // const handleUpdate = id => {
    //     console.log(id, `will be updated soon `)
    // }
    const handlePay = id => {
        console.log(id, `will be paid soon `)
    }
    const handleReview = (e, booking) => {
        e.preventDefault()
        // console.log(booking);
        const form = e.target
        const rating = form.rating.value ? parseInt(form.rating.value) : 3
        const reviewText = form.reviewText.value


        const info = {
            user: booking.name,
            userImage: auth?.currentUser?.photoURL,
            reviewDate: new Date(),
            rating,
            reviewText,
            bookingId: booking._id

        }
        console.log(info);
        axiosSecure.put(`/review/${booking.deliverymanId}`, info)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    toast.success("review posted")
                }
            })

    }

    // console.log(bookings);

    return (
        <div className='w-full lg:px-4'>
            <Sectiontitle heading={"My Parcels"} ></Sectiontitle>
            <div className="overflow-x-auto w-full">
                {/* <div className='flex gap-4'>
                    <label>Filter by:  </label>
                    <select value={myFilter} onChange={handleFilter}>
                        <option value="">-select--</option>
                        <option value="all">ALL</option>
                        <option value="on the way">On the Way</option>
                        <option value="pending">Pending</option>
                        <option value="delivered">Delivered</option>
                        <option value="cancelled">Cancelled</option>




                    </select>
                </div> */}
                <table className="table  w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Type </th>
                            <th>Booking Date  </th>
                            <th>Requested Delivery </th>
                            <th>Aprx. Delivery</th>
                            <th>Status </th>
                            <th>Delivery Man</th>
                            <th>Actions </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings?.map((booking, idx) => <tr key={booking._id}>
                                <th>{idx + 1}</th>
                                <td> {booking.type}</td>
                                <td> {booking.bookingDate}</td>
                                <td>{booking.requestedDate}</td>
                                <td>{booking?.aprxDelivery ? booking.aprxDelivery : "N/A"}</td>
                                <td>{booking.status}</td>
                                {/* to be added by admin  */}
                                <td>{booking?.deliverymanId}</td>
                                <td>
                                    {
                                        booking.status === "delivered" ?
                                            <span className='flex gap-2 '>
                                                <Link to={`/dashboard/payment/${booking._id}`}
                                                    className={`  btn btn-xs mx-2 btn-warning`}>Pay   </Link>

                                                <span>
                                                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                                    <button className="btn btn-xs btn-info" onClick={() => document.getElementById(idx).showModal()}>Review </button>
                                                    <dialog id={idx} className="modal modal-bottom sm:modal-middle">
                                                        <div className="modal-box min-h-[400px] ">
                                                            <div className='flex justify-center'>
                                                                <form className='space-y-2 flex flex-col  justify-center' onSubmit={(e) => handleReview(e, booking)}
                                                                >
                                                                    <div className=" ">
                                                                        <img src={auth?.currentUser?.photoURL} className="rounded-2xl w-8 " alt="" />
                                                                        <p className='text-xl font-medium'>{auth?.currentUser?.displayName}</p>
                                                                    </div>

                                                                    <input type="text" name='reviewText' placeholder="Type your review here" className="input input-bordered input-info w-full max-w-xs" />
                                                                    <select defaultValue={""} name='rating' className="select select-bordered w-full max-w-xs">
                                                                        <option disabled value="" >Rating out of 5</option>
                                                                        <option value={5}>5</option>
                                                                        <option value={4}>4</option>
                                                                        <option value={3}>3</option>
                                                                        <option value={2}>2</option>
                                                                        <option value={1}>1</option>

                                                                    </select>
                                                                    <button type='submit' className='btn btn-wide btn-info'>Submit Your Review</button>

                                                                </form>
                                                            </div>

                                                            <div className="modal-action">
                                                                <form method="dialog">
                                                                    {/* if there is a button in form, it will close the modal */}
                                                                    <button className="btn">Close</button>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </dialog>
                                                </span>
                                            </span> : <span>
                                                {
                                                    booking.status === "pending" ? <span>

                                                        <button onClick={() => {
                                                            handleCancel(booking._id)
                                                        }}
                                                            className={` btn btn-xs mx-2 btn-error`}>Cancel </button>
                                                        <Link to={`/dashboard/updateBooking/${booking._id}`}

                                                            className={` btn  btn-xs btn-warning`}

                                                        >Update  </Link>
                                                    </span> : "Parcel is On the way"
                                                }


                                            </span>
                                    }



                                </td>

                            </tr>
                            )
                        }
                        {/* row 1 */}


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyParcels;