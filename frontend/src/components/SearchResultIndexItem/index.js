import React from 'react';
import { Link } from 'react-router-dom';
import './SearchResultIndexItem.css';


const SearchResultIndexItem = ({ product }) => {
  console.log(product, 'product BUT NOW WE IN DA ITEM');
  return (
    <div className="search-result-index-item">
      <Link to={`/products/${product.id}`}> 
        <img src={product.photoUrl} alt={product.name} />
        <h3>{product.name}</h3>
      </Link>
      <p className="product-category">{product.category}</p>
      <p className="product-price">${product.price}</p>
    </div>
  );
};

export default SearchResultIndexItem;