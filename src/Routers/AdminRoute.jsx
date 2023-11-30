/* eslint-disable react/prop-types */

import useAuth from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';
import useRole from '../hooks/useRole';
import LoadingComponent from '../Components/LoadingComponent/LoadingComponent';

const AdminRoute = ({ children }) => {
    const [userRole, isRoleLoading] = useRole()
    const isAdmin = userRole.admin
    const { loading } = useAuth()
    if (loading || isRoleLoading) {
        return <LoadingComponent></LoadingComponent>
    }
    if (isAdmin) {
        return children
    }
    return <Navigate to={"/"}> </Navigate>
};

export default AdminRoute;