import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../style/Navbar.css'
const Navbar = () => {
    const [isLogin, setIsLogin] = useState(true);
    return (
        <>
            <div id='navbarStyle' className='border-0 py-4 flex justify-between'>

                <Link to='/' className='border-0 flex items-center w-auto'>
                    <img className='' src='./app_logo.png' />
                    <h1 className='font-bold text-2xl w-auto'>Vision Brush</h1>
                </Link>
                <div className='border-0 w-auto flex flex-col justify-center items-center font-semibold '>
                    {
                        isLogin ?

                            <div className='border-0 w-auto flex items-center gap-5 text-gray-700'>
                                <Link to='/generate' className=' border-b-2 border-transparent hover:border-black transition duration-200'>Generate</Link>
                                <Link to='/generate' className='px-6 py-2 bg-blue-400 hover:bg-blue-500 text-white rounded-2xl'>Credits left: 10</Link>
                                <Link to='/profile' className='flex items-center'>
                                    <p>Hi, Susanta</p>
                                    <div className='ml-2 h-10 w-10 flex items-center justify-center bg-blue-500 text-white rounded-full border-2 relative group'>
                                        <p className='text-2xl font-light uppercase' style={{fontFamily: 'Arial, Helvetica, sans-serif'}}>s</p>
                                        <div className='h-15 border-0 border-black absolute hidden group-hover:block top-5 right-0 '>
                                            <ul className='h-full flex items-end justify-center'>
                                                <li className='py-1 px-2 bg-white  border-1 border-gray-400 rounded-lg text-black font-semibold'><Link to="/logout">Logout</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </Link>

                            </div>

                            :

                            <div>
                                <Link to='/login'>Login</Link>
                                <Link to='/login'>Login</Link>
                            </div>

                    }
                </div>
            </div >
        </>
    );
}

export default Navbar