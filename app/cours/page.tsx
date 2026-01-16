'use client';

import Link from 'next/link';
import { Clock, Users, Star } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CoursPage() {
  const [formations, setFormations] = useState([]);
  const cardsRef = useRef<HTMLDivElement>(null);

  // 🟦 Fetch Sanity depuis la route API
  useEffect(() => {
    async function loadFormations() {
      const res = await fetch('/api/formations');
      const data = await res.json();
      setFormations(data);
    }
    loadFormations();
  }, []);

  // 🟧 Animations GSAP
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
  }, [formations]); // ⚠️ Re-animer après fetch

  return (
    <div className='bg-gradient-to-b from-gray-50 to-white'>
      <section className='relative bg-gradient-to-br from-primary via-purple-600 to-purple-800 text-white py-24 overflow-hidden'>
        <div className='absolute inset-0 opacity-10'>
          <div className='absolute top-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl'></div>
        </div>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <h1 className='text-5xl md:text-6xl font-bold mb-6'>
            Nos Formations
          </h1>
          <p className='text-xl md:text-2xl text-purple-50 max-w-2xl'>
            Choisissez la formation parfaite et développez vos compétences.
          </p>
        </div>
      </section>

      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div
            ref={cardsRef}
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
          >
            {formations.map((formation: any) => {
              // Skip formations without slug
              if (!formation.slug || !formation.slug.current) {
                return null;
              }
              
              return (
              <Link
                key={formation._id}
                href={`/cours/${formation.slug.current}`}
                className='course-card group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2'
              >
                <div className='h-48 flex items-center justify-center relative overflow-hidden'>
                  {formation.imageUrl ? (
                    <img
                      src={formation.imageUrl}
                      className="w-full h-full object-cover"
                      alt={formation.titre}
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
                    <div className='flex items-center gap-1'>
                      <Clock size={16} className='text-primary' />
                      <span>10 semaines</span>
                    </div>
                    <div className='flex items-center gap-1'>
                      <Users size={16} className='text-primary' />
                      <span>200 élèves</span>
                    </div>
                    <div className='flex items-center gap-1'>
                      <Star size={16} className='fill-accent text-accent' />
                      <span className='font-semibold'>4.8</span>
                    </div>
                  </div>

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
