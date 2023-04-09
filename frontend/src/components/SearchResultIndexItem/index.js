import React from 'react';
import { Link } from 'react-router-dom';
import './SearchResultIndexItem.css';

const SearchResultIndexItem = ({ product }) => {
  const isOnSale = (category) => {
    return category.startsWith("Sale");
  };

  const getCleanCategory = (category) => {
    return isOnSale(category) ? category.slice(5).trim() : category;
  };

  return (
    <div className="search-result-index-item">
      <Link to={`/products/${product.id}`}>
        <img src={product.photoUrl} alt={product.name} />
        <h3>{product.name}</h3>
      </Link>
      <p className="product-category">{getCleanCategory(product.category)}</p>
      {isOnSale(product.category) ? (
        <>
          <p className="product-price original-price">
            <del>${product.price}</del>
          </p>
          <p className="product-price discounted-price">
            ${(product.price * 0.6).toFixed(2)}
          </p>
        </>
      ) : (
        <p className="product-price">${product.price}</p>
      )}
    </div>
  );
};

export default SearchResultIndexItem;
