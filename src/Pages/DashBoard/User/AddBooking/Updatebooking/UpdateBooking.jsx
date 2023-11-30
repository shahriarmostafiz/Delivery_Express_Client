import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import useAxiosSecure from '../../../../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import LoadingComponent from '../../../../../Components/LoadingComponent/LoadingComponent';

const UpdateBooking = () => {
    const { id } = useParams()
    const axiosSecure = useAxiosSecure()

    const { data: ourbooking, isPending: isOurbookingPending, refetch: refetchOurBooking } = useQuery({
        queryKey: ["updatebooking"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/bookings/booking/${id}`)
            return res.data
        }
    })
    const [price, setPrice] = useState(ourbooking?.price || 0)

    if (isOurbookingPending) {
        return <LoadingComponent></LoadingComponent>
    }

    console.log(ourbooking);


    const handlePrice = e => {
        const weight = e.target.value
        setPrice(50 * weight)
        // console.log(weight);
    }
    const handleBookingUpdate = e => {
        e.preventDefault()
        const form = e.target
        const cost = price ? price : ourbooking.price
        const phone = form.phone.value
        const type = form.type.value
        const weight = form.weight.value
        const reciever = form.reciever.value
        const recieverPhone = form.recieverPhone.value
        const address = form.address.value
        const date = form.date.value
        const latitude = form.latitude.value
        const longitude = form.longitude.value
        const bookingdata = {
            price: cost,
            phone,
            type,
            weight,
            reciever,
            recieverPhone,
            address,
            requestedDate: date,
            latitude,
            longitude,
            updateDate: new Date()
        }
        console.log(bookingdata);
        axiosSecure.put(`/bookings/update/user/${id}`, bookingdata)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    toast.success(" booking updated")
                    refetchOurBooking()
                }
            })

    }
    console.log(id);
    return (

        <div className='w-full px-4'>
            <form onSubmit={handleBookingUpdate}>
                {/* name  */}
                <div className='md:flex gap-4 w-full '>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>


                        <input type="textl" name='name' defaultValue={ourbooking.name} placeholder="email" className="input input-bordered input-info w-full" readOnly />

                    </div>

                </div>
                {/* email phone */}
                <div className="md:flex gap-4 w-full">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name='email' defaultValue={ourbooking.email} className="input input-bordered input-info w-full" readOnly />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Phone No </span>
                        </label>
                        <input type="text" placeholder="Phone No" name='phone' defaultValue={ourbooking.phone} className="input input-bordered input-info w-full" />
                    </div>
                </div>
                {/*  */}
                {/* type and weight  */}
                <div className="md:flex gap-4 w-full">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Parcel  Type </span>
                        </label>
                        <input type="text" placeholder="Type" name='type' defaultValue={ourbooking.type} className="input input-bordered input-info w-full" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Parcel  Weight in KG  </span>
                        </label>
                        <input
                            onChange={handlePrice}
                            type="number" min={0.25} step={.25} name='weight' defaultValue={ourbooking.weight} placeholder="Weight in KG" className="input input-bordered input-info w-full" required />
                    </div>

                </div>
                {/* reciever info  */}
                <div className='md:flex gap-4 w-full'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Recievers Name</span>
                        </label>
                        <input type="text" placeholder="Reciever" name='reciever' defaultValue={ourbooking.reciever} className="input input-bordered input-info w-full" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Recievers Phone Number </span>
                        </label>
                        <input type="text" placeholder="Recievers Phone" name="recieverPhone" defaultValue={ourbooking.recieverPhone} className="input input-bordered input-info w-full" required />
                    </div>
                </div>
                {/* delivery address and date  */}
                <div className='md:flex gap-4 w-full'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Delivery Address  </span>
                        </label>
                        <input type="text" placeholder="Delivery Adress" name='address' defaultValue={ourbooking?.address} className="input input-bordered input-info w-full" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Delivery by </span>
                        </label>
                        <input type="date" placeholder="Date " name='date' defaultValue={ourbooking.requestedDate} className="input input-bordered input-info w-full" required />
                    </div>


                </div>
                {/* delivery longitude and lattitude  */}
                <div className='md:flex gap-4 w-full'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Delivery Latitude </span>
                        </label>
                        <input type="text" placeholder="Latitude" name="latitude" defaultValue={ourbooking.latitude} className="input input-bordered input-info w-full" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Delivery  Longitude </span>
                        </label>
                        <input type="text" placeholder=" Longitude" name="longitude" defaultValue={ourbooking.longitude} className="input input-bordered input-info w-full" required />
                    </div>
                </div>
                <div className='w-full flex justify-center my-2'>
                    <h1 className="text-xl font-bold w-fit px-4 py-2 border border-info rounded-lg"> Cost: {price ? price : ourbooking?.price}</h1>

                    {/* <input type="number" name='price' value={price} className='input input-bordered input-info w-full' readOnly /> */}
                </div>
                <div className='my-4 text-center'>
                    <button
                        type='submit'
                        className='btn btn-info btn-wide text-white'
                    > Add A booking </button>
                </div>


            </form>

        </div>
    );
};

export default UpdateBooking;