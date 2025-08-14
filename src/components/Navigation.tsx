import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Car, MapPin, User, Phone, Menu, X, HelpCircle, Plane } from 'lucide-react';

const Navigation = () => {
  const [, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home', icon: null },
    { path: '/car-rentals', label: 'Car Rentals', icon: Car },
    { path: '/travel-packages', label: 'Travel Packages', icon: MapPin },
    { path: '/airport-transfer', label: 'Airport Transfer', icon: Plane },
    { path: '/about', label: 'About Us', icon: User },
    { path: '/faq', label: 'FAQ', icon: HelpCircle },
    { path: '/contact', label: 'Contact', icon: Phone },
  ];

  return (
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/95 shadow-2xl border-b border-yellow-600/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo and Brand */}
            <Link to="/" className="group relative flex items-center space-x-3">
              {/* Logo Image */}
              <div className="relative">
                <img
                    src="/logobg.png"
                    alt="Zeet Tours & Travels Logo"
                    className="h-16 w-16 object-contain group-hover:scale-110 transition-transform duration-300"
                />
                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-yellow-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              </div>

              {/* Brand Text */}
              <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 bg-clip-text text-transparent group-hover:from-yellow-500 group-hover:via-yellow-400 group-hover:to-yellow-500 transition-all duration-300 whitespace-nowrap">
                Zeet Tours and Travels
              </span>
              </div>

              {/* Subtle underline effect */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-600 to-yellow-500 group-hover:w-full transition-all duration-300"></div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;

                return (
                    <Link
                        key={item.path}
                        to={item.path}
                        className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-yellow-50 ${
                            isActive
                                ? 'bg-gradient-to-r from-yellow-600 to-yellow-500 text-white shadow-lg'
                                : 'text-gray-700 hover:text-gray-900'
                        }`}
                    >
                      {Icon && <Icon className="h-4 w-4" />}
                      <span>{item.label}</span>
                    </Link>
                );
              })}
            </div>

            {/* Mobile menu button */}
            <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-yellow-50 transition-all duration-300"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
              <div className="md:hidden absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-yellow-600/20">
                <div className="px-4 py-4 space-y-2">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.path;

                    return (
                        <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                                isActive
                                    ? 'bg-gradient-to-r from-yellow-600 to-yellow-500 text-white shadow-lg'
                                    : 'text-gray-700 hover:text-gray-900 hover:bg-yellow-50'
                            }`}
                        >
                          {Icon && <Icon className="h-5 w-5" />}
                          <span>{item.label}</span>
                        </Link>
                    );
                  })}
                </div>
              </div>
          )}
        </div>
      </nav>
  );
};

export default Navigation;