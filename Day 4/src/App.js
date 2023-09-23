import { BrowserRouter as Router,Routes,Route}  from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup';

import Dashboard from './components/Dashboard';
import './assets/css/Login.css';
import './assets/css/Signup.css';
import Order from './components/Order';

function App() {
  return (
    <div className="App">
      <Router>
        
        <Routes>
       
          <Route path="/" element={<orders/>}/>
          <Route path="/login" element={<Login/>}/>
        <Route path="/dash" element={<Dashboard/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/order" element={<Order/>}/>
        
        </Routes>
      </Router>
    </div>
  );
}

export default App;