import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Booking from './pages/booking';
import Home from './pages/home';
// import ContactPage from './pages/contact';
// import AboutPage from './pages/about'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/book" element={<Booking />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
