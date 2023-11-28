// import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import useDeliveryMan from '../../../../hooks/useDeliveryMan';
import useBooking from '../../../../hooks/useBooking';
import toast from 'react-hot-toast';

const AllParcels = () => {
    const axiosSecure = useAxiosSecure()
    const [AllDeliveryMan, isAllDeliveryPending, refetchAllDeliveryMan] = useDeliveryMan()
    // const [deliveryManId,setDeliveryManId] = useState("")
    // const { data: bookings = [], isPending: isLoadingBooking, refetch: refetchBooking } = useQuery({
    //     queryKey: ["allbookings"],
    //     queryFn: async () => {
    //         const res = await axiosSecure.get("/allBooking")
    //         return res.data
    //     }

    // })
    const [bookings, isLoadingBooking, refetchBooking] = useBooking()

    if (isLoadingBooking || isAllDeliveryPending) {
        return <h1>All parcels are loading..</h1>
    }
    console.log(bookings);

    const handleParcel = (e, id) => {
        e.preventDefault()
        const form = e.target
        const aprxDelivery = form.aprxDelivery.value
        const deliverymanId = form.deliverymanId.value
        console.log(aprxDelivery, deliverymanId, id);
        const updateParceInfo = {
            status: "on the way",
            deliverymanId,
            // deliverymanId
            aprxDelivery,
        }
        // console.log(updateParceInfo);
        axiosSecure.put(`/bookings/update/admin/${id}`, updateParceInfo)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    toast.success("Updated info ")
                    refetchBooking()
                }
            })
    }
    return (
        <div className='w-full'>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Phone </th>
                            <th> Booked on </th>
                            <th>  Requested Delivery Date  </th>
                            <th>  Cost   </th>
                            <th>  Status    </th>
                            <th>  Manage    </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings?.map((parcel, idx) =>
                                <tr key={parcel._id}>
                                    <th>{idx + 1}</th>
                                    <td>{parcel?.name}</td>
                                    <td>{parcel?.phone}</td>
                                    <td>{parcel?.bookingDate}</td>
                                    <td>{parcel?.requestedDate}</td>
                                    <td>{parcel?.price}</td>
                                    <td>{parcel?.status}</td>
                                    <td>
                                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                                        <button className="btn" onClick={() => document.getElementById(parcel._id).showModal()}>Manage </button>
                                        <dialog id={parcel._id} className="modal">
                                            <div className="modal-box">
                                                <form onSubmit={(e) => handleParcel(e, parcel._id)} className='flex flex-col items-center'>
                                                    {/* <select onChange={(e) => setDeliveryManId(e.target.value)} className="select select-info w-full max-w-xs"> */}
                                                    <select name='deliverymanId' className="select select-info w-full max-w-xs" required >

                                                        <option disabled selected>Select delivery Man </option>
                                                        {
                                                            AllDeliveryMan?.map(deliveryMan =>
                                                                <option value={deliveryMan._id} key={deliveryMan._id}>{deliveryMan._id}</option>)
                                                        }

                                                    </select>
                                                    <div className='my-2 w-full text-center'>
                                                        <input type="date" name="aprxDelivery" id=""
                                                            className='input input-bordered input-info w-full max-w-xs'
                                                            required />
                                                    </div>
                                                    <button className='btn btn-info text-white ' type='submit'>Update </button>


                                                </form>

                                                <div className="modal-action">
                                                    <form method="dialog">
                                                        {/* if there is a button in form, it will close the modal */}
                                                        <button className="btn">Close</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </dialog>
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

export default AllParcels;