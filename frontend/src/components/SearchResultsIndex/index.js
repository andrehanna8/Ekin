import { useSelector } from "react-redux";
import { useState } from "react";
import SearchResultIndexItem from "../SearchResultIndexItem";
import "./SearchResultsIndex.css";
import { useEffect } from "react";
import { fetchProducts, fetchSearchResults } from "../../store/products";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

const categories = ["All", "Men's", "Women's", "Kids", "Accessories", "Sale"];
const productTypes = ["All", "Shoes", "Tops", "Bottoms"];

export default function SearchResultsIndex() {
    const products = useSelector((state) => Object.values(state.products));
    const dispatch = useDispatch();
    const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("q") || "";

  const [sortOrder, setSortOrder] = useState("default");
  const [filterCategory, setFilterCategory] = useState("All");
  const colors = ["All", "White", "Black", "Blue", "Red", "Green", "Yellow"];
  const [filterColor, setFilterColor] = useState("All");
  const [filterProductType, setFilterProductType] = useState("All");

  const filterByCategoryAndType = (product) => {
    const [productGender, productType] = product.category.split(" ");
    const categoryMatch = filterCategory === "All" || productGender.trim() === filterCategory.trim();
    const typeMatch = filterProductType === "All" || productType.trim() === filterProductType.trim();
    return categoryMatch && typeMatch;
  };
  
  


  const filteredProducts = searchTerm
    ? products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : products;

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortOrder === "priceLowToHigh") {
      return a.price - b.price;
    } else if (sortOrder === "priceHighToLow") {
      return b.price - a.price;
    }
    return 0;
  });

  
  const productsToDisplay = sortedProducts;
const productsToDisplayByColor = filterColor === "All"
  ? productsToDisplay
  : productsToDisplay.filter((product) => product.color === filterColor);

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setFilterCategory(e.target.value);
  };

  const handleColorChange = (e) => {
    setFilterColor(e.target.value);
  };
  
  const handleProductTypeChange = (e) => {
    setFilterProductType(e.target.value);
  };

  

  useEffect(() => {
    if (searchTerm) {
      dispatch(fetchSearchResults(searchTerm));
    } else {
      dispatch(fetchProducts());
    }
  }, [dispatch, searchTerm]);

  const productsToDisplayByType = productsToDisplayByColor.filter(filterByCategoryAndType);
  
  return (
    <div className="search-results">
      <div className="search-results-controls">
        <div className="sort-options">
          <label>
            Sort by:
            <select value={sortOrder} onChange={handleSortChange}>
              <option value="default">Default</option>
              <option value="priceLowToHigh">Price: Low to High</option>
              <option value="priceHighToLow">Price: High to Low</option>
            </select>
          </label>
        </div>
        <div className="category-options">
          <p>Category:</p>
          {categories.map((category, index) => (
            <label key={category}>
              <input
                type="radio"
                value={category}
                checked={filterCategory === category}
                onChange={handleCategoryChange}
              />
              {category}
            </label>
          ))}
        </div>
        <div>
  <label>Color:</label>
  {colors.map((color) => (
    <div key={color}>
      <input
        type="radio"
        id={color}
        name="color"
        value={color}
        checked={filterColor === color}
        onChange={handleColorChange}
      />
      <label htmlFor={color}>{color}</label>
    </div>
  ))}
</div>

<div className="product-type-options">
          <p>Product Type:</p>
          {productTypes.map((type) => (
            <label key={type}>
              <input
                type="radio"
                value={type}
                checked={filterProductType === type}
                onChange={handleProductTypeChange}
              />
              {type}
            </label>
          ))}
        </div>

      </div>
      <div className="search-results-items">
        {productsToDisplayByType.map((product) => (
          <a key={product.id}>
            <SearchResultIndexItem product={product} />
          </a>
        ))}
      </div>
    </div>
  );
}
