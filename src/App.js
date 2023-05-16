
import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import Layout from './layout/Layout';
import CarSerach from './pages/CarSearch';
import Mypage from './pages/MyPage';
import ModifyInfo from './pages/ModifyInfo';
import InterestStation from "./pages/InterestStation"
import InquriyCost from './pages/InquriyCost';

function App() {
  return (
   <>
   <Router>
      <Routes>
        <Route path="/Car" element={<CarSerach/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />} />
        <Route path="/MyPage" element={<Mypage />} />
        <Route path="/ModifyInfo" element={<ModifyInfo />} />
        <Route path="/InterestStation" element={<InterestStation />} />
        <Route path="/InquriyCost" element={<InquriyCost />} />
      </Routes>
    </Router>
    
   </>
  );
}

export default App;
