import React from 'react';
import { Link } from 'react-router-dom';
import './SearchResultIndexItem.css';

const SearchResultIndexItem = ({ product }) => {
  return (
    <div className="search-result-index-item">
      {/* Display product details as desired */}
      <Link to={`/products/${product.id}`}>
        <h3>{product.name}</h3>
      </Link>
    </div>
  );
};

export default SearchResultIndexItem;
