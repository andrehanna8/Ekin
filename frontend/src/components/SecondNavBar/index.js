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
        dispatch(fetchSearchResults(searchTerm));
        history.push(`/search?q=${encodeURIComponent(searchTerm)}`);
      };

    return (
        <>
            <div className="second-nav-bar">
                <Link to="/" >
                    <img id="logo" src="https://pngimg.com/uploads/nike/nike_PNG11.png"/>
                </Link>
                <div className="category-buttons">
                    <a href="#block-img"><button className="category-button"> New&nbsp;&&nbsp;Featured </button></a> 
                    
                    <a href="#block-img"> <button className="category-button"> Men </button></a>
                    {/* <button className="category-button"> Women </button> */}
                    <a href="#block-img"> <button className="category-button"> Women </button></a>
                    
                    {/* <button className="category-button"> Kids </button> */}
                    <a href="#block-img"> <button className="category-button"> Kids </button></a>

                    {/* <button className="category-button"> Accessories </button> */}
                    <a href="#block-img"> <button className="category-button"> Accessories </button></a>

                    {/* <button className="category-button"> Sale </button> */}
                    <a href="#block-img"> <button className="category-button"> Sale </button></a>

                <div className="searchbar-favorite-cart" >
                <input
      id="searchbar"
      type="text"
      placeholder="Search"
      value={searchTerm}
      onChange={handleSearchChange}
      onKeyDown={handleKeyDown}
      onClick={performSearch}
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