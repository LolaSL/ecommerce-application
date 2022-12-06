import React from 'react';
import {Link, useNavigate, useLocation} from 'react-router-dom'

const SearchResult = () => {

    const navigate = useNavigate();
    const { search } = useLocation();
    
  return (
    <div>SearchResult</div>
  )
}

export default SearchResult;