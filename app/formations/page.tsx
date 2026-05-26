'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { Clock, Users, Star, ArrowRight, Phone, Scale, Handshake, Bot, Award } from 'lucide-react';
import {
  Suspense,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage, useTranslation } from '@/lib/i18n/LanguageContext';
import { useTranslatedContent } from '@/lib/i18n/useTranslatedContent';

gsap.registerPlugin(ScrollTrigger);

// useLayoutEffect côté client (avant paint), useEffect côté serveur
const useIsoLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

type PoleValue = 'all' | 'droit' | 'mediation' | 'ia';
type PriceTab = 'inter' | 'intra' | 'sur-mesure';

function formatPrice(price: number): string {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
  }).format(price);
}

function formatDuree(heures: number, locale: 'fr' | 'en'): string {
  if (heures % 7 === 0 && heures >= 7) {
    const jours = heures / 7;
    if (locale === 'en') {
      return `${jours} day${jours > 1 ? 's' : ''}`;
    }
    return `${jours} jour${jours > 1 ? 's' : ''}`;
  }
  return `${heures} h`;
}

// ─── Ligne « clé : valeur » harmonisée ───────────────────────────────────────
function InfoRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className='flex justify-between items-baseline gap-3 text-sm'>
      <span className='text-gray-500 shrink-0'>{label}</span>
      <span className='font-medium text-gray-800 text-right truncate'>
        {children}
      </span>
    </div>
  );
}

// ─── Composant onglets prix par carte ───────────────────────────────────────
function PriceTabs({
  prixInter,
  prixIntra,
  duree,
  slug,
  lien,
}: {
  prixInter?: number;
  prixIntra?: number;
  duree?: number;
  slug: string;
  lien?: string;
}) {
  const t = useTranslation();
  const { locale } = useLanguage();
  const tabs: { key: PriceTab; label: string }[] = [
    ...(prixInter != null ? [{ key: 'inter' as PriceTab, label: t.formations.tabInter }] : []),
    ...(prixIntra != null ? [{ key: 'intra' as PriceTab, label: t.formations.tabIntra }] : []),
    { key: 'sur-mesure' as PriceTab, label: t.formations.tabSurMesure },
  ];

  const defaultTab: PriceTab =
    prixInter != null ? 'inter' : prixIntra != null ? 'intra' : 'sur-mesure';
  const [active, setActive] = useState<PriceTab>(defaultTab);

  return (
    <div
      className='border-t border-gray-100 mt-auto'
      onClick={(e) => e.preventDefault()}
    >
      {/* Onglets */}
      <div className='flex border-b border-gray-200'>
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setActive(tab.key);
            }}
            className={`flex-1 py-2.5 text-[11px] font-bold tracking-wider uppercase transition-all ${
              active === tab.key
                ? 'bg-foreground text-white'
                : 'bg-white text-gray-400 hover:text-gray-600'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Contenu — hauteur identique grâce à la structure commune */}
      <div className='p-5 flex flex-col gap-3'>
        {active === 'inter' && prixInter != null && (
          <>
            <div className='space-y-2'>
              <InfoRow label={t.formations.labelFormat}>{t.formations.formatInter}</InfoRow>
              <InfoRow label={t.formations.labelDuration}>{duree ? formatDuree(duree, locale) : '—'}</InfoRow>
              <InfoRow label={t.formations.labelPrice}>
                <span className='font-bold text-foreground'>
                  {formatPrice(prixInter)}
                </span>
                <span className='font-normal text-gray-400 text-xs ml-1'>
                  {t.formations.perStudent}
                </span>
              </InfoRow>
            </div>
            <div className='flex flex-col gap-2 mt-1'>
              <Link
                href={lien || `/formations/${slug}`}
                onClick={(e) => e.stopPropagation()}
                className='flex items-center justify-center gap-2 w-full bg-foreground text-white py-2.5 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity'
              >
                {t.formations.buttonInscribe}
                <ArrowRight size={15} />
              </Link>
              <Link
                href='/contact'
                onClick={(e) => e.stopPropagation()}
                className='flex items-center justify-center w-full border border-gray-200 text-gray-600 py-2 rounded-lg text-sm font-medium hover:border-primary hover:text-primary transition-colors'
              >
                {t.formations.buttonQuote}
              </Link>
            </div>
          </>
        )}

        {active === 'intra' && prixIntra != null && (
          <>
            <div className='space-y-2'>
              <InfoRow label={t.formations.labelFormat}>{t.formations.formatIntra}</InfoRow>
              <InfoRow label={t.formations.labelDuration}>{duree ? formatDuree(duree, locale) : '—'}</InfoRow>
              <InfoRow label={t.formations.labelPrice}>
                <span className='font-bold text-foreground'>
                  {formatPrice(prixIntra)}
                </span>
                <span className='font-normal text-gray-400 text-xs ml-1'>
                  {t.formations.perGroup}
                </span>
              </InfoRow>
            </div>
            <div className='flex flex-col gap-2 mt-1'>
              <Link
                href={lien || `/formations/${slug}`}
                onClick={(e) => e.stopPropagation()}
                className='flex items-center justify-center gap-2 w-full bg-foreground text-white py-2.5 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity'
              >
                {t.formations.buttonInscribe}
                <ArrowRight size={15} />
              </Link>
              <Link
                href='/contact'
                onClick={(e) => e.stopPropagation()}
                className='flex items-center justify-center w-full border border-gray-200 text-gray-600 py-2 rounded-lg text-sm font-medium hover:border-primary hover:text-primary transition-colors'
              >
                {t.formations.buttonQuote}
              </Link>
            </div>
          </>
        )}

        {active === 'sur-mesure' && (
          <>
            <div className='space-y-2'>
              <InfoRow label={t.formations.labelFormat}>{t.formations.formatSurMesure}</InfoRow>
              <InfoRow label={t.formations.labelDuration}>{t.formations.durationSurMesure}</InfoRow>
              <InfoRow label={t.formations.labelPrice}>
                <span className='font-bold text-foreground'>{t.formations.priceSurMesure}</span>
              </InfoRow>
            </div>
            <div className='flex flex-col gap-2 mt-1'>
              <Link
                href='/contact'
                onClick={(e) => e.stopPropagation()}
                className='flex items-center justify-center gap-2 w-full bg-primary text-white py-2.5 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity'
              >
                <Phone size={15} />
                {t.formations.buttonContact}
              </Link>
              <Link
                href='/contact'
                onClick={(e) => e.stopPropagation()}
                className='flex items-center justify-center w-full border border-gray-200 text-gray-600 py-2 rounded-lg text-sm font-medium hover:border-primary hover:text-primary transition-colors'
              >
                {t.formations.buttonQuote}
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// ─── Page principale ─────────────────────────────────────────────────────────
function FormationsPageContent() {
  const t = useTranslation();
  const { locale } = useLanguage();
  const searchParams = useSearchParams();
  const initialPole = (() => {
    const p = searchParams.get('pole');
    if (p === 'droit' || p === 'mediation' || p === 'ia') return p as PoleValue;
    return 'all';
  })();
  const [formations, setFormations] = useState<any[]>([]);
  const [selectedPole, setSelectedPole] = useState<PoleValue>(initialPole);
  const heroRef = useRef<HTMLDivElement>(null);
  const filtersRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  // Pôles avec libellés traduits
  const POLES: { value: PoleValue; label: string }[] = useMemo(
    () => [
      { value: 'all', label: t.formations.filterAll },
      { value: 'droit', label: t.formations.filterDroit },
      { value: 'mediation', label: t.formations.filterMediation },
      { value: 'ia', label: t.formations.filterIA },
    ],
    [t]
  );

  useEffect(() => {
    async function loadFormations() {
      try {
        const res = await fetch('/api/formations');
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setFormations(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error('Failed to load formations:', err);
        setFormations([]);
      }
    }
    loadFormations();
  }, []);

  const FEATURED_SLUG = 'certificat-formation-mediation-200-heures';

  const filteredFormations = useMemo(() => {
    const base = selectedPole === 'all' ? formations : formations.filter((f) => f.pole === selectedPole);
    return [...base].sort((a, b) => {
      if (a.slug?.current === FEATURED_SLUG) return -1;
      if (b.slug?.current === FEATURED_SLUG) return 1;
      return 0;
    });
  }, [formations, selectedPole]);

  // ─── Traduction du contenu Sanity (titres + descriptions) ──────────────────
  const sanityTexts = useMemo(() => {
    const arr: string[] = [];
    filteredFormations.forEach((f) => {
      arr.push(f.titre || '');
      arr.push(f.description || '');
    });
    return arr;
  }, [filteredFormations]);

  const [translatedSanityTexts] = useTranslatedContent(sanityTexts);

  // ─── Animation d'apparition du hero + filtres (au mount, une seule fois) ───
  // useLayoutEffect → s'exécute APRÈS l'hydratation mais AVANT le browser paint
  // → gsap.set() applique l'état initial avant que l'utilisateur ne voie le contenu
  // → pas de "flash" / saut visible.
  // Guard useRef contre le double-mount du Strict Mode en dev.
  const introAnimated = useRef(false);
  useIsoLayoutEffect(() => {
    if (introAnimated.current) return;
    introAnimated.current = true;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    if (heroRef.current) {
      const heroChildren = heroRef.current.children;
      gsap.set(heroChildren, { opacity: 0, y: 30, force3D: true });
      tl.to(heroChildren, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
        clearProps: 'transform,willChange',
      });
    }

    if (filtersRef.current) {
      const filtersChildren = filtersRef.current.children;
      gsap.set(filtersChildren, {
        opacity: 0,
        y: 15,
        scale: 0.9,
        force3D: true,
      });
      tl.to(
        filtersChildren,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.06,
          ease: 'back.out(1.7)',
          clearProps: 'transform,willChange',
        },
        '-=0.4'
      );
    }
  }, []);

  // ─── Animation des cartes au scroll (ScrollTrigger.batch) ──────────────────
  // useLayoutEffect → gsap.set() avant le paint → pas de "flash" des cartes
  // qui s'affichent puis disparaissent puis réapparaissent.
  useIsoLayoutEffect(() => {
    if (!cardsRef.current) return;
    const cards = cardsRef.current.querySelectorAll<HTMLElement>('.course-card');
    if (cards.length === 0) return;

    // État initial : invisibles, légèrement décalées et zoomées
    // force3D: true → hardware acceleration (GPU layer), évite les reflows
    gsap.set(cards, {
      opacity: 0,
      y: 60,
      scale: 0.94,
      transformOrigin: 'center bottom',
      force3D: true,
      willChange: 'transform, opacity',
    });

    const triggers = ScrollTrigger.batch(cards, {
      start: 'top 88%',
      once: true,
      onEnter: (batch) => {
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.85,
          ease: 'power3.out',
          stagger: { each: 0.09, from: 'start' },
          overwrite: 'auto',
          force3D: true,
          clearProps: 'transform,willChange', // libère les transforms + will-change après l'anim
        });
      },
    });

    // Refresh nécessaire si les images modifient la hauteur de la grille
    ScrollTrigger.refresh();

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, [filteredFormations]);

  // ─── Changement de filtre : fade out → setState → batch ré-anime ───────────
  const handlePoleChange = (newPole: PoleValue) => {
    if (newPole === selectedPole) return;

    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll('.course-card');
      gsap.to(cards, {
        opacity: 0,
        y: -10,
        scale: 0.97,
        duration: 0.25,
        stagger: 0.025,
        ease: 'power2.in',
        onComplete: () => setSelectedPole(newPole),
      });
    } else {
      setSelectedPole(newPole);
    }
  };

  return (
    <div className='bg-gradient-to-b from-gray-50 to-white'>
      {/* Hero */}
      <section className='relative bg-gradient-to-br from-primary via-teal-600 to-teal-800 text-white py-24 overflow-hidden'>
        <div className='absolute inset-0 opacity-10'>
          <div className='absolute top-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl'></div>
        </div>
        <div
          ref={heroRef}
          className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'
        >
          <h1 className='text-5xl md:text-6xl font-bold mb-6'>
            {t.formations.heroTitle}
          </h1>
          <p className='text-xl md:text-2xl text-teal-50 max-w-2xl'>
            {t.formations.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Nos domaines */}
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <p className='text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto mb-10'>
            {t.formations.domainesIntro}
          </p>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {[
              { Icon: Scale, title: t.formations.poleDroitTitle, text: t.formations.poleDroitText },
              { Icon: Handshake, title: t.formations.poleMediationTitle, text: t.formations.poleMediationText },
              { Icon: Bot, title: t.formations.poleIATitle, text: t.formations.poleIAText },
            ].map(({ Icon, title, text }, i) => (
              <div key={i} className='relative bg-gradient-to-br from-primary to-teal-700 rounded-2xl p-6 overflow-hidden shadow-md hover:shadow-xl transition-shadow'>
                {/* Cercle décoratif en fond */}
                <div className='absolute -top-6 -right-6 w-32 h-32 bg-white/10 rounded-full' />
                <div className='absolute -bottom-8 -left-4 w-24 h-24 bg-white/5 rounded-full' />
                <div className='relative z-10'>
                  <div className='w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4'>
                    <Icon className='text-white' size={24} />
                  </div>
                  <h3 className='text-lg font-bold text-white mb-2'>{title}</h3>
                  <p className='text-teal-100 text-sm leading-relaxed'>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filtres + cartes */}
      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Filtre pôles */}
          <div
            ref={filtersRef}
            role='tablist'
            aria-label={t.formations.filterAriaLabel}
            className='flex flex-wrap justify-center gap-2 sm:gap-3 mb-12'
          >
            {POLES.map((pole) => {
              const active = selectedPole === pole.value;
              return (
                <button
                  key={pole.value}
                  role='tab'
                  aria-selected={active}
                  onClick={() => handlePoleChange(pole.value)}
                  className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all ${
                    active
                      ? 'bg-gradient-to-r from-primary to-teal-600 text-white shadow-lg scale-105'
                      : 'bg-white text-gray-700 border border-gray-200 hover:border-primary hover:text-primary'
                  }`}
                >
                  {pole.label}
                </button>
              );
            })}
          </div>

          {filteredFormations.length === 0 && formations.length > 0 && (
            <p className='text-center text-gray-500 py-12'>
              {t.formations.noFormation}
            </p>
          )}

          {/* Grille de cartes — alignement automatique grâce à hauteurs réservées */}
          <div
            ref={cardsRef}
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch'
          >
            {filteredFormations.map((formation: any, idx: number) => {
              if (!formation.slug?.current) return null;

              const isAboveTheFold = idx < 3;
              const isFeatured = formation.slug.current === FEATURED_SLUG;

              // ── Carte mise en avant (certificat 200h) ──────────────────────
              if (isFeatured) {
                return (
                  <div
                    key={formation._id}
                    className='course-card col-span-1 md:col-span-2 lg:col-span-3 group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-primary/20 flex flex-col md:flex-row'
                  >
                    {/* Image — pleine hauteur à gauche sur desktop */}
                    <Link
                      href={`/formations/${formation.slug.current}`}
                      className='relative md:w-2/5 h-56 md:h-auto overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 shrink-0 flex items-center justify-center'
                    >
                      {formation.imageUrl ? (
                        <Image
                          src={formation.imageUrl}
                          alt={formation.titre}
                          fill
                          sizes='(max-width: 768px) 100vw, 40vw'
                          className='object-cover group-hover:scale-105 transition-transform duration-500'
                          priority
                        />
                      ) : null}
                      {/* Overlay sombre pour lisibilité du badge */}
                      <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent md:bg-gradient-to-r' />
                      {/* Badge certification */}
                      <div className='absolute top-4 left-4 flex items-center gap-1.5 bg-accent text-gray-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-md'>
                        <Award size={13} />
                        Certification professionnelle
                      </div>
                    </Link>

                    {/* Contenu — droite */}
                    <div className='flex flex-col flex-1'>
                      <Link
                        href={`/formations/${formation.slug.current}`}
                        className='flex flex-col flex-1 p-6 md:p-8'
                      >
                        {/* Label pôle */}
                        <span className='text-xs font-semibold text-primary uppercase tracking-wider mb-2'>
                          Formation phare — Médiation
                        </span>

                        <h2 className='text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors leading-snug mb-3'>
                          {translatedSanityTexts[idx * 2] || formation.titre}
                        </h2>

                        <p className='text-gray-500 text-sm leading-relaxed line-clamp-3 mb-5'>
                          {translatedSanityTexts[idx * 2 + 1] || formation.description || ' '}
                        </p>

                        {/* Méta */}
                        <div className='flex flex-wrap items-center gap-4 text-xs text-gray-500 pt-4 border-t border-gray-100 mt-auto'>
                          <div className='flex items-center gap-1.5'>
                            <Clock size={14} className='text-primary' />
                            <span>{formation.duree ? formatDuree(formation.duree, locale) : '—'}</span>
                          </div>
                          <div className='flex items-center gap-1.5'>
                            <Users size={14} className='text-primary' />
                            <span>
                              {formation.etudiants
                                ? `${formation.etudiants} ${t.formations.formed}`
                                : t.formations.newLabel}
                            </span>
                          </div>
                          <div className='flex items-center gap-1.5'>
                            <Star
                              size={14}
                              className={formation.note ? 'fill-accent text-accent' : 'text-gray-300'}
                            />
                            <span className='font-semibold text-gray-600'>
                              {formation.note ? `${formation.note}/5` : '—'}
                            </span>
                          </div>
                        </div>
                      </Link>

                      {/* Prix */}
                      <PriceTabs
                        prixInter={formation.prixInter}
                        prixIntra={formation.prixIntra}
                        duree={formation.duree}
                        slug={formation.slug.current}
                        lien={formation.lien}
                      />
                    </div>
                  </div>
                );
              }

              // ── Carte standard ─────────────────────────────────────────────
              return (
                <div
                  key={formation._id}
                  className='course-card group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full'
                >
                  {/* Bloc image + texte (cliquable) */}
                  <Link
                    href={`/formations/${formation.slug.current}`}
                    className='flex flex-col flex-1'
                  >
                    {/* Image — hauteur fixe */}
                    <div className='h-48 relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center'>
                      {formation.imageUrl ? (
                        <Image
                          src={formation.imageUrl}
                          alt={formation.titre}
                          fill
                          sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
                          className='object-cover'
                          priority={isAboveTheFold}
                        />
                      ) : (
                        <p className='text-gray-400 text-sm'>
                          {t.formations.imageComing}
                        </p>
                      )}
                    </div>

                    {/* Bloc texte — hauteurs réservées pour titre & description */}
                    <div className='p-6 flex flex-col flex-1'>
                      {/* Titre : 2 lignes max, hauteur fixe ~3.5rem */}
                      <h2 className='text-lg font-bold text-gray-900 group-hover:text-primary transition-colors leading-snug line-clamp-2 min-h-[3.25rem] mb-3'>
                        {translatedSanityTexts[idx * 2] || formation.titre}
                      </h2>

                      {/* Description : 3 lignes max, hauteur fixe ~4.5rem */}
                      <p className='text-gray-500 text-sm leading-relaxed line-clamp-3 min-h-[4rem] mb-4'>
                        {translatedSanityTexts[idx * 2 + 1] ||
                          formation.description ||
                          ' '}
                      </p>

                      {/* Méta — toujours collée au bas du bloc texte */}
                      <div className='mt-auto flex items-center justify-between gap-3 text-xs text-gray-500 pt-3 border-t border-gray-100'>
                        <div className='flex items-center gap-1.5'>
                          <Clock size={14} className='text-primary' />
                          <span>
                            {formation.duree
                              ? formatDuree(formation.duree, locale)
                              : '—'}
                          </span>
                        </div>
                        <div className='flex items-center gap-1.5'>
                          <Users size={14} className='text-primary' />
                          <span>
                            {formation.etudiants
                              ? `${formation.etudiants} ${t.formations.formed}`
                              : t.formations.newLabel}
                          </span>
                        </div>
                        <div className='flex items-center gap-1.5'>
                          <Star
                            size={14}
                            className={
                              formation.note
                                ? 'fill-accent text-accent'
                                : 'text-gray-300'
                            }
                          />
                          <span className='font-semibold text-gray-600'>
                            {formation.note ? `${formation.note}/5` : '—'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>

                  {/* Bloc onglets prix — hors du Link, structure identique pour tous les tabs */}
                  <PriceTabs
                    prixInter={formation.prixInter}
                    prixIntra={formation.prixIntra}
                    duree={formation.duree}
                    slug={formation.slug.current}
                    lien={formation.lien}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Résultats */}
      <section className='py-16 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-2xl font-bold mb-2 text-gray-900'>{t.formations.statsTitle}</h2>
          <p className='text-sm text-gray-500 mb-8'>{t.formations.statsSubtitle}</p>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
            {[
              { label: t.formations.statFormes, value: t.formations.statFormesValue },
              { label: t.formations.statSatisfaction, value: t.formations.statSatisfactionValue },
              { label: t.formations.statRecommandation, value: t.formations.statRecommandationValue },
              { label: t.formations.statAssiduite, value: t.formations.statAssiduiteValue },
            ].map((stat, i) => (
              <div key={i} className='bg-gray-50 rounded-2xl p-6 text-center border border-gray-100'>
                <p className='text-3xl font-bold text-primary mb-1'>{stat.value}</p>
                <p className='text-sm text-gray-600'>{stat.label}</p>
              </div>
            ))}
          </div>
          <p className='text-xs text-gray-400 mt-4 italic'>{t.formations.statsNote}</p>
        </div>
      </section>
    </div>
  );
}

// Wrapper avec Suspense — useSearchParams a besoin d'un boundary en Next 16
export default function FormationsPage() {
  return (
    <Suspense fallback={null}>
      <FormationsPageContent />
    </Suspense>
  );
}
