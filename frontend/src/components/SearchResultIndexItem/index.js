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
        <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/feb39c75-3aa3-44a7-9ec2-d298f19f2d27/air-max-270-womens-shoes-Pgb94t.png" alt={product.name} />
      </Link>
      <div className='sr-product-info'>
        <br></br>
        <h3>{product.name}</h3>
      <p className="product-category">{getCleanCategory(product.category)}</p>
      {isOnSale(product.category) ? (
        <>
        <div className='sr-price'>
          <p className="product-price original-price">
            <del>${product.price}</del>
          </p> &nbsp;
          <p className="product-price discounted-price">
            ${(product.price * 0.6).toFixed(2)}
          </p>
        </div>
        </>
      ) : (
        <p className="product-price">${product.price}</p>
      )}
      </div>
    </div>
  );
};

export default SearchResultIndexItem;
