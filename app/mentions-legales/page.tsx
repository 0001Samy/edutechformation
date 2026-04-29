import Link from 'next/link';

export const metadata = {
  title: 'Mentions légales',
  description:
    'Mentions légales du site edutechformations.com : éditeur, hébergeur, propriété intellectuelle et coordonnées de contact.',
  alternates: { canonical: '/mentions-legales' },
  openGraph: {
    title: 'Mentions légales | EduTech Formation',
    description: 'Mentions légales du site edutechformations.com.',
    url: 'https://edutechformations.com/mentions-legales',
  },
};

export default function MentionsLegalesPage() {
  return (
    <div className='bg-gradient-to-b from-gray-50 to-white'>
      {/* Hero Section */}
      <section className='bg-gradient-to-r from-primary via-teal-700 to-teal-900 text-white py-16 shadow-inner'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='text-5xl font-bold mb-4'>Mentions légales</h1>
        </div>
      </section>

      {/* Content */}
      <section className='py-16'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-10'>
            {/* Éditeur du site */}
            <div>
              <h2 className='text-2xl font-bold mb-4 text-gray-900'>
                Éditeur du site
              </h2>
              <p className='text-gray-700 mb-3'>
                Le site edutechformations.com est édité par :
              </p>
              <div className='bg-gray-50 rounded-xl p-6 space-y-2 text-gray-700'>
                <p className='font-bold text-lg text-gray-900'>
                  EDUTECH FORMATIONS
                </p>
                <p>SAS au capital de 1 000 €</p>
                <p>SIREN : 977 619 089</p>
                <p>SIRET (siège) : 977 619 089 00021</p>
                <p>Code NAF : 85.59A — Formation continue d&apos;adultes</p>
                <p>Responsable de publication : Olivier Gil</p>
                <p>
                  Contact :{' '}
                  <a
                    href='mailto:contact@edutechformations.com'
                    className='text-primary hover:underline'
                  >
                    contact@edutechformations.com
                  </a>
                </p>
                <p>
                  Téléphone :{' '}
                  <a
                    href='tel:+33633247764'
                    className='text-primary hover:underline'
                  >
                    06 33 24 77 64
                  </a>
                </p>
              </div>
            </div>

            {/* Hébergement */}
            <div>
              <h2 className='text-2xl font-bold mb-4 text-gray-900'>
                Hébergement
              </h2>
              <p className='text-gray-700'>
                Le site est hébergé par : [Nom de l&apos;hébergeur, adresse,
                téléphone — à compléter]
              </p>
            </div>

            {/* Propriété intellectuelle */}
            <div>
              <h2 className='text-2xl font-bold mb-4 text-gray-900'>
                Propriété intellectuelle
              </h2>
              <p className='text-gray-700 leading-relaxed'>
                L&apos;ensemble du contenu de ce site (textes, images, vidéos,
                logo, charte graphique) est la propriété exclusive d&apos;Edutech
                Formations, sauf mention contraire. Toute reproduction,
                distribution, modification ou utilisation de ces contenus sans
                autorisation préalable est interdite.
              </p>
            </div>

            {/* Données personnelles */}
            <div>
              <h2 className='text-2xl font-bold mb-4 text-gray-900'>
                Données personnelles
              </h2>
              <p className='text-gray-700 leading-relaxed mb-3'>
                Les informations recueillies via les formulaires du site font
                l&apos;objet d&apos;un traitement informatique destiné à
                répondre à vos demandes. Conformément au Règlement Général sur la
                Protection des Données (RGPD), vous disposez d&apos;un droit
                d&apos;accès, de rectification et de suppression de vos données.
                Pour exercer ces droits, contactez-nous à{' '}
                <a
                  href='mailto:contact@edutechformations.com'
                  className='text-primary hover:underline'
                >
                  contact@edutechformations.com
                </a>
                .
              </p>
              <p className='text-gray-700'>
                Pour plus d&apos;informations, consultez notre{' '}
                <Link
                  href='/confidentialite'
                  className='text-primary font-semibold hover:underline'
                >
                  politique de confidentialité
                </Link>
                .
              </p>
            </div>

            {/* Cookies */}
            <div>
              <h2 className='text-2xl font-bold mb-4 text-gray-900'>Cookies</h2>
              <p className='text-gray-700'>
                Ce site utilise Google Analytics à des fins de mesure
                d&apos;audience. Pour en savoir plus, consultez notre{' '}
                <Link
                  href='/confidentialite'
                  className='text-primary font-semibold hover:underline'
                >
                  politique de confidentialité
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
