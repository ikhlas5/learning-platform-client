import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthorContext } from '../ContextProvider/AuthContext';

const PrivetRoute = ({children}) => {
    // const {user} = useContext(AuthorContext)
    // const location = useLocation();
    const {user} = useContext(AuthorContext);
    const location = useLocation();
     
     
    if(!user){
        return <Navigate to='/login' state ={{from : location}} replace></Navigate>
       }
       else{
        return children;
       }
    
};

export default PrivetRoute;