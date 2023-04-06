import { useSelector } from "react-redux";
import { useState } from "react";
import SearchResultIndexItem from "../SearchResultIndexItem";
import "./SearchResultsIndex.css";
import { useEffect } from "react";
import { fetchProducts, fetchSearchResults } from "../../store/products";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

const categories = ["All", "Men", "Women", "Kids", "Accessories", "Sale"];

export default function SearchResultsIndex() {
    const products = useSelector((state) => Object.values(state.products));
    const dispatch = useDispatch();
    const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("q") || "";

  const [sortOrder, setSortOrder] = useState("default");
  const [filterCategory, setFilterCategory] = useState("All");

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

  const productsToDisplay = filterCategory === "All"
    ? sortedProducts
    : sortedProducts.filter((product) => product.category === filterCategory);

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setFilterCategory(e.target.value);
  };

  useEffect(() => {
    if (searchTerm) {
      dispatch(fetchSearchResults(searchTerm));
    } else {
      dispatch(fetchProducts());
    }
  }, [dispatch, searchTerm]);

  
  return (
    <div className="search-results">
      <div className="search-results-controls">
        <label>
          Sort by:
          <select value={sortOrder} onChange={handleSortChange}>
            <option value="default">Default</option>
            <option value="priceLowToHigh">Price: Low to High</option>
            <option value="priceHighToLow">Price: High to Low</option>
          </select>
        </label>
        <label>
          Category:
          <select value={filterCategory} onChange={handleCategoryChange}>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="search-results-items">
        {productsToDisplay.map((product) => (
          <a key={product.id}>
            <SearchResultIndexItem product={product} />
          </a>
        ))}
      </div>
    </div>
  );
}
