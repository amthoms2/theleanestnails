import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Booking from './pages/booking';
import PracticePage from './pages/practice'
// import ContactPage from './pages/contact';
// import AboutPage from './pages/about'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Booking />} />
        <Route path="/practice" element={<PracticePage />} />
        {/* <Route path="/contact" element={<ContactPage />} /> */}
        {/* <Route path="/about" element={<AboutPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
