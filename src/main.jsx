// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import AppContextProvider from './context/AppContext.jsx';


/// connect backend 
import axios from 'axios';
axios.defaults.withCredentials = true;  // Needed for cookies
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL  // for api fetch by default http://localhost:3000 then/api/user


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppContextProvider>
      <App/>
    </AppContextProvider>
  </BrowserRouter>
)

