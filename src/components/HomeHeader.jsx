import React from 'react';
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';
import ai_star_png from "../assets/ai_star.png";

const HomeHeader = () => {
    return (
        <>

            <motion.section className='z-[2] border-0 md:mt-16 relative flex flex-col justify-center items-center gap-y-3 md:gap-y-6'
                initial={{ opacity: 0, y: 40 }}
                transition={{ duration: .8 }}
                whileInView={{ opacity: 1, y: 0 }}
            >
                <div className='border-0 px-2 flex flex-col justify-center items-center md:gap-y-2 text-center text-3xl md:text-5xl font-semibold' >
                    <h1>Generate <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#5662d3] via-pink-500 to-orange-300'>Images</span></h1>
                    <h1>with Text Input, in Seconds</h1>
                </div>

                <h1 className='lg:w-[800px] text-center md:text-xl px-4 my-2 lg:p-0 lg:m-0 '>
                    Transform your ideas into artistic masterpieces using the power of Al. Describe your vision with text, and see it rendered in stunning detail.
                </h1>

                <Link to={'/generate'}>
                    <button
                        className="px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-[#5662d3] via-pink-500 to-orange-300 text-white 
                        text-xl font-bold rounded-full lg:shadow-[5px_5px_10px_#4a4a4a72] hover:bg-blue-700 
                        hover:shadow-lg hover:scale-[1.02] hover:lg:lg:shadow-[5px_5px_10px_#4a4a4a72]  transition-all duration-200 ease-in-out">
                        Generate Image
                        <img className='w-5 md:w-[30px] ml-1 border-0 inline' src={ai_star_png} />
                    </button>
                </Link>
            </motion.section>


        </>
    )
}

export default HomeHeader