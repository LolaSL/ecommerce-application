import { createContext } from 'react';
export const Store = createContext();
export function StoreProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = { state, dispatch };
    return <Store.Provider value={value}>{ props.chil}</Store.Provider>
}
