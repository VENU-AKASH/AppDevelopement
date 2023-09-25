import { BrowserRouter as Router,Routes,Route}  from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup';
// import Navbar from './components/Navbar';

import Contact from './components/Contact';
// import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import './assets/css/Login.css';
import './assets/css/Signup.css';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import PrivacyPolicy from './components/Privacy';
import Terms from './components/Terms';
import Navbar from './components/Navbar';
import { Shop } from './components/shop';
import { Cart } from './components/cart';
import { ShopContextProvider } from './context/shop-context';

function App() {
  return (
    <div className="App">

<ShopContextProvider>
      <Router>
        <Navbar/>
        
        <Routes>
        
          <Route path="/" element={<Login/>}/>
          <Route path="/login" element={<Login/>}/>
        <Route path="/dash" element={<Dashboard/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/side" element={<Sidebar/>}/>
          <Route path="/privacy" element={<PrivacyPolicy/>}/>
          <Route path="/terms" element={<Terms/>}/>
          <Route path="/shop" element={<Shop />} />
      
            <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    
      </ShopContextProvider>
          
    </div>
  );
}

export default App;