import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import reportWebVitals from './reportWebVitals';
import { StoreProvider } from './Store';

// const PAYPAL_CLIENT_ID =
//   "AaFVdkvlu4FDHvY0RfcQ11-XnXitqLptBKWelcP4nv6VxPaN36RnOblVfvkfwfHH-r65ZNRYrojGNLEj";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    <StoreProvider>
      <HelmetProvider>
        <PayPalScriptProvider deferLoading={true} options={{ "client-id": YOUR_CLIENT_ID }}
          // options={{ "client-id": PAYPAL_CLIENT_ID }}
        >
          <App />
        </PayPalScriptProvider>
      </HelmetProvider>
    </StoreProvider>  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
