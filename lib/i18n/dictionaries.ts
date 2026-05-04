/**
 * Dictionnaires de traduction FR / EN pour toutes les chaînes UI.
 * Le contenu dynamique (formations Sanity) est traduit via l'API DeepL.
 */

export type Locale = 'fr' | 'en';

// Type dérivé du dictionnaire FR (la source de vérité pour la structure)
type Translations = {
  common: Record<string, string>;
  header: Record<string, string>;
  footer: Record<string, string>;
  home: Record<string, string>;
  about: Record<string, string>;
  formations: Record<string, string>;
  formationDetail: Record<string, string>;
  contact: Record<string, string>;
  testimonials: Record<string, string>;
  qualiopi: Record<string, string>;
  financement: Record<string, string>;
  accessibility: Record<string, string>;
};

export const dictionaries: Record<Locale, Translations> = {
  fr: {
    // ─── Common / Navigation ───────────────────────────────────────────────
    common: {
      home: 'Accueil',
      about: 'À propos',
      formations: 'Formations',
      testimonials: 'Témoignages',
      contact: 'Contact',
      learnMore: 'En savoir plus',
      contactUs: 'Nous contacter',
      backToFormations: '← Retour aux formations',
      loading: 'Chargement…',
      translating: 'Traduction en cours…',
      siteName: 'Edutech Formations',
      siteTagline: 'Formations professionnelles certifiées Qualiopi',
    },

    // ─── Header ────────────────────────────────────────────────────────────
    header: {
      toggleMenu: 'Menu',
      switchLanguage: 'English',
      switchLanguageAriaLabel: 'Passer en anglais',
    },

    // ─── Footer ────────────────────────────────────────────────────────────
    footer: {
      tagline: 'Formations professionnelles certifiées Qualiopi',
      qualiopiBadgeLabel: 'Certifié Qualiopi',
      qualiopiBadgeSub: 'Actions de formation',
      colTrainingTitle: 'Nos formations',
      poleDroit: 'Droit',
      poleMediation: 'Médiation',
      poleIA: 'IA en entreprise',
      colDiscoverTitle: 'Découvrir Edutech',
      navAbout: 'À propos',
      navFinancement: 'Financement',
      navTestimonials: 'Témoignages',
      navQualiopi: 'Certification Qualiopi',
      navContact: 'Contact',
      colLegalTitle: 'Mentions',
      mentionsLegales: 'Mentions légales',
      cgv: 'CGV',
      privacy: 'Confidentialité',
      reglement: 'Règlement intérieur',
      accessibility: 'Accessibilité et handicap',
      copyright:
        '© {year} Edutech Formations · SAS · SIRET 977 619 089 00021 · Organisme de formation enregistré sous le numéro NDA 11 94 12031 94 auprès du Préfet de la région Île-de-France. Cet enregistrement ne vaut pas agrément de l’État.',
      // Anciennes clés (utilisées ailleurs, on les garde)
      navigation: 'Navigation',
      contact: 'Contact',
      legalInfo: 'Informations légales',
      followUs: 'Suivez-nous',
      contactForm: 'Formulaire de contact',
      qualiopi: 'Certification Qualiopi',
      financement: 'Financement',
    },

    // ─── Home page ─────────────────────────────────────────────────────────
    home: {
      heroBadge: 'Organisme de formation certifié Qualiopi',
      heroTitle1: 'Transformez votre',
      heroTitleAccent: 'carrière',
      heroTitle2: 'avec nos formations professionnelles',
      heroSubtitle:
        'Organisme de formation certifié Qualiopi, Edutech Formations propose des formations en droit, médiation et IA en entreprise. Toutes nos formations sont éligibles aux financements OPCO et France Travail.',
      ctaDiscover: 'Découvrir nos formations',
      ctaTalk: 'Parler à un conseiller',
      stat1Value: '10K+',
      stat1Label: 'Étudiants formés',
      stat2Value: '95%',
      stat2Label: 'Taux de satisfaction',
      stat3Value: '50+',
      stat3Label: 'Formations',
      stat4Value: '100+',
      stat4Label: 'Experts formateurs',
      featuresTitle: 'Pourquoi nous choisir ?',
      featuresSubtitle: 'Une approche complète pour votre réussite professionnelle',
      feature1Title: 'Formations complètes',
      feature1Desc:
        'Des cours structurés et complets pour maîtriser chaque sujet en profondeur, avec des projets pratiques.',
      feature2Title: 'Formateurs experts',
      feature2Desc:
        "Apprenez auprès de professionnels passionnés avec des années d'expérience terrain.",
      feature3Title: 'Certification reconnue',
      feature3Desc:
        'Obtenez des certifications valorisées par les entreprises pour booster votre carrière.',
      finalCtaBadge: 'Démarrez maintenant',
      finalCtaTitle: 'Prêt à transformer votre carrière ?',
      finalCtaSubtitle:
        'Rejoignez des milliers de professionnels qui ont donné un nouvel élan à leur parcours',
      finalCtaButton: 'Voir les formations',
      finalCtaContact: 'Contactez-nous',
    },

    // ─── About page ────────────────────────────────────────────────────────
    about: {
      heroTitle: "À propos d'Edutech Formations",
      heroSubtitle:
        'Un organisme certifié Qualiopi, engagé pour des formations professionnelles concrètes et de qualité.',
      missionTitle: 'Notre mission',
      missionText1:
        'Edutech Formations accompagne les professionnels dans le développement de leurs compétences à travers des formations en présentiel, concrètes et directement applicables en entreprise.',
      missionText2:
        "Nous croyons que la formation professionnelle doit être accessible, exigeante et orientée résultats. Chaque programme est conçu pour répondre à des besoins réels, avec des objectifs pédagogiques clairs et mesurables.",
      valuesTitle: 'Nos valeurs',
      valuesSubtitle: 'Ce qui guide notre approche au quotidien',
      qualityTitle: 'Qualité',
      qualityText:
        'Notre certification Qualiopi témoigne de notre engagement pour un processus de formation rigoureux et transparent.',
      proximityTitle: 'Proximité',
      proximityText:
        'Des groupes à taille humaine et un accompagnement personnalisé, avant, pendant et après la formation.',
      impactTitle: 'Impact',
      impactText:
        "Nous mesurons l'efficacité de chaque formation à travers des évaluations de compétences et des enquêtes de satisfaction.",
      qualiopiTitle: 'Certification Qualiopi',
      qualiopiText:
        'Edutech Formations est certifié Qualiopi depuis 2024 au titre de la catégorie « Actions de formation ». Cette certification nationale atteste de la qualité du processus mis en œuvre et vous permet de bénéficier de financements publics ou mutualisés (OPCO, France Travail).',
      qualiopiLink: 'En savoir plus sur Qualiopi',
      legalTitle: 'Informations légales',
      legalText:
        "Edutech Formations est une SAS au capital de 1 000 €, immatriculée sous le SIREN 977 619 089. Siège social : 52 rue Montesquieu, 92600 Asnières-sur-Seine. Activité : Formation continue d'adultes (NAF 85.59A).",
      finalCtaBadge: 'Échangeons ensemble',
      finalCtaTitle: "Envie d'en savoir plus ?",
      finalCtaSubtitle: 'Contactez-nous pour échanger sur vos besoins en formation.',
    },

    // ─── Formations list page ──────────────────────────────────────────────
    formations: {
      heroTitle: 'Nos Formations',
      heroSubtitle:
        'Choisissez la formation parfaite et développez vos compétences.',
      filterAriaLabel: 'Filtrer par pôle',
      filterAll: 'Tous',
      filterDroit: 'Droit',
      filterMediation: 'Médiation',
      filterIA: 'IA',
      noFormation: 'Aucune formation dans ce pôle pour le moment.',
      imageComing: 'Image à venir',
      formed: 'formés',
      newLabel: 'Nouveau',
      tabInter: 'INTER',
      tabIntra: 'INTRA',
      tabSurMesure: 'SUR-MESURE',
      labelFormat: 'Format',
      labelDuration: 'Durée',
      labelPrice: 'Tarif',
      formatInter: 'Présentiel ou à distance',
      formatIntra: 'Dans vos locaux ou à distance',
      formatSurMesure: 'Adapté à votre organisation',
      durationSurMesure: 'Sur mesure',
      priceSurMesure: 'Sur devis',
      perStudent: 'HT / stagiaire',
      perGroup: 'HT / groupe',
      buttonInscribe: "JE M'INSCRIS",
      buttonContact: 'NOUS CONTACTER',
      buttonQuote: 'Demander un devis',
    },

    // ─── Formation detail page ─────────────────────────────────────────────
    formationDetail: {
      hoursOfFormation: 'h de formation',
      participants: 'participants',
      participantsMin: 'Min.',
      participantsMax: 'Max.',
      studentsFormed: 'étudiants formés',
      inscribeNow: "S'inscrire maintenant",
      tariffTitle: 'Tarif de la formation',
      tariffInter: 'INTER / individuel',
      tariffIntra: 'INTRA',
      tvaExempt: 'Exonérée de TVA — Art. 261.4.4 a du CGI',
      sectionPublic: 'Public concerné',
      sectionPrerequisites: 'Prérequis',
      sectionObjectives: 'Objectifs de la formation et compétences visées',
      sectionContent: 'Contenu de la formation',
      sectionProgram: 'Programme de la formation',
      sectionEvaluation: "Modalités d'évaluation",
      sectionFollow: "Suivi de l'exécution",
      sectionResults: 'Appréciation des résultats',
      sectionPedagogicalMeans: "Moyens pédagogiques et techniques d'encadrement",
      sectionTrainerProfile: 'Profil du formateur',
      sectionAccessConditions: "Modalités et délais d'accès",
      practicalInfoTitle: 'Informations pratiques',
      duration: 'Durée',
      schedule: 'Horaires',
      hours: 'heures',
      tariffInterIndividual: 'Tarif INTER / individuel',
      tariff: 'Tarif',
      ctaReadyTitle: 'Prêt à commencer ?',
      ctaReadySubtitle:
        'Inscrivez-vous dès maintenant et commencez votre apprentissage.',
      ctaReadyButton: 'Contactez-nous',
      notFound: 'Formation introuvable',
    },

    // ─── Contact page ──────────────────────────────────────────────────────
    contact: {
      heroTitle: 'Contactez-nous',
      heroSubtitle:
        "Une question ? Besoin d'informations ? Notre équipe est là pour vous accompagner",
      formTitle: 'Envoyez-nous un message',
      labelName: 'Nom complet *',
      labelEmail: 'Email *',
      labelPhone: 'Téléphone',
      labelSubject: 'Sujet *',
      labelMessage: 'Message *',
      subjectSelect: 'Sélectionnez un sujet',
      subjectInfo: "Demande d'information",
      subjectRegistration: 'Inscription à une formation',
      subjectFinancing: 'Question sur le financement',
      subjectTechnical: 'Support technique',
      subjectOther: 'Autre',
      sendButton: 'Envoyer le message',
      sending: 'Envoi en cours...',
      messageSent:
        'Message envoyé ! Nous vous répondrons dans les plus brefs délais.',
      messageError:
        "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.",
      coordinatesTitle: 'Nos coordonnées',
      emailLabel: 'Email',
      phoneLabel: 'Téléphone',
      hoursOpen: 'Lun - Ven : 9h00 - 18h00',
      openingHoursTitle: "Horaires d'ouverture",
      monFri: 'Lundi - Vendredi',
      sat: 'Samedi',
      sun: 'Dimanche',
      closed: 'Fermé',
    },

    // ─── Témoignages page ──────────────────────────────────────────────────
    testimonials: {
      heroTitle: 'Témoignages',
      heroSubtitle:
        'Découvrez ce que nos étudiants pensent de nos formations et comment elles ont transformé leur carrière',
      ratingValue: '4.8/5 sur plus de 5000 avis',
      ratingSubtitle: 'La satisfaction de nos étudiants est notre priorité',
      finalCtaTitle: 'Rejoignez nos étudiants satisfaits',
      finalCtaSubtitle:
        "Commencez votre formation dès aujourd'hui et transformez votre avenir professionnel",
      finalCtaButton: 'Voir nos formations',
    },

    // ─── Qualiopi page ─────────────────────────────────────────────────────
    qualiopi: {
      heroTitle: 'Certification Qualiopi',
      heroSubtitle: 'Notre engagement qualité, reconnu par une certification nationale.',
      badgeCertified: 'Certifié Qualiopi',
      badgeCategory: 'Actions de formation',
      badgeYear: 'Certification obtenue en 2024',
      badgeDeclaration:
        "Déclaration d'activité enregistrée sous le numéro 11 94 12031 94 auprès du préfet de région d'Île-de-France",
      downloadCertificate: 'Télécharger le certificat',
      whatIsTitle: "Qu'est-ce que Qualiopi ?",
      whatIs1:
        "Qualiopi est la certification qualité nationale des organismes de formation. Délivrée par des organismes certificateurs accrédités, elle atteste de la qualité du processus mis en œuvre par les prestataires d'actions concourant au développement des compétences.",
      whatIs2:
        'Cette certification est obligatoire depuis le 1er janvier 2022 pour tout organisme souhaitant bénéficier de fonds publics ou mutualisés pour ses formations.',
      guaranteesTitle: 'Ce que Qualiopi garantit pour vous',
      guaranteesIntro:
        "En choisissant un organisme certifié Qualiopi, vous avez l'assurance de bénéficier d'un cadre de formation exigeant et structuré :",
      financingTitle: "L'accès aux financements",
      financingIntro:
        'La certification Qualiopi vous permet de faire financer votre formation par les dispositifs publics et mutualisés :',
      financingMore: 'Pour en savoir plus, consultez notre',
      financingPage: 'page dédiée au financement',
      opcoCardTitle: 'OPCO',
      opcoCardText:
        'Votre opérateur de compétences peut prendre en charge le financement via le plan de développement des compétences.',
      ftCardTitle: 'France Travail',
      ftCardText:
        "Des aides existent pour les demandeurs d'emploi (AIF, POEI). Nous vous accompagnons dans les démarches.",
      referentialTitle: 'Le référentiel national qualité',
      referentialIntro:
        "La certification Qualiopi repose sur un audit réalisé selon le Référentiel National Qualité (RNQ), qui comprend 7 critères et 32 indicateurs couvrant l'ensemble du processus de formation :",
      processTitle: 'Notre démarche qualité',
      processText:
        "Au-delà de la certification, nous nous engageons dans une démarche d'amélioration continue. Chaque session de formation fait l'objet d'une évaluation de satisfaction à chaud en fin de session, complétée par une enquête d'impact à froid 30 jours après. Ces retours alimentent directement l'évolution de nos programmes et de nos pratiques pédagogiques.",
      ctaBadge: 'Certification qualité',
      ctaTitle: 'Une question sur notre certification ?',
      ctaSubtitle:
        'Contactez-nous pour en savoir plus sur notre démarche qualité ou pour obtenir une copie de notre certificat.',
    },

    // ─── Financement page ──────────────────────────────────────────────────
    financement: {
      heroTitle: 'Financer votre formation',
      heroSubtitle:
        'Plusieurs dispositifs permettent de prendre en charge tout ou partie du coût de votre formation. Nous vous accompagnons dans vos démarches.',
      intro: "En tant qu'organisme certifié",
      introQualiopiLink: 'Qualiopi',
      introEnd:
        ', Edutech Formations vous permet de bénéficier de financements publics ou mutualisés. Voici les principaux dispositifs accessibles.',
      opcoTitle: 'Les OPCO (Opérateurs de Compétences)',
      opcoText:
        "Si vous êtes salarié, votre entreprise cotise auprès d'un OPCO qui peut financer votre formation dans le cadre du plan de développement des compétences.",
      ftTitle: 'France Travail (ex-Pôle emploi)',
      ftText:
        "Les demandeurs d'emploi peuvent bénéficier d'aides à la formation, notamment l'AIF (Aide Individuelle à la Formation) ou le dispositif POEI.",
      employerTitle: "Financement par l'employeur",
      employerText:
        'Votre entreprise peut financer directement votre formation dans le cadre de son plan de développement des compétences, sans passer par un OPCO.',
      selfTitle: 'Autofinancement',
      selfText:
        'Vous pouvez également financer votre formation à titre personnel. Nous proposons des facilités de paiement sur demande.',
      ctaBadge: 'Accompagnement gratuit',
      ctaTitle: "Besoin d'aide pour monter votre dossier ?",
      ctaSubtitle:
        'Nous vous accompagnons gratuitement dans vos démarches de financement, quel que soit le dispositif.',
      ctaButton: 'Contactez-nous',
    },

    // ─── Accessibilité page ────────────────────────────────────────────────
    accessibility: {
      heroTitle: 'Accessibilité et Handicap',
      heroSubtitle: "Notre engagement pour l'accueil de tous les apprenants.",
      commitTitle: 'Notre engagement',
      commitText:
        "Edutech Formations s'engage à favoriser l'accès à la formation professionnelle pour tous, y compris les personnes en situation de handicap. Nous adaptons nos modalités pédagogiques dans la mesure du possible pour répondre aux besoins spécifiques de chaque apprenant.",
      referentTitle: 'Votre référent handicap',
      referentIntro:
        'Un référent handicap est à votre disposition pour étudier vos besoins et mettre en place les adaptations nécessaires :',
      referentName: 'Olivier Gil',
      referentRole: 'Référent handicap',
      adaptationsTitle: 'Les adaptations possibles',
      partnersTitle: 'Partenaires et ressources',
      partnersIntro:
        'Nous travaillons en lien avec les acteurs du handicap pour vous orienter au mieux :',
      anticipateTitle: 'Anticipez votre besoin',
      anticipateText:
        "Pour que nous puissions mettre en place les meilleures conditions d'accueil, nous vous invitons à nous signaler votre situation le plus tôt possible, idéalement dès la prise de contact ou l'inscription.",
      ctaBadge: 'Accessibilité',
      ctaTitle: 'Vous avez un besoin spécifique ?',
      ctaSubtitle:
        'Contactez notre référent handicap pour étudier ensemble les adaptations possibles.',
      ctaButton: 'Contacter le référent',
    },
  },

  en: {
    // ─── Common / Navigation ───────────────────────────────────────────────
    common: {
      home: 'Home',
      about: 'About',
      formations: 'Training',
      testimonials: 'Testimonials',
      contact: 'Contact',
      learnMore: 'Learn more',
      contactUs: 'Contact us',
      backToFormations: '← Back to training',
      loading: 'Loading…',
      translating: 'Translating…',
      siteName: 'Edutech Formations',
      siteTagline: 'Qualiopi-certified professional training',
    },

    header: {
      toggleMenu: 'Menu',
      switchLanguage: 'Français',
      switchLanguageAriaLabel: 'Switch to French',
    },

    footer: {
      tagline: 'Qualiopi-certified professional training',
      qualiopiBadgeLabel: 'Qualiopi-certified',
      qualiopiBadgeSub: 'Training actions',
      colTrainingTitle: 'Our training',
      poleDroit: 'Law',
      poleMediation: 'Mediation',
      poleIA: 'AI for business',
      colDiscoverTitle: 'Discover Edutech',
      navAbout: 'About',
      navFinancement: 'Funding',
      navTestimonials: 'Testimonials',
      navQualiopi: 'Qualiopi certification',
      navContact: 'Contact',
      colLegalTitle: 'Legal',
      mentionsLegales: 'Legal notice',
      cgv: 'Terms & Conditions',
      privacy: 'Privacy policy',
      reglement: 'Internal regulations',
      accessibility: 'Accessibility & disability',
      copyright:
        '© {year} Edutech Formations · SAS · SIRET 977 619 089 00021 · Training organisation registered under NDA number 11 94 12031 94 with the Île-de-France regional prefect. This registration does not constitute State approval.',
      // Legacy keys (kept for compatibility)
      navigation: 'Navigation',
      contact: 'Contact',
      legalInfo: 'Legal information',
      followUs: 'Follow us',
      contactForm: 'Contact form',
      qualiopi: 'Qualiopi certification',
      financement: 'Funding',
    },

    home: {
      heroBadge: 'Certified training programmes 2025',
      heroTitle1: 'Transform your',
      heroTitleAccent: 'career',
      heroTitle2: 'with our training',
      heroSubtitle:
        'Join over 10,000 professionals who have accelerated their careers thanks to our expert-led training.',
      ctaDiscover: 'Browse our courses',
      ctaTalk: 'Speak to an advisor',
      stat1Value: '10K+',
      stat1Label: 'Learners trained',
      stat2Value: '95%',
      stat2Label: 'Satisfaction rate',
      stat3Value: '50+',
      stat3Label: 'Courses',
      stat4Value: '100+',
      stat4Label: 'Expert trainers',
      featuresTitle: 'Why choose us?',
      featuresSubtitle: 'A complete approach to your professional success',
      feature1Title: 'Comprehensive courses',
      feature1Desc:
        'Structured, in-depth courses designed to help you master each subject, with practical real-world projects.',
      feature2Title: 'Expert trainers',
      feature2Desc:
        'Learn from passionate professionals with years of hands-on industry experience.',
      feature3Title: 'Recognised certification',
      feature3Desc:
        'Earn certifications valued by employers to advance your career with confidence.',
      finalCtaBadge: 'Get started today',
      finalCtaTitle: 'Ready to transform your career?',
      finalCtaSubtitle:
        'Join thousands of professionals who have given their careers fresh momentum.',
      finalCtaButton: 'View all courses',
      finalCtaContact: 'Contact us',
    },

    about: {
      heroTitle: 'About Edutech Formations',
      heroSubtitle:
        'A Qualiopi-certified training provider committed to delivering practical, high-quality professional development.',
      missionTitle: 'Our mission',
      missionText1:
        'Edutech Formations supports professionals in developing their skills through in-person training that is concrete, hands-on, and directly applicable in the workplace.',
      missionText2:
        'We believe professional training should be accessible, demanding, and results-driven. Every programme is designed to address real-world needs, with clear and measurable learning objectives.',
      valuesTitle: 'Our values',
      valuesSubtitle: 'What guides our approach every day',
      qualityTitle: 'Quality',
      qualityText:
        'Our Qualiopi certification reflects our commitment to a rigorous and transparent training process.',
      proximityTitle: 'Personal approach',
      proximityText:
        'Small group sizes and tailored support before, during, and after every training session.',
      impactTitle: 'Impact',
      impactText:
        'We measure the effectiveness of each programme through skills assessments and learner satisfaction surveys.',
      qualiopiTitle: 'Qualiopi certification',
      qualiopiText:
        'Edutech Formations has been Qualiopi-certified since 2024 under the "Training actions" category. This national certification attests to the quality of our process and gives you access to public or pooled funding (OPCO, France Travail).',
      qualiopiLink: 'Learn more about Qualiopi',
      legalTitle: 'Legal information',
      legalText:
        'Edutech Formations is a SAS with €1,000 share capital, registered under SIREN 977 619 089. Registered office: 52 rue Montesquieu, 92600 Asnières-sur-Seine, France. Activity: Continuing adult education (NAF 85.59A).',
      finalCtaBadge: "Let's talk",
      finalCtaTitle: 'Want to know more?',
      finalCtaSubtitle: 'Get in touch to discuss your training needs.',
    },

    formations: {
      heroTitle: 'Our Training Courses',
      heroSubtitle: 'Find the right course and develop your professional skills.',
      filterAriaLabel: 'Filter by category',
      filterAll: 'All',
      filterDroit: 'Law',
      filterMediation: 'Mediation',
      filterIA: 'AI',
      noFormation: 'No course available in this category yet.',
      imageComing: 'Image coming soon',
      formed: 'trained',
      newLabel: 'New',
      tabInter: 'INTER',
      tabIntra: 'INTRA',
      tabSurMesure: 'BESPOKE',
      labelFormat: 'Format',
      labelDuration: 'Duration',
      labelPrice: 'Price',
      formatInter: 'On-site or online',
      formatIntra: 'At your premises or online',
      formatSurMesure: 'Tailored to your organisation',
      durationSurMesure: 'Bespoke',
      priceSurMesure: 'On request',
      perStudent: 'ex. VAT / participant',
      perGroup: 'ex. VAT / group',
      buttonInscribe: 'REGISTER',
      buttonContact: 'CONTACT US',
      buttonQuote: 'Request a quote',
    },

    formationDetail: {
      hoursOfFormation: 'h of training',
      participants: 'participants',
      participantsMin: 'Min.',
      participantsMax: 'Max.',
      studentsFormed: 'learners trained',
      inscribeNow: 'Register now',
      tariffTitle: 'Course pricing',
      tariffInter: 'INTER / individual',
      tariffIntra: 'INTRA',
      tvaExempt: 'VAT-exempt — Art. 261.4.4 a of the French CGI',
      sectionPublic: 'Target audience',
      sectionPrerequisites: 'Prerequisites',
      sectionObjectives: 'Learning objectives and skills covered',
      sectionContent: 'Course content',
      sectionProgram: 'Course programme',
      sectionEvaluation: 'Assessment methods',
      sectionFollow: 'Course delivery and tracking',
      sectionResults: 'Results assessment',
      sectionPedagogicalMeans: 'Teaching methods and supervision',
      sectionTrainerProfile: 'About the trainer',
      sectionAccessConditions: 'Access and registration',
      practicalInfoTitle: 'Key details',
      duration: 'Duration',
      schedule: 'Schedule',
      hours: 'hours',
      tariffInterIndividual: 'INTER / individual price',
      tariff: 'Price',
      ctaReadyTitle: 'Ready to begin?',
      ctaReadySubtitle: 'Sign up today and start your learning journey.',
      ctaReadyButton: 'Get in touch',
      notFound: 'Course not found',
    },

    contact: {
      heroTitle: 'Get in touch',
      heroSubtitle:
        'A question? Need more information? Our team is here to help.',
      formTitle: 'Send us a message',
      labelName: 'Full name *',
      labelEmail: 'Email *',
      labelPhone: 'Phone',
      labelSubject: 'Subject *',
      labelMessage: 'Message *',
      subjectSelect: 'Choose a subject',
      subjectInfo: 'General enquiry',
      subjectRegistration: 'Course registration',
      subjectFinancing: 'Funding enquiry',
      subjectTechnical: 'Technical support',
      subjectOther: 'Other',
      sendButton: 'Send message',
      sending: 'Sending…',
      messageSent: 'Message sent! We will get back to you as soon as possible.',
      messageError:
        'Something went wrong while sending your message. Please try again.',
      coordinatesTitle: 'Our contact details',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      hoursOpen: 'Mon - Fri: 9:00 a.m. - 6:00 p.m.',
      openingHoursTitle: 'Opening hours',
      monFri: 'Monday - Friday',
      sat: 'Saturday',
      sun: 'Sunday',
      closed: 'Closed',
    },

    testimonials: {
      heroTitle: 'Testimonials',
      heroSubtitle:
        'See what our learners say about our courses and how they have shaped their careers.',
      ratingValue: '4.8/5 from over 5,000 reviews',
      ratingSubtitle: "Our learners' satisfaction is our top priority",
      finalCtaTitle: 'Join our happy learners',
      finalCtaSubtitle:
        'Start your training today and shape your professional future.',
      finalCtaButton: 'View our courses',
    },

    qualiopi: {
      heroTitle: 'Qualiopi certification',
      heroSubtitle:
        'Our quality commitment, recognized by a national certification.',
      badgeCertified: 'Qualiopi-certified',
      badgeCategory: 'Training actions',
      badgeYear: 'Certified since 2024',
      badgeDeclaration:
        'Activity declaration registered under number 11 94 12031 94 with the Île-de-France regional prefect',
      downloadCertificate: 'Download certificate',
      whatIsTitle: 'What is Qualiopi?',
      whatIs1:
        'Qualiopi is the national quality certification for training organizations. Issued by accredited certification bodies, it attests to the quality of the process implemented by providers of skill-development actions.',
      whatIs2:
        'This certification has been mandatory since January 1, 2022, for any organization wishing to benefit from public or pooled funds for its training.',
      guaranteesTitle: 'What Qualiopi guarantees you',
      guaranteesIntro:
        'By choosing a Qualiopi-certified organization, you are assured of a demanding and structured training framework:',
      financingTitle: 'Access to funding',
      financingIntro:
        'Qualiopi certification allows your training to be funded by public and pooled schemes:',
      financingMore: 'To learn more, see our',
      financingPage: 'dedicated financing page',
      opcoCardTitle: 'OPCO',
      opcoCardText:
        'Your skills operator can cover financing through your skills development plan.',
      ftCardTitle: 'France Travail',
      ftCardText:
        'Aid is available for jobseekers (AIF, POEI). We support you through the process.',
      referentialTitle: 'The national quality reference framework',
      referentialIntro:
        'Qualiopi certification is based on an audit conducted according to the National Quality Reference Framework (RNQ), which includes 7 criteria and 32 indicators covering the entire training process:',
      processTitle: 'Our quality process',
      processText:
        'Beyond certification, we are committed to a continuous improvement approach. Each training session is evaluated for satisfaction at the end of the session, supplemented by an impact survey 30 days later. This feedback directly feeds the evolution of our programs and pedagogical practices.',
      ctaBadge: 'Quality certification',
      ctaTitle: 'A question about our certification?',
      ctaSubtitle:
        'Contact us to learn more about our quality approach or to obtain a copy of our certificate.',
    },

    financement: {
      heroTitle: 'Funding your training',
      heroSubtitle:
        'Several schemes can cover all or part of your training costs. We support you through the process.',
      intro: 'As a',
      introQualiopiLink: 'Qualiopi-certified',
      introEnd:
        ' organization, Edutech Formations gives you access to public or pooled funding. Here are the main available schemes.',
      opcoTitle: 'OPCOs (Skills Operators)',
      opcoText:
        'If you are an employee, your company contributes to an OPCO that can fund your training as part of its skills development plan.',
      ftTitle: 'France Travail (formerly Pôle emploi)',
      ftText:
        'Jobseekers can benefit from training assistance, in particular the AIF (Individual Training Aid) or POEI scheme.',
      employerTitle: 'Employer funding',
      employerText:
        'Your company can directly fund your training as part of its skills development plan, without going through an OPCO.',
      selfTitle: 'Self-funding',
      selfText:
        'You can also fund your training personally. Payment plans are available on request.',
      ctaBadge: 'Free support',
      ctaTitle: 'Need help building your file?',
      ctaSubtitle:
        'We provide free support throughout your funding application, regardless of the scheme.',
      ctaButton: 'Contact us',
    },

    accessibility: {
      heroTitle: 'Accessibility & Disability',
      heroSubtitle: 'Our commitment to welcoming every learner.',
      commitTitle: 'Our commitment',
      commitText:
        'Edutech Formations is committed to making professional training accessible to everyone, including people with disabilities. We adapt our teaching methods wherever possible to meet the specific needs of each learner.',
      referentTitle: 'Your disability adviser',
      referentIntro:
        'A dedicated disability adviser is available to assess your needs and put the right adjustments in place:',
      referentName: 'Olivier Gil',
      referentRole: 'Disability adviser',
      adaptationsTitle: 'Possible adjustments',
      partnersTitle: 'Partners and resources',
      partnersIntro:
        'We work alongside disability organisations to guide you towards the best support:',
      anticipateTitle: 'Plan ahead',
      anticipateText:
        'To ensure the best possible support, please let us know about your situation as early as possible — ideally during your first contact or at registration.',
      ctaBadge: 'Accessibility',
      ctaTitle: 'Do you have a specific need?',
      ctaSubtitle:
        'Contact our disability adviser to discuss the adjustments we can put in place together.',
      ctaButton: 'Contact the adviser',
    },
  },
};

export type Dictionary = Translations;
