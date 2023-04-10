import { useSelector } from "react-redux";
import { useState } from "react";
import SearchResultIndexItem from "../SearchResultIndexItem";
import "./SearchResultsIndex.css";
import { useEffect } from "react";
import { fetchProducts, fetchSearchResults } from "../../store/products";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

const categories = ["All", "Men's", "Women's", "Kids", "Sale"];
const productTypes = ["All", "Shoes", "Tops", "Bottoms", "Accessories"];

export default function SearchResultsIndex() {
  const products = useSelector((state) => Object.values(state.products));
  const dispatch = useDispatch();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("q") || "";
  const genderFilter = searchParams.get("gender") || "";


  const [sortOrder, setSortOrder] = useState("default");
  const [filterCategory, setFilterCategory] = useState("All");
  const colors = ["All", "White", "Black", "Blue", "Red", "Green", "Yellow"];
  const [filterColor, setFilterColor] = useState("All");
  const [filterProductType, setFilterProductType] = useState("All");

  const filterByCategoryAndType = (product, searchTerm) => {
    const [productGender, productType] = product.category.split(" ");
    const categoryMatch =
      filterCategory === "All" || productGender.trim() === filterCategory.trim();
    const typeMatch =
      filterProductType === "All" || productType.trim() === filterProductType.trim();
    const accessoryMatch =
      productType.trim() === "Accessories" &&
      searchTerm.toLowerCase() === "accessories";

    const searchTermMatch = searchTerm
      ? product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category
          .toLowerCase()
          .split(" ")
          .some((word) => word.includes(searchTerm.toLowerCase())) ||
        (productGender.trim().toLowerCase() === searchTerm.split(" ")[0].toLowerCase() &&
         product.name.toLowerCase().includes(searchTerm.split(" ")[1].toLowerCase()))
      : true;

    return (
      categoryMatch && (typeMatch || accessoryMatch) && searchTermMatch
    );
  };

  const productsToDisplay = products.filter((product) => filterByCategoryAndType(product, searchTerm));

  const sortedProducts = productsToDisplay.sort((a, b) => {
    if (sortOrder === "priceLowToHigh") {
      return a.price - b.price;
    } else if (sortOrder === "priceHighToLow") {
      return b.price - a.price;
    }
    return 0;
  });

  const productsToDisplayByColor =
    filterColor === "All"
      ? sortedProducts
      : sortedProducts.filter((product) => product.color === filterColor);

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
      dispatch(fetchProducts());
    } else {
      dispatch(fetchProducts());
    }
  
    if (genderFilter) {
      setFilterCategory(genderFilter);
    }

    // Set category filter based on the search term
        if (searchTerm.toLowerCase() === "men") {
      setFilterCategory("Men's");
    } else if (searchTerm.toLowerCase() === "women") {
      setFilterCategory("Women's");
    } else if (searchTerm.toLowerCase() === "sale") {
      setFilterCategory("Sale");
    } else if (searchTerm.toLowerCase() === "golf shoes") {
      setFilterProductType("Shoes");
    } else {
      setFilterCategory("All");
    }
  }, [dispatch, searchTerm, genderFilter]);

  return (
    <>
    <div className="search-results-header"> 
      <div className="search-results-header-left">
      {searchTerm && (
          <>
            <h1> Search Results for "{searchTerm}"</h1>
            <br></br>
          </>
        )}
        </div> 

      <div className="search-results-header-right">
      <div className="sort-options">
          <label>
            Sort by: &nbsp;
            <select value={sortOrder} onChange={handleSortChange}>
              <option value="default">Default</option>
              <option value="priceLowToHigh">Price: Low to High</option>
              <option value="priceHighToLow">Price: High to Low</option>
            </select>
          </label>
        </div>
        </div>
    </div>

    <div className="search-results">

      <div className="search-results-controls">
      
    
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
          <br></br>
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
        {productsToDisplayByColor.map((product) => (
          <a key={product.id}>
            <SearchResultIndexItem product={product} />
          </a>
        ))}
      </div>
    </div>
    </>
  );
}

