import useAxiosSecure from '../../../../hooks/useAxiosSecure';

import useDeliveryMan from '../../../../hooks/useDeliveryMan';

const AllDeliveryman = () => {
    const [AllDeliveryMan, isAllDeliveryPending, refetchAllDeliveryMan] = useDeliveryMan()
    if (isAllDeliveryPending) {
        return <h1>loading all deliveryMan </h1>
    }
    console.log(AllDeliveryMan);
    return (
        <div>

        </div>
    );
};

export default AllDeliveryman;