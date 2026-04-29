'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Clock, Users, Star, ArrowRight, Phone } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type PoleValue = 'all' | 'droit' | 'mediation' | 'ia';
type PriceTab = 'inter' | 'intra' | 'sur-mesure';

const POLES: { value: PoleValue; label: string }[] = [
  { value: 'all', label: 'Tous' },
  { value: 'droit', label: 'Droit' },
  { value: 'mediation', label: 'Médiation' },
  { value: 'ia', label: 'IA' },
];

function formatPrice(price: number): string {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
  }).format(price);
}

function formatDuree(heures: number): string {
  if (heures % 7 === 0 && heures >= 7) {
    const jours = heures / 7;
    return `${jours} jour${jours > 1 ? 's' : ''}`;
  }
  return `${heures}h`;
}

// ─── Composant onglets prix par carte ───────────────────────────────────────
function PriceTabs({
  prixInter,
  prixIntra,
  duree,
  slug,
  lien,
}: {
  prixInter?: number;
  prixIntra?: number;
  duree?: number;
  slug: string;
  lien?: string;
}) {
  const tabs: { key: PriceTab; label: string }[] = [
    ...(prixInter != null ? [{ key: 'inter' as PriceTab, label: 'INTER' }] : []),
    ...(prixIntra != null ? [{ key: 'intra' as PriceTab, label: 'INTRA' }] : []),
    { key: 'sur-mesure' as PriceTab, label: 'SUR-MESURE' },
  ];

  const defaultTab: PriceTab =
    prixInter != null ? 'inter' : prixIntra != null ? 'intra' : 'sur-mesure';
  const [active, setActive] = useState<PriceTab>(defaultTab);

  return (
    <div
      className='border-t border-gray-100 mt-auto'
      onClick={(e) => e.preventDefault()} // empêche la navigation sur le Link parent
    >
      {/* Onglets */}
      <div className='flex border-b border-gray-200'>
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setActive(tab.key);
            }}
            className={`flex-1 py-2.5 text-xs font-bold tracking-wider uppercase transition-all ${
              active === tab.key
                ? 'bg-foreground text-white'
                : 'bg-white text-gray-400 hover:text-gray-600'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Contenu du tab actif */}
      <div className='p-4 space-y-2.5'>
        {active === 'inter' && prixInter != null && (
          <>
            <div className='flex justify-between items-center text-sm'>
              <span className='text-gray-500'>Format</span>
              <span className='font-medium text-gray-800 text-right'>
                En présentiel ou à distance
              </span>
            </div>
            {duree && (
              <div className='flex justify-between items-center text-sm'>
                <span className='text-gray-500'>Durée</span>
                <span className='font-medium text-gray-800'>
                  {formatDuree(duree)}
                </span>
              </div>
            )}
            <div className='flex justify-between items-center text-sm'>
              <span className='text-gray-500'>Prix</span>
              <span className='font-bold text-foreground'>
                {formatPrice(prixInter)}{' '}
                <span className='font-normal text-gray-400 text-xs'>HT / stagiaire</span>
              </span>
            </div>
            <div className='pt-1 space-y-2'>
              <Link
                href={lien || `/formations/${slug}`}
                onClick={(e) => e.stopPropagation()}
                className='flex items-center justify-center gap-2 w-full bg-foreground text-white py-2.5 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity'
              >
                JE M&apos;INSCRIS
                <ArrowRight size={15} />
              </Link>
              <Link
                href='/contact'
                onClick={(e) => e.stopPropagation()}
                className='flex items-center justify-center w-full border border-gray-200 text-gray-600 py-2 rounded-lg text-sm font-medium hover:border-primary hover:text-primary transition-colors'
              >
                Demander un devis
              </Link>
            </div>
          </>
        )}

        {active === 'intra' && prixIntra != null && (
          <>
            <div className='flex justify-between items-center text-sm'>
              <span className='text-gray-500'>Format</span>
              <span className='font-medium text-gray-800 text-right'>
                Dans vos locaux ou à distance
              </span>
            </div>
            {duree && (
              <div className='flex justify-between items-center text-sm'>
                <span className='text-gray-500'>Durée</span>
                <span className='font-medium text-gray-800'>
                  {formatDuree(duree)}
                </span>
              </div>
            )}
            <div className='flex justify-between items-center text-sm'>
              <span className='text-gray-500'>Prix</span>
              <span className='font-bold text-foreground'>
                {formatPrice(prixIntra)}{' '}
                <span className='font-normal text-gray-400 text-xs'>HT / groupe</span>
              </span>
            </div>
            <div className='pt-1 space-y-2'>
              <Link
                href={lien || `/formations/${slug}`}
                onClick={(e) => e.stopPropagation()}
                className='flex items-center justify-center gap-2 w-full bg-foreground text-white py-2.5 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity'
              >
                JE M&apos;INSCRIS
                <ArrowRight size={15} />
              </Link>
              <Link
                href='/contact'
                onClick={(e) => e.stopPropagation()}
                className='flex items-center justify-center w-full border border-gray-200 text-gray-600 py-2 rounded-lg text-sm font-medium hover:border-primary hover:text-primary transition-colors'
              >
                Demander un devis
              </Link>
            </div>
          </>
        )}

        {active === 'sur-mesure' && (
          <>
            <p className='text-sm text-gray-600 leading-relaxed'>
              Vous avez un besoin spécifique ? Nous adaptons le contenu, le
              format et les dates à votre organisation.
            </p>
            <div className='pt-1'>
              <Link
                href='/contact'
                onClick={(e) => e.stopPropagation()}
                className='flex items-center justify-center gap-2 w-full bg-primary text-white py-2.5 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity'
              >
                <Phone size={15} />
                Nous contacter
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// ─── Page principale ─────────────────────────────────────────────────────────
export default function FormationsPage() {
  const [formations, setFormations] = useState<any[]>([]);
  const [selectedPole, setSelectedPole] = useState<PoleValue>('all');
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function loadFormations() {
      try {
        const res = await fetch('/api/formations');
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setFormations(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error('Failed to load formations:', err);
        setFormations([]);
      }
    }
    loadFormations();
  }, []);

  const filteredFormations = useMemo(() => {
    if (selectedPole === 'all') return formations;
    return formations.filter((f) => f.pole === selectedPole);
  }, [formations, selectedPole]);

  useEffect(() => {
    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll('.course-card');
      cards.forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          opacity: 0,
          y: 50,
          duration: 0.6,
          delay: index * 0.1,
          ease: 'power3.out',
        });
      });
    }
  }, [filteredFormations]);

  return (
    <div className='bg-gradient-to-b from-gray-50 to-white'>
      {/* Hero */}
      <section className='relative bg-gradient-to-br from-primary via-teal-600 to-teal-800 text-white py-24 overflow-hidden'>
        <div className='absolute inset-0 opacity-10'>
          <div className='absolute top-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl'></div>
        </div>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <h1 className='text-5xl md:text-6xl font-bold mb-6'>Nos Formations</h1>
          <p className='text-xl md:text-2xl text-teal-50 max-w-2xl'>
            Choisissez la formation parfaite et développez vos compétences.
          </p>
        </div>
      </section>

      {/* Filtres + cartes */}
      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Filtre pôles */}
          <div
            role='tablist'
            aria-label='Filtrer par pôle'
            className='flex flex-wrap justify-center gap-2 sm:gap-3 mb-12'
          >
            {POLES.map((pole) => {
              const active = selectedPole === pole.value;
              return (
                <button
                  key={pole.value}
                  role='tab'
                  aria-selected={active}
                  onClick={() => setSelectedPole(pole.value)}
                  className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all ${
                    active
                      ? 'bg-gradient-to-r from-primary to-teal-600 text-white shadow-lg scale-105'
                      : 'bg-white text-gray-700 border border-gray-200 hover:border-primary hover:text-primary'
                  }`}
                >
                  {pole.label}
                </button>
              );
            })}
          </div>

          {filteredFormations.length === 0 && formations.length > 0 && (
            <p className='text-center text-gray-500 py-12'>
              Aucune formation dans ce pôle pour le moment.
            </p>
          )}

          {/* Grille de cartes */}
          <div
            ref={cardsRef}
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
          >
            {filteredFormations.map((formation: any) => {
              if (!formation.slug?.current) return null;

              return (
                <div
                  key={formation._id}
                  className='course-card group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col'
                >
                  {/* Image + titre → lien vers le détail */}
                  <Link
                    href={`/formations/${formation.slug.current}`}
                    className='flex flex-col flex-1'
                  >
                    {/* Image */}
                    <div className='h-48 flex items-center justify-center relative overflow-hidden bg-gray-100'>
                      {formation.imageUrl ? (
                        <Image
                          src={formation.imageUrl}
                          alt={formation.titre}
                          fill
                          sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
                          className='object-cover'
                        />
                      ) : (
                        <p className='text-gray-400 text-sm'>Image à venir</p>
                      )}
                    </div>

                    {/* Contenu texte */}
                    <div className='p-6 flex flex-col flex-1'>
                      <h2 className='text-xl font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors leading-snug'>
                        {formation.titre}
                      </h2>
                      <p className='text-gray-500 text-sm mb-4 leading-relaxed flex-1'>
                        {formation.description}
                      </p>

                      {/* Méta (durée, élèves, note) */}
                      <div className='flex items-center gap-4 text-xs text-gray-400 pt-3 border-t border-gray-100'>
                        {formation.duree && (
                          <div className='flex items-center gap-1'>
                            <Clock size={14} className='text-primary' />
                            <span>{formatDuree(formation.duree)}</span>
                          </div>
                        )}
                        {formation.etudiants && (
                          <div className='flex items-center gap-1'>
                            <Users size={14} className='text-primary' />
                            <span>{formation.etudiants} formés</span>
                          </div>
                        )}
                        {formation.note && (
                          <div className='flex items-center gap-1 ml-auto'>
                            <Star
                              size={14}
                              className='fill-accent text-accent'
                            />
                            <span className='font-semibold text-gray-600'>
                              {formation.note}/5
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>

                  {/* Bloc prix avec onglets — hors du Link */}
                  <PriceTabs
                    prixInter={formation.prixInter}
                    prixIntra={formation.prixIntra}
                    duree={formation.duree}
                    slug={formation.slug.current}
                    lien={formation.lien}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
