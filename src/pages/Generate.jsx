import React, { useRef, useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { IoSend } from "react-icons/io5";
import GenerateImgLoading from '../components/GenerateImgLoading';
import { toast } from 'react-toastify';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import { useLocation } from 'react-router-dom';
import { loadUserChats } from '../utils/auth';
import EmptyChat from '../components/EmptyChat';
import ChatLoading from '../components/ChatLoading';
import ChatImageHover from '../components/ChatImageHover';






const Generate = () => {

  const {
    userDetailFromBackend, setUserDetailFromBackend,
    imageLoading, setImageLoading,
    userChatDataArr, setUserChatDataArr,
    showByePage, setShowByePage, } = useContext(AppContext);

  const [userChatLoading, setUserChatLoading] = useState(true)
  const inputRef = useRef(null);
  const userChatRef = useRef(null);
  const userChatContainerRef = useRef(null);




  useEffect(() => {
    setTimeout(() => {
      userChatRef.current?.scrollTo({
        top: userChatRef.current.scrollHeight,
        behavior: 'auto',
      });
    }, 40);
  }, ['', userChatLoading]);
  useEffect(() => {
    setTimeout(() => {
      userChatRef.current?.scrollTo({
        top: userChatRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }, 40);
  }, [imageLoading]);



  // const [chatItemsLength, setChatItemsLength] = useState(0);

  // const userChatLength = async () => {
  //   try {
  //     const { data } = await axios.get('/api/image/count-user-chat-items');
  //     if (data.success) {
  //       setChatItemsLength(data.chatLength)
  //       console.log(chatItemsLength, data.chat);
  //     }

  //     else
  //       setChatItemsLength(0);
  //   } catch (error) {
  //     setChatItemsLength(0);
  //   }
  // }



  ///// load user chat if page reload /////


  useEffect(() => {
   
    const callLoadingChatsFun = async () => {
      const chat = await loadUserChats();
      setUserChatDataArr(chat);
      console.log(chat);

      setUserChatLoading(false);
      if (chat.length || imageLoading) {
      }
      else {
      }
    }
    callLoadingChatsFun();
  }, ['', imageLoading])




  const promptWordCountVerify = (prompt) => {
    if (!prompt || typeof prompt !== 'string') return false;
    // Split on spaces, filter out empty strings caused by multiple spaces
    const words = prompt.trim().split(/\s+/).filter(word => word.length > 0);
    return words.length >= 4;
  };



  const handelGenerateImg = async () => {
    const inputPrompt = inputRef.current.value;


    if (!promptWordCountVerify(inputPrompt)) {
      toast.warning("Please give an prompt, contain at least 4 words...!");
      return;
    }


    if (!imageLoading) {
      setImageLoading(true);


      try {
        const response = await axios.post(
          '/api/image/generate',
          { prompt: inputPrompt },
          { Headers: { 'Content-Type': 'application/json' } },
        );

        if (response.data.success) {

          setUserDetailFromBackend(response.data.user);
          console.log('back data', response.data.newImage);
          setUserChatDataArr(prev => [...prev, response.data.newImage]);

          inputRef.current.value = '';
        }
      } catch (error) {
        if (error.response) {
          if (error.response.data.case == 'credits-0') {
            setShowByePage(true)
          }
          console.log(error.response.data);
          toast.warning(error.response.data.message);
        }
      }

      setImageLoading(false);
    }

  }


  return (
    <>
      <div className='h-auto md:pt-18 lg:pt-18 border-0 bg-[url("../src/assets/home_bg.jpg")] bg-no-repeat md:bg-[0px_200px] bg-cover  relative z-0'>
        <div className='lg:h-full w-full bg-gradient-to-b from-white to-[#ffffff1f] absolute top-0 left-0 z-[1]'></div>
        <div className='md:h-[calc(100vh-71px)] lg:h-[calc(100vh-73px)] flex justify-center items-start relative z-[2] border-0'>
          <div className='h-full md:w-[90%] lg:w-[55%] flex justify-center items-start border-0'>
            <section className='h-full w-full relative border-0 flex flex-col justify-between'>
              <div className='lg:h-14 lg:px-[2%] border-0 sticky z-2 top-0 left-0 shadow-[-8px_5px_10px_10px_white] flex justify-between items-center'>
                <div className='flex flex-col'>
                  <span className='text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4550af] via-pink-500 to-orange-400'>
                    Generate Images with Ai
                  </span>
                  <Link to='/user/image' className='text-blue-600'>All images...</Link>
                </div>
                {/* <div>Try our Idea</div> */}
              </div>





              <div ref={userChatRef} style={{ scrollbarWidth: 'none' }} className='h-full lg:px-[2%] md:pt-6 border-0 overflow-y-scroll text-justify '>
                <div className="border-0 min-h-full h-auto flex flex-col justify-end items-end gap-y-8" >

                  {
                    userChatDataArr.length ?
                      userChatDataArr.map((item, i) => { // if data exist is chat arr
                        return (
                          // <div className='w-full my-2 border-0'>
                          <div className='w-full flex flex-col items-end border-0'>
                            <div className="max-w-[70%]  px-4 py-2 bg-gradient-to-r from-[rgb(57,94,255)] via-[rgba(255,96,123,0.8)] to-[#ffb120] rounded-lg rounded-br-none text-white font-semibold">
                              {item.prompt}
                            </div>
                            <div className='w-full'>
                              <div className='mt-4 md:w-60 border-0 group relative overflow-hidden'>
                                <img src={item.imageUrl} alt="user" className="w-full rounded-xl " />
                                <ChatImageHover otherData={item} />
                              </div>
                            </div>
                          </div>
                        )

                      })

                      :  // if no data exist in chat arr  

                      (
                        userChatLoading ? <ChatLoading /> : (imageLoading ? '' : <EmptyChat />)
                      )
                  }

                  {  /// this is use for loading animation of generate image 
                    imageLoading ? <GenerateImgLoading lastPrompt={inputRef.current?.value || ''} /> : ''
                  }

                </div>
              </div>






              {
                /* {
                     userChatDataArr.map((item, i) => {
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
                  ref={inputRef}
                  id="message"
                  name="message"
                  rows={3}
                  style={{ scrollbarWidth: 'none' }}
                  placeholder="Write your prompt here..."
                  className="w-full px-3 py-1 pr-20 text-base border border-gray-400 rounded-lg 
                  shadow-2xs focus:outline-none focus:ring-2 focus:ring-transparent focus:border-gray-400 
                  resize-none transition-all duration-200"/>
                <div
                  onClick={() => handelGenerateImg()}
                  className="h-10 w-10 absolute bottom-7 md:right-2 lg:right-6 flex items-center gap-2 pl-[11px] rounded-[50%]
                 text-white font-semibold  bg-gradient-to-r from-[#5662d3] via-pink-500 to-orange-200
                 shadow-[1px_3px_10px_#4a4a4a72] cursor-pointer group">
                  <IoSend className="text-xl group-hover:translate-x-[2px] transition-all duration-300" />
                </div>
              </div>
            </section>
          </div>
        </div >
      </div >
    </>
  )
}

export default Generate