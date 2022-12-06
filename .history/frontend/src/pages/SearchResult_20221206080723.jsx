import React from 'react';
import {Link, useNavigate, useLocation} from 'react-router-dom'

const SearchResult = () => {

    const navigate = useNavigate();
    const { search } = useLocation();
    const sp = new URLSearchParams(search); // /search?category=Shirts
    const category = sp.get('category') || 'all';

    
  return (
    <div>SearchResult</div>
  )
}

export default SearchResult;