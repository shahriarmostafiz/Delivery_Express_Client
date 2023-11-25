import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation()
    if (loading) {
        return <h1>loading...</h1>
    }
    if (user) {
        return children
    }
    // return <Navigate to={"/login"} replace></Navigate>

    return <Navigate state={{ from: location }} to={"/login"} replace></Navigate>
};

export default PrivateRoute;