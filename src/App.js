
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing } from "./pages/Landing";

import '@fortawesome/fontawesome-free/css/all.min.css';

// Tailwind CSS Style Sheet
import './assets/styles/tailwind.css';
import Intro from "./pages/Intro";


function App() {
  
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing/>} />
        <Route exact path="intro" element={<Intro/>} />
      </Routes>
    </Router>
  );
}

export default App;
