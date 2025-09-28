import React from 'react';
import { Outlet } from 'react-router';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
import './Root.css'
const Root = () => {
    return (
      <div>
        <Home></Home>
        <div className='flex'>
          <Sidebar></Sidebar>
          <Outlet></Outlet>
        </div>

        <Footer></Footer>
      </div>
    );
};

export default Root;