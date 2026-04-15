import {
  CreditCard,
  Building2,
  Briefcase,
  Landmark,
  Wallet,
  CheckCircle,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Financer votre formation - EduTech Formation',
  description:
    'Découvrez les dispositifs de financement pour votre formation professionnelle : CPF, OPCO, France Travail.',
};

export default function FinancementPage() {
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
            Financer votre formation
          </h1>
          <p className='text-xl md:text-2xl text-teal-50 max-w-3xl'>
            Plusieurs dispositifs permettent de prendre en charge tout ou partie
            du coût de votre formation. Nous vous accompagnons dans vos
            démarches.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className='py-16'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <p className='text-lg text-gray-700 leading-relaxed'>
            En tant qu&apos;organisme certifié{' '}
            <Link
              href='/qualiopi'
              className='text-primary font-semibold hover:underline'
            >
              Qualiopi
            </Link>
            , Edutech Formations vous permet de bénéficier de financements
            publics ou mutualisés. Voici les principaux dispositifs accessibles.
          </p>
        </div>
      </section>

      {/* CPF */}
      <section className='py-12 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-start gap-5'>
            <div className='w-16 h-16 bg-gradient-to-br from-primary to-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0'>
              <CreditCard className='text-white' size={32} />
            </div>
            <div>
              <h2 className='text-2xl md:text-3xl font-bold mb-4'>
                Le Compte Personnel de Formation (CPF)
              </h2>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                Chaque actif (salarié ou demandeur d&apos;emploi) dispose
                d&apos;un CPF alimenté chaque année. Vous pouvez utiliser vos
                droits pour financer directement votre inscription à nos
                formations éligibles.
              </p>
              <div className='space-y-3'>
                {[
                  'Consultez vos droits sur moncompteformation.gouv.fr',
                  'Inscription en ligne directe avec paiement via votre CPF',
                  "Un reste à charge de 100 € s'applique depuis mai 2024",
                ].map((item, i) => (
                  <div key={i} className='flex items-start gap-3'>
                    <CheckCircle
                      className='text-primary flex-shrink-0 mt-0.5'
                      size={20}
                    />
                    <p className='text-gray-700'>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OPCO */}
      <section className='py-12'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-start gap-5'>
            <div className='w-16 h-16 bg-gradient-to-br from-primary to-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0'>
              <Building2 className='text-white' size={32} />
            </div>
            <div>
              <h2 className='text-2xl md:text-3xl font-bold mb-4'>
                Les OPCO (Opérateurs de Compétences)
              </h2>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                Si vous êtes salarié, votre entreprise cotise auprès d&apos;un
                OPCO qui peut financer votre formation dans le cadre du plan de
                développement des compétences.
              </p>
              <div className='space-y-3'>
                {[
                  'Identifiez votre OPCO auprès de votre employeur ou service RH',
                  'Nous préparons le dossier administratif complet pour vous',
                  'Le financement peut couvrir les frais pédagogiques, les salaires et les frais annexes',
                ].map((item, i) => (
                  <div key={i} className='flex items-start gap-3'>
                    <CheckCircle
                      className='text-primary flex-shrink-0 mt-0.5'
                      size={20}
                    />
                    <p className='text-gray-700'>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* France Travail */}
      <section className='py-12 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-start gap-5'>
            <div className='w-16 h-16 bg-gradient-to-br from-primary to-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0'>
              <Briefcase className='text-white' size={32} />
            </div>
            <div>
              <h2 className='text-2xl md:text-3xl font-bold mb-4'>
                France Travail (ex-Pôle emploi)
              </h2>
              <p className='text-gray-700 mb-4 leading-relaxed'>
                Les demandeurs d&apos;emploi peuvent bénéficier d&apos;aides à la
                formation, notamment l&apos;AIF (Aide Individuelle à la
                Formation) ou le dispositif POEI.
              </p>
              <div className='space-y-3'>
                {[
                  'Parlez de votre projet de formation à votre conseiller France Travail',
                  'Nous fournissons le devis et le programme détaillé nécessaires au dossier',
                  "Le financement peut couvrir l'intégralité des frais pédagogiques",
                ].map((item, i) => (
                  <div key={i} className='flex items-start gap-3'>
                    <CheckCircle
                      className='text-primary flex-shrink-0 mt-0.5'
                      size={20}
                    />
                    <p className='text-gray-700'>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financement employeur */}
      <section className='py-12'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-start gap-5'>
            <div className='w-16 h-16 bg-gradient-to-br from-primary to-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0'>
              <Landmark className='text-white' size={32} />
            </div>
            <div>
              <h2 className='text-2xl md:text-3xl font-bold mb-4'>
                Financement par l&apos;employeur
              </h2>
              <p className='text-gray-700 leading-relaxed'>
                Votre entreprise peut financer directement votre formation dans
                le cadre de son plan de développement des compétences, sans
                passer par un OPCO.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Autofinancement */}
      <section className='py-12 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-start gap-5'>
            <div className='w-16 h-16 bg-gradient-to-br from-primary to-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0'>
              <Wallet className='text-white' size={32} />
            </div>
            <div>
              <h2 className='text-2xl md:text-3xl font-bold mb-4'>
                Autofinancement
              </h2>
              <p className='text-gray-700 leading-relaxed'>
                Vous pouvez également financer votre formation à titre personnel.
                Nous proposons des facilités de paiement sur demande.
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
            <span className='text-sm font-medium'>Accompagnement gratuit</span>
          </div>
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>
            Besoin d&apos;aide pour monter votre dossier ?
          </h2>
          <p className='text-xl text-gray-300 mb-10 leading-relaxed'>
            Nous vous accompagnons gratuitement dans vos démarches de
            financement, quel que soit le dispositif.
          </p>
          <Link
            href='/contact'
            className='inline-flex items-center justify-center gap-2 bg-accent text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-yellow-500 transition-all hover:scale-105 shadow-lg'
          >
            Contactez-nous
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
