
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import loadingAir from '../assets/loading.gif'
import { AuthContext } from "../Provider/AuthProvider";
const PrivateRoutes = ({children}) => {

    const {user, loading} = useContext(AuthContext)
    const location = useLocation();
    console.log(location, location.pathname)

    if(loading){
        return <>
        <div className=" md:w-1/3 w-full h-screen  mx-auto">
        <div className="flex h-screen justify-center items-center">
        <img className="w-full" src={loadingAir} alt="" />
        </div>
        </div>
        </>
    }
    if(!user){
        return <Navigate state={location?.pathname || '/'} to={'/login'}></Navigate>
    }
    return children;
};

PrivateRoutes.propTypes = {
    children: PropTypes.node,
}


export default PrivateRoutes;