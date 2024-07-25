import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {CartProvider} from './pages/CartContext';
import {CartProvider1} from './pages/Cart__Context'
import { Auth0Provider } from '@auth0/auth0-react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Auth0Provider
    domain="dev-cbu0sjui5wquwmrv.us.auth0.com"
    clientId="QoNgzV7cSHpax2BnTeagxSZ0u8ZvUYmg"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <React.StrictMode>

    <CartProvider>
      <CartProvider1>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </CartProvider1>
    </CartProvider>
  </React.StrictMode>
  </Auth0Provider>,
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



