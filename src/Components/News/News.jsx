import React from 'react';
import { Outlet } from 'react-router';

const News = () => {
    return (
        <div>
          <h1> This is news Part show in ui on condition</h1>  
          <Outlet></Outlet>
        </div>
    );
};

export default News;<h1> This is news Part show in ui on condition</h1>