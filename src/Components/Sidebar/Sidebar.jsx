import React from 'react';
import { NavLink } from 'react-router';
import './sidebar.css'
const Sidebar = () => {
    return (
      <div>
        <aside>
          <li>
            {" "}
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to={"News"}>News</NavLink>
          </li>
          <li>
            <NavLink to={"Mobiles"}>Mobiles</NavLink>
          </li>
          <li>
            <NavLink to={"Laptop"}>Laptop</NavLink>
          </li>
        </aside>
      </div>
    );
};

export default Sidebar;