import React from 'react';
import { NavLink } from 'react-router';
import './sidebar.css'
const Sidebar = () => {
    return (
      <div>
        <aside>
          <li>
            {" "}
            <NavLink className={"nav-Link"} to={"/"}>
              Home
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink className={"nav-Link"} to={"News"}>
              News
            </NavLink>
          </li>
          <li>
            <NavLink className={"nav-Link"} to={"Mobiles"}>
              Mobiles
            </NavLink>
          </li>
          <li>
            <NavLink className={"nav-Link"} to={"Laptop"}>
              Laptop
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-Link" to={"User"}>
              User
            </NavLink>
          </li>
        </aside>
      </div>
    );
};

export default Sidebar;