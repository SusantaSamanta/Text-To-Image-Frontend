import React, { useContext } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";

export default function VerifyEmailPage() {


  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const status = searchParams.get("status");
  const email = searchParams.get("email");

  const isSuccess = status === "success";

  const { showLoginPage, setShowLoginPage,
    signupOrLogin, setSignupOrLogin, } = useContext(AppContext);

  const handelShowLogin = () => {
    setShowLoginPage(true);
    setSignupOrLogin('Login');
    navigate('/')
  }
  const handelShowSignup = () => {
    toast.warning('Sorry this feature not working, please register again to send verification email....!')
    setShowLoginPage(true);
    setSignupOrLogin('Sign Up');
    navigate('/')
  }





  return (
    <>
      <div className='h-screen w-full bg-gradient-to-b from-[#ffffff] to-[#ffffff10] fixed top-0 left-0 z-[2]'></div>
      <div className='h-screen w-full bg-[url("../src/assets/home_bg.jpg")] bg-no-repeat md:bg-[0px_100px] bg-cover fixed left-0 top-0 z-[1]'></div>
      <div className="border-0 min-h-screen flex flex-col items-center justify-center px-4 relative z-[4]">
        {/* Card */}
        <div className="bg-[#ffffff85] shadow-lg rounded-2xl p-6 md:p-10 max-w-lg w-full text-center border-0 ">
          {/* Icon */}
          {isSuccess ? (
            <div className="mx-auto mb-6 flex items-center justify-center w-20 h-20 bg-green-100 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          ) : (
            <div className="mx-auto mb-6 flex items-center justify-center w-20 h-20 bg-red-100 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          )}

          {/* Title */}
          <h1
            className={`text-2xl md:text-3xl font-bold ${isSuccess ? "text-green-700" : "text-red-700"
              }`}
          >
            {isSuccess
              ? "Email Verified Successfully!"
              : "Verification Failed"}
          </h1>

          {/* Message */}
          <p className="mt-4 text-gray-600">
            {isSuccess ? (
              <>
                Your email{" "}
                <span className="font-semibold text-gray-800">{email}</span> has
                been verified. You can now log in to your account.
              </>
            ) : (
              "The verification link is invalid or expired. Please try again."
            )}
          </p>

          {/* Action Button */}
          <div className="mt-6">
            {isSuccess ? (
              <button onClick={() => handelShowLogin()}
                href="/login"
                className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg shadow hover:bg-green-700 transition"
              >
                Go to Login
              </button>
            ) : (
              <button onClick={() => handelShowSignup()}
                href="/resend-verification"
                className="inline-block bg-red-600 text-white px-6 py-2 rounded-lg shadow hover:bg-red-700 transition"
              >
                Resend Verification Email
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
