import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-gray-900 to-gray-800 text-white text-center py-8">
      <div className="container mx-auto flex flex-col items-center">
        <h3 className="text-xl font-bold mb-4">Connect with us</h3>
        <div className="flex space-x-4 mb-4">
          <a href="#" className="text-white hover:text-gray-400 transition-colors duration-300">
            <FaFacebook />
          </a>
          <a href="#" className="text-white hover:text-gray-400 transition-colors duration-300">
            <FaTwitter />
          </a>
          <a href="#" className="text-white hover:text-gray-400 transition-colors duration-300">
            <FaLinkedin />
          </a>
        </div>
        <p className="text-sm text-gray-400">For inquiries, email us at info@swiftinvoice.com</p>
        <p className="text-sm text-gray-400 mt-2">&copy; 2024 Swiftinvoice. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
