import { createContext, useReducer } from 'react';

export const Store = createContext();
const initialState = {
    cart: {
     cartItems: [],   
    },
};

function reducer
export function StoreProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = { state, dispatch };
    return <Store.Provider value={value}>{ props.children }</Store.Provider>;
}
