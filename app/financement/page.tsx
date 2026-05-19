'use client';

import {
  CheckCircle,
  ArrowRight,
  Sparkles,
  ListChecks,
  ShieldCheck,
  FileText,
  Info,
} from 'lucide-react';
import Link from 'next/link';
import { useTranslatedContent } from '@/lib/i18n/useTranslatedContent';
import { useMemo } from 'react';

export default function FinancementPage() {
  const dispositifs = useMemo(
    () => [
      "Plan de développement des compétences (entreprises)",
      "Financements via les opérateurs de compétences (OPCO)",
      "Fonds d'assurance formation (FAF) pour les travailleurs indépendants",
      "Les dispositifs d'aide à la formation pour les demandeurs d'emploi, notamment via France Travail",
    ],
    []
  );

  const conditions = useMemo(
    () => [
      "De votre statut professionnel",
      "De votre secteur d'activité",
      "Des priorités de financement définies par votre organisme",
      "Du contenu et des objectifs de la formation",
      "Des budgets disponibles au moment de la demande",
    ],
    []
  );

  const documents = useMemo(
    () => [
      "Le programme détaillé de la formation",
      "Un devis personnalisé",
      "Une convention ou un contrat de formation",
      "Une attestation de réalisation",
    ],
    []
  );

  const staticStrings = useMemo(
    () => [
      "Financer votre formation",
      "Les formations proposées par Edutech Formations peuvent, selon votre situation, faire l'objet d'une demande de prise en charge dans le cadre des dispositifs de financement de la formation professionnelle. Notre organisme est certifié Qualiopi, ce qui permet l'accès à des financements publics ou mutualisés, sous réserve des conditions définies par les organismes financeurs.",
      "Les dispositifs de financement",
      "Plusieurs dispositifs peuvent être mobilisés selon votre statut :",
      "Chaque demande de financement est étudiée au cas par cas par l'organisme financeur.",
      "Conditions de prise en charge",
      "L'accès à un financement dépend notamment :",
      "Une information transparente",
      "Edutech Formations s'engage à fournir des informations claires et conformes aux exigences réglementaires. Aucune prise en charge ne peut être garantie à l'avance. Les conditions et niveaux de financement relèvent exclusivement des organismes financeurs.",
      "Documents disponibles",
      "Pour faciliter vos démarches, nous mettons à disposition :",
      "Besoin d'informations complémentaires ?",
      "Nous vous invitons à nous contacter afin d'obtenir des informations adaptées à votre situation et être orienté dans vos démarches.",
      "Demander votre devis",
    ],
    []
  );

  const allDynamic = useMemo(
    () => [...staticStrings, ...dispositifs, ...conditions, ...documents],
    [staticStrings, dispositifs, conditions, documents]
  );
  const [translated] = useTranslatedContent(allDynamic);

  const sl = staticStrings.length;
  const dl = dispositifs.length;
  const cl = conditions.length;

  const ts = (i: number) => translated[i] || staticStrings[i];
  const tDispositifs = dispositifs.map((s, i) => translated[sl + i] || s);
  const tConditions = conditions.map((s, i) => translated[sl + dl + i] || s);
  const tDocuments = documents.map((s, i) => translated[sl + dl + cl + i] || s);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary via-teal-600 to-teal-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold">{ts(0)}</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-700 leading-relaxed text-justify hyphens-auto">
            {ts(1)}
          </p>
        </div>
      </section>

      {/* Dispositifs */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-5">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0">
              <ListChecks className="text-white" size={32} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">{ts(2)}</h2>
              <p className="text-gray-700 mb-4">{ts(3)}</p>
              <div className="space-y-3 mb-4">
                {tDispositifs.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={20} />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 italic">{ts(4)}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions de prise en charge */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-5">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="text-white" size={32} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">{ts(5)}</h2>
              <p className="text-gray-700 mb-4">{ts(6)}</p>
              <div className="space-y-3">
                {tConditions.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={20} />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Information transparente */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-5">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Info className="text-white" size={32} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">{ts(7)}</h2>
              <p className="text-gray-700 leading-relaxed text-justify hyphens-auto">{ts(8)}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Documents disponibles */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-5">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0">
              <FileText className="text-white" size={32} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">{ts(9)}</h2>
              <p className="text-gray-700 mb-4">{ts(10)}</p>
              <div className="space-y-3">
                {tDocuments.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={20} />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
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
            <span className="text-sm font-medium">Accompagnement gratuit</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{ts(11)}</h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">{ts(12)}</p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-accent text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-yellow-500 transition-all hover:scale-105 shadow-lg"
          >
            {ts(13)}
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
