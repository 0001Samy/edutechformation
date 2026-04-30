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
  return `${heures} h`;
}

// ─── Ligne « clé : valeur » harmonisée ───────────────────────────────────────
function InfoRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className='flex justify-between items-baseline gap-3 text-sm'>
      <span className='text-gray-500 shrink-0'>{label}</span>
      <span className='font-medium text-gray-800 text-right truncate'>
        {children}
      </span>
    </div>
  );
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
      onClick={(e) => e.preventDefault()}
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
            className={`flex-1 py-2.5 text-[11px] font-bold tracking-wider uppercase transition-all ${
              active === tab.key
                ? 'bg-foreground text-white'
                : 'bg-white text-gray-400 hover:text-gray-600'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Contenu — hauteur identique grâce à la structure commune */}
      <div className='p-5 flex flex-col gap-3'>
        {active === 'inter' && prixInter != null && (
          <>
            <div className='space-y-2'>
              <InfoRow label='Format'>Présentiel ou à distance</InfoRow>
              <InfoRow label='Durée'>{duree ? formatDuree(duree) : '—'}</InfoRow>
              <InfoRow label='Tarif'>
                <span className='font-bold text-foreground'>
                  {formatPrice(prixInter)}
                </span>
                <span className='font-normal text-gray-400 text-xs ml-1'>
                  HT / stagiaire
                </span>
              </InfoRow>
            </div>
            <div className='flex flex-col gap-2 mt-1'>
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
            <div className='space-y-2'>
              <InfoRow label='Format'>Dans vos locaux ou à distance</InfoRow>
              <InfoRow label='Durée'>{duree ? formatDuree(duree) : '—'}</InfoRow>
              <InfoRow label='Tarif'>
                <span className='font-bold text-foreground'>
                  {formatPrice(prixIntra)}
                </span>
                <span className='font-normal text-gray-400 text-xs ml-1'>
                  HT / groupe
                </span>
              </InfoRow>
            </div>
            <div className='flex flex-col gap-2 mt-1'>
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
            <div className='space-y-2'>
              <InfoRow label='Format'>Adapté à votre organisation</InfoRow>
              <InfoRow label='Durée'>Sur mesure</InfoRow>
              <InfoRow label='Tarif'>
                <span className='font-bold text-foreground'>Sur devis</span>
              </InfoRow>
            </div>
            <div className='flex flex-col gap-2 mt-1'>
              <Link
                href='/contact'
                onClick={(e) => e.stopPropagation()}
                className='flex items-center justify-center gap-2 w-full bg-primary text-white py-2.5 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity'
              >
                <Phone size={15} />
                NOUS CONTACTER
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
      </div>
    </div>
  );
}

// ─── Page principale ─────────────────────────────────────────────────────────
export default function FormationsPage() {
  const [formations, setFormations] = useState<any[]>([]);
  const [selectedPole, setSelectedPole] = useState<PoleValue>('all');
  const heroRef = useRef<HTMLDivElement>(null);
  const filtersRef = useRef<HTMLDivElement>(null);
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

  // ─── Animation d'apparition du hero + filtres (au mount) ───────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      if (heroRef.current) {
        tl.from(heroRef.current.children, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          stagger: 0.12,
        });
      }

      if (filtersRef.current) {
        tl.from(
          filtersRef.current.children,
          {
            opacity: 0,
            y: 15,
            scale: 0.9,
            duration: 0.5,
            stagger: 0.06,
            ease: 'back.out(1.7)',
          },
          '-=0.4'
        );
      }
    });

    return () => ctx.revert();
  }, []);

  // ─── Animation des cartes au scroll (ScrollTrigger.batch) ──────────────────
  // Batch = anime ENSEMBLE les cartes qui entrent dans le viewport, avec un
  // stagger naturel basé sur leur ordre d'apparition (et non leur index global).
  // → la carte n°9 ne traîne plus 0.9s avant d'apparaître.
  useEffect(() => {
    if (!cardsRef.current) return;
    const cards = cardsRef.current.querySelectorAll<HTMLElement>('.course-card');
    if (cards.length === 0) return;

    // État initial : invisibles, légèrement décalées et zoomées
    gsap.set(cards, {
      opacity: 0,
      y: 60,
      scale: 0.94,
      transformOrigin: 'center bottom',
    });

    const triggers = ScrollTrigger.batch(cards, {
      start: 'top 88%',
      once: true,
      onEnter: (batch) => {
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.85,
          ease: 'power3.out',
          stagger: { each: 0.09, from: 'start' },
          overwrite: 'auto',
          clearProps: 'transform', // libère les transforms pour le hover CSS
        });
      },
    });

    // Refresh nécessaire si les images modifient la hauteur de la grille
    ScrollTrigger.refresh();

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, [filteredFormations]);

  // ─── Changement de filtre : fade out → setState → batch ré-anime ───────────
  const handlePoleChange = (newPole: PoleValue) => {
    if (newPole === selectedPole) return;

    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll('.course-card');
      gsap.to(cards, {
        opacity: 0,
        y: -10,
        scale: 0.97,
        duration: 0.25,
        stagger: 0.025,
        ease: 'power2.in',
        onComplete: () => setSelectedPole(newPole),
      });
    } else {
      setSelectedPole(newPole);
    }
  };

  return (
    <div className='bg-gradient-to-b from-gray-50 to-white'>
      {/* Hero */}
      <section className='relative bg-gradient-to-br from-primary via-teal-600 to-teal-800 text-white py-24 overflow-hidden'>
        <div className='absolute inset-0 opacity-10'>
          <div className='absolute top-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl'></div>
        </div>
        <div
          ref={heroRef}
          className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'
        >
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
            ref={filtersRef}
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
                  onClick={() => handlePoleChange(pole.value)}
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

          {/* Grille de cartes — alignement automatique grâce à hauteurs réservées */}
          <div
            ref={cardsRef}
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch'
          >
            {filteredFormations.map((formation: any, idx: number) => {
              if (!formation.slug?.current) return null;

              // Les 3 premières images sont au-dessus de la ligne de flottaison
              // (LCP) → on les charge en priorité.
              const isAboveTheFold = idx < 3;

              return (
                <div
                  key={formation._id}
                  className='course-card group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full'
                >
                  {/* Bloc image + texte (cliquable) */}
                  <Link
                    href={`/formations/${formation.slug.current}`}
                    className='flex flex-col flex-1'
                  >
                    {/* Image — hauteur fixe */}
                    <div className='h-48 relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center'>
                      {formation.imageUrl ? (
                        <Image
                          src={formation.imageUrl}
                          alt={formation.titre}
                          fill
                          sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
                          className='object-cover'
                          priority={isAboveTheFold}
                        />
                      ) : (
                        <p className='text-gray-400 text-sm'>Image à venir</p>
                      )}
                    </div>

                    {/* Bloc texte — hauteurs réservées pour titre & description */}
                    <div className='p-6 flex flex-col flex-1'>
                      {/* Titre : 2 lignes max, hauteur fixe ~3.5rem */}
                      <h2 className='text-lg font-bold text-gray-900 group-hover:text-primary transition-colors leading-snug line-clamp-2 min-h-[3.25rem] mb-3'>
                        {formation.titre}
                      </h2>

                      {/* Description : 3 lignes max, hauteur fixe ~4.5rem */}
                      <p className='text-gray-500 text-sm leading-relaxed line-clamp-3 min-h-[4rem] mb-4'>
                        {formation.description || ' '}
                      </p>

                      {/* Méta — toujours collée au bas du bloc texte */}
                      <div className='mt-auto flex items-center justify-between gap-3 text-xs text-gray-500 pt-3 border-t border-gray-100'>
                        <div className='flex items-center gap-1.5'>
                          <Clock size={14} className='text-primary' />
                          <span>
                            {formation.duree
                              ? formatDuree(formation.duree)
                              : '—'}
                          </span>
                        </div>
                        <div className='flex items-center gap-1.5'>
                          <Users size={14} className='text-primary' />
                          <span>
                            {formation.etudiants
                              ? `${formation.etudiants} formés`
                              : 'Nouveau'}
                          </span>
                        </div>
                        <div className='flex items-center gap-1.5'>
                          <Star
                            size={14}
                            className={
                              formation.note
                                ? 'fill-accent text-accent'
                                : 'text-gray-300'
                            }
                          />
                          <span className='font-semibold text-gray-600'>
                            {formation.note ? `${formation.note}/5` : '—'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>

                  {/* Bloc onglets prix — hors du Link, structure identique pour tous les tabs */}
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
