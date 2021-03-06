import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Cart from './components/Cart';
import Home from './components/Home';
import PaymentPolicy from './components/PaymentPolicy';
import Contact from './components/Contact';
import Returns from './components/Returns';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Home />}>            
          </Route>
          <Route path="/cart" element={<Cart />}>            
          </Route>
          <Route path="/contact" element={<Contact />}>            
          </Route>
          <Route path="/paymentpolicy" element={<PaymentPolicy />}>            
          </Route>
          <Route path="/returns" element={<Returns />}>            
          </Route>
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
