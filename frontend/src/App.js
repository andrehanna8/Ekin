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
// import "./components/ProductShowPage/ProductShowPage.css";

function App() {
  return (
    <>
    <NavBar />
    <SecondNavBar />
    <SlideShowBar />
        <Switch>
          <Route exact path="/products/:productId">
            <ProductShowPage/>
          </Route>
          <Route exact path="/cart">
            <CartIndex />
          </Route>
          <Route exact path="/login">
            <LoginFormPage />
          </Route>
          <Route exact path="/">
            <SplashPage />
          </Route>
        </Switch>
    </>
  );
}

export default App;