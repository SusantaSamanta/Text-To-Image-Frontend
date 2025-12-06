import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";

const Community = () => {

  const [publicImageArr, setPublicImageArr] = useState([]);
  const publicImageArrCopy = useRef([]);
  const imagesLoading = useRef(true);

  let widthArrForImages = useRef([]);

  if (window.innerWidth >= 1024) {
    widthArrForImages.current = [ // 12, 4*3
      26, 21, 28, 25,
      25, 26, 21, 28,
      28, 21, 25, 26,
      21, 25, 26, 28,
    ]
  } else if (window.innerWidth >= 764) {
    widthArrForImages.current = [ // 12 3*4
      35, 30, 34,
      34, 35, 30,
      35, 30, 34,
      30, 34, 35,
      // 35, 30, 34,
      // 30, 35, 34,
      // 30, 35, 34
    ]
  }



  const pageArrGen = (totalElement) => { // get total number of public images from '/api/image/count-public-images'
    const numberOfPages = parseInt(totalElement / 12); // consider : 3 = 36/12 
    let pageArr = [];
    for (let i = 0; i < numberOfPages; i++) {    // generate an array length 3 => [0, 1, 2]  
      pageArr[i] = i + 1;
    }
    for (let i = numberOfPages - 1; i > 0; i--) {  // Shuffle this array length 3 => like [2,0,1]
      let j = Math.floor(Math.random() * (i + 1));
      let t = pageArr[i];
      pageArr[i] = pageArr[j];
      pageArr[j] = t;
    }
    return pageArr;
  }



  let randomArrOfPages = useRef([]);   //Store Shuffle array => [2,0,1]
  let pagesInd = useRef(0);


  const countPublicImages = async () => { // get the number of public images in DB
    try {
      const { data } = await axios.get('/api/image/count-public-images');
      if (data.success) {
        randomArrOfPages.current = pageArrGen(data.numberOfPublicImages);
        // localArrIndex.current = randomArrOfPages.current.length - randomArrOfPages.current.length;
        imagesLoading.current = true;
        await fetchPublicImages();
      } else {  /// give an other static array if backend not response
        console.log('public image not count');
      }
    } catch (error) { // give an other static array if backend not response
      console.log('public image not count', error);
    }

  }

  const fetchPublicImages = async () => {  // depending on this Shuffle array [2, 0, 1] get request with page 
    try {
      const { data } = await axios.get(`/api/image/send-public-images?page=${randomArrOfPages.current[pagesInd.current]}&limit=${12}`); // 1st time get the page of Shuffle arr[pagesInd]  which is  0
      if (data.success) {
        setPublicImageArr(prev => [...prev, ...data.publicImages]); // 1st time empty arr get 12 data and  
        publicImageArrCopy.current = [...publicImageArrCopy.current, ...data.publicImages];
        console.log('data', data.publicImages);
        pagesInd.current = pagesInd.current + 1; // after receiving data of one page increment 
        imagesLoading.current = false;

        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }

  }





  useEffect(() => {
    setPublicImageArr([]);
    publicImageArrCopy.current = [];
    pagesInd.current = 0;

    countPublicImages();
  }, [])


  const localImageLoading = useRef(false);

  const handelLoadingImages = async () => {
    try {
      if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) { // user scroll to end 

        if (imagesLoading.current) { // if true return
          console.log('wait image are loading ');
          return
        } // else => 


        if (randomArrOfPages.current.length) { // 
          if (randomArrOfPages.current.length > pagesInd.current) { // Shuffle array length 3>0, 3>1, 3>2, fetchPublicImages() will call gating Back data      console.log('manipulate', randomArrOfPages.current.length, '>', pagesInd.current);

            imagesLoading.current = true;
            await fetchPublicImages();


          } else {

            if (!localImageLoading.current) {
              localImageLoading.current = true;   // load images from local error 
              await showLocalArrayImage();
            }

          }

        } else {
          console.log('Count images is not give any data');//

        }
      }

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handelLoadingImages) // this event function will execute when user scroll 
  }, [])


  const localArrIndex = useRef(0);
  const showLocalArrayImageCount = useRef(0);


  const funWait = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, 3000);
    })
  }


  const showLocalArrayImage = async () => {

    if (showLocalArrayImageCount.current == randomArrOfPages.current.length) {
      showLocalArrayImageCount.current = 0;
      localArrIndex.current = 0;
    }
    await funWait()
    const first12 = publicImageArrCopy.current.slice(localArrIndex.current, localArrIndex.current + 12);
    // console.log(first12);

    setPublicImageArr(prev => [...prev, ...first12]); // 1st time empty arr get 12 data and  
    localArrIndex.current = localArrIndex.current + 12;
    showLocalArrayImageCount.current = showLocalArrayImageCount.current + 1;
    localImageLoading.current = false;
  }





  // const { userChatDataArr, setUserChatDataArr } = useContext(AppContext);
  let widthArrIndex = -1;
  let widthArrIndexForLoading = -1;
  return (
    <>
      <div className='h-screen w-full bg-gradient-to-b from-[#ffffff] to-[#ffffff10] fixed top-0 left-0 z-[2]'></div>
      <div className='h-screen w-full bg-[url("../src/assets/home_bg.jpg")] bg-no-repeat md:bg-[0px_100px] bg-cover fixed left-0 top-0 z-[1]'></div>

      {
        <div className="lg:px-20 md:pt-20  flex flex-col justify-center items-center relative top-0 left-0 z-[3] border-0">
          <div className="border-0 md:w-[90%] lg:max-w-[1000px] ">
            <h1 className="border-0 w-full md:mb-8 md:pl-2 md:text-3xl font-bold text-left ">Explore Ideas like this</h1>
            <div className="flex flex-wrap border-0 justify-start items-center md:mb-8 ">


              {
                publicImageArr.map((item, i) => {
                  widthArrIndex = (widthArrIndex == 11) ? 0 : widthArrIndex + 1

                  return (
                    <div className="border-0 h-50 md:h-60 lg:h-55 text-xl md:p-2  " style={{ width: `${widthArrForImages.current[widthArrIndex]}%` }}>
                      <div
                        className="h-full border-0 bg-no-repeat bg-center bg-cover rounded-lg shadow-[1px_1px_5px_1px_#3030306a] hover:shadow-[2px_2px_8px_3px_#3030306a]"
                        style={{
                          backgroundImage: `url("${item.imageUrl}")`,
                        }}
                      >{item._id.slice(-3)}</div>

                    </div>
                  )
                })
              }
              {
                Array(8).fill(1).map((item, i) => {
                  widthArrIndexForLoading = (widthArrIndexForLoading == 11) ? 0 : widthArrIndexForLoading + 1
                  return (
                    <div className="border-0 h-50 w-[25%] md:h-60 lg:h-55 text-xl md:p-2  " style={{ width: `${widthArrForImages.current[widthArrIndexForLoading]}%` }}>
                      <div
                        className="h-full rounded-2xl bg-gradient-to-l from-[#e0e0e08e] via-[#ffffffa5] to-[#e0e0e08e] shimmer shadow-[1px_1px_8px_#30303044] opacity-50"
                      ></div>

                    </div>
                  )
                })
              }
            </div>

          </div>

          <style>
            {
              `
              .shimmer {
                background-size: 200% 100%;
                animation: shimmer 1.8s infinite linear;
                }
                @keyframes shimmer {
                  0% {
                    background-position: -200% 0;
                  }
                  100% {
                    background-position: 200% 0;
                  }
                }
            `
            }
          </style>
        </div>
      }





    </>
  );
};

export default Community;
