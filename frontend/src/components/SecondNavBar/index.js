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
                    <input id="searchbar" type="text" placeholder="Search"/>
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