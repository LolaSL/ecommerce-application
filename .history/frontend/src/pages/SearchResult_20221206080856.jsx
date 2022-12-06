import React from 'react';
import {Link, useNavigate, useLocation} from 'react-router-dom'


const reducer = (state, action) => {
    switch (action.type) {
      case 'FETCH_REQUEST':
        return { ...state, loading: true };
      case 'FETCH_SUCCESS':
        return {
          ...state,
          products: action.payload.products,
          page: action.payload.page,
          pages: action.payload.pages,
          countProducts: action.payload.countProducts,
          loading: false,
        };
      case 'FETCH_ERROR':
        return { ...state, loading: false, error: action.payload };
  
      default:
        return state;
    }
};
  
const SearchResult = () => {

    const navigate = useNavigate();
    const { search } = useLocation();
    const sp = new URLSearchParams(search); // /search?category=Arts
    const category = sp.get('category') || 'all';
    const query = sp.get('query') || 'all';
    const price = sp.get('price') || 'all';
    const rating = sp.get('rating') || 'all';
    const order = sp.get('order') || 'newest';
    const page = sp.get('page') || 1

    const [{ loading, error, products, pages, countProducts }, dispatch] =
    useReducer(reducer, {
      loading: true,
      error: '',
    });
  return (
    <div>SearchResult</div>
  )
}

export default SearchResult;