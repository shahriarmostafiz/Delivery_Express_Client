import DashboardFooter from '../../../../Components/DashBoardFoodter/DashboardFooter';
import LoadingComponent from '../../../../Components/LoadingComponent/LoadingComponent';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

import useDeliveryMan from '../../../../hooks/useDeliveryMan';
import { averageReview } from '../../../../utilites/utility';

const AllDeliveryman = () => {
    const [AllDeliveryMan, isAllDeliveryPending, refetchAllDeliveryMan] = useDeliveryMan()
    if (isAllDeliveryPending) {
        return <LoadingComponent />
    }
    console.log(AllDeliveryMan);
    return (
        <div className='w-full'>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name </th>
                            <th>Phone  </th>
                            <th>No of Parcel Delivered</th>
                            <th>Average Review </th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            AllDeliveryMan?.map((deliveryman, idx) => <tr key={deliveryman._id}>
                                <th>{idx + 1}</th>
                                <td>{deliveryman.name}</td>
                                <td>{deliveryman.phone}</td>
                                <td>{deliveryman?.parcelDelivered ? deliveryman?.parcelDelivered : 0}</td>
                                <td>{deliveryman?.reviews ? averageReview(deliveryman?.reviews) : "N/A"}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            <DashboardFooter></DashboardFooter>
        </div>
    );
};

export default AllDeliveryman;