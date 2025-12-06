import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import HomeImageGallery from '../components/HomeImageGallery'
import HomeHeader from '../components/HomeHeader'
import Footer from '../components/Footer';
const Home = () => {
    return (
        <>
            <div className='border-0 lg:h-auto lg:mb-5 lg:pb-35  lg:pt-20 bg-[url("../src/assets/home_bg.jpg")] bg-no-repeat bg-cover relative z-0'>
                <div className='lg:h-full w-full bg-gradient-to-b from-white to-[#ffffff1f] absolute top-0 left-0 z-[1]'></div>

                <HomeHeader />



                <HomeImageGallery />
                <svg className='border-0 absolute left-0 bottom-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 210"><path fill="#ffffff" fill-opacity="1" d="M0,160L48,165.3C96,171,192,181,288,170.7C384,160,480,128,576,128C672,128,768,160,864,181.3C960,203,1056,213,1152,197.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                {/* <svg className='border-0 absolute left-0 bottom-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fill-opacity="1" d="M0,128L48,112C96,96,192,64,288,90.7C384,117,480,203,576,197.3C672,192,768,96,864,90.7C960,85,1056,171,1152,192C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> */}

            </div>
            <Footer/>
        </>
    )
}

export default Home