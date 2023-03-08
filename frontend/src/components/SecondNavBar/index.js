import { Link } from "react-router-dom";
import "./SecondNavBar.css";

export default function SecondNavBar() {

    return (
        <>
            <div className="second-nav-bar">
                <Link to="/" >
                    <img id="logo" src="https://pngimg.com/uploads/nike/nike_PNG11.png"/>
                </Link>
                <div className="category-buttons">
                    <button className="category-button"> New&nbsp;&&nbsp;Featured </button>
                    <button className="category-button"> Men </button>
                    <button className="category-button"> Women </button>
                    <button className="category-button"> Kids </button>
                    <button className="category-button"> Accessories </button>
                    <button className="category-button"> Sale </button>

                <div className="searchbar-favorite-cart" >
                    <input id="searchbar" type="text" placeholder="Search"/>
                    <img id="favorites" src="https://cdn.iconscout.com/icon/free/png-256/favorite-border-1781521-1513841.png"/>
                    <Link to="/cart"> 
                        <img id="bag" src="https://www.svgrepo.com/show/43071/shopping-bag.svg"/>
                    </Link>
                </div>
                
                </div>

            </div>
        </>
    )
}