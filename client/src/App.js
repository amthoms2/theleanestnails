import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import useLocalStorageState from './components/Hooks/useLocalStorageState'

function App() {
  const [admin] = useLocalStorageState("user", "");

  // const [admin, setAdmin] = useState(undefined)
  // useEffect(() => {
  //   const admin = AuthService.getCurrentUser();
  //   console.log('user use effect app', admin);
  //   if (admin && admin.isAdmin === true) {
  //     setAdmin(admin);
  //     // setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
  //     // setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
  //   }
  // }, []);



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
          {/* <Route path="login">{admin ? navigate("/admin") : <AdminLogin /> }</Route> */}
          <Route path="login" element={<AdminLogin />} />
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
