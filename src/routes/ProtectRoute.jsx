import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/appContext'
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import PageLoading from '../components/PageLoading';
// import Login from '../pages/Login';

const ProtectRoute = (props) => {
  const { isLogin, setShowLoginPage, isLoading, setIsLoading } = useContext(AppContext);


  useEffect(() => {
    if (!isLogin && !isLoading) {
      setShowLoginPage(true);
      toast.warning('Login require to use this page!')
    }
  }, []);

  if (isLoading) return <div className='h-screen flex justify-center items-center'><PageLoading/></div>;
  return isLogin ? props.children : <Navigate to="/" replace />;
}

export default ProtectRoute