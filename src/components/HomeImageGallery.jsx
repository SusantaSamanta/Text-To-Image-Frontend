import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'




const HomeImageGallery = () => {




    const galleryImagesArr = [
        'https://res.cloudinary.com/diznagcfg/image/upload/v1756586751/vision_brush/epzy6dqcuunrqquqeh74.png',
        'https://res.cloudinary.com/diznagcfg/image/upload/v1765558549/vision_brush/eevmdsc8rlism3k7aao6.png',
        'https://res.cloudinary.com/diznagcfg/image/upload/v1762544803/vision_brush/ruvvkl46l2fipbsr3qvy.jpg',
        'https://res.cloudinary.com/diznagcfg/image/upload/v1766592817/vision_brush/k4a5ozczt7xmsuf1aqaq.png',
        'https://res.cloudinary.com/diznagcfg/image/upload/v1767338677/46423_wrxhcl.jpg',
        'https://res.cloudinary.com/diznagcfg/image/upload/v1753384293/vision_brush/vqkzgzqvn9j541ap3m1v.png',
        'https://res.cloudinary.com/diznagcfg/image/upload/v1754631577/FB_IMG_1727784711446_mpd6l2.jpg',
        'https://res.cloudinary.com/diznagcfg/image/upload/v1754631579/56998860-d77a-4473-8761-9d3f2b42857f_ymf7wp.png',

        'https://res.cloudinary.com/diznagcfg/image/upload/v1767337649/1767337386705_j0mtra.jpg',
        'https://res.cloudinary.com/diznagcfg/image/upload/v1767337649/1767337386618_dcm2oi.jpg',
        'https://res.cloudinary.com/diznagcfg/image/upload/v1767338678/pi7567567_dakg5r.jpg',
        'https://res.cloudinary.com/diznagcfg/image/upload/v1767337649/1767337386659_hukwco.jpg',
        'https://res.cloudinary.com/diznagcfg/image/upload/v1767337649/1767337386729_yq9try.jpg',
        'https://res.cloudinary.com/diznagcfg/image/upload/v1767337650/1767337386748_dngprr.jpg',
        'https://res.cloudinary.com/diznagcfg/image/upload/v1767337649/1767337386639_pfcfna.jpg',
        'https://res.cloudinary.com/diznagcfg/image/upload/v1767337650/1767337386769_qxpmlc.jpg',
        'https://res.cloudinary.com/diznagcfg/image/upload/v1767338695/17106861dfg77387_adwzdr.jpg',
    ]
    const firstRowWidths = [90, 101, 85, 87, 109, 130, 98, 126];
    const secondRowWidths = [82, 90, 97, 105, 95, 124, 98, 88, 101];



    return (
        <>


            <motion.section className='border-0'
            >
                <motion.div className='border-0 hidden lg:mt-15 text-6xl lg:flex items-center justify-center gap-x-2 relative z-[2]'
                    initial={{ opacity: 0, y: 30 }}
                    transition={{ duration: .8 }}
                    whileInView={{ opacity: 1, y: 0 }}>
                    {
                        Array(8).fill(1).map((item, i) => {

                            const adStyle = {
                                height: '80px',
                                width: `${firstRowWidths[i]}px`,
                                backgroundImage: `url(${galleryImagesArr[i]})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '12px',
                            };
                            return <div key={i} style={adStyle} className={`border-1 border-gray-300 w-20 rounded-xl`}></div>
                        })
                    }
                </motion.div>

                {/* 1st ro for mobile screen  */}
                <motion.div className='border-0 mt-10 mb-2 text-6xl flex lg:hidden flex-wrap items-center justify-center gap-x-2 relative z-[2]'
                    initial={{ opacity: 0, y: 30 }}
                    transition={{ duration: .8 }}
                    whileInView={{ opacity: 1, y: 0 }}>
                    {
                        Array(5).fill(1).map((item, i) => {

                            const adStyle = {
                                height: '80px',
                                width: `${firstRowWidths[i] + 15}px`,
                                backgroundImage: `url(${galleryImagesArr[i]})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '12px',
                            };
                            return <div key={i} style={adStyle} className={`border-1 border-gray-300 w-20 rounded-xl`}></div>
                        })
                    }
                </motion.div>
                {/* 2nd row for mobile screen  */}
                <motion.div className='border-0 mb-2 text-6xl flex lg:hidden flex-wrap items-center justify-center gap-x-2 relative z-[2]'
                    initial={{ opacity: 0, y: 30 }}
                    transition={{ duration: .8 }}
                    whileInView={{ opacity: 1, y: 0 }}>
                    {
                        Array(3).fill(1).map((item, i) => {
                            const adStyle = {
                                height: '80px',
                                width: `${firstRowWidths[i + 5] + 20}px`,
                                backgroundImage: `url(${galleryImagesArr[i + 5]})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '12px',
                            };
                            return <div key={i} style={adStyle} className={`border-1 border-gray-300 w-20 rounded-xl`}></div>
                        })
                    }
                </motion.div>


                <motion.div className='border-0 lg:mt-2 text-6xl hidden lg:flex items-center justify-center gap-x-2 relative z-[2]'
                    initial={{ opacity: 0, y: 30 }}
                    transition={{ duration: .8 }}
                    whileInView={{ opacity: 1, y: 0 }}>
                    {
                        Array(9).fill(1).map((item, i) => {

                            const adStyle = {
                                width: `${secondRowWidths[i]}px`,
                                backgroundImage: `url(${galleryImagesArr[i + 8]})`,
                            };
                            return <div key={i} style={adStyle} className={`h-20 border-1 border-gray-300 w-20 rounded-xl bg-center bg-cover bg-no-repeat`}></div>
                        })
                    }
                </motion.div>

                <motion.div className='border-0 lg:mt-2 text-6xl md:flex hidden lg:hidden items-center justify-center gap-x-2 relative z-[2]'
                    initial={{ opacity: 0, y: 30 }}
                    transition={{ duration: .8 }}
                    whileInView={{ opacity: 1, y: 0 }}>
                    {
                        Array(6).fill(1).map((item, i) => {

                            const adStyle = {
                                width: `${secondRowWidths[i]+5}px`,
                                backgroundImage: `url(${galleryImagesArr[i + 8]})`,
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