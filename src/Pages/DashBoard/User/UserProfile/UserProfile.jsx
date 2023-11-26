import React from 'react';
import useUserInfo from '../../../../hooks/useUserInfo';
import useAuth from '../../../../hooks/useAuth';
import { useForm } from "react-hook-form"
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';
const imageKey = import.meta.env.VITE_IMAGE_HOSTING_KEY
const imageApi = `https://api.imgbb.com/1/upload?key=${imageKey}`


const UserProfile = () => {
    const { user, loading, update, setLoading } = useAuth()
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()

    const [userInfo, isUserInfoLoading, reloadUserInfo] = useUserInfo()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    if (isUserInfoLoading || loading) {
        return <h1>loading.. </h1>
    }
    const { _id, name, role, image, email, phone } = userInfo

    const onSubmit = async (data) => {
        console.log(data)
        const uploadedImage = data.image[0]
        const image = { image: uploadedImage }
        const res = await axiosPublic.post(imageApi, image, {
            headers: {
                "Content-Type": 'multipart/form-data'
            }
        })
        if (res.data.success) {
            toast.success("uploaded to server")
            const newImage = {
                image: res.data.data.display_url
            }
            const userRes = await axiosSecure.put(`/users/updatePhoto/${_id}`, newImage)
            if (userRes.data.modifiedCount > 0) {
                update(name, newImage.image)
                    .then(() => {
                        setLoading(false)
                        toast.success("Picture Updated")
                        reloadUserInfo()
                    })
                // alert("data added")


            }
        }
    }




    // todo add a loading spinner 

    console.log(userInfo);
    // todo 
    // user info ke refetch korbo jkhn role change hobe
    /**
     * "_id": "6561b62ad37fab26e8d03e2d",
    "name": "shahriar",
    "email": "mostafizshahriar19@gmail.com",
    "role": "user",
    "image": "https://i.ibb.co/yfRrkwy/user11.jpg",
    "__v": 0,
    "phone": "12345678"
     * **/




    return (
        <div className='lg:px-8 py-6 flex  justify-between w-full bg-blue-50'>

            {/* info here  */}
            <div className='flex-1 w-full'>
                {/* name Role */}

                <h1 className='text-2xl font-medium underline '> About </h1>
                <div className="flex w-full mb-5">
                    {/* name  */}
                    <div className='w-full '>
                        <label className="label text-lg">
                            <span className=" underline">Name</span>
                        </label>
                        <h2 className='px-1 text-lg'>{name} </h2>
                    </div>
                    {/* role  */}
                    <div className='w-full'>
                        <label className="label text-lg">
                            <span className=" underline ">Role </span>
                        </label>
                        <h2 className='px-1 text-lg '>{role} </h2>

                    </div>
                </div>
                {/* email phone */}

                <h1 className='text-xl font-medium underline'> Contact  </h1>
                <div className="flex w-full">
                    {/* email */}
                    <div className='w-full'>
                        <label className="label text-lg">
                            <span className=" underline">Email</span>
                        </label>
                        <h2 className='px-1 text-lg '>{email} </h2>
                    </div>
                    {/* phone */}
                    <div className='w-full'>
                        <label className="label text-lg">
                            <span className=" underline">Phone </span>
                        </label>
                        <h2 className='px-1 text-lg'>{phone} </h2>

                    </div>
                </div>
            </div>
            {/* image here  */}
            <div className=' flex flex-col  space-y-5'>
                <img src={image} className='w-64 rounded-xl' alt="" />

                <form onSubmit={handleSubmit(onSubmit)} className='w-full space-y-4 '>
                    <input
                        {...register("image", { required: true })}
                        type="file" id=""
                        className="file-input file-input-bordered file-input-info w-full max-w-xs" />

                    <button type='submit' className='btn btn-info'>UpDate Profile Picture </button>
                </form>

            </div>

        </div>
    );
};

export default UserProfile;