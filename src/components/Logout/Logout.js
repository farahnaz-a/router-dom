import React from 'react'; 
import { Navigate } from 'react-router-dom';

const Logout = () => {
   
     localStorage.removeItem('id');
     return <Navigate to="/login" />
}

export default Logout;