import React from 'react';
import { Link } from 'react-router';
import './home.css'
const Home = () => {
    return (
      <div>
        <h1>This is header </h1>
        <nav>
          <Link className="Navigationbar" to={"/"}>
            Home
          </Link>
          <Link className="Navigationbar" to={"News"}>
            News
          </Link>
          <Link className="Navigationbar" to={"Mobiles"}>
            Mobiles
          </Link>
          <Link className="Navigationbar" to={"Laptop"}>
            Laptop
          </Link>
        </nav>
      </div>
    );
};

export default Home;