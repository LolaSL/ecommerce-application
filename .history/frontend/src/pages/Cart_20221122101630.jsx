import React, { useContext } from 'react'; 
import { Store } from "../Store";


const Cart = () => {
    const { state, dispatch: ctxDispatch } = useContext();
    const { cart: { cartItems } } = state;
    
  return (
    <div>
      
    </div>
  )
}

export default Cart
