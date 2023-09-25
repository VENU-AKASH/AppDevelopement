import React from 'react';
import '../assets/Order.css';
import  Dashboard from  '../components/Dashboard'
import { useSelector } from 'react-redux';
import { selectUser } from '../components/redux/UserSlice';

const products = [
  {
    name: 'Product 1',
    price: 'Rs.1000',
    
    imageSrc: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSTKL6Qq6ohu2tu5O7LMcQ8DkLjTQ1BKziJjN1uo3MUDcGyzhzww-FQPlcu-P75NFkKvMiELvaQ6MW3GzE8YSR-IjTx6xiawirnZ58QExaNBGMy5hu2R1bL',
  },
  {
    name: 'Product 2',
    price: 'Rs.350',
    
    imageSrc: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTKv4Hmc5HOMWRfvmhX2cSGjGbNVHAQr2i2Zxja73c3E74r1W8b_uuKIQXyyu7lDU1PDbKGQ_S55wq4iCDoovABaTWC3-67OxHvm57PWeeU_KOGleAN-jRhvA',
  },
  {
    name: 'Product 3',
    price: 'Rs.700',
   
    imageSrc: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRDAxUZwh9aPQXFr3GPK3atyP3pOeUw54YDJGweEx84J58eu5d4BpP3QeR2w6kT_LyCHcvJyb1WuSOFdblefas2EiyxL1HwmkjbZHuYjiIVBV9aNuI9DbZM',
  },
  {
    name: 'Product 4',
    price: 'Rs.1100',
    
    imageSrc: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTUFBc5UCLMDncX-NPPQGuYq473c-DTLDFhI2l7Ei-0TYwwgYnHajI8k2zlwPAyP5TH5AOhIq6K0xWmIe-siLGj7KPMR5qrXGDB3uyYn1bX7XIPfFOdxmtqHA',
  },{
    name: 'Product 5',
    price: 'Rs.900',

    imageSrc: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSOArKz5LmHnnxq18OPc7rn1S0UElKUfBuY_Y4NRLI38UT5eA6B8nMZnsIt7vwZ0L506Ax6m8hvZahzO-ZwiAN0fei8SOWZhYeUfppxDzq8OsR6tp7nB9-P',
  },{
    name: 'Product 6',
    price: 'Rs.850',
    imageSrc: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSxXJUNLHpk31bawwdE7E3yP5CIichPztms3zpqDHi8P1_6Pe5j56MN75eNO66K43mzGbx2m5mEHTT83hL7lOdZGLR6Wfe4VN6vPHeMOQy7ESx57hlaX0uz',
  },
  {
    name: 'Product 7',
    price: 'Rs.750',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQjxLQwymMiWxQo552KTyRnnU4T4_m1u_E1-Or3idu8keQn383FPwPYUs2W9d64qBbAw7HeHdl8t17eK2Bs8tCprZRjCbcVfFsKZaUGNnLqdNqm6x0Mn-tDWA',
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

export default Order;