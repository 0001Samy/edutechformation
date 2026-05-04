'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { locale, toggleLocale, t } = useLanguage();

  const navLinks = [
    { href: '/', label: t.common.home },
    { href: '/about', label: t.common.about },
    { href: '/formations', label: t.common.formations },
    { href: '/financement', label: t.footer.financement },
    { href: '/temoignages', label: t.common.testimonials },
    { href: '/contact', label: t.common.contact },
  ];

  return (
    <header className='bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100'>
      <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-20'>
          {/* Logo */}
          <Link href='/' className='hover:opacity-80 transition-opacity'>
            <Image
              src='/edutech-logo.svg'
              alt='Edutech Formations'
              width={180}
              height={50}
              className='h-16 w-auto'
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center gap-1'>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className='text-gray-700 hover:text-primary transition-all px-4 py-2 rounded-lg hover:bg-primary/5 font-medium'
              >
                {link.label}
              </Link>
            ))}

            {/* Bouton FR / EN — affiche le drapeau de la langue cible */}
            <button
              onClick={toggleLocale}
              aria-label={t.header.switchLanguageAriaLabel}
              className='ml-2 inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-gray-200 hover:border-primary hover:text-primary transition-all text-sm font-semibold uppercase tracking-wider text-gray-600'
            >
              <span className='text-lg leading-none' aria-hidden='true'>
                {locale === 'fr' ? '🇬🇧' : '🇫🇷'}
              </span>
              {locale === 'fr' ? 'EN' : 'FR'}
            </button>
          </div>

          {/* Mobile : bouton langue + burger */}
          <div className='flex md:hidden items-center gap-2'>
            <button
              onClick={toggleLocale}
              aria-label={t.header.switchLanguageAriaLabel}
              className='inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-gray-200 text-xs font-bold uppercase text-gray-600'
            >
              <span className='text-base leading-none' aria-hidden='true'>
                {locale === 'fr' ? '🇬🇧' : '🇫🇷'}
              </span>
              {locale === 'fr' ? 'EN' : 'FR'}
            </button>
            <button
              className='p-2 rounded-lg hover:bg-gray-100 transition-colors'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={t.header.toggleMenu}
            >
              {isMenuOpen ? (
                <X size={24} className='text-gray-700' />
              ) : (
                <Menu size={24} className='text-gray-700' />
              )}
            </button>
          </div>
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
