/* eslint-disable react/prop-types */
import useRole from '../hooks/useRole';
import useAuth from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';

const DeliveryRoute = ({ children }) => {
    const [userRole, isRoleLoading] = useRole()
    const { loading } = useAuth()
    const isDeliveryMan = userRole.deliveryman
    if (loading, isRoleLoading) {
        return <h1>loading delivery man ....</h1>
    }
    if (isDeliveryMan) {
        return children
    }
    return (

        <Navigate to={"/"}></Navigate>
    )

};

export default DeliveryRoute;