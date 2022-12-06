import React, {useEffect,  useReducer,} from 'react';
import {Link, useNavigate, useLocation} from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';
import { getError } from '../utils';

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
const prices = [
    {
      name: '$1 to $590',
      value: '1-590',
    },
    {
      name: '$591 to $1299',
      value: '591-1299',
    },
    {
      name: '$1300 to $3000',
      value: '1300-3000',
    },
];
  
export const ratings = [
    {
      name: '4stars & up',
      rating: 4,
    },
  
    {
      name: '3stars & up',
      rating: 3,
    },
  
    {
      name: '2stars & up',
      rating: 2,
    },
  
    {
      name: '1stars & up',
      rating: 1,
    },
  ];
  
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

    useEffect(() => {
        const fetchData = async () => {
          try {
            const { data } = await axios.get(
              `/api/products/search?page=${page}&query=${query}&category=${category}&price=${price}&rating=${rating}&order=${order}`
            );
            dispatch({ type: 'FETCH_SUCCESS', payload: data });
          } catch (err) {
            dispatch({
              type: 'FETCH_ERROR',
              payload: getError(error),
            });
          }
        };
        fetchData();
    }, [category, error, order, page, price, query, rating]);
    

  return (
    <div>SearchResult</div>
  )
}

export default SearchResult;