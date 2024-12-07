import React from 'react';
import { Link } from 'react-router-dom';

const CategoryButtons = () => {
  return (
    <div className="w-full bg-slate-100 text-gray-700 fixed top-16 z-40">
      <div className="flex justify-around py-3">
        <Link
          to="/business"
          className="text-gray-700 px-6 py-2 rounded-md hover:text-blue-700 transition duration-200 "
        >
          Business
        </Link>
        <Link
          to="/space"
          className="text-gray-700 px-6 py-2 rounded-md hover:text-blue-700 transition duration-200"
        >
          Space
        </Link>
        <Link
          to="/technology"
          className="text-gray-700 px-6 py-2 rounded-md hover:text-blue-700 transition duration-200"
        >
          Technology
        </Link>
        <Link
          to="/entertainment"
          className="text-gray-700 px-6 py-2 rounded-md hover:text-blue-600 transition duration-200"
        >
          Entertainment
        </Link>

        <Link
          to="/movies"
          className="text-gray-700 px-6 py-2 rounded-md hover:text-blue-600 transition duration-200"
        >
          Movies
        </Link>

        <Link
          to="/science"
          className="text-gray-700 px-6 py-2 rounded-md hover:text-blue-600 transition duration-200"
        >
          Science
        </Link>

        <Link
          to="/politics"
          className="text-gray-700 px-6 py-2 rounded-md hover:text-blue-600 transition duration-200"
        >
          Politics
        </Link>

        <Link
          to="/fashion"
          className="text-gray-700 px-6 py-2 rounded-md hover:text-blue-600 transition duration-200"
        >
          Fashion
        </Link>

        <Link
          to="/weather"
          className="text-gray-700 px-6 py-2 rounded-md hover:text-blue-600 transition duration-200"
        >
          Weather
        </Link>
      </div>
    </div>
  );
};

export default CategoryButtons;
