// import React from 'react';
import useBooking from '../../../../hooks/useBooking';
import Map, { Marker } from 'react-map-gl';
// import { FaMapPin } from 'react-icons/fa';
import pin from "../../../../../public/pin.png"
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import useUserInfo from '../../../../hooks/useUserInfo';



const Mydeliveries = () => {
    const [bookings, isLoadingBooking, refetchBooking] = useBooking()
    const [userInfo, isUserInfoLoading, reloadUserInfo] = useUserInfo()
    const axiosSecure = useAxiosSecure()
    if (isLoadingBooking || isUserInfoLoading) {
        return <h1>loading all data  for deliveryman </h1>
    }
    console.log(userInfo);

    console.log(bookings);
    // const handleDelivery = (id, status) => {

    // }
    const handleDelivery = (id, status) => {
        console.log(id, "will be ", status);
        const info = {
            status: status,
        }

        if (status === "delivered") {
            info.parcelDelivered = parseInt(userInfo?.parcelDelivered) + 1;
            info.deliverymanId = userInfo?._id
        }
        console.log(info);
        // console.log(deliverymanInfo);
        axiosSecure.put(`/bookings/update/delivery/${id}`, info)
            .then(res => {
                console.log(res.data);
                refetchBooking()
                reloadUserInfo()
            })
        //             refetchBooking()
        //             if (status === "delivered") {
        //                 axiosSecure.put(`/users/update/${userInfo._id}`, deliverymanInfo)
        //                     .then(res => {
        //                         if (res.data.modifiedCount > 0) {
        //                             toast.success("profile updated")
        //                             reloadUserInfo()
        //                         }

        //                     })
        //             }


        //         }
        //     })

    }
    return (
        <div className='w-full px-2'>
            <div className="overflow-x-auto w-full">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>User </th>
                            <th>User Phone </th>
                            <th>Reciever </th>
                            <th>Reciever Phone </th>
                            <th>Requested Delivery  </th>

                            <th>Approximate Delivery</th>
                            <th>Reciever Address</th>
                            <th> Location </th>
                            <th> Action  </th>


                        </tr>
                    </thead>
                    <tbody>

                        {/* row 1 */}{
                            bookings?.map((delivery, idx) => <tr key={delivery._id}>
                                <th>{idx + 1}</th>
                                <td>{delivery.name}</td>
                                <td>{delivery.phone}</td>
                                <td>{delivery.reciever}</td>
                                <td>{delivery.recieverPhone}</td>
                                <td>{delivery.requestedDate}</td>
                                <td>{delivery.aprxDelivery}</td>
                                <td>{delivery.address}</td>

                                <td>
                                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                                    <button className="btn btn-sm" onClick={() => document.getElementById(idx).showModal()}>View Location </button>
                                    <dialog id={idx} className="modal ">
                                        <div className="modal-box w-full min-h-[500px] items-center flex justify-center lg:max-w-3xl md:max-w-lg max-w-sm overflow-hidden">
                                            <Map
                                                mapLib={import('mapbox-gl')}
                                                mapboxAccessToken='pk.eyJ1Ijoic2hhaHJpYXItMTkiLCJhIjoiY2xwaDFxejM3MDJkZDJqbWhzcWxrYWRnaSJ9.is_gWfAce1wa5wJPbdiIMA'
                                                initialViewState={{
                                                    longitude: parseFloat(delivery.longitude),
                                                    latitude: parseFloat(delivery.latitude),
                                                    zoom: 4
                                                }}
                                                style={{ width: 600, height: 400 }}
                                                mapStyle="mapbox://styles/mapbox/streets-v9"
                                            >
                                                <Marker longitude={parseFloat(delivery.longitude)} latitude={parseFloat(delivery.latitude)} anchor="bottom" >
                                                    <img src={pin} width={"12px"}></img>
                                                </Marker>
                                            </Map>
                                        </div>
                                        <form method="dialog" className="modal-backdrop">
                                            <button>close</button>
                                        </form>
                                    </dialog>
                                </td>
                                <td>
                                    {
                                        delivery.status === "delivered" ?

                                            <span className='text-info font-bold'>
                                                Delivered
                                            </span>
                                            : delivery.status === "cancelled" ?
                                                <span className='text-red font-bold'>
                                                    Cancelled
                                                </span>
                                                : <span className='flex gap-1'>
                                                    <button
                                                        onClick={() => {
                                                            handleDelivery(delivery._id, "cancelled")
                                                        }}
                                                        className='btn btn-error text-white btn-sm '
                                                    >Cancel</button>
                                                    <button
                                                        onClick={() => {
                                                            handleDelivery(delivery._id, "delivered")
                                                        }}
                                                        className='btn btn-success text-white btn-sm '
                                                    >Deliver</button>
                                                </span>

                                    }
                                </td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            {/* {
                bookings?.map(delivery=>)
            } */}
        </div>
    );
};

export default Mydeliveries;