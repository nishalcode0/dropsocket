import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Features', href: '#features'},
    { name: 'Pricing' , href: '#pricing'},
    { name: 'About' , href: '#about'},
  ];

  return (
  <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-linear-to-b from-blue-500/10 via-blue-400/5 to-transparent border-b border-blue-200/20">
    <div className="max-w-7xl mx-auto px-6 py-4">
      <div className="flex items-enter justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
         
            <span className="text-2xl font-bold bg-linear-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            DROPSOCKET
            </span>
          </div>
          { /* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-3.5 bg-linear-to-r from-blue-600 to-blue-400 backdrop-blur-md px-7 py-2 rounded-full border border-blue-300/30">
          {navLinks.map((link) => (
          <a 
          key={link.name}
          href={link.href}
          className="relative px-6 py-2 text-sm font-semibold text-white transition-all duration-300 hover:scale-130"
          >
          
           
          <span className="relative z-10">
                {link.name}
                </span>
              </a>
          ))}
          </div>
          {/* Get Started Button */}

          <div className="hidden md:block">
          <Link
          to="/beta-access"
          className="group relative px-6 py-2.5 rounded-lg font-semibold text-sm overflow-hidden transition-all duration-300 inline-block"
          >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-blue-600 opacity-100 group-hover:opacity-90 transition-opacity duration-300" />

          {/* Shine effect on hover */}
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-500" />

         <span className="relative z-10 text-white">
        Get Started
        </span>
       </Link>
        </div>


          {/* Mobile menu button */}
          <button
           onClick = {() => setIsOpen(!isOpen)}
           className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
          {isOpen ? (
          <svg className="w-6 h-6 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6I12 12"/>
          </svg>
          ) : (
          <svg className="w-6 h-6 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>      
          </svg>
          )
            }
          </button>
        </div>
        {/* Mobile Navigation */}
        {isOpen && (
        <div className="md:hidden mt-4 space-y-2 pb-4 border-t border-white/10 pt-4">
          {navLinks.map((link) => (
          <a 
          key={link.name}
          href={link.href}
          className="block px-4 py-2.5 text-sm font-medium text-white hover:bg-white/10 rounded-lg transition-colors"
          >
          {link.name}
          </a>
          ))}
        <Link
         to="/beta-access"
          className="block w-full px-4 py-2.5 rounded-lg bg-linear-to-r from-blue-500 to-blue-600      text-white font-semibold text-sm hover:opacity-90 transition-opacity text-center"
          >
        Get Started
        </Link> 
          </div>
        )}
      </div>
    </nav>
  );
}
