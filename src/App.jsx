import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Explore from './pages/Explore';
import Contact from './pages/Contact';
import OurBrand from './pages/OurBrand';
import YesBrand from './pages/YesBrand';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-brand" element={<OurBrand />} />
          <Route path="/about" element={<About />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h2 className="PageNotFound">Page Not Found</h2>} />
          <Route path="/next-brand" element={<h2 className="ComingSoon">Coming soon...</h2>} />
          <Route path="/yes-brand" element={<YesBrand />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;