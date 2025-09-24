import React from 'react'
import { Routes, Route } from 'react-router-dom';


import Home from './pages/Home';
import Generate from './pages/Generate';
import ByeCredit from './pages/ByeCredit';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <div className='px-4 lg:px-32 border-1 min-h-screen bg-gradient-to-b from-cyan-50 to-blue-100'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/generate' element={<Generate />}/>
          <Route path='/bye' element={<ByeCredit />}/>
        </Routes>
      </div>
    </>
  )
}

export default App;

