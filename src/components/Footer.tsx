import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import brand icons from React Icons

function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto p-6">

        <div className="mt-6 border-t pt-4 text-gray-500 text-sm flex justify-between items-center">
          <p>© 2023 Airbnb, Inc. • Privacy • Terms • Sitemap • UK Modern Slavery Act • Company details</p>
          <div className="flex space-x-4">
            <span>🌍 English (GB)</span>
            <span>£ GBP</span>
            <div className="flex space-x-4">
              <div className="bg-black  p-1 h-5 w-5">
                <FaFacebookF className="text-white w-3 h-3 cursor-pointer" />
              </div>
              <div className="bg-black p-1 h-5 w-5 ">
                <FaTwitter className="text-white w-3 h-3 cursor-pointer" />
              </div>
              <div className="bg-black p-1 h-5 w-5">
                <FaInstagram className="text-white w-3 h-3 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; // Ensure this is a default export