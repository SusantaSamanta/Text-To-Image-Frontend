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
      flex justify-center items-center'>
        <div className='lg:w-[800px] lg:p-[4%] bg-[#ffffffed] relative flex flex-col justify-start items-center rounded-3xl'>
          <button
            onClick={() => setShowByePage(false)}
            className='bg-white lg:text-xl lg:p-1  rounded-full md:shadow-[2px_2px_8px_#4a4a4a72] text-black absolute top-4 right-4 cursor-pointer'><IoMdClose />
          </button>
          <div className='w-full lg:mb-15 border-0'>
            <span className='px-3 lg:px-6 py-2 bg-blue-400 hover:bg-blue-500 md:shadow-[4px_4px_6px_#4a4a4a72] text-white md:text-xl font-semibold  rounded-2xl'>Your Credits :
              {
                (userDetailFromBackend &&
                  ` ${userDetailFromBackend.credits}`
                )
              }
            </span>
          </div>
          <div className='font-semibold lg:text-2xl lg:mb-15'>
            Close Our Plains
          </div>
          <div className='w-full lg:px-0 grid lg:grid-cols-3 gap-8 border-0'>
            {
              pricePlainDataArr.map((item, i) => {
                return (
                  <div className='border-0 lg:p-5 shadow-[2px_2px_8px_#dadadae1] bg-white rounded-xl hover:shadow-[4px_4px_10px_4px_#dadadae1] duration-100 ease-in-out'>
                    {item.type}
                    <p className='text-[12px] mb-2'>{item.for}</p>
                    <p className='text-[12px]'><span className='lg:mr-1 font-semibold lg:text-xl'>{item.price}</span>{item.credit}</p>
                    <button className='mt-8 mx-auto block px-5 cursor-pointer hover:scale-[1.02] py-1 rounded-sm  bg-black text-white '>Get Started</button>
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