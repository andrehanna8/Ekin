import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SplashPage from "./components/SplashPage";
import ProductShowPage from "./components/ProductShowPage";
import NavBar from "./components/NavBar";
import SecondNavBar from "./components/SecondNavBar";
import SlideShowBar from "./components/SlideShowBar";
import './components/SlideShowBar/SlideShowBar.css'
import CartIndex from "./components/CartIndex";
import SearchResultsIndex from "./components/SearchResultsIndex";

// import "./components/ProductShowPage/ProductShowPage.css";

function App() {
  return (
    <>
    <NavBar />
    <SecondNavBar />
    
        <Switch>
          <Route exact path="/products/:productId">
          <SlideShowBar />
            <ProductShowPage/>
          </Route>
          <Route exact path="/cart">
            <CartIndex />
          </Route>
          <Route exact path="/login">
            <SlideShowBar />
            <LoginFormPage />
          </Route>
          
          <Route exact path="/search">
          <div className="whole-search">
          <SlideShowBar />
            <SearchResultsIndex />
            </div>
          </Route>
          <Route exact path="/">
          <SlideShowBar />
            <SplashPage />
          </Route>
        </Switch>
    </>
  );
}

export default App;