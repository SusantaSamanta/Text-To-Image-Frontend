import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom';


import { ToastContainer } from 'react-toastify';

import Home from './pages/Home';
import Generate from './pages/Generate';
import ByeCredit from './pages/ByeCredit';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import { AppContext } from './context/AppContext';
import ProtectRoute from './routes/ProtectRoute';
import Community from './pages/Community';
import SendMailPage from './components/SendMailPage';
import VerifyEmailPage from './pages/VerifyEmailPage';
import Footer from './components/Footer';

const App = () => {
  const { showByePage, showLoginPage } = useContext(AppContext)

  return (
    <>
      <div className='border-0 h-auto '>
        <ToastContainer
          position="top-center"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        // transition={Bounce}
        />
        <Navbar />
        {showLoginPage && <Login />}
        {showByePage && <ByeCredit /> /* if showByePage = true then show or not */}

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/community' element={<Community />} />
          {/* <Route path='/verify' element={<SendMailPage userDetails={{email: 'susanta'}}/>} /> */}
          <Route path='/verify-email' element={<VerifyEmailPage />} />
          <Route path='/generate' element={
            <ProtectRoute>
              <Generate />
            </ProtectRoute>
          } />
        </Routes>



      </div>
    </>
  )
}

export default App;

