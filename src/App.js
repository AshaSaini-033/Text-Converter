
import React ,{ useState } from 'react';
import './App.css';
import Alert from './componant/Alert';
import Navbar from './componant/Navbar';
import Textform from './componant/Textform';
import Diffcolormode from './componant/Diffcolormode';
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';

function App() {
  const [alert, setAlert] = useState('');

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };

  const changemode = () => {
    // Add color mode logic if necessary
  };

  return (
    <Router>
      <Navbar /> {/* Navbar should appear outside of Routes to be accessible on all pages */}

      <Alert alert={alert} /> {/* Alert should also be globally available */}

      <Routes>
        {/* Define routes for different components */}
        <Route
          path="/link"
          element={<Diffcolormode />} // Correct way to use element prop in React Router v6
        />
        <Route
          path="/"
          element={<Textform heading="I am a heading of props" para="required" showAlert={showAlert} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
