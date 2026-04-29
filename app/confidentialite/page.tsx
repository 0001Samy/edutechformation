export const metadata = {
  title: 'Politique de confidentialité',
  description:
    'Politique de confidentialité du site edutechformations.com : données collectées, finalités, durée de conservation et exercice de vos droits RGPD.',
  alternates: { canonical: '/confidentialite' },
  openGraph: {
    title: 'Politique de confidentialité | EduTech Formation',
    description:
      'Protection des données personnelles et conformité RGPD chez EduTech Formation.',
    url: 'https://edutechformations.com/confidentialite',
  },
};

export default function ConfidentialitePage() {
  return (
    <div className='bg-gradient-to-b from-gray-50 to-white'>
      {/* Hero Section */}
      <section className='bg-gradient-to-r from-primary via-teal-700 to-teal-900 text-white py-16 shadow-inner'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='text-5xl font-bold mb-4'>
            Politique de confidentialité
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className='py-16'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-10'>
            {/* Introduction */}
            <div>
              <h2 className='text-2xl font-bold mb-4 text-gray-900'>
                Introduction
              </h2>
              <p className='text-gray-700 leading-relaxed'>
                Edutech Formations s&apos;engage à protéger la vie privée des
                utilisateurs de son site. La présente politique de
                confidentialité décrit les données personnelles que nous
                collectons, pourquoi nous les collectons et comment nous les
                utilisons.
              </p>
            </div>

            {/* Responsable du traitement */}
            <div>
              <h2 className='text-2xl font-bold mb-4 text-gray-900'>
                Responsable du traitement
              </h2>
              <p className='text-gray-700 mb-3'>
                Le responsable du traitement des données est :
              </p>
              <div className='bg-gray-50 rounded-xl p-6 space-y-2 text-gray-700'>
                <p className='font-bold text-gray-900'>
                  EDUTECH FORMATIONS — SAS au capital de 1 000 €
                </p>
                <p>
                  Contact :{' '}
                  <a
                    href='mailto:contact@edutechformations.com'
                    className='text-primary hover:underline'
                  >
                    contact@edutechformations.com
                  </a>
                </p>
              </div>
            </div>

            {/* Données collectées */}
            <div>
              <h2 className='text-2xl font-bold mb-4 text-gray-900'>
                Données collectées
              </h2>

              <h3 className='text-xl font-semibold mb-3 text-gray-800'>
                Via les formulaires de contact
              </h3>
              <p className='text-gray-700 leading-relaxed mb-6'>
                Lorsque vous nous contactez via le site, nous collectons : nom,
                adresse email, numéro de téléphone (facultatif) et le contenu de
                votre message. Ces données sont utilisées uniquement pour
                répondre à votre demande.
              </p>

              <h3 className='text-xl font-semibold mb-3 text-gray-800'>
                Via Google Analytics
              </h3>
              <p className='text-gray-700 leading-relaxed'>
                Nous utilisons Google Analytics pour analyser la fréquentation de
                notre site. Cet outil collecte des données anonymisées : pages
                visitées, durée de la visite, type d&apos;appareil, zone
                géographique approximative. Aucune donnée personnelle
                identifiable n&apos;est collectée par cet outil.
              </p>
            </div>

            {/* Finalité du traitement */}
            <div>
              <h2 className='text-2xl font-bold mb-4 text-gray-900'>
                Finalité du traitement
              </h2>
              <p className='text-gray-700 mb-3'>
                Vos données sont collectées pour :
              </p>
              <ul className='list-disc list-inside space-y-2 text-gray-700 ml-4'>
                <li>
                  Répondre à vos demandes d&apos;information ou
                  d&apos;inscription
                </li>
                <li>Assurer le suivi administratif des formations</li>
                <li>
                  Améliorer notre site et nos services grâce aux statistiques de
                  fréquentation
                </li>
              </ul>
            </div>

            {/* Durée de conservation */}
            <div>
              <h2 className='text-2xl font-bold mb-4 text-gray-900'>
                Durée de conservation
              </h2>
              <p className='text-gray-700 leading-relaxed'>
                Les données issues des formulaires de contact sont conservées
                pendant 3 ans à compter de votre dernière interaction. Les
                données de Google Analytics sont conservées 14 mois.
              </p>
            </div>

            {/* Vos droits */}
            <div>
              <h2 className='text-2xl font-bold mb-4 text-gray-900'>
                Vos droits
              </h2>
              <p className='text-gray-700 mb-3'>
                Conformément au RGPD, vous disposez des droits suivants sur vos
                données personnelles :
              </p>
              <ul className='list-disc list-inside space-y-2 text-gray-700 ml-4'>
                <li>
                  <strong>Droit d&apos;accès :</strong> obtenir une copie de vos
                  données
                </li>
                <li>
                  <strong>Droit de rectification :</strong> corriger des données
                  inexactes
                </li>
                <li>
                  <strong>Droit à l&apos;effacement :</strong> demander la
                  suppression de vos données
                </li>
                <li>
                  <strong>Droit d&apos;opposition :</strong> vous opposer au
                  traitement de vos données
                </li>
                <li>
                  <strong>Droit à la portabilité :</strong> récupérer vos données
                  dans un format lisible
                </li>
              </ul>
              <p className='text-gray-700 mt-3'>
                Pour exercer ces droits, contactez-nous à{' '}
                <a
                  href='mailto:contact@edutechformations.com'
                  className='text-primary hover:underline'
                >
                  contact@edutechformations.com
                </a>
                .
              </p>
            </div>

            {/* Cookies */}
            <div>
              <h2 className='text-2xl font-bold mb-4 text-gray-900'>Cookies</h2>
              <p className='text-gray-700 leading-relaxed'>
                Ce site utilise uniquement les cookies nécessaires au
                fonctionnement de Google Analytics. Vous pouvez désactiver ces
                cookies via les paramètres de votre navigateur ou en utilisant
                l&apos;extension de navigateur proposée par Google.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
