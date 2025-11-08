

const userChatContent = [
  {
    prompt: 'Susanta image in side field',
    imageUrl: '../src/assets/1.jpg'
  },
  {
    prompt: 'The Tata Consultancy Services! (TCS ) is going to hire the 2023, 2024 & 2025 Year of Passing Graduates (Arts, Commerce and Science Streams,) for TCS BPS (except Computer Science and IT streams).',
    imageUrl: '../src/assets/2.jpg'
  },
  {
    prompt: 'Register and apply for the TCS BPS Hiring process. Click on ‘Register Now’, choose category as ‘BPS’,',
    imageUrl: '../src/assets/3.jpg'
  },
  {
    prompt: 'After the submission, a WhatsApp group link will come, join it . For further information follow the WhatsApp group.',
    imageUrl: '../src/assets/2.jpg'
  },
]







import { checkImageLoading, checkUserLogin } from '../utils/auth'
import { createContext, useState, useEffect } from "react";


export const AppContext = createContext();
const AppContextProvider = (props) => {  // receive <App/> from main.jsx as props.children 
  const [isLogin, setIsLogin] = useState(false); // user for show event on user login or notLogin
  const [showByePage, setShowByePage] = useState(false); // show bye page or not 
  const [showLoginPage, setShowLoginPage] = useState(false);
  const [signupOrLogin, setSignupOrLogin] = useState('Login');
  const [userDetailFromBackend, setUserDetailFromBackend] = useState(null);
  const [imageLoading, setImageLoading] = useState(JSON.parse(localStorage.getItem("imageLoading")));
  const [userChatDataArr, setUserChatDataArr] = useState([
    {
      prompt: 'Susanta image in side field',
      imageUrl: '../src/assets/1.jpg'
    },
    {
      prompt: 'The Tata Consultancy Services! (TCS ) is going to hire the 2023, 2024 & 2025 Year of Passing Graduates (Arts, Commerce and Science Streams,) for TCS BPS (except Computer Science and IT streams).',
      imageUrl: '../src/assets/2.jpg'
    },
    {
      prompt: 'Register and apply for the TCS BPS Hiring process. Click on ‘Register Now’, choose category as ‘BPS’,',
      imageUrl: '../src/assets/3.jpg'
    },
    {
      prompt: 'After the submission, a WhatsApp group link will come, join it . For further information follow the WhatsApp group.',
      imageUrl: '../src/assets/2.jpg'
    },
  ])



  const getFirstName = (fullName) => { // from full name give the first name in first letter capital 
    if (!fullName) return ""; // Handle empty or undefined names
    const firstName = fullName.split(" ")[0]; // Get the first part (first name)
    return firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
  };




  const sendVariables = {
    isLogin, setIsLogin,
    showByePage, setShowByePage,
    showLoginPage, setShowLoginPage,
    signupOrLogin, setSignupOrLogin,
    userDetailFromBackend, setUserDetailFromBackend,
    getFirstName,
    imageLoading, setImageLoading,
    userChatDataArr, setUserChatDataArr,
  }


  useEffect(() => {
    const callCheckUserLogin = async () => {
      const result = await checkUserLogin();
      if (result.success) {
        setIsLogin(true);
        setShowLoginPage(false);
        setUserDetailFromBackend(result.user);
      } else {
        setIsLogin(false);
        setUserDetailFromBackend(null);
      }
    };
    callCheckUserLogin();
    // await checkImageLoading({ imageLoading, setImageLoading});  // DON,T NEED 
  }, []);




  return (
    <AppContext.Provider value={sendVariables}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider;
/// we use AppContextProvider in main.jsx : where <AppContextProvider><App/></AppContextProvider> in this line
//  This line can pass <App/> as an props
//      and we use in <AppContext.Provider>{props.children}</AppContext.Provider>]
//          means inside <App/> all element can access <AppContext.Provider> value = isLogin 