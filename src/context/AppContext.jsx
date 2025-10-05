import { createContext, useState } from "react";
export const AppContext = createContext();
const AppContextProvider = (props) => {  // receive <App/> from main.jsx as props.children 
    const [isLogin, setIsLogin] = useState(false); // user for show event on user login or notLogin
    const [showByePage, SetShowByePage] = useState(false);


    const sendVariables = {
        isLogin,
        setIsLogin,
        showByePage,
        SetShowByePage,

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