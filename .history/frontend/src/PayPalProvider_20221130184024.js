import { createContext, useContext } from 'react';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

export const AppContext = createContext();

 function  PaypalProvider({ children }){
    const {
      state: { paypal },
    } = useContext(AppContext);
  
    console.log(paypal);
  
    return (
      <PayPalScriptProvider
        key={paypal}
        options={{
          currency: paypal.currency,
          "client-id":
            "####",
        }}
      >
        {children}
      </PayPalScriptProvider>
    );
  };
  
