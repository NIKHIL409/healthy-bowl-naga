import logo from './logo.svg';
import './App.css';
import Login from './modules/login/login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './modules/signup/signup';
import ForgorPassword from './modules/forgortPassword/forgorPassword';
import Dashboard from './modules/dashboard/dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpassword" element={<ForgorPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/order-details" element={<OrderDetails />} />
        <Route path="/order-history" element={<OrderHistory />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/feedback" element={<Feedback />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
