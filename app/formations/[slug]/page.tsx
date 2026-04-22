import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Star,
  GraduationCap,
  BookOpen,
  ClipboardList,
  UserCheck,
  Target,
  FileText,
  CalendarClock,
  Info,
} from "lucide-react";

// Génération des pages statiques
export async function generateStaticParams() {
  const slugs = await client.fetch(
    groq`*[_type == "formation" && defined(slug.current)]{
      "slug": slug.current
    }`
  );

  return slugs.map((s: { slug: string }) => ({ slug: s.slug }));
}

// Métadonnées SEO dynamiques par formation
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = await client.fetch<{
    titre?: string;
    description?: string;
    imageUrl?: string;
  } | null>(
    groq`*[_type == "formation" && slug.current == $slug][0]{
      titre,
      description,
      "imageUrl": image.asset->url
    }`,
    { slug }
  );

  if (!course) {
    return {
      title: 'Formation introuvable',
      robots: { index: false, follow: false },
    };
  }

  const title = course.titre ?? 'Formation';
  const description =
    course.description?.slice(0, 160) ??
    `Découvrez la formation ${title} proposée par EduTech Formation, organisme certifié Qualiopi.`;
  const url = `https://edutechformations.com/formations/${slug}`;

  return {
    title,
    description,
    alternates: { canonical: `/formations/${slug}` },
    openGraph: {
      title: `${title} | EduTech Formation`,
      description,
      url,
      type: 'article',
      images: course.imageUrl
        ? [{ url: course.imageUrl, alt: title }]
        : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | EduTech Formation`,
      description,
      images: course.imageUrl ? [course.imageUrl] : undefined,
    },
  };
}

// Composant section réutilisable
function Section({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
      <div className="flex items-center gap-3 mb-5">
        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-primary to-teal-800 text-white rounded-lg flex items-center justify-center shadow-md">
          <Icon size={20} />
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-gray-900">{title}</h2>
      </div>
      {children}
    </div>
  );
}

// Composant pour afficher une liste à puces
function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item: string, index: number) => (
        <li key={index} className="flex items-start gap-3">
          <CheckCircle
            className="text-primary flex-shrink-0 mt-0.5"
            size={18}
          />
          <span className="text-gray-700 leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}

// Composant pour afficher du texte
function TextBlock({ text }: { text: string }) {
  return (
    <p className="text-gray-700 leading-relaxed whitespace-pre-line">{text}</p>
  );
}

// Page dynamique pour une formation
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const course = await client.fetch(
    groq`
      *[_type == "formation" && slug.current == $slug][0]{
        _id,
        titre,
        description,
        duree,
        horaires,
        etudiants,
        note,
        prix,
        prixIntra,
        prixInter,
        participantsMin,
        participantsMax,
        modules,
        objectifs,
        contenuFormation,
        publicConcerne,
        prerequis,
        modalitesAcces,
        modalitesEvaluation,
        suiviExecution,
        appreciationResultats,
        moyensPedagogiques,
        profilFormateur,
        lien,
        slug,
        "imageUrl": image.asset->url
      }
    `,
    { slug }
  );

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Formation introuvable
          </h1>
          <Link href="/formations" className="text-primary hover:underline">
            ← Retour aux formations
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary via-teal-700 to-teal-900 text-white py-16 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Infos principales */}
            <div className="lg:col-span-2">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {course.titre}
              </h1>
              {course.description && (
                <p className="text-xl text-teal-100 mb-6">
                  {course.description}
                </p>
              )}

              {/* Badges infos rapides */}
              <div className="flex flex-wrap items-center gap-4 text-sm mb-6">
                {course.duree && (
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    <Clock size={18} />
                    <span>{course.duree}h de formation</span>
                  </div>
                )}
                {course.horaires && (
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    <CalendarClock size={18} />
                    <span>{course.horaires}</span>
                  </div>
                )}
                {(course.participantsMin || course.participantsMax) && (
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    <Users size={18} />
                    <span>
                      {course.participantsMin && course.participantsMax
                        ? `${course.participantsMin} à ${course.participantsMax} participants`
                        : course.participantsMin
                        ? `Min. ${course.participantsMin} participants`
                        : `Max. ${course.participantsMax} participants`}
                    </span>
                  </div>
                )}
                {course.etudiants && (
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    <GraduationCap size={18} />
                    <span>{course.etudiants} étudiants formés</span>
                  </div>
                )}
                {course.note && (
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    <Star size={18} className="fill-accent text-accent" />
                    <span>{course.note}/5</span>
                  </div>
                )}
              </div>

              <Link
                href={course.lien || "/contact"}
                className="inline-flex items-center gap-2 bg-accent text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-yellow-500 transition-colors shadow-lg"
              >
                S&apos;inscrire maintenant
                <ArrowRight size={20} />
              </Link>
            </div>

            {/* Encadré tarif */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">Tarif de la formation</h3>

              {course.prixInter != null && (
                <div className="mb-4 pb-4 border-b border-white/20">
                  <p className="text-xs uppercase tracking-wider text-accent font-semibold mb-1">
                    INTER / individuel
                  </p>
                  <p className="text-4xl font-bold">{course.prixInter}€</p>
                </div>
              )}

              {course.prixIntra != null && (
                <div className="mb-4">
                  <p className="text-xs uppercase tracking-wider text-teal-200 font-semibold mb-1">
                    INTRA
                  </p>
                  <p className="text-2xl font-bold">{course.prixIntra}€</p>
                </div>
              )}

              {course.prixInter == null && course.prixIntra == null && course.prix != null && (
                <p className="text-5xl font-bold mb-2">{course.prix}€</p>
              )}

              {(course.prixInter != null || course.prixIntra != null || course.prix != null) && (
                <p className="text-teal-200 text-sm mb-6">
                  Exonérée de TVA — Art. 261.4.4 a du CGI
                </p>
              )}

              <ul className="space-y-3 text-teal-100 text-sm">
                {course.duree && (
                  <li className="flex items-center gap-2">
                    <CheckCircle size={18} />
                    <span>{course.duree}h de formation</span>
                  </li>
                )}
                {course.horaires && (
                  <li className="flex items-center gap-2">
                    <CheckCircle size={18} />
                    <span>{course.horaires}</span>
                  </li>
                )}
                {(course.participantsMin || course.participantsMax) && (
                  <li className="flex items-center gap-2">
                    <CheckCircle size={18} />
                    <span>
                      {course.participantsMin && course.participantsMax
                        ? `De ${course.participantsMin} à ${course.participantsMax} participants`
                        : course.participantsMin
                        ? `Min. ${course.participantsMin} participants`
                        : `Max. ${course.participantsMax} participants`}
                    </span>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Colonne principale (2/3) */}
            <div className="lg:col-span-2 space-y-8">
              {/* Public concerné */}
              {course.publicConcerne && (
                <Section title="Public concerné" icon={Users}>
                  <TextBlock text={course.publicConcerne} />
                </Section>
              )}

              {/* Prérequis */}
              {course.prerequis && course.prerequis.length > 0 && (
                <Section title="Prérequis" icon={Info}>
                  <BulletList items={course.prerequis} />
                </Section>
              )}

              {/* Objectifs et compétences visées */}
              {course.objectifs && course.objectifs.length > 0 && (
                <Section
                  title="Objectifs de la formation et compétences visées"
                  icon={Target}
                >
                  <BulletList items={course.objectifs} />
                </Section>
              )}

              {/* Contenu de la formation */}
              {course.contenuFormation && (
                <Section title="Contenu de la formation" icon={FileText}>
                  <TextBlock text={course.contenuFormation} />
                </Section>
              )}

              {/* Programme / Modules */}
              {course.modules && course.modules.length > 0 && (
                <Section title="Programme de la formation" icon={BookOpen}>
                  <ul className="space-y-4">
                    {course.modules.map(
                      (
                        module: string | { titre?: string; sousPoints?: string[] },
                        index: number
                      ) => {
                        const titre =
                          typeof module === "string" ? module : module?.titre ?? "";
                        const sousPoints =
                          typeof module === "string"
                            ? []
                            : Array.isArray(module?.sousPoints)
                            ? module.sousPoints
                            : [];

                        return (
                          <li key={index} className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-primary to-teal-900 text-white rounded-full flex items-center justify-center font-semibold text-sm shadow-md border border-teal-600/30">
                              {index + 1}
                            </div>
                            <div className="flex-1 pt-1">
                              <p className="text-gray-800 font-medium">{titre}</p>
                              {sousPoints.length > 0 && (
                                <ul className="mt-2 ml-2 space-y-1.5">
                                  {sousPoints.map((sp, i) => (
                                    <li
                                      key={i}
                                      className="flex items-start gap-2 text-gray-600 text-sm"
                                    >
                                      <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary" />
                                      <span className="leading-relaxed">{sp}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          </li>
                        );
                      }
                    )}
                  </ul>
                </Section>
              )}

              {/* Modalités d'évaluation */}
              {course.modalitesEvaluation &&
                course.modalitesEvaluation.length > 0 && (
                  <Section
                    title="Modalités d'évaluation"
                    icon={ClipboardList}
                  >
                    <BulletList items={course.modalitesEvaluation} />
                  </Section>
                )}

              {/* Suivi de l'exécution */}
              {course.suiviExecution && course.suiviExecution.length > 0 && (
                <Section title="Suivi de l'exécution" icon={ClipboardList}>
                  <BulletList items={course.suiviExecution} />
                </Section>
              )}

              {/* Appréciation des résultats */}
              {course.appreciationResultats &&
                course.appreciationResultats.length > 0 && (
                  <Section
                    title="Appréciation des résultats"
                    icon={ClipboardList}
                  >
                    <BulletList items={course.appreciationResultats} />
                  </Section>
                )}

              {/* Moyens pédagogiques */}
              {course.moyensPedagogiques && (
                <Section
                  title="Moyens pédagogiques et techniques d'encadrement"
                  icon={BookOpen}
                >
                  <TextBlock text={course.moyensPedagogiques} />
                </Section>
              )}

              {/* Profil du formateur */}
              {course.profilFormateur && (
                <Section title="Profil du formateur" icon={UserCheck}>
                  <TextBlock text={course.profilFormateur} />
                </Section>
              )}
            </div>

            {/* Colonne latérale (1/3) */}
            <div className="space-y-8">
              {/* Modalités d'accès */}
              {course.modalitesAcces && (
                <Section
                  title="Modalités et délais d'accès"
                  icon={CalendarClock}
                >
                  <TextBlock text={course.modalitesAcces} />
                </Section>
              )}

              {/* Résumé pratique */}
              <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Informations pratiques
                </h3>
                <dl className="space-y-4">
                  {course.duree && (
                    <div>
                      <dt className="text-sm font-medium text-gray-500">
                        Durée
                      </dt>
                      <dd className="text-gray-900 font-semibold">
                        {course.duree} heures
                      </dd>
                    </div>
                  )}
                  {course.horaires && (
                    <div>
                      <dt className="text-sm font-medium text-gray-500">
                        Horaires
                      </dt>
                      <dd className="text-gray-900 font-semibold">
                        {course.horaires}
                      </dd>
                    </div>
                  )}
                  {(course.participantsMin || course.participantsMax) && (
                    <div>
                      <dt className="text-sm font-medium text-gray-500">
                        Participants
                      </dt>
                      <dd className="text-gray-900 font-semibold">
                        {course.participantsMin && course.participantsMax
                          ? `${course.participantsMin} à ${course.participantsMax}`
                          : course.participantsMin
                          ? `Min. ${course.participantsMin}`
                          : `Max. ${course.participantsMax}`}
                      </dd>
                    </div>
                  )}
                  {course.prixInter != null && (
                    <div>
                      <dt className="text-sm font-medium text-gray-500">
                        Tarif INTER / individuel
                      </dt>
                      <dd className="text-gray-900 font-semibold">
                        {course.prixInter}€
                      </dd>
                    </div>
                  )}
                  {course.prixIntra != null && (
                    <div>
                      <dt className="text-sm font-medium text-gray-500">
                        Tarif INTRA
                      </dt>
                      <dd className="text-gray-900 font-semibold">
                        {course.prixIntra}€
                      </dd>
                    </div>
                  )}
                  {course.prixInter == null && course.prixIntra == null && course.prix != null && (
                    <div>
                      <dt className="text-sm font-medium text-gray-500">
                        Tarif
                      </dt>
                      <dd className="text-gray-900 font-semibold">
                        {course.prix}€
                      </dd>
                    </div>
                  )}
                  {(course.prixInter != null || course.prixIntra != null || course.prix != null) && (
                    <dd className="text-xs text-gray-400 mt-1">
                      Exonérée de TVA — Art. 261.4.4 a du CGI
                    </dd>
                  )}
                </dl>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-primary via-teal-700 to-teal-900 text-white rounded-xl p-6 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-teal-400/20 rounded-full blur-3xl -mr-10 -mt-10"></div>
                <h3 className="text-2xl font-bold mb-4 relative z-10">
                  Prêt à commencer ?
                </h3>
                <p className="mb-4 relative z-10 text-teal-100">
                  Inscrivez-vous dès maintenant et commencez votre
                  apprentissage
                </p>
                <Link
                  href={course.lien || "/contact"}
                  className="inline-flex items-center gap-2 bg-accent text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-colors relative z-10"
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
