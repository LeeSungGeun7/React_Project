
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChatComponent from './pages/WebSocket';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/:roomId" element={<ChatComponent />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
