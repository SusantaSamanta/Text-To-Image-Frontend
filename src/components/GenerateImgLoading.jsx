import React from 'react'

const GenerateImgLoading = ({ lastPrompt }) => {
  return (
    <>

      <div className='w-full flex flex-col items-end border-0'>
        <div className="max-w-[70%] px-4 py-2 bg-gradient-to-r from-[rgb(57,94,255)] via-[rgba(255,96,123,0.8)] to-[#ffb120] rounded-lg rounded-br-none text-white font-semibold">
          {lastPrompt}
        </div>
        <div className='w-full'>
          {/* <img src='../src/assets/1.jpg' alt="user" className="w-50 rounded-xl" /> */}
          <div className="md:h-60 md:w-60  mt-4 rounded-xl border-1 border-[#aaaaaa9c] md:opacity-45 bg-gradient-to-l from-[#afafaf9c] via-[#f0f0f09a] to-[#afafaf9c] shimmer flex items-center justify-center">
            <img src='../src/assets/loading.svg' className='border-0 mt-8 ml-7 opacity-75'/>
          </div>
        </div>
      </div>


      {/* This is for loading animation  */}
      <style>
        { `
            .shimmer {

              background-size: 200% 100%;
              animation: shimmer 1.5s infinite linear;
            }
            @keyframes shimmer {
              0% {
                background-position: -200% 0;
              }
              100% {
                background-position: 200% 0;
              }
            }
        `}
      </style>

      <style>

        {



        }

      </style>


    </>
  )
}

export default GenerateImgLoading