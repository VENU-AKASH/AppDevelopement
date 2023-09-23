import React from 'react'
import '../assets/css/Dashboard.css'
const Dashboard = () => {
  return (
    <div>
           
   
    <aside class="sidebar">
        <nav>
            <ul>
                <li><a href="/">Dashboard</a></li>
                <li><a href="/order">Orders</a></li>
                <li><a href="/order">Cart</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/login">Login</a></li>
                
            </ul>
        </nav>
    </aside>

    <main>
    <section class="summary">
           
        </section>
       
        <section class="orders">
           
        </section>
       
        <section class="menu">
           
        </section>
       
        <section class="reservations">
           
        </section>
       
        <section class="settings">
           
        </section>
    </main>

    
       
    </div>
         
  )
}

export default Dashboard