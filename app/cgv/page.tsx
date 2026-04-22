export const metadata = {
  title: 'Conditions Générales de Vente - EduTech Formation',
  description:
    'Conditions générales de vente applicables aux formations Edutech Formations.',
};

export default function CGVPage() {
  return (
    <div className='bg-gradient-to-b from-gray-50 to-white'>
      {/* Hero Section */}
      <section className='bg-gradient-to-r from-primary via-teal-700 to-teal-900 text-white py-16 shadow-inner'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='text-5xl font-bold mb-4'>
            Conditions Générales de Vente
          </h1>
          <p className='text-xl text-teal-100'>
            Applicables à l&apos;ensemble des formations proposées par Edutech
            Formations.
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
                Article 1 — Objet
              </h2>
              <p className='text-gray-700 leading-relaxed'>
                Les présentes conditions générales de vente (CGV)
                s&apos;appliquent à toutes les formations professionnelles
                proposées par Edutech Formations, SAS au capital de 1 000 €,
                SIREN 977 619 089, dont le siège social est situé au 52 rue
                Montesquieu, 92600 Asnières-sur-Seine.
              </p>
            </div>

            {/* Article 2 */}
            <div>
              <h2 className='text-2xl font-bold mb-4 text-gray-900'>
                Article 2 — Inscription
              </h2>
              <p className='text-gray-700 leading-relaxed'>
                Toute inscription à une formation est conditionnée par
                l&apos;envoi d&apos;un bulletin d&apos;inscription dûment
                complété et signé, accompagné du règlement ou de l&apos;accord de
                prise en charge par un organisme financeur (OPCO, France Travail,
                CPF). L&apos;inscription est définitive à réception de ces
                éléments.
              </p>
            </div>

            {/* Article 3 */}
            <div>
              <h2 className='text-2xl font-bold mb-4 text-gray-900'>
                Article 3 — Tarifs
              </h2>
              <p className='text-gray-700 leading-relaxed'>
                Les tarifs des formations sont indiqués en euros hors taxes. TVA
                non applicable, article 261.4.4 a du Code Général des Impôts.
                Les prix comprennent les frais pédagogiques et les supports de
                formation. Les frais de transport, d&apos;hébergement et de
                restauration restent à la charge du stagiaire ou de son
                employeur.
              </p>
            </div>

            {/* Article 4 */}
            <div>
              <h2 className='text-2xl font-bold mb-4 text-gray-900'>
                Article 4 — Modalités de paiement
              </h2>
              <p className='text-gray-700 leading-relaxed'>
                Le paiement est dû à réception de la facture, à 30 jours fin de
                mois sauf accord particulier. En cas de prise en charge par un
                OPCO, l&apos;entreprise s&apos;engage à fournir l&apos;accord de
                financement avant le début de la formation. À défaut, le coût de
                la formation sera facturé directement au client.
              </p>
            </div>

            {/* Article 5 */}
            <div>
              <h2 className='text-2xl font-bold mb-4 text-gray-900'>
                Article 5 — Annulation et report
              </h2>

              <h3 className='text-xl font-semibold mb-3 text-gray-800'>
                Par le client
              </h3>
              <p className='text-gray-700 leading-relaxed mb-3'>
                Toute annulation doit être signalée par écrit (email ou
                courrier). En cas d&apos;annulation :
              </p>
              <ul className='list-disc list-inside space-y-2 text-gray-700 ml-4 mb-3'>
                <li>
                  Plus de 15 jours ouvrés avant le début de la formation : aucun
                  frais
                </li>
                <li>
                  Entre 15 et 7 jours ouvrés : 50 % du coût de la formation est
                  dû
                </li>
                <li>
                  Moins de 7 jours ouvrés ou absence sans prévenir : 100 % du
                  coût est dû
                </li>
              </ul>
              <p className='text-gray-700 leading-relaxed mb-6'>
                Le remplacement d&apos;un participant par un autre est possible
                sans frais, sous réserve de nous en informer avant le début de la
                formation.
              </p>

              <h3 className='text-xl font-semibold mb-3 text-gray-800'>
                Par Edutech Formations
              </h3>
              <p className='text-gray-700 leading-relaxed'>
                Edutech Formations se réserve le droit d&apos;annuler ou de
                reporter une session si le nombre minimum de participants
                n&apos;est pas atteint ou en cas de force majeure. Dans ce cas,
                les frais d&apos;inscription déjà versés sont intégralement
                remboursés ou reportés sur une session ultérieure, au choix du
                client.
              </p>
            </div>

            {/* Article 6 */}
            <div>
              <h2 className='text-2xl font-bold mb-4 text-gray-900'>
                Article 6 — Déroulement de la formation
              </h2>
              <p className='text-gray-700 leading-relaxed'>
                Edutech Formations s&apos;engage à mettre en œuvre tous les
                moyens nécessaires au bon déroulement de la formation
                conformément au programme communiqué. Les formations sont
                dispensées en présentiel, aux dates, horaires et lieux indiqués
                dans la convocation.
              </p>
            </div>

            {/* Article 7 */}
            <div>
              <h2 className='text-2xl font-bold mb-4 text-gray-900'>
                Article 7 — Attestation et certification
              </h2>
              <p className='text-gray-700 leading-relaxed'>
                À l&apos;issue de la formation, une attestation de fin de
                formation mentionnant les objectifs, la nature, la durée et les
                résultats de l&apos;évaluation des acquis est remise à chaque
                stagiaire.
              </p>
            </div>

            {/* Article 8 */}
            <div>
              <h2 className='text-2xl font-bold mb-4 text-gray-900'>
                Article 8 — Réclamations
              </h2>
              <p className='text-gray-700 leading-relaxed'>
                Toute réclamation doit être formulée par écrit à l&apos;adresse{' '}
                <a
                  href='mailto:contact@edutechformations.com'
                  className='text-primary hover:underline'
                >
                  contact@edutechformations.com
                </a>
                . Nous nous engageons à accuser réception sous 48 heures et à
                apporter une réponse sous 15 jours ouvrés.
              </p>
            </div>

            {/* Article 9 */}
            <div>
              <h2 className='text-2xl font-bold mb-4 text-gray-900'>
                Article 9 — Droit applicable
              </h2>
              <p className='text-gray-700 leading-relaxed'>
                Les présentes CGV sont soumises au droit français. En cas de
                litige, les parties s&apos;engagent à rechercher une solution
                amiable. À défaut, le tribunal compétent sera celui du ressort du
                siège social d&apos;Edutech Formations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
