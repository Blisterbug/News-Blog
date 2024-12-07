import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo.jpg';

const ResNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate('/searchResult', { state: { searchTerm } });
      setSearchTerm('');
      setIsMenuOpen(false); // Close the menu after search
      window.scrollTo(0, 0); // Scroll to the top
    }
  };

  // Close the Categories Dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsCategoriesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle link click to close the menu and scroll to top
  const handleLinkClick = () => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="pt-2 shadow-sm fixed top-0 left-0 w-full z-50
    bg-gray-100">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left Section: Logo and Title */}
        <div className="flex items-center space-x-3">
          <img src={Logo} alt="Logo" className="w-12 h-12 rounded-full" />
          <span className="text-4xl font-extrabold text-gray-800">
            <Link to="/" className='text-gray-800 hover:text-black'>Buzzed</Link>
          </span>
        </div>

        {/* Right Section: Links and Search */}
        <div className="hidden lg:flex items-center space-x-6">
          <Link to="/" className="font-semibold text-gray-700 hover:text-blue-500 transition-all duration-100 ease-in-out">Home</Link>

          {/* Categories Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <span
              onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
              className="cursor-pointer font-semibold text-gray-700 hover:text-blue-500 transition-all duration-100 ease-in-out"
            >
              Categories
            </span>
            {isCategoriesOpen && (
              <ul className="absolute bg-gray-100 shadow-lg p-6 mt-2 rounded-lg space-y-4 z-10 w-40 text-gray-700">
                <li><Link to="/technology" className="text-gray-700 hover:text-blue-500">Technology</Link></li>
                <li><Link to="/business" onClick={handleLinkClick} className="text-gray-700 hover:text-blue-500">Business</Link></li>
                <li><Link to="/entertainment" onClick={handleLinkClick} className="text-gray-700 hover:text-blue-500">Entertainment</Link></li>
                <li><Link to="/movies" onClick={handleLinkClick} className="text-gray-700 hover:text-blue-500">Movies</Link></li>
                <li><Link to="/fashion" onClick={handleLinkClick} className="text-gray-700 hover:text-blue-500">Fashion</Link></li>
                <li><Link to="/science" onClick={handleLinkClick} className="text-gray-700 hover:text-blue-500">Science</Link></li>
                <li><Link to="/weather" onClick={handleLinkClick} className="text-gray-700 hover:text-blue-500">Weather</Link></li>
                <li><Link to="/space" onClick={handleLinkClick} className="text-gray-700 hover:text-blue-500">Space</Link></li>
                <li><Link to="/politics" onClick={handleLinkClick} className="text-gray-700 hover:text-blue-500">Politics</Link></li>
              </ul>
            )}
          </div>

          <Link to="/about" className="font-semibold text-gray-600 hover:text-blue-500 transition-all duration-100 ease-in-out">About</Link>
          <div className="flex items-center border rounded-lg">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 outline-none rounded-l-lg"
            />
            <button
              onClick={handleSearch}
              className="bg-white text-gray-700 px-3 py-2 rounded-r-lg hover:bg-gray-400 hover:text-white border-none"
            >
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>

        {/* Hamburger Menu for Small Devices */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden flex items-center px-3 py-2 border rounded text-gray-600 border-gray-600 hover:text-black hover:border-black"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white p-4 shadow-md rounded-lg">
          <Link to="/" onClick={handleLinkClick} className="block px-4 py-2 hover:text-blue-500">Home</Link>
          <Link to="/about" onClick={handleLinkClick} className="block px-4 py-2 hover:text-blue-500">About</Link>

          <div className="mt-2">
            <div className="flex items-center border rounded-lg border-none">
              <input
                type="text"
                placeholder="Click Here to Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-4 py-1 border-gray-400 rounded-l-lg"
              />
              <button
                onClick={handleSearch}
                className="bg-blue-500 text-white px-3 py-1 rounded-r-lg hover:bg-blue-600"
              >
                Search
              </button>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-md font-semibold px-4 mb-4">Categories</h3>
            <ul className="space-y-4 px-4">
              <li><Link to="/technology" onClick={handleLinkClick} className="hover:text-blue-500">Technology</Link></li>
              <li><Link to="/business" onClick={handleLinkClick} className="hover:text-blue-500">Business</Link></li>
              <li><Link to="/entertainment" onClick={handleLinkClick} className="hover:text-blue-500">Entertainment</Link></li>
              <li><Link to="/movies" onClick={handleLinkClick} className="hover:text-blue-500">Movies</Link></li>
              <li><Link to="/fashion" onClick={handleLinkClick} className="hover:text-blue-500">Fashion</Link></li>
              <li><Link to="/science" onClick={handleLinkClick} className="hover:text-blue-500">Science</Link></li>
              <li><Link to="/weather" onClick={handleLinkClick} className="hover:text-blue-500">Weather</Link></li>
              <li><Link to="/space" onClick={handleLinkClick} className="hover:text-blue-500">Space</Link></li>
              <li><Link to="/politics" onClick={handleLinkClick} className="hover:text-blue-500">Politics</Link></li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default ResNavbar;
