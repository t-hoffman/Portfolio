import './App.css';

// IMPORT COMPONENTS
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import { Route, Routes } from 'react-router-dom';
// IMPORT PAGES
import Home from 'Pages/Home';
import About from 'Pages/About';
import Projects from 'Pages/Projects';

export default function App () {
  //const URL = '';

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </div>
  );
}
