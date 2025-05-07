import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Component/Homepage'
import AdminLogin from './Component/AdminLogin'


function App() {
  return(
    <Router>
      <Routes>
        <Route path = "/" element = {<Homepage />} />
        <Route path= "/admin-login" element = {<AdminLogin />} />
      </Routes>
    </Router>
  );
}

export default App