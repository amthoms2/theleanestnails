import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";
// import { useState, useEffect } from 'react';
// import AuthService from './services/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home';
import Booking from './pages/booking';
import Cancel from './pages/cancel';
// import Modify from './pages/modify'
import ContactPage from './pages/contact';
import GalleryPage from './pages/gallery';
import ScrollToTop from '../src/components/ScrollToTop';
import AdminHome from './pages/Admin/Home';
import AdminLogin from './pages/Admin/AdminLogin';
import ProductList from './pages/Admin/ProductList';
import ProductPage from './pages/Admin/Product';
import New from './pages/Admin/New';
import NewBooking from './pages/Admin/NewBooking';
import AdminBookings from './pages/Admin/AdminBookings';
import AdminTimeSlots from './pages/Admin/AdminTimeSlots';
import NewTimeSlot from './pages/Admin/NewTimeSlot';
import TimeSlot from './pages/Admin/ViewTimeSlot';

function App() {
  const admin = useSelector((state) => {
    if (state.user.currentUser) {
      return state.user.currentUser.isAdmin
    }
    return false
  });

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="book" element={<Booking />} />
          <Route path="cancel" element={<Cancel />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="/login" element={admin ? <Navigate to="/admin" /> : <AdminLogin />}/>
          {/* <Route path="/about" element={<AboutPage />} /> */}
          {/* <Route path="/modifybooking" element={<Modify />} /> */}

          {/* ***********************ADMIN************************* */}
          {admin && (
            <>
              <Route path="admin">
                <Route index element={<AdminHome />} />
              </Route>

              <Route path="admin/products">
                <Route index element={<ProductList />} />
                <Route path=":productId" element={<ProductPage />} />
                <Route path="new" element={<New />} />
              </Route>

              <Route path="admin/bookings">
                <Route index element={<AdminBookings />} />
                {/* <Route path=":productId" element={<ProductPage />} /> */}
                <Route path="new" element={<NewBooking />} />
              </Route>

              <Route path="admin/time-slots">
                <Route index element={<AdminTimeSlots />} />
                <Route path=":availabilityId" element={<TimeSlot />} />
                <Route path="new" element={<NewTimeSlot />} />
              </Route>
            </>
           )}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
