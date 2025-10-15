import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg text-primary' 
          : 'bg-primary/90 backdrop-blur-sm text-white'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a 
            href="#about"
            className="group flex items-center gap-3"
          >
            <div className={`p-2 rounded-xl transition-all ${
              isScrolled 
                ? 'bg-primary text-white' 
                : 'bg-white/20 text-white'
            }`}>
              <span className="text-2xl font-bold">NBT</span>
            </div>
            <span className="hidden md:block font-semibold group-hover:scale-105 transition-transform">
              Nguyen Ba Thien
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#about" 
              className={`font-semibold transition-all hover:scale-110 relative group ${
                isScrolled ? 'hover:text-primary-dark' : 'hover:text-blue-200'
              }`}
            >
              Giới thiệu
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all ${
                isScrolled ? 'bg-primary' : 'bg-white'
              }`}></span>
            </a>
            <a 
              href="#skills" 
              className={`font-semibold transition-all hover:scale-110 relative group ${
                isScrolled ? 'hover:text-primary-dark' : 'hover:text-blue-200'
              }`}
            >
              Kỹ năng
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all ${
                isScrolled ? 'bg-primary' : 'bg-white'
              }`}></span>
            </a>
            <a 
              href="#projects" 
              className={`font-semibold transition-all hover:scale-110 relative group ${
                isScrolled ? 'hover:text-primary-dark' : 'hover:text-blue-200'
              }`}
            >
              Dự án
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all ${
                isScrolled ? 'bg-primary' : 'bg-white'
              }`}></span>
            </a>
            <a 
              href="#contact" 
              className={`px-6 py-2.5 rounded-full font-bold transition-all transform hover:scale-110 shadow-lg ${
                isScrolled 
                  ? 'bg-primary text-white hover:bg-primary-dark' 
                  : 'bg-white text-primary hover:bg-blue-50'
              }`}
            >
              Liên hệ
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <a 
              href="#about" 
              className="block py-2 px-4 rounded-lg hover:bg-white/10 transition-colors font-semibold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Giới thiệu
            </a>
            <a 
              href="#skills" 
              className="block py-2 px-4 rounded-lg hover:bg-white/10 transition-colors font-semibold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Kỹ năng
            </a>
            <a 
              href="#projects" 
              className="block py-2 px-4 rounded-lg hover:bg-white/10 transition-colors font-semibold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Dự án
            </a>
            <a 
              href="#contact" 
              className={`block py-2 px-4 rounded-lg text-center font-bold transition-colors ${
                isScrolled 
                  ? 'bg-primary text-white hover:bg-primary-dark' 
                  : 'bg-white text-primary hover:bg-blue-50'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Liên hệ
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
