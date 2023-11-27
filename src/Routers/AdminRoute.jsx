/* eslint-disable react/prop-types */

import useAuth from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';
import useRole from '../hooks/useRole';

const AdminRoute = ({ children }) => {
    const [userRole, isRoleLoading] = useRole()
    const isAdmin = userRole.admin
    const { loading } = useAuth()
    if (loading || isRoleLoading) {
        return <h1>loading admin ....</h1>
    }
    if (isAdmin) {
        return children
    }
    return <Navigate to={"/"}> </Navigate>
};

export default AdminRoute;