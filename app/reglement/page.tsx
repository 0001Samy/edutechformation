import Link from 'next/link';

export const metadata = {
  title: 'Règlement intérieur - EduTech Formation',
  description:
    'Règlement intérieur applicable aux stagiaires des formations Edutech Formations.',
};

export default function ReglementPage() {
  return (
    <div className='bg-gradient-to-b from-gray-50 to-white'>
      {/* Hero Section */}
      <section className='bg-gradient-to-r from-primary via-teal-700 to-teal-900 text-white py-16 shadow-inner'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='text-5xl font-bold mb-4'>Règlement intérieur</h1>
          <p className='text-xl text-teal-100'>
            Applicable à l&apos;ensemble des stagiaires des formations dispensées
            par Edutech Formations.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className='py-16'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-10'>
            {/* Article 1 */}
            <div>
              <h2 className='text-2xl font-bold mb-4 text-gray-900'>
                Article 1 — Objet et champ d&apos;application
              </h2>
              <p className='text-gray-700 leading-relaxed'>
                Le présent règlement intérieur s&apos;applique à tous les
                stagiaires inscrits à une formation dispensée par Edutech
                Formations, et ce pour la durée de la formation suivie. Chaque
                stagiaire est considéré comme ayant accepté les termes du présent
                règlement lorsqu&apos;il suit une formation.
              </p>
            </div>

            {/* Article 2 */}
            <div>
              <h2 className='text-2xl font-bold mb-4 text-gray-900'>
                Article 2 — Discipline générale
              </h2>

              <h3 className='text-xl font-semibold mb-3 text-gray-800'>
                Horaires
              </h3>
              <p className='text-gray-700 leading-relaxed mb-6'>
                Les horaires de formation sont fixés par le programme de
                formation et communiqués aux stagiaires avant le début de la
                session. Les stagiaires sont tenus de respecter ces horaires. En
                cas d&apos;absence ou de retard, le stagiaire doit en informer le
                formateur ou le responsable de la formation.
              </p>

              <h3 className='text-xl font-semibold mb-3 text-gray-800'>
                Comportement
              </h3>
              <p className='text-gray-700 leading-relaxed mb-3'>
                Il est demandé à chaque stagiaire de respecter les règles
                élémentaires de savoir-vivre et de savoir-être en collectivité.
                Sont notamment interdits :
              </p>
              <ul className='list-disc list-inside space-y-2 text-gray-700 ml-4'>
                <li>
                  Les comportements portant atteinte au bon déroulement de la
                  formation
                </li>
                <li>
                  Les actes de violence, de harcèlement ou de discrimination
                </li>
                <li>
                  L&apos;introduction de boissons alcoolisées ou de substances
                  illicites dans les locaux de formation
                </li>
                <li>
                  L&apos;utilisation du téléphone portable pendant les sessions
                  (sauf autorisation du formateur)
                </li>
              </ul>
            </div>

            {/* Article 3 */}
            <div>
              <h2 className='text-2xl font-bold mb-4 text-gray-900'>
                Article 3 — Hygiène et sécurité
              </h2>
              <p className='text-gray-700 leading-relaxed'>
                Les stagiaires sont tenus de respecter les consignes de sécurité
                en vigueur dans les locaux où se déroule la formation. En cas
                d&apos;incendie ou d&apos;accident, les stagiaires doivent se
                conformer aux consignes d&apos;évacuation affichées dans les
                locaux. Il est interdit de fumer dans les locaux de formation.
              </p>
            </div>

            {/* Article 4 */}
            <div>
              <h2 className='text-2xl font-bold mb-4 text-gray-900'>
                Article 4 — Sanctions disciplinaires
              </h2>
              <p className='text-gray-700 leading-relaxed mb-3'>
                Tout manquement du stagiaire à l&apos;une des prescriptions du
                présent règlement pourra faire l&apos;objet d&apos;une sanction.
                Selon la gravité des faits, la sanction peut être :
              </p>
              <ul className='list-disc list-inside space-y-2 text-gray-700 ml-4'>
                <li>Un avertissement écrit</li>
                <li>L&apos;exclusion temporaire de la formation</li>
                <li>L&apos;exclusion définitive de la formation</li>
              </ul>
              <p className='text-gray-700 leading-relaxed mt-3'>
                Aucune sanction ne peut être prononcée sans que le stagiaire ait
                été informé des griefs retenus contre lui et ait pu présenter ses
                observations.
              </p>
            </div>

            {/* Article 5 */}
            <div>
              <h2 className='text-2xl font-bold mb-4 text-gray-900'>
                Article 5 — Représentation des stagiaires
              </h2>
              <p className='text-gray-700 leading-relaxed'>
                Pour les formations d&apos;une durée supérieure à 500 heures, un
                délégué titulaire et un délégué suppléant sont élus par les
                stagiaires, conformément aux dispositions du Code du travail
                (articles R6352-9 à R6352-14).
              </p>
            </div>

            {/* Article 6 */}
            <div>
              <h2 className='text-2xl font-bold mb-4 text-gray-900'>
                Article 6 — Propriété intellectuelle
              </h2>
              <p className='text-gray-700 leading-relaxed'>
                Les supports de formation remis aux stagiaires sont la propriété
                d&apos;Edutech Formations. Ils ne peuvent être reproduits,
                diffusés ou utilisés à des fins commerciales sans autorisation
                écrite préalable.
              </p>
            </div>

            {/* Article 7 */}
            <div>
              <h2 className='text-2xl font-bold mb-4 text-gray-900'>
                Article 7 — Informatique et libertés
              </h2>
              <p className='text-gray-700 leading-relaxed'>
                Les informations personnelles recueillies auprès des stagiaires
                font l&apos;objet d&apos;un traitement informatique conforme au
                RGPD. Pour plus d&apos;informations, consultez notre{' '}
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
