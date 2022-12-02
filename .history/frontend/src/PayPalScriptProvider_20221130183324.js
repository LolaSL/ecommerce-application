const PaypalProvider = ({ children }) => {
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
  
  export default PaypalProvider;