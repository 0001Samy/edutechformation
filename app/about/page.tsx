'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  CheckCircle,
  Users,
  TrendingUp,
  ArrowRight,
  Sparkles,
  Target,
  Layers,
  GraduationCap,
} from 'lucide-react';
import { useTranslatedContent } from '@/lib/i18n/useTranslatedContent';
import { useMemo } from 'react';

export default function AboutPage() {
  const poles = useMemo(
    () => [
      "Le droit, pour sécuriser les pratiques et maîtriser les obligations réglementaires",
      "La médiation, pour développer les compétences relationnelles et gérer les situations complexes",
      "L'intelligence artificielle, pour accompagner les transformations et améliorer l'efficacité des organisations",
    ],
    []
  );

  const visionPoints = useMemo(
    () => [
      "La formation ne se limite pas à la théorie,",
      "Elle doit produire des résultats visibles,",
      "Elle doit s'adapter à la réalité des entreprises.",
    ],
    []
  );

  const surMesurePoints = useMemo(
    () => [
      "Analyse précise de vos besoins,",
      "Construction de programmes adaptés à votre activité,",
      "Ajustement des contenus en fonction de vos objectifs,",
      "Suivi des résultats et des acquis.",
    ],
    []
  );

  const qualiopiPoints = useMemo(
    () => [
      "De la qualité de nos processus,",
      "De la pertinence de nos formations,",
      "De notre conformité aux exigences des financeurs.",
    ],
    []
  );

  const flexPoints = useMemo(
    () => [
      "Formations en présentiel dans vos locaux,",
      "Sessions à distance en visioconférence interactive,",
      "Formats courts ou parcours complets.",
    ],
    []
  );

  const whyPoints = useMemo(
    () => [
      "Un partenaire engagé dans votre réussite",
      "Des formations actuelles, alignées avec les évolutions du marché",
      "Une approche concrète orientée résultats",
      "Un accompagnement personnalisé de A à Z",
      "Une expertise pédagogique reconnue",
    ],
    []
  );

  const staticStrings = useMemo(
    () => [
      "À propos d'Edutech Formations",                                                          // 0
      "Former aujourd'hui les compétences de demain",                                           // 1
      "Chez Edutech Formations, nous sommes convaincus que la formation professionnelle est bien plus qu'une obligation : c'est un véritable levier de performance, d'évolution et de transformation durable. Dans un environnement en constante mutation, avec la digitalisation des métiers, l'évolution des réglementations et de nouveaux modes de travail, nous accompagnons les entreprises et les professionnels pour anticiper, s'adapter et performer durablement.", // 2
      "Nous intervenons principalement autour de trois pôles d'expertise complémentaires :",    // 3
      "Notre ambition : donner à chacun les moyens de développer ses compétences, sécuriser son parcours professionnel et atteindre ses objectifs.", // 4
      "Une vision moderne de la formation professionnelle",                                     // 5
      "Nous défendons une approche concrète, utile et directement applicable sur le terrain. Chez Edutech Formations :", // 6
      "Une pédagogie centrée sur l'humain et l'efficacité",                                    // 7
      "L'humain au cœur de chaque parcours",                                                   // 8
      "Chaque apprenant est unique. Nous concevons des formations qui respectent les rythmes, les objectifs et les réalités de chacun, dans un cadre bienveillant et stimulant.", // 9
      "L'apprentissage par la pratique",                                                        // 10
      "Nous privilégions les cas concrets, les mises en situation, les échanges d'expériences. Objectif : transformer les connaissances en compétences opérationnelles.", // 11
      "L'excellence pédagogique",                                                              // 12
      "Nos formateurs sont avant tout des professionnels de terrain, experts dans leur domaine, capables de transmettre avec pédagogie, clarté et impact.", // 13
      "Des formations sur mesure, adaptées à vos enjeux",                                      // 14
      "Parce que chaque structure est différente, nous proposons des solutions 100 % personnalisées. Au-delà de nos domaines d'expertise, nous concevons également des formations sur mesure, adaptées à vos enjeux spécifiques.", // 15
      "Nos formations s'adressent aux entreprises, associations, établissements médico-sociaux et organismes publics.", // 16
      "Une qualité certifiée et reconnue",                                                     // 17
      "Edutech Formations est certifié Qualiopi, une garantie essentielle pour nos clients. Cette certification atteste :", // 18
      "Elle vous permet également de bénéficier de financements publics ou mutualisés (OPCO, FAF, etc.).", // 19
      "En savoir plus sur notre certification",                                                // 20
      "Flexibilité et proximité",                                                              // 21
      "Nous nous adaptons à vos contraintes organisationnelles :",                             // 22
      "Notre priorité : vous offrir une expérience fluide, accessible et efficace.",           // 23
      "Pourquoi choisir Edutech Formations ?",                                                 // 24
      "Ensemble, développons vos compétences",                                                 // 25
      "Chez Edutech Formations, nous avons une mission claire : rendre la formation utile, accessible et impactante. Nous croyons en une formation qui fait grandir les individus, renforce les équipes et améliore durablement la performance des organisations.", // 26
      "Construisons ensemble des parcours de formation qui ont du sens, et surtout, des résultats.", // 27
      "Voir nos formations",                                                                   // 28
    ],
    []
  );

  const allDynamic = useMemo(
    () => [
      ...staticStrings,
      ...poles,
      ...visionPoints,
      ...surMesurePoints,
      ...qualiopiPoints,
      ...flexPoints,
      ...whyPoints,
    ],
    [staticStrings, poles, visionPoints, surMesurePoints, qualiopiPoints, flexPoints, whyPoints]
  );

  const [translated] = useTranslatedContent(allDynamic);

  const sl = staticStrings.length;
  const pl = poles.length;
  const vl = visionPoints.length;
  const sml = surMesurePoints.length;
  const ql = qualiopiPoints.length;
  const fl = flexPoints.length;

  const ts = (i: number) => translated[i] || staticStrings[i];
  const tPoles = poles.map((s, i) => translated[sl + i] || s);
  const tVision = visionPoints.map((s, i) => translated[sl + pl + i] || s);
  const tSurMesure = surMesurePoints.map((s, i) => translated[sl + pl + vl + i] || s);
  const tQualiopi = qualiopiPoints.map((s, i) => translated[sl + pl + vl + sml + i] || s);
  const tFlex = flexPoints.map((s, i) => translated[sl + pl + vl + sml + ql + i] || s);
  const tWhy = whyPoints.map((s, i) => translated[sl + pl + vl + sml + ql + fl + i] || s);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary via-teal-600 to-teal-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{ts(0)}</h1>
          <p className="text-xl md:text-2xl text-teal-50 max-w-3xl">{ts(1)}</p>
        </div>
      </section>

      {/* Notre mission */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed text-justify hyphens-auto">
                {ts(2)}
              </p>
              <p className="text-gray-600 mb-4 font-medium">{ts(3)}</p>
              <ul className="space-y-3 mb-6">
                {tPoles.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-primary font-semibold">{ts(4)}</p>
            </div>
            <div className="bg-gradient-to-br from-primary/30 to-teal-900/30 h-96 rounded-lg flex items-center justify-center relative overflow-hidden shadow-lg border border-teal-100">
              <Image
                src="/about-team.jpg"
                alt="Groupe de personnes en formation"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision moderne */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-5">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Target className="text-white" size={32} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{ts(5)}</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">{ts(6)}</p>
              <ul className="space-y-2">
                {tVision.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pédagogie : 3 piliers */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{ts(7)}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-accent to-yellow-500 rounded-2xl mb-5 group-hover:scale-110 transition-transform">
                <Users className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{ts(8)}</h3>
              <p className="text-gray-600 leading-relaxed">{ts(9)}</p>
            </div>
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary to-teal-600 rounded-2xl mb-5 group-hover:scale-110 transition-transform">
                <Layers className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{ts(10)}</h3>
              <p className="text-gray-600 leading-relaxed">{ts(11)}</p>
            </div>
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-foreground to-gray-700 rounded-2xl mb-5 group-hover:scale-110 transition-transform">
                <GraduationCap className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{ts(12)}</h3>
              <p className="text-gray-600 leading-relaxed">{ts(13)}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Formations sur mesure */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-5">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Layers className="text-white" size={32} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{ts(14)}</h2>
              <p className="text-gray-700 mb-4 leading-relaxed text-justify hyphens-auto">{ts(15)}</p>
              <ul className="space-y-3 mb-4">
                {tSurMesure.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 italic">{ts(16)}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Qualité certifiée Qualiopi */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary/5 to-teal-50 rounded-2xl p-8 md:p-12 border border-teal-100">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <Image
                  src="/Logo_Qualiopi.png"
                  alt="Logo Qualiopi"
                  width={200}
                  height={100}
                  className="object-contain"
                />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{ts(17)}</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">{ts(18)}</p>
                <ul className="space-y-2 mb-4">
                  {tQualiopi.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-700 mb-5 leading-relaxed">{ts(19)}</p>
                <Link
                  href="/qualiopi"
                  className="text-primary font-semibold hover:underline inline-flex items-center gap-1"
                >
                  {ts(20)}
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flexibilité et proximité */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-5">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0">
              <TrendingUp className="text-white" size={32} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{ts(21)}</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">{ts(22)}</p>
              <ul className="space-y-3 mb-4">
                {tFlex.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-primary font-semibold">{ts(23)}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi choisir Edutech */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">{ts(24)}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tWhy.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-white rounded-xl p-5 shadow-sm border border-gray-100"
              >
                <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={20} />
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 px-4 py-2 rounded-full mb-6">
            <Sparkles size={18} className="text-accent" />
            <span className="text-sm font-medium">Échangeons ensemble</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{ts(25)}</h2>
          <p className="text-xl text-gray-300 mb-4 leading-relaxed">{ts(26)}</p>
          <p className="text-lg text-gray-400 mb-10">{ts(27)}</p>
          <Link
            href="/formations"
            className="inline-flex items-center justify-center gap-2 bg-accent text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-yellow-500 transition-all hover:scale-105 shadow-lg"
          >
            {ts(28)}
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
