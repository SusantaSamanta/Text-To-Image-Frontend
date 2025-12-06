import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import { IoMdClose } from 'react-icons/io';

const SendMailPage = ({ userDetails }) => {
    // console.log('send mail : ', userDetails);

    const { setShowLoginPage, showSendMailPage, setShowSendMailPage } = useContext(AppContext);
    return (
        <>
            <div className="md:w-[450px] py-5 md:py-15 px-5 md:px-12 bg-[#ffffffed] relative flex flex-col justify-start items-center rounded-3xl border-0">
                <button
                    onClick={() => setShowSendMailPage(false)}
                    className='bg-white  md:p-1  rounded-full md:shadow-[2px_2px_8px_#4a4a4a72] text-black absolute top-4 right-4 cursor-pointer'><IoMdClose />
                </button>
                {/* Heading */}
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
                    Great, now verify your email
                </h1>

                {/* Envelope Icon */}
                <div className="mt-6 mb-6 flex items-center justify-center">
                    <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-green-100 rounded-full">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-10 h-10 text-green-600"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 
                            1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                </div>

                {/* Message */}
                <p className="text-center text-gray-600 max-w-md">
                    Check your inbox at{" "}
                    <span className="font-semibold text-gray-800">{userDetails.email}</span> and click
                    the verification link inside to complete your registration. This link
                    will expire shortly, so verify soon!
                </p>

                {/* Extra help */}
                <div className="mt-6 text-center text-gray-600">
                    <p>
                        <span className="font-semibold">Don’t see an email?</span> Check your
                        spam folder.
                    </p>
                    {/* <p className="mt-2">
                        <span className="font-semibold">Link expired?</span>{" "}
                        <a
                            href="#"
                            className="text-blue-600 hover:underline"
                        >
                            Resend verification email
                        </a>
                    </p> */}
                </div>
            </div>

        </>
    );
}

export default SendMailPage