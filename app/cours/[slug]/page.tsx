import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Link from "next/link";
import { ArrowRight, CheckCircle, Clock, Users, Star } from "lucide-react";

// Génération des pages statiques
export async function generateStaticParams() {
  const slugs = await client.fetch(
    groq`*[_type == "formation" && defined(slug.current)]{
      "slug": slug.current
    }`
  );

  return slugs.map((s: { slug: string }) => ({ slug: s.slug }));
}

// Page dynamique pour une formation
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const course = await client.fetch(
    groq`
      *[_type == "formation" && slug.current == $slug][0]{
        _id,
        titre,
        description,
        duree,
        etudiants,
        note,
        prix,
        modules,
        objectifs,
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
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Formation introuvable</h1>
          <Link href="/cours" className="text-primary hover:underline">
            ← Retour aux formations
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-4">{course.titre}</h1>
              <p className="text-xl text-purple-100 mb-6">
                {course.description}
              </p>
              <div className="flex items-center gap-6 text-sm mb-6">
                {course.duree && (
                  <div className="flex items-center gap-2">
                    <Clock size={20} />
                    <span>{course.duree}</span>
                  </div>
                )}
                {course.etudiants && (
                  <div className="flex items-center gap-2">
                    <Users size={20} />
                    <span>{course.etudiants} étudiants</span>
                  </div>
                )}
                {course.note && (
                  <div className="flex items-center gap-2">
                    <Star size={20} className="fill-accent text-accent" />
                    <span>{course.note}/5</span>
                  </div>
                )}
              </div>
              <Link
                href={course.lien || "/contact"}
                className="inline-flex items-center gap-2 bg-accent text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-orange-400 transition-colors"
              >
                S&apos;inscrire maintenant
                <ArrowRight size={20} />
              </Link>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Tarif de la formation</h3>
              <p className="text-5xl font-bold mb-6">{course.prix}€</p>
              <ul className="space-y-3 text-purple-100">
                <li className="flex items-center gap-2">
                  <CheckCircle size={20} />
                  <span>Accès illimité aux cours</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={20} />
                  <span>Support des formateurs</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={20} />
                  <span>Certification à la fin</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Programme */}
            {course.modules && course.modules.length > 0 && (
              <div>
                <h2 className="text-3xl font-bold mb-6">Programme de la formation</h2>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <ul className="space-y-3">
                    {course.modules.map((module: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold text-sm">
                          {index + 1}
                        </div>
                        <span className="pt-1">{module}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Objectifs */}
            <div>
              {course.objectifs && course.objectifs.length > 0 && (
                <>
                  <h2 className="text-3xl font-bold mb-6">Objectifs de la formation</h2>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <ul className="space-y-4">
                      {course.objectifs.map((objectif: string, index: number) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle
                            className="text-green-500 flex-shrink-0 mt-1"
                            size={20}
                          />
                          <span>{objectif}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}

              <div className="bg-primary text-white rounded-lg p-6 mt-6">
                <h3 className="text-2xl font-bold mb-4">Prêt à commencer ?</h3>
                <p className="mb-4">
                  Inscrivez-vous dès maintenant et commencez votre apprentissage
                </p>
                <Link
                  href={course.lien || "/contact"}
                  className="inline-flex items-center gap-2 bg-accent text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-orange-400 transition-colors"
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
