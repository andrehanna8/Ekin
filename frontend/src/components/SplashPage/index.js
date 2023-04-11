import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from '../NavBar';
import SecondNavBar from '../SecondNavBar';
import Products from '../ProductsIndex';
import VideoComponent from '../VideoComponent';
import './SplashPage.css'

export default function SplashPage() {
return (
<>
   <div className='splash-page'>
   <VideoComponent />
   <Products />
   </div>
</>
)
}

