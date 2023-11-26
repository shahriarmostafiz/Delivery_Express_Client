import React from 'react';
import useBooking from '../../../../hooks/useBooking';
import useAuth from '../../../../hooks/useAuth';
import Sectiontitle from '../../../../Components/Title/Sectiontitle';
/**
 * Parcel Type,
● Requested Delivery Date,
● Approximate Delivery Date,
● Booking Date(Auto Generated by new Date())
● Delivery Men ID(this property will be updated when Admin
Assigns a Delivery Men),
● Booking Status(There will be pending, on the way, delivered,
returned, cancelled statuses) ,
● Update and Cancel Button.
● Review Button- If the parcel status is delivered, show a review
button.(See Bonus Point 2 For The Additional Guideline)
● Pay Button(See Bonus Point 3 Fo
    response 
 *  "_id": "65630030d46983f799ba43ee",
        "name": "Shahriar Mostafiz",
        "price": "100",
        "email": "shahriarmostafiz19@gmail.com",
        "phone": "1111111",
        "type": "Gadgets",
        "weight": "2",
        "reciever": "Turjo",
        "recieverPhone": "1111111",
        "address": "abc,dhaka,bangladesh",
        "date": "2023-11-28",
        "latitude": "21.121365496",
        "longitude": "21.121365496",
        "status": "pending"
 * **/
const MyParcels = () => {
    const { user, loading } = useAuth()
    const [bookings, isLoadingBooking] = useBooking()
    if (isLoadingBooking || loading) {
        return <h1>loading... </h1>
    }

    const handleCancel = (id) => {
        console.log(id, "will be cancelled soon ");
    }
    const handleUpdate = id => {
        console.log(id, `will be updated soon `)
    }
    const handlePay = id => {
        console.log(id, `will be paid soon `)
    }
    const handleReview = id => {
        console.log(id, `will be reviewed soon `)
    }

    console.log(bookings);

    return (
        <div className='w-full lg:px-4'>
            <Sectiontitle heading={"My Parcels"} ></Sectiontitle>
            <div className="overflow-x-auto w-full">
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
                                <td>{booking.deliveryman ? booking.deliverymanId : "To be assigned"}</td>
                                <td>
                                    <button onClick={() => {
                                        handleCancel(booking._id)
                                    }}
                                        className={` btn ${booking?.status === "delivered" && "hidden"} btn-xs mx-2 btn-error`}>Cancel </button>
                                    <button onClick={() => {
                                        handleUpdate(booking._id)
                                    }}
                                        className={` btn ${booking?.status === "delivered" && "hidden"} btn-xs btn-warning`}

                                    >Update  </button>
                                    <button onClick={() => {
                                        handlePay(booking._id)
                                    }} className={` hidden ${booking?.status === "delivered" && "flex"} btn btn-xs mx-2 btn-warning`}>Pay   </button>
                                    <button onClick={() => {
                                        handleReview(booking._id)
                                    }} className={` hidden ${booking?.status === "delivered" && "flex"} btn  btn-xs  btn-warning`}>Review</button>

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