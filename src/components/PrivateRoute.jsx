import { Navigate, useLocation } from "react-router-dom";
import Loading from "./Loading";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContextComponent";


const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();
    // console.log(location,'private route');
    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        return children
    }
    else {
        return <Navigate state={location.pathname} to={'/login'}></Navigate>

    }
};

export default PrivateRoute;