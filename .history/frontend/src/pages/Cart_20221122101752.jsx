import React, { useContext } from 'react'; 
import { Store } from "../Store";


const Cart = () => {
    const { state, dispatch: ctxDispatch } = useContext();
    const { cart: { cartItems } } = state;

  return (
    <div>
            <Helmet>
        <title> Shopping Cart</title>
      </Helmet>
    </div>
  )
}

export default Cart
