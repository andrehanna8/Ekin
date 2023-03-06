import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from '../NavBar';
import SecondNavBar from '../SecondNavBar';
import Products from '../ProductsIndex';
import VideoComponent from '../VideoComponent';
export default function SplashPage() {
return (
<>
   <VideoComponent />
   <Products />
   {/* <div className="splash-page"></div> */}
</>
)
}