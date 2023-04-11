import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './ProductsClicker.css';

export default function ProductsClicker() {
    const [startIndex, setStartIndex] = useState(15);
    const products = useSelector((state) => state.products);
  const firstTen = Object.values(products).slice(startIndex, startIndex + 10);


  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleNext = () => {
    if (startIndex + 10 < products.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const renderProductItem = (product) => (
    <div key={product.id} className="products-clicker__item">
      <img src="https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/4667928b-e91b-4793-be72-ece10828d43e/dunk-low-se-womens-shoes-wXTkMh.png" alt={product.name} className="products-clicker__item-image" />
      <div className="products-clicker__item-info">
        <p>{product.name}</p>
        <p>{product.category}</p>
        <p>{product.color}</p>
        <p>${product.price}</p>
      </div>
    </div>
  );

  return (
    <div className="products-clicker">
      <div className="products-clicker__container">
        {firstTen.map(renderProductItem)}
        <button className="products-clicker__arrow products-clicker__arrow--prev" onClick={handlePrev}>
          {'<'}
        </button>
        <button className="products-clicker__arrow products-clicker__arrow--next" onClick={handleNext}>
          {'>'}
        </button>
      </div>
    </div>
  );
}