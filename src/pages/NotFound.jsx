
import { Link } from "react-router-dom";
import { FiHome, FiImage, FiArrowLeft } from "react-icons/fi";
import { BsStars } from "react-icons/bs";

const NotFound = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center overflow-hidden px-4 py-12 sm:px-6
      bg-gradient-to-br from-purple-0 via-white to-pink-100
      dark:from-[#09090f] dark:via-[#11101c] dark:to-[#171025]
      text-gray-900 dark:text-white transition-colors duration-300">

      <div className="w-full max-w-2xl mx-auto text-center py-10 sm:py-0">

        {/* Illustration */}
        <div className="relative mx-auto mb-8 
          w-24 h-24 sm:w-26 sm:h-26
          flex items-center justify-center rounded-[2rem]
          bg-purple-100 dark:bg-purple-500/10
          border border-purple-200 dark:border-purple-500/20
          shadow-xl shadow-purple-200/30 dark:shadow-purple-900/10">

          <FiImage className="text-purple-600 dark:text-purple-400"
            size={48} />

          <BsStars
            size={25}
            className="absolute -top-3 -right-3 text-pink-500"
          />

          <BsStars
            size={18}
            className="absolute -bottom-2 -left-3 text-purple-500"
          />
        </div>

        {/* 404 */}
        <h1 className="text-[6rem] sm:text-[7rem]
          font-black leading-none tracking-tighter
          bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500
          bg-clip-text text-transparent">
          404
        </h1>

        {/* Heading */}
        <h2 className="mt-5 text-2xl sm:text-3xl
          font-bold tracking-tight">
          Oops! Lost in Creativity?
        </h2>

        {/* Description */}
        <p className="mt-4 mx-auto 
          text-sm sm:text-base  leading-relaxed
          text-gray-600 dark:text-gray-400">
          Looks like this page doesn't exist or has been moved.
          Don't worry, your creativity journey doesn't end here.
          {/* Let's get you back to creating something amazing! */}
        </p>

        {/* Button */}
        <div className="mt-8 flex justify-center">
          <Link
            to="/"
            className="group inline-flex items-center justify-center gap-2
              rounded-xl px-6  py-3.5 
              text-sm sm:text-base font-semibold text-white
              bg-gradient-to-r from-purple-600 to-pink-600
              hover:from-purple-700 hover:to-pink-700
              shadow-lg shadow-purple-500/25
              hover:shadow-purple-500/40
              hover:-translate-y-1
              active:translate-y-0
              transition-all duration-300"
          >
            <FiHome size={19} />
            Back to Home
            <FiArrowLeft
              size={18}
              className="rotate-180 group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        {/* Footer */}
        <div className="mt-10 sm:mt-12">
          <div className="flex items-center justify-center gap-2
            text-sm font-semibold text-purple-600 dark:text-purple-400">
            <BsStars />
            Vision Brush
          </div>

          <p className="mt-2 text-xs sm:text-sm
            text-gray-500 dark:text-gray-500">
            Create beyond imagination · © {new Date().getFullYear()}
          </p>
        </div>

      </div>
    </div>
  );
};

export default NotFound;
