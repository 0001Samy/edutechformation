'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Clock, Users, Star } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type PoleValue = 'all' | 'droit' | 'mediation' | 'ia';

const POLES: { value: PoleValue; label: string }[] = [
  { value: 'all', label: 'Tous' },
  { value: 'droit', label: 'Droit' },
  { value: 'mediation', label: 'Médiation' },
  { value: 'ia', label: 'IA' },
];

export default function CoursPage() {
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
      <section className='relative bg-gradient-to-br from-primary via-teal-600 to-teal-800 text-white py-24 overflow-hidden'>
        <div className='absolute inset-0 opacity-10'>
          <div className='absolute top-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl'></div>
        </div>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <h1 className='text-5xl md:text-6xl font-bold mb-6'>
            Nos Formations
          </h1>
          <p className='text-xl md:text-2xl text-teal-50 max-w-2xl'>
            Choisissez la formation parfaite et développez vos compétences.
          </p>
        </div>
      </section>

      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
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

          <div
            ref={cardsRef}
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
          >
            {filteredFormations.map((formation: any) => {
              if (!formation.slug || !formation.slug.current) {
                return null;
              }

              const tarifAffiche =
                formation.prixInter ?? formation.prixIntra ?? formation.prix;
              const tarifLabel =
                formation.prixInter != null
                  ? 'INTER / individuel'
                  : formation.prixIntra != null
                  ? 'INTRA'
                  : null;

              return (
                <Link
                  key={formation._id}
                  href={`/formations/${formation.slug.current}`}
                  className='course-card group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2'
                >
                  <div className='h-48 flex items-center justify-center relative overflow-hidden'>
                    {formation.imageUrl ? (
                      <Image
                        src={formation.imageUrl}
                        alt={formation.titre}
                        fill
                        sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
                        className='object-cover'
                      />
                    ) : (
                      <p className='text-gray-400 relative z-10'>[Image]</p>
                    )}
                  </div>
                  <div className='p-6'>
                    <h2 className='text-2xl font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors'>
                      {formation.titre}
                    </h2>
                    <p className='text-gray-600 mb-6 leading-relaxed'>
                      {formation.description}
                    </p>

                    <div className='flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100'>
                      {formation.duree && (
                        <div className='flex items-center gap-1'>
                          <Clock size={16} className='text-primary' />
                          <span>{formation.duree}h</span>
                        </div>
                      )}
                      {formation.etudiants && (
                        <div className='flex items-center gap-1'>
                          <Users size={16} className='text-primary' />
                          <span>{formation.etudiants} élèves</span>
                        </div>
                      )}
                      {formation.note && (
                        <div className='flex items-center gap-1'>
                          <Star size={16} className='fill-accent text-accent' />
                          <span className='font-semibold'>{formation.note}/5</span>
                        </div>
                      )}
                    </div>

                    {tarifAffiche != null && (
                      <div className='mt-4 pt-4 border-t border-gray-100'>
                        {tarifLabel && (
                          <span className='block text-[10px] uppercase tracking-wider text-gray-400 font-semibold mb-0.5'>
                            {tarifLabel}
                          </span>
                        )}
                        <span className='text-xl font-bold text-primary'>
                          {tarifAffiche}€
                        </span>
                        <span className='text-xs text-gray-400 ml-2'>exo. TVA</span>
                      </div>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
