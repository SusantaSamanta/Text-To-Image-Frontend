import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import { FiLogOut, FiMail, FiCreditCard, FiImage, FiGlobe, FiArrowRight } from 'react-icons/fi'
import { AppContext } from '../context/AppContext'
import { loadUserChats } from '../utils/auth'
import fallbackImage from '../assets/fallback-image.jpg'
import PageLoading from '../components/PageLoading'

const Profile = () => {
  const {
    userDetailFromBackend,
    setIsLogin,
    setShowLoginPage,
    setUserDetailFromBackend,
    getFirstName,
  } = useContext(AppContext);

  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const [imagesLoading, setImagesLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchUserImages = async () => {
      const chats = await loadUserChats();
      if (isMounted) {
        setImages(Array.isArray(chats) ? chats : []);
        setImagesLoading(false);
      }
    };

    fetchUserImages();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleLogout = async () => {
    try {
      const { data } = await axios.get('/api/user/logout');

      toast.success(data.message);
      setIsLogin(false);
      setShowLoginPage(false);
      setUserDetailFromBackend(null);
      setTimeout(() => navigate('/', { replace: true }), 0);
    } catch {
      toast.error('Logout error');
    }
  };

  const fullName = userDetailFromBackend?.name || 'User';
  const email = userDetailFromBackend?.email || 'No email available';
  const credits = userDetailFromBackend?.credits ?? 0;
  const initial = getFirstName(fullName)?.[0] || 'U';
  const publicImages = images.filter((item) => item.isPublic).length;

  return (
    <div className='min-h-screen w-full bg-[url("../src/assets/home_bg.jpg")] bg-no-repeat bg-[0px_200px] bg-cover relative z-0'>
      <div className='min-h-screen w-full bg-gradient-to-b from-white to-[#ffffff55] absolute top-0 left-0 z-[1]'></div>

      <div className='relative z-[2] pt-20 md:pt-24 pb-10 px-4 md:px-8 lg:px-32'>
        <div className='max-w-6xl mx-auto flex flex-col gap-6 md:gap-8'>

          {/* Profile header */}
          <div className='bg-white/80 backdrop-blur-md rounded-3xl shadow-[2px_2px_12px_#dadadae1] p-5 md:p-8 flex flex-col md:flex-row md:items-center gap-5 md:gap-8'>
            <div
              className='h-20 w-20 md:h-24 md:w-24 shrink-0 mx-auto md:mx-0 flex items-center justify-center bg-blue-500 text-white rounded-full shadow-[1px_3px_10px_#4a4a4a72] text-3xl md:text-4xl font-light uppercase'
              style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
            >
              {initial}
            </div>

            <div className='flex-1 min-w-0 text-center md:text-left'>
              <h1 className='text-2xl md:text-3xl font-bold text-gray-800 truncate'>{fullName}</h1>
              <p className='mt-1 text-sm md:text-base text-gray-600 flex items-center justify-center md:justify-start gap-2'>
                <FiMail className='shrink-0' />
                <span className='truncate'>{email}</span>
              </p>
              <div className='mt-3 flex flex-wrap justify-center md:justify-start gap-2'>
                <span className='px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold'>
                  Credits: {credits}
                </span>
                <span className='px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold'>
                  Images: {images.length}
                </span>
              </div>
            </div>

            <div className='flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto'>
              <Link
                to='/generate'
                className='flex items-center justify-center gap-2 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition duration-300'
              >
                <FiImage />
                Generate Images
              </Link>
              <button
                onClick={handleLogout}
                className='flex items-center justify-center gap-2 px-5 py-2 bg-red-500 hover:bg-red-600 text-white rounded-xl font-semibold transition duration-300 cursor-pointer'
              >
                <FiLogOut />
                Logout
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
            <div className='bg-white/80 backdrop-blur-md rounded-2xl shadow-[2px_2px_12px_#dadadae1] p-5 flex items-center gap-4'>
              <div className='h-12 w-12 shrink-0 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 text-2xl'>
                <FiCreditCard />
              </div>
              <div>
                <p className='text-sm text-gray-500'>Credits left</p>
                <p className='text-xl font-bold text-gray-800'>{credits}</p>
              </div>
            </div>

            <div className='bg-white/80 backdrop-blur-md rounded-2xl shadow-[2px_2px_12px_#dadadae1] p-5 flex items-center gap-4'>
              <div className='h-12 w-12 shrink-0 flex items-center justify-center rounded-xl bg-purple-100 text-purple-600 text-2xl'>
                <FiImage />
              </div>
              <div>
                <p className='text-sm text-gray-500'>Total images</p>
                <p className='text-xl font-bold text-gray-800'>{images.length}</p>
              </div>
            </div>

            <div className='bg-white/80 backdrop-blur-md rounded-2xl shadow-[2px_2px_12px_#dadadae1] p-5 flex items-center gap-4'>
              <div className='h-12 w-12 shrink-0 flex items-center justify-center rounded-xl bg-green-100 text-green-600 text-2xl'>
                <FiGlobe />
              </div>
              <div>
                <p className='text-sm text-gray-500'>Public images</p>
                <p className='text-xl font-bold text-gray-800'>{publicImages}</p>
              </div>
            </div>
          </div>

          {/* Image gallery */}
          <div className='bg-white/80 backdrop-blur-md rounded-3xl shadow-[2px_2px_12px_#dadadae1] p-5 md:p-8'>
            <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5'>
              <h2 className='text-lg md:text-xl font-bold text-gray-800'>Your Images</h2>
              <Link
                to='/generate'
                className='flex items-center justify-center sm:justify-start gap-1 text-sm font-semibold text-blue-600 hover:text-blue-800 transition duration-300'
              >
                Create new
                <FiArrowRight />
              </Link>
            </div>

            {
              imagesLoading ?
                <div className='flex justify-center py-10'>
                  <PageLoading />
                </div>
                :
                images.length ?
                  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                      images.map((item) => (
                        <div key={item._id} className='rounded-xl border border-gray-200 bg-white overflow-hidden'>
                          <img
                            src={item.imageUrl || fallbackImage}
                            onError={(e) => {
                              e.currentTarget.onerror = null;
                              e.currentTarget.src = fallbackImage;
                            }}
                            alt={item.prompt || 'Generated image'}
                            loading='lazy'
                            className='w-full h-48 sm:h-52 object-cover'
                          />
                          <div className='p-3'>
                            <p className='text-sm text-gray-700 line-clamp-2'>{item.prompt || 'No prompt'}</p>
                            <div className='mt-2 flex items-center justify-between text-xs text-gray-500'>
                              <span>{item.isPublic ? 'Public' : 'Private'}</span>
                              {item.createdAt && <span>{new Date(item.createdAt).toLocaleDateString()}</span>}
                            </div>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                  :
                  <div className='text-center py-10'>
                    <p className='text-gray-500 mb-4'>You haven&apos;t generated any images yet.</p>
                    <Link
                      to='/generate'
                      className='inline-flex items-center justify-center gap-2 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition duration-300'
                    >
                      <FiImage />
                      Generate your first image
                    </Link>
                  </div>
            }
          </div>

        </div>
      </div>
    </div>
  )
}

export default Profile
