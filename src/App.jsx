import './App.css';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import ParticlesBackground from 'react-tsparticles';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
     
    <div id="container">
      <Sidebar />
      <ParticlesBackground />
      <main id="main-content">
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/message" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
