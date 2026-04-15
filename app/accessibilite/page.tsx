import {
  Heart,
  User,
  CheckCircle,
  Handshake,
  Clock,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Accessibilité et Handicap - EduTech Formation',
  description:
    "Notre engagement pour l'accueil de tous les apprenants, y compris les personnes en situation de handicap.",
};

export default function AccessibilitePage() {
  return (
    <div className='bg-gradient-to-b from-gray-50 to-white'>
      {/* Hero Section */}
      <section className='relative bg-gradient-to-br from-primary via-teal-600 to-teal-800 text-white py-24 overflow-hidden'>
        <div className='absolute inset-0 opacity-10'>
          <div className='absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl'></div>
          <div className='absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl'></div>
        </div>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <h1 className='text-5xl md:text-6xl font-bold mb-6'>
            Accessibilité et Handicap
          </h1>
          <p className='text-xl md:text-2xl text-teal-50 max-w-2xl'>
            Notre engagement pour l&apos;accueil de tous les apprenants.
          </p>
        </div>
      </section>

      {/* Notre engagement */}
      <section className='py-16'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-start gap-5'>
            <div className='w-16 h-16 bg-gradient-to-br from-primary to-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0'>
              <Heart className='text-white' size={32} />
            </div>
            <div>
              <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                Notre engagement
              </h2>
              <p className='text-lg text-gray-700 leading-relaxed'>
                Edutech Formations s&apos;engage à favoriser l&apos;accès à la
                formation professionnelle pour tous, y compris les personnes en
                situation de handicap. Nous adaptons nos modalités pédagogiques
                dans la mesure du possible pour répondre aux besoins spécifiques
                de chaque apprenant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Référent handicap */}
      <section className='py-12 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-start gap-5'>
            <div className='w-16 h-16 bg-gradient-to-br from-primary to-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0'>
              <User className='text-white' size={32} />
            </div>
            <div>
              <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                Votre référent handicap
              </h2>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                Un référent handicap est à votre disposition pour étudier vos
                besoins et mettre en place les adaptations nécessaires :
              </p>
              <div className='bg-gray-50 rounded-xl p-6 space-y-2'>
                <p className='font-bold text-lg text-gray-900'>Olivier Gil</p>
                <p className='text-gray-700'>Référent handicap</p>
                <p className='text-gray-700'>
                  Email :{' '}
                  <a
                    href='mailto:contact@edutechformations.com'
                    className='text-primary hover:underline'
                  >
                    contact@edutechformations.com
                  </a>
                </p>
                <p className='text-gray-700'>
                  Téléphone :{' '}
                  <a
                    href='tel:+33662091892'
                    className='text-primary hover:underline'
                  >
                    06 62 09 18 92
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Adaptations possibles */}
      <section className='py-16'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl md:text-4xl font-bold mb-8'>
            Les adaptations possibles
          </h2>
          <div className='space-y-4'>
            {[
              'Adaptation des supports pédagogiques (format, taille de police, contrastes)',
              'Aménagement des conditions de passation des évaluations (temps supplémentaire, modalités alternatives)',
              'Choix de salles de formation accessibles aux personnes à mobilité réduite',
              'Pauses adaptées en fonction des besoins',
              'Orientation vers des organismes spécialisés et des dispositifs de compensation si nécessaire',
            ].map((item, i) => (
              <div key={i} className='flex items-start gap-3'>
                <CheckCircle
                  className='text-primary flex-shrink-0 mt-1'
                  size={22}
                />
                <p className='text-gray-700 text-lg'>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partenaires et ressources */}
      <section className='py-16 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-start gap-5'>
            <div className='w-16 h-16 bg-gradient-to-br from-primary to-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0'>
              <Handshake className='text-white' size={32} />
            </div>
            <div>
              <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                Partenaires et ressources
              </h2>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                Nous travaillons en lien avec les acteurs du handicap pour vous
                orienter au mieux :
              </p>
              <ul className='list-disc list-inside space-y-2 text-gray-700 ml-4'>
                <li>
                  L&apos;Agefiph (Association de Gestion du Fonds pour
                  l&apos;Insertion Professionnelle des Personnes Handicapées)
                </li>
                <li>
                  Le FIPHFP (Fonds pour l&apos;Insertion des Personnes
                  Handicapées dans la Fonction Publique)
                </li>
                <li>
                  Les Cap Emploi et les Maisons Départementales des Personnes
                  Handicapées (MDPH)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Anticipez votre besoin */}
      <section className='py-16'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-start gap-5'>
            <div className='w-16 h-16 bg-gradient-to-br from-primary to-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0'>
              <Clock className='text-white' size={32} />
            </div>
            <div>
              <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                Anticipez votre besoin
              </h2>
              <p className='text-lg text-gray-700 leading-relaxed'>
                Pour que nous puissions mettre en place les meilleures conditions
                d&apos;accueil, nous vous invitons à nous signaler votre
                situation le plus tôt possible, idéalement dès la prise de
                contact ou l&apos;inscription.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 overflow-hidden'>
        <div className='absolute inset-0 opacity-5'>
          <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl'></div>
        </div>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10'>
          <div className='inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6'>
            <Sparkles size={18} className='text-accent' />
            <span className='text-sm font-medium'>Accessibilité</span>
          </div>
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>
            Vous avez un besoin spécifique ?
          </h2>
          <p className='text-xl text-gray-300 mb-10 leading-relaxed'>
            Contactez notre référent handicap pour étudier ensemble les
            adaptations possibles.
          </p>
          <Link
            href='/contact'
            className='inline-flex items-center justify-center gap-2 bg-accent text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-yellow-500 transition-all hover:scale-105 shadow-lg'
          >
            Contacter le référent
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
