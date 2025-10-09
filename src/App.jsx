import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom';


import Home from './pages/Home';
import Generate from './pages/Generate';
import ByeCredit from './pages/ByeCredit';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import { AppContext } from './context/AppContext';

const App = () => {
  const { showByePage, showLoginPage } = useContext(AppContext)

  return (
    <>
      <div className='border-0 h-auto '>
        <Navbar />
        {
          showLoginPage && <Login />
        }
        {
          showByePage && <ByeCredit /> // if showByePage = true then show or not 
        }
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/generate' element={<Generate />} />
        </Routes>
        {/* <footer></footer> */}
      </div>
    </>
  )
}

export default App;

