// import Confetti from "react-confetti/dist/types/Confetti";
import Confetti from 'react-confetti'

// import useWindowSize from 'react-use/lib/useWindowSize'



const PaymentCompleted = () => {
    // const { width, height } = useWindowSize()
    return (
        <div className='w-full'>
            <Confetti

            />
            <div className=' w-full min-h-screen flex justify-center items-center'>
                <h1 className='w-full text-3xl font-medium text-info text-center'>Payment Completed </h1>
            </div>
        </div>
    );
};

export default PaymentCompleted;