import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import '../style/Navbar.css'
import { AppContext } from '../context/AppContext';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FiMenu, FiX } from 'react-icons/fi';


const Navbar = () => {

    const { isLogin, setIsLogin, setShowByePage, setShowLoginPage, userDetailFromBackend, setUserDetailFromBackend, getFirstName } = useContext(AppContext); //    ''     for show bye page  on credit button 
    const [credits, setCredits] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const closeMenu = () => setIsMenuOpen(false);



/* 
    useEffect(() => {
        if (!isLogin) return // if user not login this will not run
        const fetchCredits = async () => {
            try {
                const response = await axios.get('/api/user/credits');
                setCredits(response.data.credits);
                console.log(response.data.credits);
            } catch (error) {
                if (error.response && error.response.status === 400) {
                    console.log(error.response.data.message);
                } else {
                    console.error('Error fetching credits:', error);
                }
            }
        };

        // fetchCredits();
    }, [isLogin]);

*/



    const handleLogout = async () => {
        try {
            const { data } = await axios.get(
                '/api/user/logout'
            )

            toast.success(data.message);
            setTimeout(() => toast.success(`Goodby ${getFirstName(data.user.name)}`) , 1000);
            setIsLogin(false);
            setShowLoginPage(false);
            setUserDetailFromBackend(false);
            setTimeout(() => navigate('/', { replace: true }), 0);
        } catch (error) {
            alert('logout error')
        }

    };

    return (
        <>
            <div className='fixed left-0 top-0 w-full z-10'>
            <motion.div id='navbarStyle' className='w-full py-1 md:py-3 px-2 md:px-8 lg:px-32 flex justify-between items-center bg-white/95 md:bg-white/60 backdrop-blur-lg md:backdrop-blur-sm'
            // initial={{ opacity: 0, y: -10 }}
            // transition={{ duration: 1 }}
            // whileInView={{ opacity: 1, y: 0 }}
            >
                <Link to='/' className=' flex items-start w-auto relative' onClick={closeMenu}>
                    <img className='scale-[1] lg:scale-[1.2] relative -left-1' src='../app_logo.png' />
                </Link>

                {/* Desktop navigation */}
                <div className='border-0 w-auto hidden md:flex  justify-center items-center font-semibold '>
                    <Link to='/community' className='mr-2 lg:mr-4 text-gray-700 border-b-2 border-transparent hover:border-gray-500 transition duration-300'>Community</Link>
                    {
                        isLogin ?

                            <div className='border-0 w-auto flex items-center gap-2 lg:gap-4 text-gray-700'>
                                <Link to='/generate' className=' border-b-2 border-transparent hover:border-black transition duration-200'>Generate</Link>
                                <button  // to show byeCredit page using AddContext.showByePage
                                    className='px-3 lg:px-6 py-2 bg-blue-400 hover:bg-blue-500 shadow-[2px_2px_6px_#4a4a4a72] text-white rounded-2xl'
                                    onClick={() => setShowByePage(true)}>
                                    <p> <span className='md:hidden lg:inline-block'>Credits left :</span> <span className='md:inline-block lg:hidden'>Credits : </span>
                                        {
                                            (userDetailFromBackend && userDetailFromBackend.credits)
                                        }
                                    </p>
                                </button>
                                <div to='/profile' className='flex items-center'>
                                    <Link to={'/profile'} className='md:hidden lg:inline-block'>Hi,
                                        {
                                            (userDetailFromBackend &&
                                                ` ${getFirstName(userDetailFromBackend.name)}`)
                                        }
                                    </Link>
                                    <Link to={'/profile'} className='lg:ml-2 h-10 w-10 flex items-center justify-center shadow-[1px_3px_10px_#4a4a4a72] bg-blue-500 text-white rounded-full border-2 relative group'>
                                        <p className='text-2xl font-light uppercase ' style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                                            {
                                                (userDetailFromBackend &&
                                                    ` ${getFirstName(userDetailFromBackend.name)[0]}`)
                                            }
                                        </p>
                                        <div className='h-15 border-0 border-black absolute hidden group-hover:block top-5 right-0 '>
                                            <ul className='h-full flex items-end justify-center'>
                                                <li className='py-1 px-2 bg-white border-1 border-gray-300 rounded-lg shadow-[1px_3px_10px_#4a4a4a72] text-black font-semibold'>
                                                    <button className='cursor-pointer' onClick={handleLogout}>Logout</button>
                                                </li>
                                            </ul>

                                        </div>
                                    </Link>
                                </div>

                            </div>

                            :

                            <div className='border-0 flex items-center gap-2 lg:gap-4 text-gray-700'>
                                <Link to='/generate' className=' border-b-2 border-transparent hover:border-gray-500 transition duration-300'>Generate</Link>
                                <Link onClick={() => setShowLoginPage(true)} className='px-6 py-2 bg-black hover:bg-blue-900 text-white rounded-2xl transition duration-300'>Login</Link>
                            </div>

                    }
                </div>

                {/* Mobile menu toggle */}
                <button
                    className='md:hidden border-0 text-2xl text-gray-700 p-1'
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? <FiX /> : <FiMenu />}
                </button>

            </motion.div >

            {/* Mobile dropdown menu */}
            {
                isMenuOpen && (
                    <div className='md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg shadow-lg border-t border-gray-200 px-4 py-4 flex flex-col gap-4 font-semibold text-gray-700'>
                        <Link to='/community' className='border-b-2 border-transparent hover:border-gray-500 transition duration-300' onClick={closeMenu}>Community</Link>
                        <Link to='/generate' className='border-b-2 border-transparent hover:border-gray-500 transition duration-300' onClick={closeMenu}>Generate</Link>

                        {
                            isLogin ?
                                <>
                                    <button
                                        className='w-full px-3 py-2 bg-blue-400 hover:bg-blue-500 shadow-[2px_2px_6px_#4a4a4a72] text-white rounded-2xl'
                                        onClick={() => { setShowByePage(true); closeMenu(); }}>
                                        <p>Credits left : {userDetailFromBackend && userDetailFromBackend.credits}</p>
                                    </button>
                                    <div className='flex items-center justify-between'>
                                        <Link to='/profile' className='flex items-center gap-3' onClick={closeMenu}>
                                            <span className='h-10 w-10 flex items-center justify-center shadow-[1px_3px_10px_#4a4a4a72] bg-blue-500 text-white rounded-full border-2 text-2xl font-light uppercase' style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                                                {
                                                    (userDetailFromBackend &&
                                                        ` ${getFirstName(userDetailFromBackend.name)[0]}`)
                                                }
                                            </span>
                                            Hi,
                                            {
                                                (userDetailFromBackend &&
                                                    ` ${getFirstName(userDetailFromBackend.name)}`)
                                            }
                                        </Link>
                                        <button className='px-4 py-2 bg-black hover:bg-blue-900 text-white rounded-2xl transition duration-300' onClick={() => { handleLogout(); closeMenu(); }}>
                                            Logout
                                        </button>
                                    </div>
                                </>
                                :
                                <Link onClick={() => { setShowLoginPage(true); closeMenu(); }} className='w-full text-center px-6 py-2 bg-black hover:bg-blue-900 text-white rounded-2xl transition duration-300'>Login</Link>
                        }
                    </div>
                )
            }
            </div>
        </>
    );
}

export default Navbar