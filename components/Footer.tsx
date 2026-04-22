import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className='bg-gray-900 text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* About */}
          <div>
            <h3 className='text-xl font-bold mb-4 text-accent'>
              EduTech Formation
            </h3>
            <p className='text-gray-400 mb-4'>
              Formations professionnelles de qualité pour développer vos
              compétences.
            </p>
            <p className='text-gray-400 text-sm'>
              SAS au capital de 1 000 €
              <br />
              SIREN : 977 619 089
            </p>
          </div>

          {/* Navigation */}
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
              <li>
                <Link
                  href='/qualiopi'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  Certification Qualiopi
                </Link>
              </li>
              <li>
                <Link
                  href='/financement'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  Financement
                </Link>
              </li>
              <li>
                <Link
                  href='/accessibilite'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  Accessibilité
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className='font-semibold mb-4'>Contact</h4>
            <ul className='space-y-2 text-gray-400'>
              <li>
                <a
                  href='mailto:contact@edutechformations.com'
                  className='hover:text-white transition-colors'
                >
                  contact@edutechformations.com
                </a>
              </li>
              <li>
                <a
                  href='tel:+33662091892'
                  className='hover:text-white transition-colors'
                >
                  06 62 09 18 92
                </a>
              </li>
              <li>52 rue Montesquieu, 92600 Asnières-sur-Seine</li>
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

          {/* Légal + Social */}
          <div>
            <h4 className='font-semibold mb-4'>Informations légales</h4>
            <ul className='space-y-2 mb-6'>
              <li>
                <Link
                  href='/mentions-legales'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link
                  href='/cgv'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  CGV
                </Link>
              </li>
              <li>
                <Link
                  href='/confidentialite'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  Confidentialité
                </Link>
              </li>
              <li>
                <Link
                  href='/reglement'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  Règlement intérieur
                </Link>
              </li>
            </ul>
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
            &copy; {new Date().getFullYear()} Edutech Formations — SAS au
            capital de 1 000 € — SIREN 977 619 089
          </p>
        </div>
      </div>
    </footer>
  );
}
