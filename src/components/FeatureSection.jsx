import { motion as Motion } from 'framer-motion'

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: 'easeOut' },
    },
}

const FeatureSection = () => {
    return (
        <>
            <div className="relative z-[2] max-w-6xl mx-auto px-5 md:px-8 mt-14 md:mt-16">

                {/* Section heading */}
                <Motion.div
                    className="text-center mb-10"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    <p className="text-sm font-semibold tracking-widest uppercase bg-gradient-to-r from-indigo-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
                        Explore VisionBrush
                    </p>

                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mt-3">
                        Creativity starts with <span className="bg-gradient-to-r from-indigo-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">you.</span>
                    </h2>

                    <p className="text-gray-500 text-sm md:text-base mt-4 max-w-xl mx-auto leading-7">
                        Everything you need to bring your imagination to life.
                        Create, explore and share your creativity with VisionBrush.
                    </p>
                </Motion.div>

                {/* Feature cards */}
                <Motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                >

                    {/* AI Generation */}
                    <Motion.div
                        variants={itemVariants}
                        whileHover={{ y: -6 }}
                        className="group relative overflow-hidden rounded-2xl p-4 sm:p-6 bg-white/70 backdrop-blur-md border border-white shadow-[0_4px_25px_#00000008] hover:shadow-[0_10px_35px_#a78bfa25] transition-shadow duration-300"
                    >

                        <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl text-white bg-gradient-to-br from-indigo-500 to-purple-500 shadow-md shadow-purple-200 transition-transform">
                            ✨
                        </div>

                        <h3 className="text-lg font-semibold text-gray-800 mt-5">
                            AI Image Generation
                        </h3>

                        <p className="text-sm text-gray-500 leading-6 mt-2">
                            Turn your imagination into stunning visuals with simple text prompts powered by AI.
                        </p>

                        <div className="absolute -right-8 -bottom-8 w-24 h-24 rounded-full bg-purple-200/30 blur-2xl group-hover:bg-purple-300/40 transition-all"></div>
                    </Motion.div>

                    {/* Community */}
                    <Motion.div
                        variants={itemVariants}
                        whileHover={{ y: -6 }}
                        className="group relative overflow-hidden rounded-2xl p-4 sm:p-6 bg-white/70 backdrop-blur-md border border-white shadow-[0_4px_25px_#00000008] hover:shadow-[0_10px_35px_#ec489925] transition-shadow duration-300"
                    >

                        <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl text-white bg-gradient-to-br from-pink-500 to-rose-400 shadow-md shadow-pink-200 transition-transform">
                            🌍
                        </div>

                        <h3 className="text-lg font-semibold text-gray-800 mt-5">
                            Creative Community
                        </h3>

                        <p className="text-sm text-gray-500 leading-6 mt-2">
                            Discover amazing artwork, explore creative ideas and share your creations with others.
                        </p>

                        <div className="absolute -right-8 -bottom-8 w-24 h-24 rounded-full bg-pink-200/30 blur-2xl group-hover:bg-pink-300/40 transition-all"></div>
                    </Motion.div>

                    {/* Gallery */}
                    <Motion.div
                        variants={itemVariants}
                        whileHover={{ y: -6 }}
                        className="group relative overflow-hidden rounded-2xl p-4 sm:p-6 bg-white/70 backdrop-blur-md border border-white shadow-[0_4px_25px_#00000008] hover:shadow-[0_10px_35px_#fb923c25] transition-shadow duration-300"
                    >

                        <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl text-white bg-gradient-to-br from-orange-400 to-amber-500 shadow-md shadow-orange-200 transition-transform">
                            🖼️
                        </div>

                        <h3 className="text-lg font-semibold text-gray-800 mt-5">
                            Personal Gallery
                        </h3>

                        <p className="text-sm text-gray-500 leading-6 mt-2">
                            Keep your generated images organized and revisit your favourite creations anytime.
                        </p>

                        <div className="absolute -right-8 -bottom-8 w-24 h-24 rounded-full bg-orange-200/30 blur-2xl group-hover:bg-orange-300/40 transition-all"></div>
                    </Motion.div>

                    {/* Credits */}
                    <Motion.div
                        variants={itemVariants}
                        whileHover={{ y: -6 }}
                        className="group relative overflow-hidden rounded-2xl p-4 sm:p-6 bg-white/70 backdrop-blur-md border border-white shadow-[0_4px_25px_#00000008] hover:shadow-[0_10px_35px_#10b98125] transition-shadow duration-300"
                    >

                        <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl text-white bg-gradient-to-br from-emerald-400 to-teal-500 shadow-md shadow-emerald-200 transition-transform">
                            ⚡
                        </div>

                        <h3 className="text-lg font-semibold text-gray-800 mt-5">
                            Generation Credits
                        </h3>

                        <p className="text-sm text-gray-500 leading-6 mt-2">
                            Manage your credits and use them to transform new ideas into beautiful images.
                        </p>

                        <div className="absolute -right-8 -bottom-8 w-24 h-24 rounded-full bg-emerald-200/30 blur-2xl group-hover:bg-emerald-300/40 transition-all"></div>
                    </Motion.div>

                </Motion.div>
            </div>

        </>
    )
}

export default FeatureSection
