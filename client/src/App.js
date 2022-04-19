import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/home';
import Booking from './pages/booking';
import Cancel from './pages/cancel'
// import Modify from './pages/modify'
import ContactPage from './pages/contact';
import GalleryPage from './pages/gallery';
import ScrollToTop from '../src/components/ScrollToTop'
import AdminHome from './pages/Admin/Home'
import AdminLogin from './pages/Admin/AdminLogin'
import ProductList from './pages/Admin/ProductList'
import Product from './pages/Admin/Product'
import New from './pages/Admin/New'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path='/'>
        <Route index element={<Home />} />
        <Route path="book" element={<Booking />} />
        <Route path="cancel" element={<Cancel />} />
        {/* <Route path="/modifybooking" element={<Modify />} /> */}
        <Route path="contact" element={<ContactPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        {/* <Route path="/about" element={<AboutPage />} /> */}

{/* ***********************ADMIN************************* */}

        <Route path="admin" element={<AdminHome />} />
        <Route path="admin-login" element={<AdminLogin />} />

        <Route path="/admin-products">
          <Route index element={<ProductList/>}/>
          <Route path=":productId" element={<Product />} />
          <Route path="new" element={<New />}
              />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
