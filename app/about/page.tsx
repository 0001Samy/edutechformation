import Image from 'next/image';
import { Target, Users, TrendingUp } from 'lucide-react';

export const metadata = {
  title: 'À propos - EduTech Formation',
  description: 'Découvrez notre mission et notre équipe',
};

export default function AboutPage() {
  return (
    <div className='bg-gray-50'>
      <section className='bg-primary text-white py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='text-5xl font-bold mb-4'>À propos de nous</h1>
          <p className='text-xl text-teal-100'>
            Notre mission : rendre la formation professionnelle accessible à
            tous
          </p>
        </div>
      </section>

      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16'>
            <div>
              <h2 className='text-4xl font-bold mb-6'>Notre histoire</h2>
              <p className='text-lg text-gray-700 mb-4'>
                EduTech Formation a été créée avec la conviction que chacun
                mérite d'avoir accès à des formations de qualité pour développer
                ses compétences professionnelles.
              </p>
              <p className='text-lg text-gray-700'>
                Depuis notre création, nous avons formé des milliers
                d'apprenants et les avons aidés à atteindre leurs objectifs de
                carrière.
              </p>
            </div>
            <div className='bg-primary/10 h-96 rounded-lg flex items-center justify-center relative overflow-hidden shadow-lg'>
              <Image
                src="/about-team.jpg"
                alt="Groupe de personnes en formation"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='bg-white p-8 rounded-lg shadow-md'>
              <Target className='text-primary mb-4' size={40} />
              <h3 className='text-xl font-semibold mb-4'>Notre mission</h3>
              <p className='text-gray-700'>
                Fournir des formations accessibles, pratiques et reconnues qui
                transforment les carrières professionnelles.
              </p>
            </div>
            <div className='bg-white p-8 rounded-lg shadow-md'>
              <Users className='text-primary mb-4' size={40} />
              <h3 className='text-xl font-semibold mb-4'>Notre équipe</h3>
              <p className='text-gray-700'>
                Une équipe d'experts passionnés, formateurs certifiés et
                conseillers pédagogiques dédiés à votre réussite.
              </p>
            </div>
            <div className='bg-white p-8 rounded-lg shadow-md'>
              <TrendingUp className='text-primary mb-4' size={40} />
              <h3 className='text-xl font-semibold mb-4'>Notre vision</h3>
              <p className='text-gray-700'>
                Devenir la référence en formation professionnelle en ligne,
                reconnue pour l'excellence de nos contenus.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
