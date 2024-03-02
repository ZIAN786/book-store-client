import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from "./context/auth.js";
import { SearchProvider } from "./context/search.js";
import { CartProvider } from './context/cart.js';
import 'antd/dist/reset.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
    < SearchProvider>
    <CartProvider>
      <App />
    </CartProvider>
    </SearchProvider>
    </AuthProvider>
   </React.StrictMode>
);




reportWebVitals();
