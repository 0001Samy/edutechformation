'use client';

import { Star, Quote } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const testimonials = [
  {
    name: 'Sophie Martin',
    role: 'Développeuse Web',
    formation: 'Développement Web Complet',
    rating: 5,
    text: "Cette formation a complètement changé ma carrière. Les cours sont clairs, les projets pratiques et l'accompagnement excellent. Je recommande vivement !",
    avatar: 'SM',
  },
  {
    name: 'Thomas Dubois',
    role: 'Data Analyst',
    formation: 'Data Science & IA',
    rating: 5,
    text: "Une formation complète et structurée. J'ai pu monter en compétences rapidement et décrocher un poste dans le domaine de la data science.",
    avatar: 'TD',
  },
  {
    name: 'Marie Petit',
    role: 'Responsable Marketing',
    formation: 'Marketing Digital',
    rating: 4,
    text: "Excellent contenu et formateurs très compétents. Les techniques apprises m'ont permis d'améliorer significativement les résultats de mes campagnes.",
    avatar: 'MP',
  },
  {
    name: 'Lucas Bernard',
    role: 'Chef de Projet',
    formation: 'Gestion de Projet Agile',
    rating: 5,
    text: "Formation très pratique avec des cas concrets. J'ai pu appliquer immédiatement les méthodologies agiles dans mon entreprise.",
    avatar: 'LB',
  },
  {
    name: 'Emma Rousseau',
    role: 'Designer UX/UI',
    formation: 'Développement Web Complet',
    rating: 5,
    text: "Passer du design au code était un défi, mais cette formation m'a donné toutes les clés pour y arriver. Merci à toute l'équipe !",
    avatar: 'ER',
  },
  {
    name: 'Julien Moreau',
    role: 'Entrepreneur',
    formation: 'Marketing Digital',
    rating: 4,
    text: "Grâce à cette formation, j'ai pu développer la visibilité de mon entreprise en ligne. Un investissement vraiment rentable.",
    avatar: 'JM',
  },
];

export default function TemoignagesPage() {
  const testimonialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (testimonialsRef.current) {
      const cards =
        testimonialsRef.current.querySelectorAll('.testimonial-card');
      cards.forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          opacity: 0,
          y: 40,
          duration: 0.7,
          delay: index * 0.08,
          ease: 'power2.out',
        });
      });
    }
  }, []);

  return (
    <div className='bg-gradient-to-b from-gray-50 to-white'>
      <section className='relative bg-gradient-to-br from-primary via-blue-600 to-blue-800 text-white py-24 overflow-hidden'>
        <div className='absolute inset-0 opacity-10'>
          <div className='absolute top-20 left-10 w-96 h-96 bg-accent rounded-full blur-3xl'></div>
        </div>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <h1 className='text-5xl md:text-6xl font-bold mb-6'>Témoignages</h1>
          <p className='text-xl md:text-2xl text-blue-50 max-w-2xl'>
            Découvrez ce que nos étudiants pensent de nos formations et comment
            elles ont transformé leur carrière
          </p>
        </div>
      </section>

      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <div className='flex justify-center items-center gap-2 mb-4'>
              <Star className='fill-accent text-accent' size={40} />
              <Star className='fill-accent text-accent' size={40} />
              <Star className='fill-accent text-accent' size={40} />
              <Star className='fill-accent text-accent' size={40} />
              <Star className='fill-accent text-accent' size={40} />
            </div>
            <p className='text-3xl font-bold text-gray-900 mb-2'>
              4.8/5 sur plus de 5000 avis
            </p>
            <p className='text-gray-600'>
              La satisfaction de nos étudiants est notre priorité
            </p>
          </div>

          <div
            ref={testimonialsRef}
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className='testimonial-card bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 relative group'
              >
                <Quote
                  className='absolute top-6 right-6 text-primary/5 group-hover:text-primary/10 transition-colors'
                  size={64}
                />
                <div className='flex items-center gap-4 mb-4 relative z-10'>
                  <div className='w-14 h-14 bg-gradient-to-br from-primary to-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md'>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h3 className='font-bold text-gray-900'>
                      {testimonial.name}
                    </h3>
                    <p className='text-sm text-gray-600'>{testimonial.role}</p>
                  </div>
                </div>
                <div className='flex gap-1 mb-4'>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className='fill-accent text-accent'
                      size={18}
                    />
                  ))}
                </div>
                <p className='text-gray-700 mb-6 leading-relaxed italic'>
                  "{testimonial.text}"
                </p>
                <div className='pt-4 border-t border-gray-100'>
                  <p className='text-sm text-primary font-semibold'>
                    {testimonial.formation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 overflow-hidden'>
        <div className='absolute inset-0 opacity-5'>
          <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl'></div>
        </div>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10'>
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>
            Rejoignez nos étudiants satisfaits
          </h2>
          <p className='text-xl text-gray-300 mb-10 leading-relaxed'>
            Commencez votre formation dès aujourd'hui et transformez votre
            avenir professionnel
          </p>
          <a
            href='/cours'
            className='inline-flex items-center justify-center gap-2 bg-accent text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-all hover:scale-105 shadow-lg'
          >
            Voir nos formations
          </a>
        </div>
      </section>
    </div>
  );
}
