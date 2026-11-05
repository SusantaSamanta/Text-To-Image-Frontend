import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext'
import { pricePlainDataArr } from '../assets/priceData';
import { IoMdClose } from 'react-icons/io';

const ByeCredit = () => {


  const { setShowByePage, userDetailFromBackend } = useContext(AppContext);

  useEffect(() => { // use for block scroll of the page of when bayCredit is open 
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    }
  }, []);


  return (
    <>
      <div className='h-screen w-full fixed left-0 top-0 z-[11] backdrop-blur-[2px] bg-[#0000008b]
      flex justify-center item-end sm:items-center overflow-y-auto sm:px-4'>
        <div className='w-full max-w-[800px] p-6 md:p-8  bg-[#ffffffed] relative flex flex-col justify-start items-center sm:rounded-3xl'>
          <button
            onClick={() => setShowByePage(false)}
            className='bg-white text-lg p-1 lg:text-xl rounded-full md:shadow-[2px_2px_8px_#4a4a4a72] text-black absolute top-4 right-4 cursor-pointer'><IoMdClose />
          </button>
          <div className='w-full mb-6 sm:mb-15 border-0'>
            <span className='inline-block px-3 lg:px-6 py-2 bg-blue-400 hover:bg-blue-500 md:shadow-[4px_4px_6px_#4a4a4a72] text-white text-base md:text-xl font-semibold  rounded-2xl'>Your Credits :
              {
                (userDetailFromBackend &&
                  ` ${userDetailFromBackend.credits}`
                )
              }
            </span>
          </div>
          <div className='font-semibold text-lg md:text-xl lg:text-2xl mb-4 sm:mb-15 text-center'>
            Close Our Plains
          </div>
          <div className='w-full lg:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 border-0'>
            {
              pricePlainDataArr.map((item, i) => {
                return (
                  <div className='border-0 p-4 lg:p-5 shadow-[2px_2px_8px_#dadadae1] bg-white rounded-xl hover:shadow-[4px_4px_10px_4px_#dadadae1] duration-100 ease-in-out'>
                    {item.type}
                    <p className='text-[12px] mb-2'>{item.for}</p>
                    <p className='text-[12px]'><span className='lg:mr-1 font-semibold lg:text-xl'>{item.price}</span>{item.credit}</p>
                    <button className='w-full mt-8 mx-auto block px-5 cursor-pointer hover:scale-[1.02] py-1 rounded-md  bg-black text-white '>Get Started</button>
                  </div>
                )
              })
            }
          </div>

        </div>
      </div >
    </>

  )
}

export default ByeCredit