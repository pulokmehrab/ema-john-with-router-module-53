import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../components/Context/UserContext';

const PrivateRoutes = ({children}) => {
    
        const {user,loading}= useContext(AuthContext);
        let location =useLocation();
        if(loading){
            return <div>..loading</div>
        }

       if(user && user.uid){
        return children;
       }
       return <Navigate to='/login' state={{from: location}} replace ></Navigate>


    
};

export default PrivateRoutes;