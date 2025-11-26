import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className='bg-gray-900 text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          {/* About */}
          <div>
            <h3 className='text-xl font-bold mb-4 text-accent'>
              EduTech Formation
            </h3>
            <p className='text-gray-400'>
              Formations professionnelles de qualité pour développer vos
              compétences.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className='font-semibold mb-4'>Navigation</h4>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/about'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href='/cours'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  Formations
                </Link>
              </li>
              <li>
                <Link
                  href='/temoignages'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  Témoignages
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className='font-semibold mb-4'>Contact</h4>
            <ul className='space-y-2 text-gray-400'>
              <li>Email: contact@edutechformation.com</li>
              <li>Tel: +33 1 23 45 67 89</li>
              <li>
                <Link
                  href='/contact'
                  className='hover:text-white transition-colors'
                >
                  Formulaire de contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className='font-semibold mb-4'>Suivez-nous</h4>
            <div className='flex space-x-4'>
              <a
                href='#'
                className='text-gray-400 hover:text-white transition-colors'
                aria-label='Facebook'
              >
                <Facebook size={24} />
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-white transition-colors'
                aria-label='Twitter'
              >
                <Twitter size={24} />
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-white transition-colors'
                aria-label='LinkedIn'
              >
                <Linkedin size={24} />
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-white transition-colors'
                aria-label='Instagram'
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className='border-t border-gray-800 mt-8 pt-8 text-center text-gray-400'>
          <p>
            &copy; {new Date().getFullYear()} EduTech Formation. Tous droits
            réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
