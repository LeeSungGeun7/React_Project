
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PublicApi from './pages/PublicApi';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PublicApi />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
