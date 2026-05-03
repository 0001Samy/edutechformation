'use client';

import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className='bg-gray-900 text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* About */}
          <div>
            <h3 className='text-xl font-bold mb-4 text-accent'>
              {t.common.siteName}
            </h3>
            <p className='text-gray-400 mb-4'>{t.footer.tagline}</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className='font-semibold mb-4'>{t.footer.navigation}</h4>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/about'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  {t.common.about}
                </Link>
              </li>
              <li>
                <Link
                  href='/formations'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  {t.common.formations}
                </Link>
              </li>
              <li>
                <Link
                  href='/temoignages'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  {t.common.testimonials}
                </Link>
              </li>
              <li>
                <Link
                  href='/qualiopi'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  {t.footer.qualiopi}
                </Link>
              </li>
              <li>
                <Link
                  href='/financement'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  {t.footer.financement}
                </Link>
              </li>
              <li>
                <Link
                  href='/accessibilite'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  {t.footer.accessibility}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className='font-semibold mb-4'>{t.footer.contact}</h4>
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
                  href='tel:+33633247764'
                  className='hover:text-white transition-colors'
                >
                  06 33 24 77 64
                </a>
              </li>
              <li>
                <Link
                  href='/contact'
                  className='hover:text-white transition-colors'
                >
                  {t.footer.contactForm}
                </Link>
              </li>
            </ul>
          </div>

          {/* Légal + Social */}
          <div>
            <h4 className='font-semibold mb-4'>{t.footer.legalInfo}</h4>
            <ul className='space-y-2 mb-6'>
              <li>
                <Link
                  href='/mentions-legales'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  {t.footer.mentionsLegales}
                </Link>
              </li>
              <li>
                <Link
                  href='/cgv'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  {t.footer.cgv}
                </Link>
              </li>
              <li>
                <Link
                  href='/confidentialite'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  {t.footer.privacy}
                </Link>
              </li>
              <li>
                <Link
                  href='/reglement'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  {t.footer.reglement}
                </Link>
              </li>
            </ul>
            <h4 className='font-semibold mb-4'>{t.footer.followUs}</h4>
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
            &copy; {new Date().getFullYear()} Edutech Formations
          </p>
        </div>
      </div>
    </footer>
  );
}
