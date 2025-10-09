import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import '../style/Navbar.css'
import { AppContext } from '../context/AppContext'
const Navbar = () => {

    const { isLogin } = useContext(AppContext); // import from AppContext.jsx
    const { setShowByePage, setShowLoginPage } = useContext(AppContext); //    ''     for show bye page  on credit button 

    return (
        <>
            <div id='navbarStyle' className='w-full py-3 md:px-8 lg:px-32 border-0  flex justify-between fixed left-0 top-0 bg-[#ffffffb8] backdrop-blur-sm z-10'>
                <Link to='/' className='border-0 flex items-center w-auto'>
                    <img className='border-0 md:scale-[0.9] lg:scale-[1.3]' src='../app_logo.png' />
                </Link>
                <div className='border-0 w-auto flex  justify-center items-center font-semibold '>
                    <Link to='/community' className='mr-2 lg:mr-4 text-gray-700 border-b-2 border-transparent hover:border-gray-500 transition duration-300'>Community</Link>
                    {
                        isLogin ?

                            <div className='border-0 w-auto flex items-center gap-2 lg:gap-4 text-gray-700'>
                                <Link to='/generate' className=' border-b-2 border-transparent hover:border-black transition duration-200'>Generate</Link>
                                <button  // to show byeCredit page using AddContext.showByePage
                                    className='px-3 lg:px-6 py-2 bg-blue-400 hover:bg-blue-500 shadow-[2px_2px_6px_#4a4a4a72] text-white rounded-2xl'
                                    onClick={() => setShowByePage(true)}>
                                    <p className='md:hidden lg:block'>Credits left : 10</p>
                                    <p className='md:block lg:hidden'>Credits : 10</p>
                                </button>
                                <Link to='/profile' className='flex items-center'>
                                    <p className='md:hidden lg:inline-block'>Hi, Susanta</p>
                                    <div className='lg:ml-2 h-10 w-10 flex items-center justify-center shadow-[1px_3px_10px_#4a4a4a72] bg-blue-500 text-white rounded-full border-2 relative group'>
                                        <p className='text-2xl font-light uppercase ' style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>s</p>
                                        <div className='h-15 border-0 border-black absolute hidden group-hover:block top-5 right-0 '>
                                            <ul className='h-full flex items-end justify-center'>
                                                <li className='py-1 px-2 bg-white  border-1 border-gray-300 rounded-lg shadow-[1px_3px_10px_#4a4a4a72] text-black font-semibold'><Link to="/logout">Logout</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </Link>

                            </div>

                            :

                            <div className='border-0 flex items-center gap-2 lg:gap-4 text-gray-700'>
                                <Link to='/generate' className=' border-b-2 border-transparent hover:border-gray-500 transition duration-300'>Generate</Link>
                                <Link onClick={() => setShowLoginPage(true)} className='px-6 py-2 bg-black hover:bg-blue-900 text-white rounded-2xl transition duration-300'>Login</Link>
                            </div>

                    }
                </div>
            </div >
        </>
    );
}

export default Navbar