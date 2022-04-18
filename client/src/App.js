import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/home';
import Booking from './pages/booking';
import Cancel from './pages/cancel'
// import Modify from './pages/modify'
import ContactPage from './pages/contact';
import GalleryPage from './pages/gallery';
import ScrollToTop from '../src/components/ScrollToTop'
// import AboutPage from './pages/about'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Booking />} />
        <Route path="/cancel" element={<Cancel />} />
        {/* <Route path="/modifybooking" element={<Modify />} /> */}
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        {/* <Route path="/about" element={<AboutPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
