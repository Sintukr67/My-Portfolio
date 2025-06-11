import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-gray-900/80 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Sintu Kumar</h3>
            <p className="text-gray-400">Electronics & Communications Engineering Student</p>
          </div>

          <div className="flex items-center justify-center gap-8 mb-8 text-sm text-gray-400">
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#education" className="hover:text-blue-400 transition-colors">Education</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
            <a href="#achievements" className="hover:text-blue-400 transition-colors">Achievements</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex items-center justify-center gap-2 text-gray-400 mb-4">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>and</span>
              <Code className="w-4 h-4 text-blue-400" />
              <span>by Sintu Kumar</span>
            </div>
            
            <p className="text-gray-500 text-sm">
              © {currentYear} Sintu Kumar. All rights reserved.
            </p>
            
            <p className="text-gray-600 text-xs mt-2">
              Built with React, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;