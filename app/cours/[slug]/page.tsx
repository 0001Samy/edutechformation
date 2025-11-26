import { Clock, Users, Star, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

// Liste des formations disponibles
const formations = [
  {
    slug: 'web-development',
    title: 'Développement Web Complet',
    description: 'Maîtrisez HTML, CSS, JavaScript et les frameworks modernes',
    duration: '12 semaines',
    students: 1250,
    rating: 4.8,
    price: '599€',
    modules: [
      'Introduction au développement web',
      'HTML5 et CSS3 avancés',
      'JavaScript moderne (ES6+)',
      'React et Next.js',
      'Node.js et Express',
      'Bases de données et API',
      'Déploiement et hébergement',
      'Projet final',
    ],
    objectives: [
      'Créer des sites web responsive et modernes',
      'Maîtriser JavaScript et ses frameworks',
      'Développer des applications full-stack',
      'Comprendre les bonnes pratiques du développement',
    ],
  },
  {
    slug: 'data-science',
    title: 'Data Science & IA',
    description: 'Python, Machine Learning et Deep Learning',
    duration: '16 semaines',
    students: 890,
    rating: 4.9,
    price: '799€',
    modules: [
      'Introduction à Python',
      'Manipulation de données avec Pandas',
      'Visualisation de données',
      'Machine Learning avec Scikit-learn',
      'Deep Learning et réseaux de neurones',
      'Traitement du langage naturel (NLP)',
      'Vision par ordinateur',
      'Projet de ML en production',
    ],
    objectives: [
      'Maîtriser Python pour la data science',
      'Comprendre les algorithmes de ML',
      'Créer et déployer des modèles IA',
      'Analyser et visualiser des données complexes',
    ],
  },
  {
    slug: 'digital-marketing',
    title: 'Marketing Digital',
    description: 'SEO, réseaux sociaux, publicité en ligne et analytics',
    duration: '10 semaines',
    students: 1560,
    rating: 4.7,
    price: '499€',
    modules: [
      'Fondamentaux du marketing digital',
      'SEO et référencement naturel',
      'Publicité en ligne (Google Ads, Facebook Ads)',
      'Marketing des réseaux sociaux',
      'Email marketing et automation',
      'Analytics et mesure de performance',
      'Content marketing',
      'Stratégie digitale globale',
    ],
    objectives: [
      'Maîtriser les canaux digitaux',
      'Optimiser le référencement de sites web',
      'Créer des campagnes publicitaires efficaces',
      'Analyser et interpréter les données marketing',
    ],
  },
  {
    slug: 'project-management',
    title: 'Gestion de Projet Agile',
    description: 'Scrum, Kanban et méthodologies agiles',
    duration: '8 semaines',
    students: 720,
    rating: 4.6,
    price: '449€',
    modules: [
      'Introduction à l&apos;agilité',
      'Framework Scrum',
      'Méthode Kanban',
      'Planification et estimation agile',
      'Gestion d&apos;équipe agile',
      'Outils de gestion de projet',
      'Lean et amélioration continue',
      'Certification Scrum Master',
    ],
    objectives: [
      'Comprendre les principes agiles',
      'Devenir Scrum Master certifié',
      'Gérer efficacement des projets complexes',
      "Faciliter la collaboration d'équipe",
    ],
  },
];

// Fonction pour récupérer les données d'une formation
const getFormationData = (slug: string) => {
  const formation = formations.find((f) => f.slug === slug);
  return formation || formations[0]; // Retourne la première formation par défaut
};

// Génère les paramètres statiques pour toutes les formations
export function generateStaticParams() {
  return formations.map((formation) => ({
    slug: formation.slug,
  }));
}

export default function CourseDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const formation = getFormationData(params.slug);

  return (
    <div className='bg-gray-50'>
      <section className='bg-primary text-white py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h1 className='text-5xl font-bold mb-4'>{formation.title}</h1>
              <p className='text-xl text-blue-100 mb-6'>
                {formation.description}
              </p>
              <div className='flex items-center gap-6 text-sm mb-6'>
                <div className='flex items-center gap-2'>
                  <Clock size={20} />
                  <span>{formation.duration}</span>
                </div>
                <div className='flex items-center gap-2'>
                  <Users size={20} />
                  <span>{formation.students} étudiants</span>
                </div>
                <div className='flex items-center gap-2'>
                  <Star size={20} className='fill-accent text-accent' />
                  <span>{formation.rating}/5</span>
                </div>
              </div>
              <Link
                href='/contact'
                className='inline-flex items-center gap-2 bg-accent text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors'
              >
                S&apos;inscrire maintenant
                <ArrowRight size={20} />
              </Link>
            </div>
            <div className='bg-white/10 backdrop-blur-sm rounded-lg p-8'>
              <h3 className='text-2xl font-bold mb-4'>Tarif de la formation</h3>
              <p className='text-5xl font-bold mb-6'>{formation.price}</p>
              <ul className='space-y-3 text-blue-100'>
                <li className='flex items-center gap-2'>
                  <CheckCircle size={20} />
                  <span>Accès illimité aux cours</span>
                </li>
                <li className='flex items-center gap-2'>
                  <CheckCircle size={20} />
                  <span>Support des formateurs</span>
                </li>
                <li className='flex items-center gap-2'>
                  <CheckCircle size={20} />
                  <span>Certification à la fin</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            <div>
              <h2 className='text-3xl font-bold mb-6'>
                Programme de la formation
              </h2>
              <div className='bg-white rounded-lg shadow-md p-6'>
                <ul className='space-y-3'>
                  {formation.modules.map((module, index) => (
                    <li key={index} className='flex items-start gap-3'>
                      <div className='flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold text-sm'>
                        {index + 1}
                      </div>
                      <span className='pt-1'>{module}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h2 className='text-3xl font-bold mb-6'>
                Objectifs de la formation
              </h2>
              <div className='bg-white rounded-lg shadow-md p-6'>
                <ul className='space-y-4'>
                  {formation.objectives.map((objective, index) => (
                    <li key={index} className='flex items-start gap-3'>
                      <CheckCircle
                        className='text-green-500 flex-shrink-0 mt-1'
                        size={20}
                      />
                      <span>{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className='bg-primary text-white rounded-lg p-6 mt-6'>
                <h3 className='text-2xl font-bold mb-4'>Prêt à commencer ?</h3>
                <p className='mb-4'>
                  Inscrivez-vous dès maintenant et commencez votre apprentissage
                </p>
                <Link
                  href='/contact'
                  className='inline-flex items-center gap-2 bg-accent text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors'
                >
                  Contactez-nous
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
