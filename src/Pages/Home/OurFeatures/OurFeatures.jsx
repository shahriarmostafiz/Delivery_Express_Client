import Sectiontitle from '../../../Components/Title/Sectiontitle';
import FeatureCard from './FeatureCard';

const ourFeatures = [
    {
        feature_id: 1,
        name: "Secure Packaging",
        imageLink: "https://i.ibb.co/kQ7PtKC/package.png",
        description: "We prioritize the safety of your packages, ensuring they reach their destination securely."
    }, {
        feature_id: 2,
        name: "Affordable Pricing",
        imageLink: "https://i.ibb.co/JxLNZ4V/low-cost.png",
        description: "Experience cost-effective deliveries with our affordable pricing options, ensuring you get the best value for your shipping needs."
    },
    {
        feature_id: 3,
        name: "Speedy Delivery",
        imageLink: "https://i.ibb.co/BzkqT72/express-delivery-1.png",
        description: "Swift and efficient delivery service, ensuring your packages reach their destination in record time."
    }
]

const OurFeatures = () => {


    return (
        <div>
            <Sectiontitle
                heading={"Our Feautres"}
                subHeading={"Efficient solutions that redefine parcel delivery."
                }
            ></Sectiontitle>
            <div className='flex justify-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-3 lg:gap-6 '>
                    {
                        ourFeatures?.map(feature => <FeatureCard key={feature.feature_id} feature={feature}></FeatureCard>)
                    }

                </div>
            </div>

        </div>
    );
};

export default OurFeatures;