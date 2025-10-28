import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { IoSend } from "react-icons/io5";

const Generate = () => {



  const userChatContent = [
    {
      prompt: 'Susanta image in side field',
      imageUrl: '../src/assets/1.jpg'
    },
    {
      prompt: 'The Tata Consultancy Services! (TCS ) is going to hire the 2023, 2024 & 2025 Year of Passing Graduates (Arts, Commerce and Science Streams,) for TCS BPS (except Computer Science and IT streams).',
      imageUrl: '../src/assets/2.jpg'
    },
    {
      prompt: 'Register and apply for the TCS BPS Hiring process. Click on ‘Register Now’, choose category as ‘BPS’,',
      imageUrl: '../src/assets/3.jpg'
    },
    {
      prompt: 'After the submission, a WhatsApp group link will come, join it . For further information follow the WhatsApp group.',
      imageUrl: '../src/assets/2.jpg'
    },
  ]

  const userChatRef = useRef(null);


  useEffect(() => {
    userChatRef.current?.scrollTo({
      top: userChatRef.current.scrollHeight,
      behavior: 'auto',
    });
  }, [userChatContent]);






  return (
    <>
      <div className='h-auto md:pt-18 lg:pt-18 border-0 bg-[url("../src/assets/home_bg.jpg")] bg-no-repeat bg-cover md:bg-[0px_300px] relative z-0'>
        <div className='lg:h-full w-full bg-gradient-to-b from-white to-[#ffffff1f] absolute top-0 left-0 z-[1]'></div>
        <div className='md:h-[calc(100vh-71px)] lg:h-[calc(100vh-73px)] flex justify-center items-start relative z-[2] border-0'>
          <div className='h-full md:w-[90%] lg:w-[55%] flex justify-center items-start border-0'>
            <section className='h-full w-full relative border-0 flex flex-col justify-between'>
              <div className='lg:h-14 lg:px-[2%] border-0 sticky top-0 left-0 shadow-[-8px_5px_10px_10px_white] flex justify-between items-center'>
                <div className='flex flex-col'>
                  <span className='text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4550af] via-pink-500 to-orange-400'>
                    Generate Images with Ai
                  </span>
                  <Link to='/user/image' className='text-blue-600'>All images...</Link>
                </div>
                {/* <div>Try our Idea</div> */}
              </div>





              <div ref={userChatRef} style={{ scrollbarWidth: 'none' }} className='h-full lg:px-[2%] border-0 overflow-y-scroll scrollbar-hide text-justify '>
                <div className="flex flex-col justify-end items-end gap-y-4" ref={userChatRef}>
                  {
                    userChatContent.map((item, i) => {
                      return (
                        // <div className='w-full my-2 border-0'>
                        <div className='w-full flex flex-col items-end border-0'>
                          <div className='w-full'>
                            <img src={item.imageUrl} alt="user" className="w-50 rounded-xl" />
                          </div>
                          <div className="max-w-[70%] mt-4 px-4 py-2 bg-gradient-to-r from-[rgb(57,94,255)] via-[rgba(255,96,123,0.8)] to-[#ffb120] rounded-lg rounded-br-none text-white font-semibold">
                            {item.prompt}
                          </div>
                        </div>
                      )

                    })
                  }
                </div>
              </div>






              {
                /* {
                     userChatContent.map((item, i) => {
                       return (
                         <div className='w-full my-2 border-0'>
                           <div>
                             <img src={item.imageUrl} className='w-30 border-1'/>
                           </div>
                           <div className='text-right border-1'>
                             {item.prompt}
                           </div>
                         </div>
                       )
   
                     })
                   } 
                   */
              }



              <div type='text' className='lg:px-[2%] py-4 relative border-0'>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  style={{ scrollbarWidth: 'none' }}
                  placeholder="Write your message here..."
                  className="w-full px-3 py-1 pr-20 text-base border border-gray-400 rounded-lg 
                  shadow-2xs focus:outline-none focus:ring-2 focus:ring-transparent focus:border-gray-400 
                  resize-none transition-all duration-200"/>
                <div className="h-10 w-10 absolute bottom-7 md:right-2 lg:right-6 flex items-center gap-2 pl-[11px] rounded-[50%]
                 text-white font-semibold  bg-gradient-to-r from-[#5662d3] via-pink-500 to-orange-200
                 shadow-[1px_3px_10px_#4a4a4a72] cursor-pointer group">
                  <IoSend className="text-xl group-hover:translate-x-[2px] transition-all duration-300" />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default Generate