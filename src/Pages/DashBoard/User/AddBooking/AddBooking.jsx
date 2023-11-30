import React, { useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import Sectiontitle from '../../../../Components/Title/Sectiontitle';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import useUserInfo from '../../../../hooks/useUserInfo';
import LoadingComponent from '../../../../Components/LoadingComponent/LoadingComponent';
/** form fileds 
 * Name(Auto filled from the logged in user, read-only)x
● Email(Auto filled from the logged in user, read-only)x
● Phone Numberx
● Parcel Type(Text Field)x
● Parcel Weight (Number Field)x
● Receiver’s Namex
● Receiver's Phone Numberx
● Parcel Delivery Addressx
● Requested Delivery Date(Date Input)x
● Delivery Address Latitude (i.e 21.121365496)
● Delivery Address longitude (i.e 21.121365496)
● Price(Auto Calculated from the Parcel Weight Input. For 1 kg Price
is 50Tk, for 2 kg 100Tk, more than 2kg price will be 150Tk)
 * */

const AddBooking = () => {
    const [price, setPrice] = useState(0)
    // const [weight, setWeight] = useState(0)
    const axiosSecure = useAxiosSecure()



    const { user } = useAuth()
    const [userInfo, isUserInfoLoading, reloadUserInfo] = useUserInfo()
    if (isUserInfoLoading) {
        return <LoadingComponent />
    }
    console.log("userinfo", userInfo);
    // userInfo.bookingCount
    const handlePrice = e => {
        const weight = e.target.value
        setPrice(50 * weight)
        console.log(weight);
    }
    const handleBooking = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const price = form.price.value
        const email = form.email.value
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
            name,
            price,
            email,
            phone,
            type,
            weight,
            reciever,
            recieverPhone,
            address,
            requestedDate: date,
            latitude,
            longitude,
            status: "pending",
            bookingDate: new Date()
        }

        console.log(bookingdata);
        axiosSecure.post("/addBooking", bookingdata)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    axiosSecure.put(`/users/update/${userInfo._id}`, { bookingCount: parseInt(userInfo?.bookingCount) + 1 })
                        .then(res => {
                            if (res.data.modifiedCount > 0) {
                                toast.success("Parcel Booked")
                                reloadUserInfo()
                            }
                        })
                }
            })
            .catch(err => {
                console.log(err.message);
            })

    }
    console.log(price);
    return (
        <div className='w-full bg-gradient-to-br from-blue-500 via-teal-400 to-red-300'>
            <Sectiontitle dashboard={true} heading={"Effortless Parcel Booking"} subHeading={"Simplified Steps for Secure Shipments"}></Sectiontitle>
            <div className='px-6 w-full'>
                <form onSubmit={handleBooking}>
                    {/* name  */}
                    <div className='md:flex gap-4 w-full '>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>


                            <input type="textl" name='name' defaultValue={user?.displayName} placeholder="email" className="input input-bordered input-info w-full" readOnly />

                        </div>

                    </div>
                    {/* email phone */}
                    <div className="md:flex gap-4 w-full">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' defaultValue={user?.email} className="input input-bordered input-info w-full" readOnly />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Phone No </span>
                            </label>
                            <input type="text" placeholder="Phone No" name='phone' className="input input-bordered input-info w-full" />
                        </div>
                    </div>
                    {/*  */}
                    {/* type and weight  */}
                    <div className="md:flex gap-4 w-full">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Parcel  Type </span>
                            </label>
                            <input type="text" placeholder="Type" name='type' className="input input-bordered input-info w-full" required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Parcel  Weight in KG  </span>
                            </label>
                            <input
                                onChange={handlePrice}
                                type="number" min={0} step={.5} name='weight' placeholder="Weight in KG" className="input input-bordered input-info w-full" required />
                        </div>

                    </div>
                    {/* reciever info  */}
                    <div className='md:flex gap-4 w-full'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Recievers Name</span>
                            </label>
                            <input type="text" placeholder="Reciever" name='reciever' className="input input-bordered input-info w-full" required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Recievers Phone Number </span>
                            </label>
                            <input type="text" placeholder="Recievers Phone" name="recieverPhone" className="input input-bordered input-info w-full" required />
                        </div>
                    </div>
                    {/* delivery address and date  */}
                    <div className='md:flex gap-4 w-full'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Delivery Address  </span>
                            </label>
                            <input type="text" placeholder="Delivery Adress" name='address' className="input input-bordered input-info w-full" required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Delivery by </span>
                            </label>
                            <input type="date" placeholder="Date " name='date' className="input input-bordered input-info w-full" required />
                        </div>


                    </div>
                    {/* delivery longitude and lattitude  */}
                    <div className='md:flex gap-4 w-full'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Delivery Latitude </span>
                            </label>
                            <input type="text" placeholder="Latitude" name="latitude" className="input input-bordered input-info w-full" required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Delivery  Longitude </span>
                            </label>
                            <input type="text" placeholder=" Longitude" name="longitude" className="input input-bordered input-info w-full" required />
                        </div>
                    </div>
                    <div className='w-full form-control'>
                        <label className="label">
                            <span className="label-text"> Price </span>
                        </label>
                        <input type="number" name='price' value={price} className='input input-bordered input-info w-full' readOnly />
                    </div>
                    <div className='my-4 text-center'>
                        <button
                            type='submit'
                            className='btn btn-info btn-wide text-white'
                        > Add A booking </button>
                    </div>


                </form>
            </div>



        </div>
    );
};

export default AddBooking;