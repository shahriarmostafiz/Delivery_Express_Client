// import React from 'react';
import useBooking from '../../../../hooks/useBooking';
import Map, { Marker } from 'react-map-gl';
// import { FaMapPin } from 'react-icons/fa';
import pin from "../../../../../public/pin.png"
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';



const Mydeliveries = () => {
    const [bookings, isLoadingBooking, refetchBooking] = useBooking()
    const axiosSecure = useAxiosSecure()
    if (isLoadingBooking) {
        return <h1>loading bookings for deliveryman </h1>
    }
    console.log(bookings);
    const handleDelivery = (id, status) => {
        console.log(id, "will be ", status);
        const info = { status: status }
        axiosSecure.put(`/bookings/update/delivery/${id}`, info)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    toast.success("product delivered")
                }
            })

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
                                    <button className="btn btn-sm" onClick={() => document.getElementById('my_modal_2').showModal()}>View Location </button>
                                    <dialog id="my_modal_2" className="modal ">
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
                                    <span className='flex gap-1'>
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