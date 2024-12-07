import React from 'react';
import Icons from './Icons';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 w-full overflow-x-hidden overflow-y-hidden">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6 sm:px-6 lg:px-8 w-full">
        
        {/* Left Section - Newsletter Signup */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h3 className="text-xl font-semibold mb-3">Bring global news straight to your inbox</h3>
          <p className="text-gray-600">Sign up for our newsletter to get the latest updates.</p>
        </div>

        {/* Right Section - Email Signup */}
        <div className="lg:w-1/2 flex flex-col items-center">
          <input 
            type="email" 
            placeholder="Enter your email" 
            aria-label="Email address input for newsletter signup"
            className="p-3 w-full max-w-md rounded-md border border-gray-300 focus:ring focus:ring-blue-200 outline-none"
          />
          <button 
            aria-label="Subscribe to the newsletter"
            className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all duration-200"
          >
            Get Newsletter
          </button>
        </div>
      </div>

      {/* Divider Line */}
      <hr className="my-8 border-gray-300" />

      {/* Footer Bottom Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6 text-gray-600 px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Left Side - Copyright */}
        <p className="text-center lg:text-left text-sm">
          © 2035 by The Chronicles Hub. All rights reserved.
        </p>
        
        {/* Right Side - Social Icons */}
        <Icons />
      </div>
    </footer>
  )
};

export default Footer;
