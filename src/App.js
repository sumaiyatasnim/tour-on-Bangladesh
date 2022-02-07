import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import Booking from './Pages/Booking/Booking';
import Login from './Login/Login';
import Register from './Login/Register';
import AuthProvider from './Context/AuthProvider';
import AddServices from './Pages/AddServices/AddServices';
import MyOrders from './Pages/Dashboard/MyOrder/MyOrders';
import BookingForm from './Pages/Booking/BookingForm';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Footer from './Shared/Footer';


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path={'/booking/:productId'} element={<BookingForm />} />
          <Route path="/addServices" element={<PrivateRoute>
            <AddServices></AddServices>
          </PrivateRoute>} />
          <Route path="/myOrder" element={<PrivateRoute>
            <MyOrders></MyOrders>
          </PrivateRoute>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
