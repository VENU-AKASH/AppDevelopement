import React from 'react';
import '../assets/css/Order.css'
import  Dashboard from  '../components/Dashboard'
import { useSelector } from 'react-redux';
import { selectUser } from './redux/UserSlice';
// import '../assets/css/Dashboard.css'
const products = [
  {
    name: 'Product 1',
    price: '$25.99',
  
    imageSrc: 'https://images.pexels.com/photos/1974520/pexels-photo-1974520.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Product 2',
    price: '$19.99',
    
    imageSrc: 'https://images.pexels.com/photos/18313808/pexels-photo-18313808/free-photo-of-motorbike-parked-on-the-sidewalk.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Product 3',
    price: '$19.99',
 
    imageSrc: 'https://images.pexels.com/photos/18244275/pexels-photo-18244275/free-photo-of-electric-bike-in-front-of-the-gate-of-a-stone-building.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Product 4',
    price: '$19.99',
    
    imageSrc: 'https://images.pexels.com/photos/2130611/pexels-photo-2130611.jpeg?auto=compress&cs=tinysrgb&w=600',
  },{
    name: 'Product 5',
    price: '$19.99',
    
    imageSrc: 'https://images.pexels.com/photos/3599586/pexels-photo-3599586.jpeg?auto=compress&cs=tinysrgb&w=600',
  },{
    name: 'Product 6',
    price: '$19.99',
    
    imageSrc: 'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  // Add more products here
];

function Order() {
  
  const user=useSelector(selectUser);
  const email=user.user && user.user.email? user.user.email:'Guest';
  return (
    <div className="order-page">
      <Dashboard />
      <div className="content">
        <h1 className="title">{email}</h1>
        <div className="product-list">
          {products.map((product, index) => (
            <div className="product" key={index}>
              <img src={product.imageSrc} alt={product.name} />
              <h2 className="product-name">{product.name}</h2>
              <p className="product-price">{product.price}</p>
              <p className="product-features">{product.features}</p>
            </div>
          ))}
        </div>
      </div>
    </div>  
  );
}

export default Order;