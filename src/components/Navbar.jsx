import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo.jpg'

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate('/searchResult', { state: { searchTerm } });
      setSearchTerm('');
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-100  z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left Section: Logo and Title */}
        <div className="flex items-center space-x-4">
          <img
            src={Logo}
            alt="Logo"
            className="w-10 h-10 rounded-full"
          />
          <h1 className="text-xl font-bold text-gray-800">Chronicle Hub</h1>
        </div>

        {/* Right Section: Links and Search */}
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-500">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-500">About</Link>
          <div className="flex items-center border rounded-lg">
            <input
              type="text"
              placeholder=""
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="outline-none px-6 py-1 w-48 rounded-lg"
            />
            <button
              onClick={handleSearch}
              className="text-white bg-blue-500 px-3  py-1 rounded-md hover:bg-blue-600"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
