'use client';

import Link from 'next/link';
import { useMemo } from 'react';
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
} from 'lucide-react';
import { useTranslation } from '@/lib/i18n/LanguageContext';
import { useTranslatedContent } from '@/lib/i18n/useTranslatedContent';

// ─── Sous-composants UI ──────────────────────────────────────────────────────
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
    <div className='bg-white rounded-xl shadow-md p-6 md:p-8'>
      <div className='flex items-center gap-3 mb-5'>
        <div className='flex-shrink-0 w-10 h-10 bg-gradient-to-br from-primary to-teal-800 text-white rounded-lg flex items-center justify-center shadow-md'>
          <Icon size={20} />
        </div>
        <h2 className='text-xl md:text-2xl font-bold text-gray-900'>{title}</h2>
      </div>
      {children}
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className='space-y-3'>
      {items.map((item, index) => (
        <li key={index} className='flex items-start gap-3'>
          <CheckCircle
            className='text-primary flex-shrink-0 mt-0.5'
            size={18}
          />
          <span className='text-gray-700 leading-relaxed text-justify hyphens-auto flex-1'>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

function TextBlock({ text }: { text: string }) {
  return (
    <p className='text-gray-700 leading-relaxed whitespace-pre-line text-justify hyphens-auto'>
      {text}
    </p>
  );
}

// ─── Type Course (laxe — Sanity renvoie du free-form) ────────────────────────
type Module = string | { titre?: string; sousPoints?: string[] };

interface Course {
  _id: string;
  titre: string;
  description?: string;
  duree?: number;
  horaires?: string;
  etudiants?: number;
  note?: number;
  prix?: number;
  prixIntra?: number;
  prixInter?: number;
  participantsMin?: number;
  participantsMax?: number;
  modules?: Module[];
  objectifs?: string[];
  contenuFormation?: string;
  publicConcerne?: string;
  prerequis?: string[];
  modalitesAcces?: string;
  modalitesEvaluation?: string[];
  suiviExecution?: string[];
  appreciationResultats?: string[];
  moyensPedagogiques?: string;
  profilFormateur?: string;
  lien?: string;
  imageUrl?: string;
}

// ─── Page principale ──────────────────────────────────────────────────────────
export default function FormationDetailClient({ course }: { course: Course }) {
  const t = useTranslation();

  // ─── On collecte TOUTES les chaînes Sanity à traduire dans un seul tableau ──
  // Indexes prévisibles pour récupérer chaque champ après traduction.
  const allTexts = useMemo(() => {
    const texts: string[] = [];
    texts.push(course.titre || ''); // 0
    texts.push(course.description || ''); // 1
    texts.push(course.publicConcerne || ''); // 2
    texts.push(course.contenuFormation || ''); // 3
    texts.push(course.moyensPedagogiques || ''); // 4
    texts.push(course.profilFormateur || ''); // 5
    texts.push(course.modalitesAcces || ''); // 6
    texts.push(course.horaires || ''); // 7

    // Tableaux
    const arrayStartIndexes: Record<string, number> = {};
    arrayStartIndexes.prerequis = texts.length;
    (course.prerequis || []).forEach((s) => texts.push(s));
    arrayStartIndexes.objectifs = texts.length;
    (course.objectifs || []).forEach((s) => texts.push(s));
    arrayStartIndexes.modalitesEvaluation = texts.length;
    (course.modalitesEvaluation || []).forEach((s) => texts.push(s));
    arrayStartIndexes.suiviExecution = texts.length;
    (course.suiviExecution || []).forEach((s) => texts.push(s));
    arrayStartIndexes.appreciationResultats = texts.length;
    (course.appreciationResultats || []).forEach((s) => texts.push(s));

    // Modules : chaque module = 1 titre + N sous-points
    const moduleIndexes: { titre: number; sousPoints: number[] }[] = [];
    (course.modules || []).forEach((m) => {
      const titre = typeof m === 'string' ? m : m?.titre ?? '';
      const sousPoints =
        typeof m === 'string' ? [] : Array.isArray(m?.sousPoints) ? m.sousPoints : [];
      const titreIdx = texts.length;
      texts.push(titre);
      const spIndexes: number[] = [];
      sousPoints.forEach((sp) => {
        spIndexes.push(texts.length);
        texts.push(sp);
      });
      moduleIndexes.push({ titre: titreIdx, sousPoints: spIndexes });
    });

    return { texts, arrayStartIndexes, moduleIndexes };
  }, [course]);

  const [translated] = useTranslatedContent(allTexts.texts);

  // Helpers de récupération depuis le tableau traduit
  const getStr = (idx: number, fallback?: string) =>
    translated[idx] || fallback || '';

  const getArr = (key: keyof typeof allTexts.arrayStartIndexes, source: string[] = []) => {
    const start = allTexts.arrayStartIndexes[key];
    return source.map((_, i) => translated[start + i] || source[i]);
  };

  const tTitre = getStr(0, course.titre);
  const tDescription = getStr(1, course.description);
  const tPublic = getStr(2, course.publicConcerne);
  const tContenu = getStr(3, course.contenuFormation);
  const tMoyens = getStr(4, course.moyensPedagogiques);
  const tProfil = getStr(5, course.profilFormateur);
  const tAcces = getStr(6, course.modalitesAcces);
  const tHoraires = getStr(7, course.horaires);
  const tPrerequis = getArr('prerequis', course.prerequis || []);
  const tObjectifs = getArr('objectifs', course.objectifs || []);
  const tModalEval = getArr('modalitesEvaluation', course.modalitesEvaluation || []);
  const tSuivi = getArr('suiviExecution', course.suiviExecution || []);
  const tApprec = getArr('appreciationResultats', course.appreciationResultats || []);
  const tModules = (course.modules || []).map((m, i) => {
    const idxInfo = allTexts.moduleIndexes[i];
    const titreOriginal = typeof m === 'string' ? m : m?.titre ?? '';
    const spOriginal =
      typeof m === 'string' ? [] : Array.isArray(m?.sousPoints) ? m.sousPoints : [];
    return {
      titre: translated[idxInfo.titre] || titreOriginal,
      sousPoints: spOriginal.map((sp, j) => translated[idxInfo.sousPoints[j]] || sp),
    };
  });

  // ─── Render ─────────────────────────────────────────────────────────────────
  return (
    <div className='bg-gray-50'>
      {/* Hero */}
      <section className='bg-gradient-to-r from-primary via-teal-700 to-teal-900 text-white py-16 shadow-inner'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 items-start'>
            {/* Infos principales */}
            <div className='lg:col-span-2'>
              <h1 className='text-4xl md:text-5xl font-bold mb-4'>{tTitre}</h1>
              {tDescription && (
                <p className='text-xl text-teal-100 mb-6'>{tDescription}</p>
              )}

              {/* Badges */}
              <div className='flex flex-wrap items-center gap-4 text-sm mb-6'>
                {course.duree && (
                  <div className='flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 px-4 py-2 rounded-full'>
                    <Clock size={18} />
                    <span>
                      {course.duree}
                      {t.formationDetail.hoursOfFormation}
                    </span>
                  </div>
                )}
                {tHoraires && (
                  <div className='flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 px-4 py-2 rounded-full'>
                    <CalendarClock size={18} />
                    <span>{tHoraires}</span>
                  </div>
                )}
                {(course.participantsMin || course.participantsMax) && (
                  <div className='flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 px-4 py-2 rounded-full'>
                    <Users size={18} />
                    <span>
                      {course.participantsMin && course.participantsMax
                        ? `${course.participantsMin} - ${course.participantsMax} ${t.formationDetail.participants}`
                        : course.participantsMin
                          ? `${t.formationDetail.participantsMin} ${course.participantsMin} ${t.formationDetail.participants}`
                          : `${t.formationDetail.participantsMax} ${course.participantsMax} ${t.formationDetail.participants}`}
                    </span>
                  </div>
                )}
                {course.etudiants && (
                  <div className='flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 px-4 py-2 rounded-full'>
                    <GraduationCap size={18} />
                    <span>
                      {course.etudiants} {t.formationDetail.studentsFormed}
                    </span>
                  </div>
                )}
                {course.note && (
                  <div className='flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 px-4 py-2 rounded-full'>
                    <Star size={18} className='fill-accent text-accent' />
                    <span>{course.note}/5</span>
                  </div>
                )}
              </div>

              <Link
                href={course.lien || '/contact'}
                className='inline-flex items-center gap-2 bg-accent text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-yellow-500 transition-colors shadow-lg'
              >
                {t.formationDetail.inscribeNow}
                <ArrowRight size={20} />
              </Link>
            </div>

            {/* Encadré tarif */}
            <div className='bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20'>
              <h3 className='text-2xl font-bold mb-4'>
                {t.formationDetail.tariffTitle}
              </h3>

              {course.prixInter != null && (
                <div className='mb-4 pb-4 border-b border-white/20'>
                  <p className='text-xs uppercase tracking-wider text-accent font-semibold mb-1'>
                    {t.formationDetail.tariffInter}
                  </p>
                  <p className='text-3xl font-bold'>{course.prixInter}€</p>
                </div>
              )}

              {course.prixIntra != null && (
                <div className='mb-4'>
                  <p className='text-xs uppercase tracking-wider text-teal-200 font-semibold mb-1'>
                    {t.formationDetail.tariffIntra}
                  </p>
                  <p className='text-3xl font-bold'>{course.prixIntra}€</p>
                </div>
              )}

              {course.prixInter == null &&
                course.prixIntra == null &&
                course.prix != null && (
                  <p className='text-5xl font-bold mb-2'>{course.prix}€</p>
                )}

              {(course.prixInter != null ||
                course.prixIntra != null ||
                course.prix != null) && (
                <p className='text-teal-200 text-sm mb-6'>
                  {t.formationDetail.tvaExempt}
                </p>
              )}

              <ul className='space-y-3 text-teal-100 text-sm'>
                {course.duree && (
                  <li className='flex items-center gap-2'>
                    <CheckCircle size={18} />
                    <span>
                      {course.duree}
                      {t.formationDetail.hoursOfFormation}
                    </span>
                  </li>
                )}
                {tHoraires && (
                  <li className='flex items-center gap-2'>
                    <CheckCircle size={18} />
                    <span>{tHoraires}</span>
                  </li>
                )}
                {(course.participantsMin || course.participantsMax) && (
                  <li className='flex items-center gap-2'>
                    <CheckCircle size={18} />
                    <span>
                      {course.participantsMin && course.participantsMax
                        ? `${course.participantsMin} - ${course.participantsMax} ${t.formationDetail.participants}`
                        : course.participantsMin
                          ? `${t.formationDetail.participantsMin} ${course.participantsMin}`
                          : `${t.formationDetail.participantsMax} ${course.participantsMax}`}
                    </span>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className='py-16 md:py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            {/* Colonne principale (2/3) */}
            <div className='lg:col-span-2 space-y-8'>
              {tPublic && (
                <Section title={t.formationDetail.sectionPublic} icon={Users}>
                  <TextBlock text={tPublic} />
                </Section>
              )}

              {tPrerequis.length > 0 && (
                <Section title={t.formationDetail.sectionPrerequisites} icon={Info}>
                  <BulletList items={tPrerequis} />
                </Section>
              )}

              {tObjectifs.length > 0 && (
                <Section title={t.formationDetail.sectionObjectives} icon={Target}>
                  <BulletList items={tObjectifs} />
                </Section>
              )}

              {tContenu && (
                <Section title={t.formationDetail.sectionContent} icon={FileText}>
                  <TextBlock text={tContenu} />
                </Section>
              )}

              {tModules.length > 0 && (
                <Section title={t.formationDetail.sectionProgram} icon={BookOpen}>
                  <ul className='space-y-4'>
                    {tModules.map((mod, index) => (
                      <li key={index} className='flex items-start gap-3'>
                        <div className='flex-shrink-0 w-8 h-8 bg-gradient-to-br from-primary to-teal-900 text-white rounded-full flex items-center justify-center font-semibold text-sm shadow-md border border-teal-600/30'>
                          {index + 1}
                        </div>
                        <div className='flex-1 pt-1'>
                          <p className='text-gray-800 font-medium'>{mod.titre}</p>
                          {mod.sousPoints.length > 0 && (
                            <ul className='mt-2 ml-2 space-y-1.5'>
                              {mod.sousPoints.map((sp, i) => (
                                <li
                                  key={i}
                                  className='flex items-start gap-2 text-gray-600 text-sm'
                                >
                                  <span className='mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary' />
                                  <span className='leading-relaxed'>{sp}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </Section>
              )}

              {tModalEval.length > 0 && (
                <Section title={t.formationDetail.sectionEvaluation} icon={ClipboardList}>
                  <BulletList items={tModalEval} />
                </Section>
              )}

              {tSuivi.length > 0 && (
                <Section title={t.formationDetail.sectionFollow} icon={ClipboardList}>
                  <BulletList items={tSuivi} />
                </Section>
              )}

              {tApprec.length > 0 && (
                <Section title={t.formationDetail.sectionResults} icon={ClipboardList}>
                  <BulletList items={tApprec} />
                </Section>
              )}

              {tMoyens && (
                <Section title={t.formationDetail.sectionPedagogicalMeans} icon={BookOpen}>
                  <TextBlock text={tMoyens} />
                </Section>
              )}

              {tProfil && (
                <Section title={t.formationDetail.sectionTrainerProfile} icon={UserCheck}>
                  <TextBlock text={tProfil} />
                </Section>
              )}
            </div>

            {/* Colonne latérale (1/3) */}
            <div className='space-y-8'>
              {tAcces && (
                <Section
                  title={t.formationDetail.sectionAccessConditions}
                  icon={CalendarClock}
                >
                  <TextBlock text={tAcces} />
                </Section>
              )}

              <div className='bg-white rounded-xl shadow-md p-6 md:p-8'>
                <h3 className='text-lg font-bold text-gray-900 mb-4'>
                  {t.formationDetail.practicalInfoTitle}
                </h3>
                <dl className='space-y-4'>
                  {course.duree && (
                    <div>
                      <dt className='text-sm font-medium text-gray-500'>
                        {t.formationDetail.duration}
                      </dt>
                      <dd className='text-gray-900 font-semibold'>
                        {course.duree} {t.formationDetail.hours}
                      </dd>
                    </div>
                  )}
                  {tHoraires && (
                    <div>
                      <dt className='text-sm font-medium text-gray-500'>
                        {t.formationDetail.schedule}
                      </dt>
                      <dd className='text-gray-900 font-semibold'>{tHoraires}</dd>
                    </div>
                  )}
                  {(course.participantsMin || course.participantsMax) && (
                    <div>
                      <dt className='text-sm font-medium text-gray-500'>
                        {t.formationDetail.participants}
                      </dt>
                      <dd className='text-gray-900 font-semibold'>
                        {course.participantsMin && course.participantsMax
                          ? `${course.participantsMin} - ${course.participantsMax}`
                          : course.participantsMin
                            ? `${t.formationDetail.participantsMin} ${course.participantsMin}`
                            : `${t.formationDetail.participantsMax} ${course.participantsMax}`}
                      </dd>
                    </div>
                  )}
                  {course.prixInter != null && (
                    <div>
                      <dt className='text-sm font-medium text-gray-500'>
                        {t.formationDetail.tariffInterIndividual}
                      </dt>
                      <dd className='text-gray-900 font-semibold'>
                        {course.prixInter}€
                      </dd>
                    </div>
                  )}
                  {course.prixIntra != null && (
                    <div>
                      <dt className='text-sm font-medium text-gray-500'>
                        {t.formationDetail.tariffIntra}
                      </dt>
                      <dd className='text-gray-900 font-semibold'>
                        {course.prixIntra}€
                      </dd>
                    </div>
                  )}
                  {course.prixInter == null &&
                    course.prixIntra == null &&
                    course.prix != null && (
                      <div>
                        <dt className='text-sm font-medium text-gray-500'>
                          {t.formationDetail.tariff}
                        </dt>
                        <dd className='text-gray-900 font-semibold'>
                          {course.prix}€
                        </dd>
                      </div>
                    )}
                  {(course.prixInter != null ||
                    course.prixIntra != null ||
                    course.prix != null) && (
                    <dd className='text-xs text-gray-400 mt-1'>
                      {t.formationDetail.tvaExempt}
                    </dd>
                  )}
                </dl>
              </div>

              {/* CTA */}
              <div className='bg-gradient-to-br from-primary via-teal-700 to-teal-900 text-white rounded-xl p-6 shadow-xl relative overflow-hidden'>
                <div className='absolute top-0 right-0 w-48 h-48 bg-teal-400/20 rounded-full blur-3xl -mr-10 -mt-10'></div>
                <h3 className='text-2xl font-bold mb-4 relative z-10'>
                  {t.formationDetail.ctaReadyTitle}
                </h3>
                <p className='mb-4 relative z-10 text-teal-100'>
                  {t.formationDetail.ctaReadySubtitle}
                </p>
                <Link
                  href={course.lien || '/contact'}
                  className='inline-flex items-center gap-2 bg-accent text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-colors relative z-10'
                >
                  {t.formationDetail.ctaReadyButton}
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
