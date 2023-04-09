import { Link } from "react-router-dom";
import "./SecondNavBar.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSearchResults } from "../../store/products";
import { useHistory } from "react-router-dom";


export default function SecondNavBar() {
    const [searchTerm, setSearchTerm] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
      };
    
      const handleKeyDown = (e) => {
        if (e.key === "Enter") {
          performSearch();
        }
      };
    
      const performSearch = () => {
        let modifiedSearchTerm = searchTerm;
        const searchTermPrefix = searchTerm.split(" ")[0].toLowerCase();
      
        if (searchTermPrefix === "mens" || searchTermPrefix === "men" ) {
          modifiedSearchTerm = searchTerm.replace(/^(mens|men)\s+/i, "");
          history.push(`/search?q=${encodeURIComponent(modifiedSearchTerm)}&gender=Men's`);
        } else if (searchTermPrefix === "womens" || searchTermPrefix === "women") {
          modifiedSearchTerm = searchTerm.replace(/^(womens|women)\s+/i, "");
          history.push(`/search?q=${encodeURIComponent(modifiedSearchTerm)}&gender=Women's`);
        } else {
          history.push(`/search?q=${encodeURIComponent(searchTerm)}`);
        }
      
        dispatch(fetchSearchResults(modifiedSearchTerm));
      };
      

      const clearAndPerformSearch = () => {
        setSearchTerm("");
        performSearch();
      };

    return (
        <>
            <div className="second-nav-bar">
                <Link to="/" >
                    <img id="logo" src="https://pngimg.com/uploads/nike/nike_PNG11.png"/>
                </Link>
                <div className="category-buttons">
                    <Link to="/search?q="> <button className="category-button"> New&nbsp;&&nbsp;Featured </button></Link>
                  
                    <Link to="/search?q=men">  <button className="category-button"> Men </button> </Link>
  
                    <Link to="/search?q=women">  <button className="category-button"> Women </button> </Link>
                    <Link to="/search?q=kids"> <button className="category-button"> Kids </button></Link>
                  

                    {/* <button className="category-button"> Accessories </button> */}
                    <Link to="/search?q=accessories"> <button className="category-button"> Accessories </button></Link>
                    <Link to="/search?q=Sale"> <button className="category-button"> Sale </button></Link>

                <div className="searchbar-favorite-cart" >
                <input
      id="searchbar"
      type="text"
      placeholder="Search"
      value={searchTerm}
      onChange={handleSearchChange}
      onKeyDown={handleKeyDown}
      onClick={clearAndPerformSearch}
    />  
  
                    {/* <img id="favorites" src="https://cdn.iconscout.com/icon/free/png-256/favorite-border-1781521-1513841.png"/> */}
                    <Link to="/cart"> 
                        <img id="bag" src="https://www.svgrepo.com/show/43071/shopping-bag.svg"/>
                    </Link>
                </div>
                
                </div>

            </div>
        </>
    )
}