import { createContext, useState } from "react";
export const AppContext = createContext();
const AppContextProvider = (props) => {  // receive <App/> from main.jsx as props.children 
    const [isLogin, setIsLogin] = useState(true);
    return (
        <AppContext.Provider value={{ isLogin, setIsLogin }}>
            {props.children} {console.log(props)}
        </AppContext.Provider>
    )
}

export default AppContextProvider;  
/// we use AppContextProvider in main.jsx : where <AppContextProvider><App/></AppContextProvider> in this line 
//  we can pass <App/> as an props 
//      and use in <AppContext.Provider>{props.children}</AppContext.Provider>]
//          means inside <App/> all element can access <AppContext.Provider> value = isLogin 