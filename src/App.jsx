import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Component/Homepage'
import AdminLogin from './Component/AdminLogin'
import ForgotPassword from './Component/ForgotPassword';


function App() {
  return(
    <Router>
      <Routes>
        <Route path = "/" element = {<Homepage />} />
        <Route path = "/admin-login" element = {<AdminLogin />} />
        <Route path = "/forgot-password" element = {<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App