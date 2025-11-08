import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext'
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
// import Login from '../pages/Login';

const ProtectRoute = (props) => {
    const { isLogin, setShowLoginPage } = useContext(AppContext);

    
    useEffect(() => {  
      if(!isLogin){
        setShowLoginPage(true);
        toast.warning('Login require to use this page!')
      }
    }, [])
    return (
        isLogin? props.children : <Navigate to={'/'} replace/>
  )
}

export default ProtectRoute