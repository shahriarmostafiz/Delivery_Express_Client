import useAxiosSecure from '../../../../hooks/useAxiosSecure';

import useDeliveryMan from '../../../../hooks/useDeliveryMan';

const AllDeliveryman = () => {
    const [AllDeliveryMan, isAllDeliveryPending, refetchAllDeliveryMan] = useDeliveryMan()
    if (isAllDeliveryPending) {
        return <h1>loading all deliveryMan </h1>
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
                                <td>{deliveryman?.averageReview ? deliveryman?.averageReview : "N/A"}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllDeliveryman;