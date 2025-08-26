import React from 'react';
import { Smartphone, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-bg text-white text-2xl mb-6">
            <Smartphone />
          </div>
          <h3 className="text-2xl font-bold mb-4">ASO Growth Consulting</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Helping mobile apps achieve sustainable growth through strategic optimization 
            and data-driven insights.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-400">
            <span className="flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              smileselvakumar07@gmail.com
            </span>
            <span className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              +1 (555) 123-4567
            </span>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-gray-500">
            <p>&copy; {new Date().getFullYear()} ASO Growth Consulting. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;