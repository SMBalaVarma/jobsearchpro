
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent background scrolling when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const scrollToTop = () => {
    navigate('/');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-2 sm:py-3 md:py-4 transition-all duration-300",
        isScrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <a 
          href="#" 
          className="flex items-center space-x-2"
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
          }}
          aria-label="JobSearch Pro"
        >
          <div className="text-lg sm:text-xl font-display font-bold text-pulse-600">Jobard.de</div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          <Link to="/" className={cn("nav-link text-sm xl:text-base", window.location.pathname === "/" && "text-pulse-600 font-semibold")}>Startseite</Link>
          <Link to="/browse-jobs" className={cn("nav-link text-sm xl:text-base", window.location.pathname === "/browse-jobs" && "text-pulse-600 font-semibold")}>Jobs Finden</Link>
          <Link to="/companies" className={cn("nav-link text-sm xl:text-base", window.location.pathname === "/companies" && "text-pulse-600 font-semibold")}>Unternehmen</Link>
          <Link to="/resources" className={cn("nav-link text-sm xl:text-base", window.location.pathname === "/resources" && "text-pulse-600 font-semibold")}>Ressourcen</Link>
          <div className="flex items-center space-x-3 xl:space-x-4 ml-3 xl:ml-4">
            <Link to="/sign-in" className="text-gray-700 hover:text-pulse-500 font-medium text-sm xl:text-base">Anmelden</Link>
            <Link to="/post-job" className="bg-pulse-500 hover:bg-pulse-600 text-white px-3 xl:px-4 py-2 rounded-full font-medium transition-colors text-sm xl:text-base">Job Inserieren</Link>
          </div>
        </nav>

        {/* Tablet Navigation */}
        <nav className="hidden md:flex lg:hidden items-center space-x-4">
          <Link to="/browse-jobs" className={cn("nav-link text-sm", window.location.pathname === "/browse-jobs" && "text-pulse-600 font-semibold")}>Jobs</Link>
          <Link to="/companies" className={cn("nav-link text-sm", window.location.pathname === "/companies" && "text-pulse-600 font-semibold")}>Firmen</Link>
          <div className="flex items-center space-x-2">
            <Link to="/sign-in" className="text-gray-700 hover:text-pulse-500 font-medium text-sm">Login</Link>
            <Link to="/post-job" className="bg-pulse-500 hover:bg-pulse-600 text-white px-3 py-1.5 rounded-full font-medium transition-colors text-sm">Job +</Link>
          </div>
        </nav>

        {/* Mobile menu button - increased touch target */}
        <button 
          className="md:hidden text-gray-700 p-3 focus:outline-none" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation - improved for better touch experience */}
      <div className={cn(
        "fixed inset-0 z-50 bg-white/95 backdrop-blur-md flex flex-col md:hidden transition-all duration-300 ease-in-out",
        isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
      )}>
        {/* Close button in mobile menu */}
        <div className="flex justify-end p-4">
          <button 
            className="text-gray-700 p-2 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        
        <nav className="flex flex-col space-y-6 items-center mt-4">
          <Link 
            to="/" 
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100" 
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Startseite
          </Link>
          <Link 
            to="/browse-jobs" 
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100" 
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Jobs Finden
          </Link>
          <Link 
            to="/companies" 
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100" 
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Unternehmen
          </Link>
          <Link 
            to="/resources" 
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100" 
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Ressourcen
          </Link>
          <div className="flex flex-col space-y-4 w-full pt-6 border-t border-gray-200">
            <Link to="/sign-in" className="text-lg font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100">Anmelden</Link>
            <Link to="/post-job" className="bg-pulse-500 hover:bg-pulse-600 text-white text-lg font-medium py-3 px-6 w-full text-center rounded-lg">Job Inserieren</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
