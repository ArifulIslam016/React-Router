import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
import './Root.css'

const Root = () => {
  const navigation= useNavigation()
  const isNavigating= Boolean(navigation.location)
  console.log(isNavigating)
    return (
      <div>
        <Home></Home>
        <div className="flex">
          <Sidebar></Sidebar>
          {isNavigating && <h1>Loading...</h1>}
          <Outlet></Outlet>
        </div>

        <Footer></Footer>
      </div>
    );
};

export default Root;