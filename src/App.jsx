import React from 'react'
import { Routes, Route } from 'react-router-dom';


import Home from './pages/Home';
import Generate from './pages/Generate';
import ByeCredit from './pages/ByeCredit';
import Navbar from './components/Navbar';
import Login from './pages/Login';

const App = () => {
  return (
    <>
      <div className='border-0 h-auto '>  {/*min-h-screen px-4 lg:px-32  give for each */}
        <Navbar/>
        {/* <Login/> */}
        <ByeCredit/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/generate' element={<Generate />}/>
          {/* <Route path='/bye' element={<ByeCredit />}/> */}
        </Routes>
        {/* <footer></footer> */}
      </div>
    </>
  )
}

export default App;

