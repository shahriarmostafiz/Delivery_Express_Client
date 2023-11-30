import React from 'react';
import bannerCycle from '../../../assets/bannerCycle.png'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()
    const navigate = useNavigate()
    const onSubmit = (data) => {
        console.log(data)
        if (data.place) {
            return navigate(`/search/${data.place}`)
        }
    }
    return (
        <div className='flex flex-col-reverse lg:flex-row-reverse items-center gap-6'>
            <div className='flex-1  flex flex-col justify-center items-center'>
                {/* banner text here  */}

                <div className="hidden md:flex md:flex-col md:gap-5 w-full     max-w-lg space-y-4 text" data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    <h1 className="text-5xl w-full font-bold text-blue-500">

                        Express: Where Speed Meets Reliability
                    </h1>
                    <h4 className='text-gray-700'>
                        Trust in Express for lightning-fast deliveries without compromising on reliability. Your packages are in safe hands
                    </h4>


                </div>
                <div className='mt-5'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            {...register("place", {
                                required: true
                            })}
                            type="text" placeholder='Enter your Area' className='input input-bordered input-info' />
                        <button type='submit' className='btn ml-4 btn-info btn-outline'>Search</button>
                        {errors.place?.type === "required" && <span className="py-2 pl-4 text-red-500">Area is required</span>}

                    </form>
                </div>
            </div>
            <div className='flex-1  relative pb-40 md:pb-6' data-aos="fade-fade-up"
                data-aos-easing="linear"
                data-aos-duration="1000">
                <img src={bannerCycle} alt="" />
                <div className="absolute z-10 bottom-20 pl-5   md:hidden max-w-lg  text" data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    <h1 className="text-5xl font-bold text-blue-500">

                        Express: Where Speed Meets Reliability
                    </h1>
                    {/* <h4 className='text-gray-700 mt-40'>
                        Trust in Express for lightning-fast deliveries without compromising on reliability. Your packages are in safe hands
                    </h4> */}
                </div>
            </div>
        </div>
    );
};

export default Banner;