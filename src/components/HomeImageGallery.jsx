import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const HomeImageGallery = () => {
    return (
        <>


            <motion.section className='border-0'
            >
                <motion.div className='border-0 lg:mt-15 text-6xl flex items-center justify-center gap-x-2 relative z-[2]'
                    initial={{ opacity: 0, y: 30 }}
                    transition={{ duration: .8 }}
                    whileInView={{ opacity: 1, y: 0 }}>
                    {
                        Array(8).fill(1).map((item, i) => {
                            const randomNumber = Math.floor(Math.random() * 4) + 1;
                            // console.log(randomNumber);
                            const imageUrl = `../src/assets/${randomNumber}.jpg`; // or use import if needed
                            console.log(imageUrl);
                            
                            const adStyle = {
                                height: '80px',
                                width: `${80 + Math.floor(Math.random() * 50)}px`,
                                backgroundImage: `url(${imageUrl})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '12px',
                            };
                            return <div key={i} style={adStyle} className={`border-1 border-gray-300 w-20 rounded-xl`}></div>
                        })
                    }
                </motion.div>

                <motion.div className='border-0 lg:mt-2 text-6xl flex items-center justify-center gap-x-2 relative z-[2]'
                    initial={{ opacity: 0, y: 30 }}
                    transition={{ duration: .8 }}
                    whileInView={{ opacity: 1, y: 0 }}>
                    {
                        Array(9).fill(1).map((item, i) => {
                            const randomNumber = Math.floor(Math.random() * 4) + 1;
                            const imageUrl = `../src/assets/${randomNumber}.jpg`; // or use import if needed
                            const adStyle = {
                                width: `${80 + Math.floor(Math.random() * 50)}px`,
                                backgroundImage: `url(${imageUrl})`,
                            };
                            return <div key={i} style={adStyle} className={`h-20 border-1 border-gray-300 w-20 rounded-xl bg-center bg-cover bg-no-repeat`}></div>
                        })
                    }
                    <Link to={'/community'}
                        onClick={() => {
                            const gallerySection = document.getElementById("gallery");
                            if (gallerySection) {
                                gallerySection.scrollIntoView({ behavior: "smooth" });
                            }
                        }}
                        className="flex items-center justify-center w-24 h-20 rounded-xl border-2 border-dashed border-black cursor-pointer"
                    >
                        <span className="text-sm font-semibold">View More</span>
                    </Link>

                </motion.div>
            </motion.section>












        </>
    )
}

export default HomeImageGallery