
import Sectiontitle from "../../../Components/Title/Sectiontitle";
import team from "../../../assets/team.jpg"
import cardboard from "../../../assets/cardboard.jpg"

const AboutUs = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Sectiontitle heading={"Our Story"} subHeading={'Why you should trust us'}></Sectiontitle>
            <div className='flex items-center flex-col md:flex-row  gap-4 md:gap-6 my-16 ' >
                <div className='relative w-5/6 md:w-3/5'>
                    <img src={team} alt="" className='w-full md:w-4/5 rounded-lg' />
                    <img src={cardboard} className='w-1/3 border-8 hidden md:flex  rounded-lg  md:absolute -right-2 -bottom-12 ' alt="" />
                </div>
                <div className="w-full p-4 md:w-2/5 ">
                    <h1>
                        Founded in 2023, Delivery Express is your premier destination for swift and reliable package delivery services. Committed to redefining the delivery experience, we leverage cutting-edge technology and maintain a customer-centric approach. Our dedicated team ensures timely and secure deliveries, whether local or nationwide. At Delivery Express, environmental sustainability is a priority, reflected in our fuel-efficient delivery fleet and ongoing efforts to adopt eco-friendly packaging solutions. Choose Delivery Express for a seamless, efficient, and environmentally responsible delivery experience that exceeds expectations with every package.
                    </h1>
                </div>
            </div>
        </div>
        // <div className='lg:max-w-6xl lg:mx-auto px-4'>
        //     <div className="flex w-full flex-col md:flex-row justify-between ">
        //         {/* image section  */}
        //         <div className='flex-1  p-4'>

        //             <img src={team} className='w-4/5' alt="Pic not found" />

        //         </div>
        //         <div>
        //             <h1>
        //                 Founded in 2023, Delivery Express is your premier destination for swift and reliable package delivery services. Committed to redefining the delivery experience, we leverage cutting-edge technology and maintain a customer-centric approach. Our dedicated team ensures timely and secure deliveries, whether local or nationwide. At Delivery Express, environmental sustainability is a priority, reflected in our fuel-efficient delivery fleet and ongoing efforts to adopt eco-friendly packaging solutions. Choose Delivery Express for a seamless, efficient, and environmentally responsible delivery experience that exceeds expectations with every package.
        //             </h1>
        //         </div>
        //         {/* text section  */}
        //     </div>
        // </div>
    );
};

export default AboutUs;