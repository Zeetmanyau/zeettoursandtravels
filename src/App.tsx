import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import CarRentals from './pages/CarRentals';
import CarDetail from './pages/CarDetail';
import TravelPackages from './pages/TravelPackages';
import PackageDetail from './pages/PackageDetail';
import AirportTransfer from './pages/AirportTransfer';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-stone-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/car-rentals" element={<CarRentals />} />
          <Route path="/car/:id" element={<CarDetail />} />
          <Route path="/travel-packages" element={<TravelPackages />} />
          <Route path="/package/:id" element={<PackageDetail />} />
          <Route path="/airport-transfer" element={<AirportTransfer />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;