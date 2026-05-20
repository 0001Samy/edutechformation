'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Instagram, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();
  const copyright = t.footer.copyright.replace('{year}', String(year));

  return (
    <footer className='bg-gray-900 text-gray-300'>
      {/* ─── Badge Qualiopi bandeau haut ─────────────────────────────────── */}
      <div className='border-b border-white/10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-end'>
          <Link
            href='/qualiopi'
            className='inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-4 py-3 transition-colors'
          >
            <div className='w-10 h-10 bg-gradient-to-br from-primary to-teal-700 rounded-lg flex items-center justify-center shrink-0 shadow-md'>
              <ShieldCheck className='text-white' size={22} />
            </div>
            <div>
              <p className='font-bold text-white text-sm leading-tight'>
                {t.footer.qualiopiBadgeLabel}
              </p>
              <p className='text-xs text-gray-400 leading-tight'>
                {t.footer.qualiopiBadgeSub}
              </p>
            </div>
          </Link>
        </div>
      </div>

      {/* ─── 4 colonnes ─────────────────────────────────────────────────── */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-10'>

          {/* Colonne 0 : Logo + description */}
          <div className='md:col-span-1'>
            <Link href='/' className='inline-block mb-5 hover:opacity-80 transition-opacity'>
              <Image
                src='/edutech-logo-dark.svg'
                alt={t.common.siteName}
                width={150}
                height={44}
                className='h-11 w-auto brightness-0 invert'
              />
            </Link>
            <p className='text-sm text-gray-400 leading-relaxed'>
              {t.footer.footerDesc}
            </p>
          </div>

          {/* Colonne 1 : Nos formations */}
          <div>
            <h3 className='font-bold text-white mb-4 text-base'>
              {t.footer.colTrainingTitle}
            </h3>
            <ul className='space-y-2.5'>
              <li>
                <Link
                  href='/formations?pole=droit'
                  className='text-gray-400 hover:text-white transition-colors text-sm'
                >
                  {t.footer.poleDroit}
                </Link>
              </li>
              <li>
                <Link
                  href='/formations?pole=mediation'
                  className='text-gray-400 hover:text-white transition-colors text-sm'
                >
                  {t.footer.poleMediation}
                </Link>
              </li>
              <li>
                <Link
                  href='/formations?pole=ia'
                  className='text-gray-400 hover:text-white transition-colors text-sm'
                >
                  {t.footer.poleIA}
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 2 : Découvrir Edutech */}
          <div>
            <h3 className='font-bold text-white mb-4 text-base'>
              {t.footer.colDiscoverTitle}
            </h3>
            <ul className='space-y-2.5'>
              <li>
                <Link href='/about' className='text-gray-400 hover:text-white transition-colors text-sm'>
                  {t.footer.navAbout}
                </Link>
              </li>
              <li>
                <Link href='/financement' className='text-gray-400 hover:text-white transition-colors text-sm'>
                  {t.footer.navFinancement}
                </Link>
              </li>
              <li>
                <Link href='/temoignages' className='text-gray-400 hover:text-white transition-colors text-sm'>
                  {t.footer.navTestimonials}
                </Link>
              </li>
              <li>
                <Link href='/qualiopi' className='text-gray-400 hover:text-white transition-colors text-sm'>
                  {t.footer.navQualiopi}
                </Link>
              </li>
              <li>
                <Link href='/contact' className='text-gray-400 hover:text-white transition-colors text-sm'>
                  {t.footer.navContact}
                </Link>
              </li>
              <li>
                <Link href='/nous-rejoindre' className='text-gray-400 hover:text-white transition-colors text-sm'>
                  {t.footer.navNousRejoindre}
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Mentions légales */}
          <div>
            <h3 className='font-bold text-white mb-4 text-base'>
              {t.footer.colLegalTitle}
            </h3>
            <ul className='space-y-2.5'>
              <li>
                <Link href='/mentions-legales' className='text-gray-400 hover:text-white transition-colors text-sm'>
                  {t.footer.mentionsLegales}
                </Link>
              </li>
              <li>
                <Link href='/cgv' className='text-gray-400 hover:text-white transition-colors text-sm'>
                  {t.footer.cgv}
                </Link>
              </li>
              <li>
                <Link href='/confidentialite' className='text-gray-400 hover:text-white transition-colors text-sm'>
                  {t.footer.privacy}
                </Link>
              </li>
              <li>
                <Link href='/reglement' className='text-gray-400 hover:text-white transition-colors text-sm'>
                  {t.footer.reglement}
                </Link>
              </li>
              <li>
                <Link href='/accessibilite' className='text-gray-400 hover:text-white transition-colors text-sm'>
                  {t.footer.accessibility}
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* ─── Bandeau bas : copyright + réseaux ─────────────────────────── */}
      <div className='border-t border-white/10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
          <div className='flex flex-col md:flex-row md:items-center gap-4 md:gap-8'>
            <p className='text-xs text-gray-500 leading-relaxed flex-1'>
              {copyright}
            </p>
            <div className='flex items-center gap-3 shrink-0'>
              <a
                href='https://www.linkedin.com/company/edutech-formations'
                target='_blank'
                rel='noopener noreferrer'
                className='w-9 h-9 bg-white/5 hover:bg-primary border border-white/10 rounded-lg flex items-center justify-center text-gray-300 hover:text-white transition-all'
                aria-label='LinkedIn'
              >
                <Linkedin size={18} />
              </a>
              <a
                href='https://www.instagram.com/edutechformations'
                target='_blank'
                rel='noopener noreferrer'
                className='w-9 h-9 bg-white/5 hover:bg-primary border border-white/10 rounded-lg flex items-center justify-center text-gray-300 hover:text-white transition-all'
                aria-label='Instagram'
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
