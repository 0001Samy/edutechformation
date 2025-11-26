'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/about', label: 'À propos' },
    { href: '/cours', label: 'Formations' },
    { href: '/temoignages', label: 'Témoignages' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className='bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100'>
      <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-20'>
          {/* Logo */}
          <Link
            href='/'
            className='text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity'
          >
            EduTech Formation
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex space-x-1'>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className='text-gray-700 hover:text-primary transition-all px-4 py-2 rounded-lg hover:bg-primary/5 font-medium'
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className='md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label='Toggle menu'
          >
            {isMenuOpen ? (
              <X size={24} className='text-gray-700' />
            ) : (
              <Menu size={24} className='text-gray-700' />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className='md:hidden py-4 space-y-1 border-t border-gray-100'>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className='block py-3 px-4 text-gray-700 hover:text-primary hover:bg-primary/5 transition-all rounded-lg font-medium'
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
