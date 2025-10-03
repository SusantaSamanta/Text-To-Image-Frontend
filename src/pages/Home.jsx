import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return ( 
        <>
            <div className='border-0 lg:h-auto lg:mb-5 lg:pb-35  lg:pt-20 bg-[url("../src/assets/home_bg.jpg")] bg-no-repeat bg-cover relative z-0'>
                <div className='lg:h-full w-full bg-gradient-to-b from-white to-[#ffffff1f] absolute top-0 left-0 z-[1]'></div>
                <div className='z-[2] border-0 lg:mt-16 relative flex flex-col justify-center items-center gap-y-6 '>
                    <div className='border-0 flex flex-col justify-center items-center gap-y-2 text-5xl font-semibold' >
                        <h1>Generate <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#5662d3] via-pink-500 to-orange-300'>Images</span></h1>
                        <h1>with Text Input, in Seconds</h1>
                    </div>
                    <h1 className='lg:w-[800px] text-center text-xl '>
                        Transform your ideas into artistic masterpieces using the power of Al. Describe your vision with text, and see it rendered in stunning detail.
                    </h1>
                    <Link to={'/generate'}>
                        <button class="px-6 py-3 bg-gradient-to-r from-[#5662d3] via-pink-500 to-orange-300 text-white 
                        text-base lg:text-xl font-bold rounded-2xl lg:shadow-[5px_5px_10px_#4a4a4a72] hover:bg-blue-700 
                        hover:shadow-lg hover:scale-[1.05] hover:lg:lg:shadow-[5px_5px_10px_#4a4a4a72]  transition-all duration-200 ease-in-out">
                            Generate Image
                            <img className='lg:w-[30px] border-0 inline' src='../src/assets/ai_star.png' />
                        </button>
                    </Link>
                </div>
                {/* <div className='border-0 lg:mt-20 text-6xl flex items-center justify-center gap-x-2 relative z-[2]'>
                    {
                        Array(8).fill(1).map((item, i) => {
                            return <img src={`../src/assets/${Math.floor(Math.random() * (4 - 1 + 1)) + 1}.jpg`} className='border-1 border-gray-300 w-20 bg-blue-100 rounded-xl' />
                        })
                    }
                </div> */}



                <div className='border-0 lg:mt-20 text-6xl flex items-center justify-center gap-x-2 relative z-[2]'>
                    {
                        Array(8).fill(1).map((item, i) => {
                            const randomNumber = Math.floor(Math.random() * 4) + 1;
                            const imageUrl = `/src/assets/${randomNumber}.jpg`; // or use import if needed
                            const ad = {
                                height: '80px',
                                width: `${80 + (Math.floor(Math.random() * 50) + 1)}px`,
                                color: 'red',
                                background: `url(${imageUrl})`,
                                backgroundPosition: 'no-repeat',
                                backgroundSize: 'cover',
                            }
                            return <div style={ad} className={`border-1 border-gray-300 w-20 rounded-xl`}></div>
                        })
                    }
                </div>

                <div className='border-0 lg:mt-2 text-6xl flex items-center justify-center gap-x-2 relative z-[2]'>
                    {
                        Array(10).fill(1).map((item, i) => {
                            const randomNumber = Math.floor(Math.random() * 4) + 1;
                            const imageUrl = `/src/assets/${randomNumber}.jpg`; // or use import if needed
                            const ad = {
                                height: '80px',
                                width: `${80 + (Math.floor(Math.random() * 50) + 1)}px`,
                                color: 'red',
                                background: `url(${imageUrl})`,
                                backgroundPosition: 'no-repeat',
                                backgroundSize: 'cover',
                            }
                            return <div style={ad} className={`border-1 border-gray-300 w-20 rounded-xl`}></div>
                        })
                    }
                </div>
                <svg className='border-0 absolute left-0 bottom-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 210"><path fill="#ffffff" fill-opacity="1" d="M0,160L48,165.3C96,171,192,181,288,170.7C384,160,480,128,576,128C672,128,768,160,864,181.3C960,203,1056,213,1152,197.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                {/* <svg className='border-0 absolute left-0 bottom-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fill-opacity="1" d="M0,128L48,112C96,96,192,64,288,90.7C384,117,480,203,576,197.3C672,192,768,96,864,90.7C960,85,1056,171,1152,192C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> */}
            </div>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ullam, id ex voluptatum eius omnis molestias aperiam commodi! Magnam asperiores ipsum perspiciatis error ullam facere impedit itaque possimus quis debitis.</h1>
        </>
    )
}

export default Home