
import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import Layout from './layout/Layout';
import CarSerach from './pages/CarSearch';

function App() {
  return (
   <>
   <Router>
      <Routes>
        <Route path="/" element={<Layout/>} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Car" element={<CarSerach />} />

      </Routes>
    </Router>
   
   </>
  );
}

export default App;
