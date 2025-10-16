import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext';
import { IoMdClose } from 'react-icons/io';

const Login = () => {

    const { setShowLoginPage, signupOrLogin, setSignupOrLogin } = useContext(AppContext);

    useEffect(() => { // use for block scroll of the page of when login is open 
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        }
    }, []);

    return (
        <>
            <div className='h-screen w-full fixed left-0 top-0 z-[11] backdrop-blur-[2px] bg-[#0000008b]
                  flex justify-center items-center'>
                <div className='lg:w-[400px] lg:py-[2%] lg:px-10 bg-[#ffffffed] relative flex flex-col justify-start items-center rounded-3xl'>
                    <button
                        onClick={() => setShowLoginPage(false)}
                        className='bg-white  lg:p-1  rounded-full md:shadow-[2px_2px_8px_#4a4a4a72] text-black absolute top-4 right-4 cursor-pointer'><IoMdClose />
                    </button>

                    <div className='lg:mb-2 font-semibold lg:text-2xl '>
                        {
                            signupOrLogin
                        }
                    </div>
                    {
                        (signupOrLogin == 'Sign Up') ? <h1 className='lg:mb-4'>Welcome! Please create your account</h1> : <h1 className='lg:mb-4'>Welcome back! Please login</h1>
                    }

                    <form onSubmit={(e) => e.preventDefault()}
                        className='w-full mb-2 border-0 flex flex-col items-center justify-center gap-6'>
                        {
                            signupOrLogin == 'Sign Up' &&
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter Your Email"
                                className="w-full px-4 py-2 text-base border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 shadow-sm hover:shadow-md"
                                required
                            />
                        }

                        <input
                            type="email"
                            name="email"
                            placeholder="captain@email.com"
                            className="w-full px-4 py-2 text-base border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 shadow-sm hover:shadow-md"
                            required
                        />

                        <input
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            className="w-full px-4 py-2 text-base border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 shadow-sm hover:shadow-md"
                            required
                        />

                        {
                            (signupOrLogin == 'Sign Up') ?
                                <button
                                    type="submit"
                                    id="submitBtn"
                                    className="w-full bg-blue-600 text-white py-2 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow hover:shadow-lg active:scale-[0.98] cursor-pointer"
                                >
                                    Sign Up
                                </button>
                                :
                                <button

                                    type="submit"
                                    id="submitBtn"
                                    className="w-full bg-blue-600 text-white py-2 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow hover:shadow-lg active:scale-[0.98] cursor-pointer"
                                >
                                    Login
                                </button>
                        }

                    </form>
                    {
                        (signupOrLogin == 'Sign Up') ? <h1 className='lg:mt-4'>Already have an account? <span onClick={() => setSignupOrLogin('Login')} className='text-blue-700 cursor-pointer'>Login</span></h1> : <h1 className='lg:mt-4'>Don't have an account? <span onClick={() => setSignupOrLogin('Sign Up')} className='text-blue-700 cursor-pointer'>Sign Up</span></h1>
                    }
                </div>
            </div>
        </>
    )
}

export default Login