import React from "react";
import { PRODUCTS } from "../product";
import { Product } from "./product";
import '../assets/css/shop.css';
import { selectUser } from './redux/UserSlice';
import { useSelector } from 'react-redux';
import Dashboard from "./Dashboard";

export const Shop = () => {
  const user = useSelector(selectUser);
  const email = user.user && user.user.email ? user.user.email : 'Guest';

  return (
    <div className="shop">
      
      <div className="shopTitle">
        <h1>Welcome {email} !</h1>
      </div>

      <div className="content">
        <div className="sidebar">
        <Dashboard/>
        </div>

        <div className="main-content">
          <div className="products">
            {PRODUCTS.map((product) => (
              <Product data={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
