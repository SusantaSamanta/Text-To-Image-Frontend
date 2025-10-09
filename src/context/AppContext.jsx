import { createContext, useState } from "react";
export const AppContext = createContext();
const AppContextProvider = (props) => {  // receive <App/> from main.jsx as props.children 
    const [isLogin, setIsLogin] = useState(false); // user for show event on user login or notLogin
    const [showByePage, setShowByePage] = useState(false); // show bye page or not 
    const [showLoginPage, setShowLoginPage] = useState(false);
    const [ signupOrLogin, setSignupOrLogin] = useState('Sign Up');
    
    
    const sendVariables = {
        isLogin,  setIsLogin,
        showByePage, setShowByePage,
        showLoginPage, setShowLoginPage,
        signupOrLogin, setSignupOrLogin,
    }
    return (
        <AppContext.Provider value={sendVariables}>
            {props.children}
            {/* {console.log(props)} */}
        </AppContext.Provider>
    )
}

export default AppContextProvider;
/// we use AppContextProvider in main.jsx : where <AppContextProvider><App/></AppContextProvider> in this line
//  This line can pass <App/> as an props
//      and we use in <AppContext.Provider>{props.children}</AppContext.Provider>]
//          means inside <App/> all element can access <AppContext.Provider> value = isLogin 