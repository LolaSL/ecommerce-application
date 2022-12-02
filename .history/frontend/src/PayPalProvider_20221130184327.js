import { createContext, useContext } from 'react';
import { PayPalScriptProvider, paypal } from '@paypal/react-paypal-js';

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
            "AaFVdkvlu4FDHvY0RfcQ11-XnXitqLptBKWelcP4nv6VxPaN36RnOblVfvkfwfHH-r65ZNRYrojGNLEj&currency=USD",
        }}
      >
        {children}
      </PayPalScriptProvider>
    );
  };
  
export default PaypalProvider;