
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GoogleLoginButton from './pages/GoogleLogin';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<GoogleLoginButton />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
