import {
  ShieldCheck,
  CheckCircle,
  CreditCard,
  Building2,
  Briefcase,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Certification Qualiopi - EduTech Formation',
  description:
    'Notre engagement qualité, reconnu par une certification nationale Qualiopi.',
};

export default function QualiopiPage() {
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
            Certification Qualiopi
          </h1>
          <p className='text-xl md:text-2xl text-teal-50 max-w-2xl'>
            Notre engagement qualité, reconnu par une certification nationale.
          </p>
        </div>
      </section>

      {/* Badge Qualiopi */}
      <section className='py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8 text-center border border-gray-100'>
            <div className='w-20 h-20 bg-gradient-to-br from-primary to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4'>
              <ShieldCheck className='text-white' size={40} />
            </div>
            <h2 className='text-2xl font-bold text-gray-900 mb-1'>
              Certifié Qualiopi
            </h2>
            <p className='text-primary font-medium mb-4'>
              Actions de formation
            </p>
            <p className='text-sm text-gray-500'>
              N° de déclaration d&apos;activité : à compléter
              <br />
              Certification obtenue en 2024
            </p>
          </div>
        </div>
      </section>

      {/* Qu'est-ce que Qualiopi */}
      <section className='py-16'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl md:text-4xl font-bold mb-6'>
            Qu&apos;est-ce que Qualiopi ?
          </h2>
          <div className='space-y-4 text-lg text-gray-700 leading-relaxed'>
            <p>
              Qualiopi est la certification qualité nationale des organismes de
              formation. Délivrée par des organismes certificateurs accrédités,
              elle atteste de la qualité du processus mis en œuvre par les
              prestataires d&apos;actions concourant au développement des
              compétences.
            </p>
            <p>
              Cette certification est obligatoire depuis le 1er janvier 2022 pour
              tout organisme souhaitant bénéficier de fonds publics ou mutualisés
              pour ses formations.
            </p>
          </div>
        </div>
      </section>

      {/* Ce que Qualiopi garantit */}
      <section className='py-16 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Ce que Qualiopi garantit pour vous
          </h2>
          <p className='text-lg text-gray-700 mb-8'>
            En choisissant un organisme certifié Qualiopi, vous avez
            l&apos;assurance de bénéficier d&apos;un cadre de formation exigeant
            et structuré :
          </p>
          <div className='space-y-4'>
            {[
              'Des objectifs pédagogiques clairs, adaptés à vos besoins et à votre contexte professionnel',
              'Des programmes structurés avec des méthodes pédagogiques éprouvées',
              'Des formateurs qualifiés dont les compétences sont régulièrement mises à jour',
              'Un suivi individuel tout au long de la formation et une évaluation des acquis',
              'Une prise en compte des situations de handicap et des besoins spécifiques',
              "Une démarche d'amélioration continue basée sur les retours des stagiaires",
            ].map((item, i) => (
              <div key={i} className='flex items-start gap-3'>
                <CheckCircle
                  className='text-primary flex-shrink-0 mt-1'
                  size={22}
                />
                <p className='text-gray-700'>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accès aux financements */}
      <section className='py-16'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            L&apos;accès aux financements
          </h2>
          <p className='text-lg text-gray-700 mb-8'>
            La certification Qualiopi vous permet de faire financer votre
            formation par les dispositifs publics et mutualisés :
          </p>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100'>
              <div className='w-14 h-14 bg-gradient-to-br from-primary to-teal-600 rounded-xl flex items-center justify-center mb-4'>
                <CreditCard className='text-white' size={28} />
              </div>
              <h3 className='text-xl font-bold mb-2'>CPF</h3>
              <p className='text-gray-600'>
                Utilisez votre Compte Personnel de Formation pour financer
                directement votre inscription.
              </p>
            </div>
            <div className='bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100'>
              <div className='w-14 h-14 bg-gradient-to-br from-primary to-teal-600 rounded-xl flex items-center justify-center mb-4'>
                <Building2 className='text-white' size={28} />
              </div>
              <h3 className='text-xl font-bold mb-2'>OPCO</h3>
              <p className='text-gray-600'>
                Votre opérateur de compétences peut prendre en charge le
                financement via le plan de développement des compétences.
              </p>
            </div>
            <div className='bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100'>
              <div className='w-14 h-14 bg-gradient-to-br from-primary to-teal-600 rounded-xl flex items-center justify-center mb-4'>
                <Briefcase className='text-white' size={28} />
              </div>
              <h3 className='text-xl font-bold mb-2'>France Travail</h3>
              <p className='text-gray-600'>
                Des aides existent pour les demandeurs d&apos;emploi (AIF, POEI).
                Nous vous accompagnons dans les démarches.
              </p>
            </div>
          </div>
          <p className='mt-6 text-gray-700'>
            Pour en savoir plus, consultez notre{' '}
            <Link
              href='/financement'
              className='text-primary font-semibold hover:underline'
            >
              page dédiée au financement
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Référentiel national qualité */}
      <section className='py-16 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Le référentiel national qualité
          </h2>
          <p className='text-lg text-gray-700 mb-8'>
            La certification Qualiopi repose sur un audit réalisé selon le
            Référentiel National Qualité (RNQ), qui comprend 7 critères et 32
            indicateurs couvrant l&apos;ensemble du processus de formation :
          </p>
          <div className='space-y-4'>
            {[
              "L'information du public sur les prestations, les délais d'accès et les résultats obtenus",
              "L'identification précise des objectifs et l'adaptation des prestations",
              "L'adaptation des moyens pédagogiques, techniques et d'encadrement",
              'La qualification et le développement des compétences des formateurs',
              "L'inscription dans l'environnement professionnel et socio-économique",
              'Le recueil et la prise en compte des appréciations et réclamations',
              "La démarche d'amélioration continue",
            ].map((item, i) => (
              <div key={i} className='flex items-start gap-3'>
                <CheckCircle
                  className='text-primary flex-shrink-0 mt-1'
                  size={22}
                />
                <p className='text-gray-700'>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre démarche qualité */}
      <section className='py-16'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl md:text-4xl font-bold mb-6'>
            Notre démarche qualité
          </h2>
          <p className='text-lg text-gray-700 leading-relaxed'>
            Au-delà de la certification, nous nous engageons dans une démarche
            d&apos;amélioration continue. Chaque session de formation fait
            l&apos;objet d&apos;une évaluation de satisfaction à chaud en fin de
            session, complétée par une enquête d&apos;impact à froid 30 jours
            après. Ces retours alimentent directement l&apos;évolution de nos
            programmes et de nos pratiques pédagogiques.
          </p>
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
            <span className='text-sm font-medium'>Certification qualité</span>
          </div>
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>
            Une question sur notre certification ?
          </h2>
          <p className='text-xl text-gray-300 mb-10 leading-relaxed'>
            Contactez-nous pour en savoir plus sur notre démarche qualité ou pour
            obtenir une copie de notre certificat.
          </p>
          <Link
            href='/contact'
            className='inline-flex items-center justify-center gap-2 bg-accent text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-yellow-500 transition-all hover:scale-105 shadow-lg'
          >
            Nous contacter
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
