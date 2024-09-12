import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Tires from './pages/Tires';
import Wheels from './pages/Wheels';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Payment from './pages/Payment';
import Delivery from './pages/Delivery';
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Loader from "./pages/Loader"; // Import the Loader

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className='bg-[#fcfcfc]'>
        <Navbar />
        {loading ? (
          <Loader /> 
        ) : (
          <Routes>
            <Route path="/tires" element={<Tires />} />
            <Route path="/wheels" element={<Wheels />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/" element={<Home />} />
          </Routes>
        )}
        <Footer />
      </div>
    </Router>
  );
}

export default App;