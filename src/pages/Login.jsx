import React, { useContext, useEffect, useRef } from 'react'
import { AppContext } from '../context/appContext';
import { IoMdClose } from 'react-icons/io';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
    const formRef = useRef();
    const navigate = useNavigate();
    const errorMessageRef = useRef();

    const {
        setIsLogin,
        setShowLoginPage,
        signupOrLogin,
        setSignupOrLogin,
        setUserDetailFromBackend,
        getFirstName, } = useContext(AppContext);


    useEffect(() => { // use for block scroll of the page of when login is open 
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        }
    }, []);



    const handelRegistration = async () => {
        const formData = new FormData(formRef.current);
        const data = Object.fromEntries(formData.entries());


        const { name, email, password } = data;
        // console.log(data);


        try {
            const response = await axios.post(
                '/api/user/register',
                { name, email, password },
                {
                    headers: { 'Content-Type': 'application/json' },
                }
            );

            if (response.data.success) {
                console.log('reg :', response.data.user);
                setIsLogin(true);
                setShowLoginPage(false);
                setUserDetailFromBackend(response.data.user);
                // alert(`Register Response: ${response.data.message}`);
                toast.success(response.data.message);
                setTimeout(() => {
                    toast.success(`Welcome ${getFirstName(response.data.user.name)}, you are logged in`);
                }, 1000);
                navigate('/');
            }

        } catch (err) {
            if (err.response) {
                console.log('Backend Error:', err.response.data.message);
                errorMessageRef.current.innerText = `Error : ${err.response.data.message}`;
                errorMessageRef.current.style.display = `block`;
            } else {
                console.log('Error:', err.message);
            }
        }
    };





    const handelLogin = async () => {
        const formData = new FormData(formRef.current);
        const data = Object.fromEntries(formData.entries());


        const { email, password } = data;
        // console.log(data);
        try {
            const response = await axios.post(
                '/api/user/login', // ✅ Added protocol
                {
                    email, password
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            );

            console.log('Login Response:', response.data.user);
            setIsLogin(true);
            setShowLoginPage(false);
            setUserDetailFromBackend(response.data.user);
            navigate('/');
            toast.success(response.data.message);
            setTimeout(() => {
                toast.success(`Welcome back ${getFirstName(response.data.user.name)}`);
            }, 1000);
            // console.log(getFirstName(response.data.user.name));


            return response.data;
        } catch (err) {
            if (err.response) {
                console.log('Backend Error:', err.response.data.message);
                errorMessageRef.current.innerText = `Error : ${err.response.data.message}`;
                errorMessageRef.current.style.display = `block`;

            } else {
                console.log('Error:', err.message);
            }
        }
    };


    return (
        <>
            <div className='h-screen w-full fixed left-0 top-0 z-[11] backdrop-blur-[2px] bg-[#0000008b]
                  flex justify-center items-center'>
                <div className='md:w-[450px] md:py-10 md:px-12 bg-[#ffffffed] relative flex flex-col justify-start items-center rounded-3xl'>
                    <button
                        onClick={() => setShowLoginPage(false)}
                        className='bg-white  md:p-1  rounded-full md:shadow-[2px_2px_8px_#4a4a4a72] text-black absolute top-4 right-4 cursor-pointer'><IoMdClose />
                    </button>

                    <div className='md:mb-2 font-semibold md:text-2xl '>
                        {
                            signupOrLogin
                        }
                    </div>
                    {
                        (signupOrLogin == 'Sign Up') ? <h1 className='md:mb-4'>Welcome! Please create your account</h1> : <h1 className='md:mb-4'>Welcome back! Please login</h1>
                    }

                    <form
                        ref={formRef}
                        className='w-full mb-2 border-0 flex flex-col items-center justify-center gap-6'>
                        {
                            signupOrLogin == 'Sign Up' &&
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter Your Email"
                                className="w-full px-4 py-2 md:ma text-base border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 shadow-sm hover:shadow-md"
                                required
                                onFocus={() => {
                                    errorMessageRef.current.style.display = "none";
                                }}

                            />
                        }

                        <input
                            type="email"
                            name="email"
                            placeholder="captain@email.com"
                            className="w-full px-4 py-2 text-base border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 shadow-sm hover:shadow-md"
                            required
                            onFocus={() => {
                                errorMessageRef.current.style.display = "none";
                            }}

                        />

                        <input
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            className="w-full px-4 py-2 text-base border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 shadow-sm hover:shadow-md"
                            required
                            onFocus={() => {
                                errorMessageRef.current.style.display = "none";
                            }}

                        />

                        <div ref={errorMessageRef} className='w-full px-4 py-2 text-sm text-red-700 border-l-2 border-red-500 bg-red-50 rounded-sm shadow-sm hidden'>
                        </div>

                        {
                            (signupOrLogin == 'Sign Up') ?
                                <button
                                    onClick={() => handelRegistration()}
                                    type="button"
                                    id="submitBtn"
                                    className="w-full bg-blue-600 text-white py-2 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow hover:shadow-lg active:scale-[0.98] cursor-pointer"
                                >
                                    Sign Up
                                </button>
                                :
                                <button
                                    onClick={() => handelLogin()}
                                    type="button"
                                    id="submitBtn"
                                    className="w-full bg-blue-600 text-white py-2 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow hover:shadow-lg active:scale-[0.98] cursor-pointer"
                                >
                                    Login
                                </button>
                        }

                    </form>
                    {
                        (signupOrLogin == 'Sign Up') ?
                            <h1 className='md:mt-4 select-none'>Already have an account?
                                <span onClick={() => {
                                    setSignupOrLogin('Login');
                                    errorMessageRef.current.style.display = "none";
                                }} className='ml-1 text-blue-700 cursor-pointer'>Login</span>
                            </h1>
                            :
                            <h1 className='lg:mt-4 select-none'>Don't have an account?
                                <span onClick={() => {
                                    setSignupOrLogin('Sign Up');
                                    errorMessageRef.current.style.display = "none"
                                }} className='ml-1 text-blue-700 cursor-pointer'>Sign Up</span>
                            </h1>
                    }
                </div>
            </div>
        </>
    )
}

export default Login