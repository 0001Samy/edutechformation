'use client';

import { useMemo } from 'react';
import { useTranslatedContent } from '@/lib/i18n/useTranslatedContent';

export default function CGVPage() {
  /* ─── Listes de bullets par article ────────────────────────────────── */
  const a3_1_general = useMemo(() => [
    "Les caractéristiques essentielles des prestations de services proposées par EDUTECH FORMATIONS,",
    "Le prix des prestations proposées et des frais annexes,",
    "Les modalités de paiements des sommes dues,",
    "Les dates et les délais auxquels EDUTECH FORMATIONS s'engage à exécuter les prestations commandées,",
    "Les informations relatives aux éventuelles garanties légales et contractuelles et à leurs modalités de mise en œuvre, par le biais des présentes.",
  ], []);

  const a3_1_formation = useMemo(() => [
    "1° La nature, la durée, le programme et l'objet des actions de formation qu'il prévoit ainsi que les effectifs qu'elles concernent ;",
    "2° Le niveau de connaissances préalables requis pour suivre la formation et obtenir les qualifications auxquelles elle prépare ;",
    "3° Les conditions dans lesquelles la formation est donnée aux participants, notamment les modalités de formation dans le cas des formations réalisées en tout ou en partie à distance, les moyens pédagogiques et techniques mis en œuvre ainsi que les modalités de contrôle des connaissances et la nature de la sanction éventuelle de la formation ;",
    "4° Les diplômes, titres ou références des personnes chargées de la formation prévue par le contrat ;",
    "5° Les modalités de paiement ainsi que les conditions financières prévues en cas de cessation anticipée de la formation ou d'abandon en cours de formation.",
  ], []);

  const a4_1_respect = useMemo(() => [
    "Des conditions et du périmètre de la mission fixés par le contrat,",
    "Des règlementations, normes, règles ou référentiels professionnels lui étant applicables,",
    "Des usages et pratiques de la profession.",
  ], []);

  const a4_1_engage = useMemo(() => [
    "À conseiller son client en lui apportant l'entier concours de ses connaissances et de son expérience,",
    "À accomplir avec zèle, diligence, conscience et probité la prestation confiée,",
    "À respecter l'obligation de réserve en ce qui concerne toutes les informations et renseignements qu'il pourrait recueillir,",
    "À rendre compte à son client des diligences effectuées et de la gestion de son éventuel mandat.",
  ], []);

  const a4_2_engage = useMemo(() => [
    "Informer EDUTECH FORMATIONS de toute action et démarche en lien direct ou indirect avec l'objet de la prestation, qu'il aurait entreprises avant la date de conclusion du contrat,",
    "Fournir à la société ainsi qu'à ses représentants, en temps utiles et sans frais : tous détails, documents, moyens et informations nécessaires à la bonne exécution des services,",
    "Si besoin, obtenir et maintenir toutes les licences, autorisations, diplômes, qualifications, procédures nécessaires à la réalisation des services et respecter toutes les lois applicables.",
    "Prendre toutes dispositions nécessaires pour éviter toute action ou situation de nature à faire obstacle à la bonne exécution des prestations demandées,",
    "S'abstenir de toute ingérence dans la conduite de la prestation et/ou du mandat confié à EDUTECH FORMATIONS,",
    "Informer et transmettre en temps utiles à EDUTECH FORMATIONS tout document qui lui serait adressé par un tiers et ayant un lien direct avec la prestation confiée à EDUTECH FORMATIONS,",
    "Régler à son échéance l'intégralité des sommes dues au titre des prestations réalisées.",
  ], []);

  const a6_2_conditions = useMemo(() => [
    "Le contrat doit être conclu hors établissement,",
    "L'objet du contrat ne doit pas entrer dans le champ d'activité principale de l'entreprise,",
    "Le nombre de salariés de l'entreprise doit être inférieur ou égal à cinq.",
  ], []);

  const a7_4_consequences = useMemo(() => [
    "Le droit pour EDUTECH FORMATIONS de suspendre l'exécution de ses propres obligations, en attendant la régularisation par le client, sans pouvoir donner lieu à dommages et intérêts pour le client",
    "L'application d'une pénalité de retard sous forme d'intérêts, égale à trois fois le taux d'intérêt légal en vigueur au jour de la facturation,",
    "L'application d'une indemnité forfaitaire pour frais de recouvrement de 40 €, de plein droit et sans notification préalable. Une indemnité complémentaire pourra être réclamée, sur justificatif, si les frais de recouvrement exposés sont supérieurs au montant de l'indemnité forfaitaire.",
    "L'application de plein droit de la clause pénale mentionnée ci-dessous (Article 7.5)",
  ], []);

  const a10_1_motifs = useMemo(() => [
    "Inobservation par le client de l'une des conditions des présentes CGV ou des conditions particulières qui seraient conclues entre les parties ;",
    "Non-paiement des factures par le client ;",
    "Non-respect par le client de son devoir de collaboration ;",
    "Désaccord majeur entre le client et EDUTECH FORMATIONS concernant les conseils apportés ;",
    "Cessation ou suspension de l'activité du client affectant sa solvabilité ;",
    "Cette mise en demeure devra mentionner l'intention d'appliquer la présente clause.",
  ], []);

  const a12_nonResp = useMemo(() => [
    "Une erreur, omission ou une inexactitude engendrée par un manque d'information ou des informations erronées, fallacieuses et ou incomplètes remises par le client,",
    "Un retard dans le traitement du dossier occasionné par le client ou un manque de réactivité de celui-ci,",
  ], []);

  const a13_1_data = useMemo(() => [
    "nom, prénom, date de naissance, âge, adresse électronique, adresse mail professionnelle non générique contenant prénom et nom d'une personne, coordonnées postales, coordonnées téléphoniques, profession et/ou fonction exercée, identité de l'employeur, Kbis, Curriculum vitae, diplôme, formations suivies, coordonnées bancaires, etc.",
  ], []);

  const a13_2_finalites = useMemo(() => [
    "organisation, gestion et exécution des prestations commandées,",
    "communication avec le client,",
    "établissement devis, contrats, conventions, factures et documents divers,",
    "envoi de mails et de documents,",
    "gestion des éventuels litiges,",
    "prise de contact avec des établissements tiers, etc.",
  ], []);

  const a13_4_partage = useMemo(() => [
    "Pour les besoins de l'exécution de la prestation, impliquant l'intervention d'un tiers ou d'une entité tierce, dès lors que la personne concernée est informée de l'existence de cette intervention,",
    "Si EDUTECH FORMATIONS fait appel à un sous-traitant dans l'exécution de sa mission : Les sous-traitants en question sont soumis à une obligation de confidentialité et ne peuvent utiliser vos données qu'en conformité avec nos dispositions contractuelles et la législation applicable.",
    "Si la loi l'exige, EDUTECH FORMATIONS peut transmettre les données pour donner suite aux réclamations présentées contre EDUTECH FORMATIONS et se conformer aux procédures administratives et judiciaires,",
    "Si EDUTECH FORMATIONS est impliquée dans une opération de fusion, acquisition, cession d'actifs ou procédure de redressement judiciaire, EDUTECH FORMATIONS pourra être amenée à céder ou à partager tout ou partie de ses actifs, y compris les données à caractère personnel. Dans ce cas les utilisateurs seraient informés, avant que les données à caractère personnel ne soient transférées à une tierce partie.",
  ], []);

  /* ─── Chaînes statiques ─────────────────────────────────────────────── */
  const staticStrings = useMemo(() => [
    "Conditions Générales de Vente",                                       // 0
    "Conditions Générales de Vente de Prestations de Services – applicables à compter du 01/04/2026", // 1
    // Art 1
    "1 — Identification du prestataire",                                   // 2
    "La SASU EDUTECH FORMATIONS, représentée par M. Olivier GIL, SIRET n° : 977 619 089 00021, dont le siège social est sis 52 Rue Montesquieu - 92600 ASNIÈRES-SUR-SEINE, ci-après désignée EDUTECH FORMATIONS. Déclaration d'activité enregistrée sous le numéro 11 94 12031 94 auprès du préfet de région d'Île-de-France.", // 3
    "Contact : M. Olivier GIL - Tel : 06 33 24 77 64 - Mail : contact@edutechformation.com – Horaires : du lundi au vendredi de 9h à 18h.", // 4
    // Art 2
    "2 — Généralités",                                                     // 5
    "Les présentes CGV ont pour objet de définir les droits et obligations d'EDUTECH FORMATIONS et de son client dans le cadre de toute commande de prestations de service ou de formation.", // 6
    "Toute conclusion de contrat avec EDUTECH FORMATIONS implique au préalable l'adhésion et l'acceptation expresse et sans réserve du client aux présentes CGV qui prévalent sur tous autres documents du client et sur toutes discussions ou échanges antérieurs intervenus entre les parties. En cas de contradiction entre les stipulations figurant dans le contrat de service conclu entre EDUTECH FORMATIONS et le client, et les présentes CGV, les premières prévaudront sur les secondes. Dans ce cadre, sauf à avoir été acceptée préalablement et expressément par EDUTECH FORMATIONS, toute clause figurant sur un document émanant du client est réputée non écrite.", // 7
    "Le seul fait pour EDUTECH FORMATIONS de ne pas se prévaloir d'une ou plusieurs clauses figurant aux présentes ne vaut pas renonciation de sa part au bénéfice desdites clauses et ne saurait être interprété comme une renonciation pour l'avenir. Aussi, dans le cas où l'une des dispositions des présentes est réputée ou déclarée nulle ou non écrite, par un tribunal compétent, les autres dispositions restent intégralement en vigueur et doivent être interprétées de façon à respecter l'intention originelle des parties exprimée contractuellement et à travers les présentes CGV.", // 8
    "Tout autre document que les présentes CGV et que les contrats de service émanant de EDUTECH FORMATIONS notamment catalogues, prospectus, publicités, notices, est fourni à titre purement informatif et indicatif et ne revêt aucune valeur contractuelle.", // 9
    "EDUTECH FORMATIONS se réserve le droit de modifier ou de rectifier les présentes CGV à tout moment notamment afin de prendre en compte une évolution législative, règlementaire, jurisprudentielle, et/ou technique. Les nouvelles CGV s'appliquent à tout nouveau contrat conclu avec le client.", // 10
    "Les CGV sont portées à la connaissance du client au moment de l'envoi des devis par EDUTECH FORMATIONS et sont disponibles à tout moment sur simple demande.", // 11
    "Le client déclare adhérer sans restriction ni réserve aux présentes CGV dès qu'il mandate EDUTECH FORMATIONS par contact direct, ou indirect, via un support papier ou numérique. Le client se porte fort du respect des présentes CGV par l'ensemble de ses salariés, préposés et agents. Le client reconnaît également que préalablement à toute commande, il a bénéficié des informations et conseils suffisants de la part de EDUTECH FORMATIONS, lui permettant de s'assurer de l'adéquation de l'offre de services à ses besoins.", // 12
    // Art 3
    "3 — Informations précontractuelles et commande",                      // 13
    "3.1 Informations précontractuelles",                                  // 14
    "Préalablement à la conclusion du contrat, ces CGV sont communiquées au client, qui reconnaît les avoir reçues. À tout moment les CGV sont consultables à l'adresse suivante : https://edutechformation.com/cgv", // 15
    "Toute commande de prestations fera l'objet de l'émission d'un devis par EDUTECH FORMATIONS précisant, notamment, la description de la prestation, son contenu, les modalités particulières de sa réalisation, son prix et les livrables attendus, le cas échéant.", // 16
    "Ce faisant, le co-contractant reconnaît avoir reçu, préalablement à la passation de la commande, de manière claire et compréhensible, les informations suivantes avant passation de la commande :", // 17
    "Et plus spécifiquement pour les commandes de formations :",           // 18
    "3.2 Formation du contrat",                                            // 19
    "L'obligation principale de chaque partie, réaliser la prestation pour EDUTECH FORMATIONS et payer le prix de la prestation pour le client, naît à compter du moment où le client a dument signé et retourné sur tout support (numérique, papier…) l'offre de contrat / le devis émis par EDUTECH FORMATIONS définissant les prestations commandées. A compter de sa date d'émission, le devis est valable un (1) mois.", // 20
    "L'acceptation d'un devis engage le client de manière ferme et irrévocable. Aucun contrat ne peut être annulé ou modifié sans l'accord exprès d'EDUTECH FORMATIONS.", // 21
    "3.3 Prérequis",                                                       // 22
    "Concernant la prestation de formation, EDUTECH FORMATIONS spécifiera les connaissances initiales requises (prérequis) si nécessaire. Il appartient au client de s'assurer que tout participant inscrit à une formation, satisfait bien les prérequis spécifiés sur la formation correspondante. EDUTECH FORMATIONS ne peut en conséquence être tenu pour responsable d'une éventuelle inadéquation entre la formation suivie et le niveau initial du participant.", // 23
    "Pour les formations à distance, il appartient au participant de s'assurer de la bonne configuration et de l'adéquation de son matériel informatique, avant la formation dans les délais impartis.", // 24
    "3.4 Convention et contrat de formation",                              // 25
    "Conformément aux articles L6353-1 et L6353-2 du code du travail, toute commande de formation donnera lieu à convention de formation ou à un contrat de formation selon la qualité du client.", // 26
    "Les devis et les factures émises par EDUTECH FORMATIONS pourront faire office de convention de formation simplifiée. En toutes hypothèses, une convention de formation standard peut être adressée sur simple demande.", // 27
    "Pour les formations commandées par une personne physique ne disposant pas d'une personnalité morale, à titre individuel et à ses frais, toute commande donnera lieu en sus à un contrat de formation. Ce contrat devra être conclu avant inscription définitive et tout règlement de frais.", // 28
    // Art 4
    "4 — Obligations générales des parties",                              // 29
    "4.1 Obligations générales d'EDUTECH FORMATIONS",                     // 30
    "Compte tenu du haut degré d'autonomie que requiert les missions qui lui sont confiées, EDUTECH FORMATIONS mettra tout son savoir-faire et ses connaissances au profit du client, à travers la bonne exécution de la mission en s'engageant à réaliser les prestations confiées dans le respect :", // 31
    "À ce titre, EDUTECH FORMATIONS s'engage :",                          // 32
    "4.2 Obligations générales du client",                                // 33
    "Afin de permettre à EDUTECH FORMATIONS d'accomplir ses prestations, le client s'engage à :", // 34
    // Art 5
    "5 — Conditions d'exécution des prestations",                         // 35
    "5.1 Délai d'exécution",                                              // 36
    "Le délai d'exécution d'EDUTECH FORMATIONS dépend de la nature de la prestation confiée et/ou du périmètre de la prestation ou du mandat ainsi confié. La durée des prestations peut être spécifiée dans le devis.", // 37
    "En tout état de cause, EDUTECH FORMATIONS ne saurait être tenu responsable en cas de retard occasionné par le client par suite de transmission insuffisante ou tardive de renseignements, d'éléments ou d'informations ou par suite de non-respect de son obligation de paiement.", // 38
    "5.2 Mandat",                                                          // 39
    "Pour l'exécution de sa prestation, le client pourra être amené à autoriser EDUTECH FORMATIONS à le représenter directement ou indirectement auprès des tiers concernés et à mener toutes les actions nécessaires à l'aboutissement de sa mission.", // 40
    // Art 6
    "6 — Délai de rétractation",                                          // 41
    "6.1 Pour les contrats conclus entre un consommateur et EDUTECH FORMATIONS", // 42
    "En cas de contrat souscrit hors établissement ou à distance, conformément à l'article L.221-18 du Code de la Consommation, le consommateur ou assimilé dispose d'un délai de quatorze (14) jours à compter de la réception de la commande pour exercer son droit de rétractation auprès d'EDUTECH FORMATIONS, sans avoir à motiver sa décision en utilisant et en envoyant le modèle de formulaire de rétractation figurant en annexe 1 des présentes, par voie de lettre recommandée avec accusé de réception adressée à EDUTECH FORMATIONS à l'adresse suivante : 52 Rue Montesquieu - 92600 ASNIÈRES-SUR-SEINE.", // 43
    "Toutefois, le client est informé de ce qu'aucun droit de rétractation n'est applicable dès lors que les services ont été pleinement exécutés avant la fin du délai de rétractation lorsque leur exécution a commencé après accord préalable exprès du consommateur ou assimilé et renoncement exprès à son droit de rétractation.", // 44
    "Le remboursement des sommes qui auraient été versées préalablement à EDUTECH FORMATIONS s'effectue au plus tard dans les quatorze (14) jours à compter de la date à laquelle EDUTECH FORMATIONS est informée de la décision du client de se rétracter.", // 45
    "Pour les formations financées à titre individuel (par une personne physique n'ayant pas la personnalité morale), le client dispose d'un délai de rétractation de 10 jours à compter de la conclusion du contrat de formation en application de l'article L6453-5 du code du travail. En ce cas, le client devra faire connaitre sa décision de se rétracter dans ce délai par voie de lettre recommandée avec accusé de réception adressée à EDUTECH FORMATIONS à l'adresse suivante : 52 Rue Montesquieu - 92600 ASNIÈRES-SUR-SEINE.", // 46
    "6.2 Pour les contrats conclus entre un professionnel et EDUTECH FORMATIONS", // 47
    "Conformément à l'article L.221-3 du Code de la consommation, le droit de rétractation pour le client professionnel est applicable sous 3 conditions strictes :", // 48
    "Si ces 3 conditions sont réunies, l'entreprise cliente bénéficie du droit de rétractation de quatorze (14) jours, étant entendu que le point de départ du délai de rétractation est le jour de la conclusion du contrat de prestations de service, ou de la réception des biens dans le cadre d'un contrat de vente de biens.", // 49
    "Les modalités de restriction, d'exercice du droit de rétraction ou de remboursement applicables aux clients consommateurs sont également applicables aux clients professionnels.", // 50
    // Art 7
    "7 — Prix et modalités de règlement",                                  // 51
    "7.1 Le prix",                                                         // 52
    "La rémunération d'EDUTECH FORMATIONS est déterminée contractuellement sur la base d'un devis préalablement fourni au client. La rémunération est due indépendamment des diligences accomplies par le client et du résultat des prestations réalisées, sauf stipulation contraire. Les prix sont établis en étant exonérés de TVA (TVA non applicable, art. 293 B du CGI).", // 53
    "En cas de paiement effectué par un Opérateur de compétences (OPCO), il appartient au client de faire la demande de prise en charge avant le début de la formation auprès de l'OPCO dont il dépend. Il lui appartient de se faire rembourser ces frais par l'OPCO. En cas de prise en charge partielle par l'OPCO, la différence sera directement facturée au client. A ce titre, le client est informé de ce que seules les heures de formation réellement suivies par le ou les participants, sont prises en charges par l'OPCO. Dès lors, les heures d'absence seront directement facturées au client. Si l'accord de prise en charge de l'OPCO ne parvient pas à EDUTECH FORMATIONS au premier jour de la formation, la totalité des frais de formation sera facturée au client. En cas de non règlement par l'OPCO du client, quelle qu'en soit la cause, la facture devient exigible auprès du client. Toute formation commencée est considérée comme due dans son intégralité.", // 54
    "7.2 Le règlement",                                                    // 55
    "De manière générale, les factures émises par EDUTECH FORMATIONS sont payables sans délai à échéance. Le règlement des factures s'effectue par virement.", // 56
    "7.3 Modalités de règlement spécifiques aux formations financées à titre individuel (par une personne physique n'ayant pas la personnalité morale)", // 57
    "Pour toute prestation de formation commandée, un acompte de 30 % devra être versé pour valider la prestation, conformément à l'article L6353-6 du code du travail.", // 58
    "Pour les formations financées à titre individuel (par une personne physique n'ayant pas la personnalité morale) aucun encaissement ne sera effectué avant l'expiration d'un délai de 10 jours à compter de la signature du contrat de formation.", // 59
    "7.4 Non paiements ou retards de paiement",                           // 60
    "Tout retard ou défaut de paiement entraînera de plein droit :",       // 61
    "7.5 Clause pénale",                                                   // 62
    "En cas de manquement persistant, cinq jours après la réception d'une mise en demeure préalable adressée par lettre recommandée avec accusé de réception restée sans effet, une indemnité égale à 15 % (quinze pourcent) des sommes dues, outre les intérêts légaux et les frais judiciaires éventuels, sera exigible du débiteur, sans préjudice de tous dommages et intérêts complémentaires pouvant être sollicités.", // 63
    // Art 8
    "8 — Formation : Règlement intérieur – Convocation – Report – Annulation", // 64
    "8.1 Règlement intérieur",                                             // 65
    "Toute inscription à une formation implique le respect par le participant du règlement intérieur applicable. Ce règlement sera porté à la connaissance du client et du ou des participants.", // 66
    "8.2 Convocation",                                                     // 67
    "Pour toute inscription validée à une formation, EDUTECH FORMATIONS s'engage à adresser au client un courrier de convocation rappelant la date, le lieu et les horaires de la prestation. Cette convocation sera adressée par mail à l'adresse mail fournie par le client. Le client doit s'assurer avoir communiqué des informations exactes et complètes tenant à son adresse mail.", // 68
    "EDUTECH FORMATIONS ne pourra être tenu responsable de la non-réception de la convocation n'étant pas de son fait ou justifiée par un cas de force majeure, et ce quel(s) qu'en soi(en)t le ou les destinataires chez le client. EDUTECH FORMATIONS ne pourra pas non plus être tenu responsable de l'absence du ou des participants à la formation. Il appartient au client de s'assurer de l'inscription de ses participants et de leur présence en formation.", // 69
    "8.3 Annulation, Absence, Report d'inscription",                       // 70
    "Les remplacements de participants sont admis à tout moment, sans frais sous réserve d'en informer par écrit EDUTECH FORMATIONS et de lui transmettre les noms et coordonnées du ou des remplaçants au plus tard la veille de la formation.", // 71
    "Toute annulation d'inscription doit être signalée par téléphone et confirmée par écrit, par courriel à l'adresse suivante : contact@edutechformation.com, devant intervenir plus de quatorze jours avant le début de la formation.", // 72
    "Sous réserve de l'exercice du droit de rétractation dans les conditions visées à la précédente clause, toute demande d'annulation intervenant moins de 14 jours avant le début de la formation donnera lieu à la facturation de la totalité de la prestation.", // 73
    "Toute formation à laquelle le participant ne s'est pas présenté ou n'a assisté que partiellement est due en totalité.", // 74
    "EDUTECH FORMATIONS se réserve la possibilité d'annuler toute formation en cas de manque de participants ou de problème technique ou logistique. Dans ce cas, les participants seront prévenus au moins une semaine avant le début du stage. Dans la mesure du possible, de nouvelles dates seront proposées. En l'absence de report possible, EDUTECH FORMATIONS remboursera les sommes versées concernant la prestation choisie.", // 75
    // Art 9
    "9 — Propriété intellectuelle",                                        // 76
    "Tous les éléments du site : contact@edutechformation.com sont et restent la propriété intellectuelle et exclusive de la société EDUTECH FORMATIONS. Personne n'est autorisé à reproduire, exploiter, ou utiliser à quelque titre que ce soit, même partiellement, des éléments du site qu'ils soient sous forme de photo, logo, visuel ou texte.", // 77
    "Le client et/ou le ou les participants à une formation s'interdisent d'utiliser le contenu des formations, les outils pédagogiques, et de manière générale de tous supports papiers ou numériques remis lors des formations et prestations.", // 78
    "Le client et/ou le ou les participants s'interdisent de former d'autres personnes que leur propre personnel et engagent leur responsabilité sur le fondement des articles L. 122-4 et L.335-2 et suivants du code de la propriété intellectuelle en cas de cession ou de communication des contenus non autorisée.", // 79
    "Toute reproduction, représentation, modification, publication, transmission, dénaturation, totale ou partielle des contenus de formations, outils pédagogiques et de tous supports papiers ou numériques remis à l'occasion d'une prestation commandée, sans accord de EDUTECH FORMATIONS sont strictement interdites, et ce quels que soient le procédé et le support utilisés.", // 80
    // Art 10
    "10 — Résiliation de l'engagement",                                   // 81
    "10.1 Résiliation à l'initiative d'EDUTECH FORMATIONS",               // 82
    "EDUTECH FORMATIONS pourra suspendre ou résilier de plein droit le contrat conclu avec le client, quinze jours après une mise en demeure adressée par LR/AR demeurée infructueuse, sans encourir ni pénalités ni toute autre sanction, dans les cas suivants :", // 83
    "La résiliation fondée sur l'un des motifs sus exposée est réputée être aux torts du client.", // 84
    "Si la résiliation du contrat intervient pour l'un des motifs exposés ci-dessus, le client devra verser à EDUTECH FORMATIONS les frais et rémunérations dus et à devoir à la date de la résiliation, outre la clause pénale mentionnée à l'article 7-5 des présentes CGV, sans préjudice des autres dommages et intérêts pouvant être réclamés.", // 85
    "10.2 Résiliation à l'initiative du client",                          // 86
    "Si la résiliation du contrat intervient à l'initiative du client sans manquement de la part de EDUTECH FORMATIONS, le client devra verser à EDUTECH FORMATIONS les frais et rémunérations dus et à devoir à la date de la résiliation, outre la clause pénale mentionnée à l'article 7-5 des présentes CGV, sans préjudice des autres dommages et intérêts pouvant être réclamés.", // 87
    "10.3 Résiliation pour force majeure",                                 // 88
    "La résiliation du contrat pourra également intervenir de plein droit pour force majeure 15 jours après réception d'une mise en demeure notifiée par lettre recommandée avec demande d'avis de réception ou tout acte extra judiciaire.", // 89
    // Art 11
    "11 — Force majeure",                                                  // 90
    "Les parties ne pourront en aucun cas être tenues pour responsables si la non-exécution ou le retard dans l'exécution de l'une quelconque de leurs obligations telles que décrites dans les présentes découle d'un cas de force majeure. La partie qui subit la force majeure devra en notifier la survenance sans délai à l'autre partie. Dans l'hypothèse d'un cas de force majeure, l'exécution des obligations des parties pourra être suspendue.", // 91
    "Les cas de force majeure ou de tout empêchement indépendant de la volonté de EDUTECH FORMATIONS entravant l'exécution de la prestation, notamment, la grève même partielle, l'incendie, l'inondation, la survenance d'une épidémie, l'interruption, ainsi que la cessation d'activité d'une des Parties autorisent EDUTECH FORMATIONS à suspendre, à annuler ou à prolonger dans le temps l'exécution des prestations sans recours possible en indemnisation à l'encontre de EDUTECH FORMATIONS.", // 92
    "De convention expresse, constitue un cas de force majeure, les événements indépendants de la volonté expresse des parties empêchant l'exécution normale du contrat souscrit, et notamment la cessation d'activité de l'une des parties et l'indisponibilité prolongée d'un homme clé (exemple : gestionnaire de la prestation – interlocuteur privilégié) pour des raisons indépendantes de sa volonté.", // 93
    // Art 12
    "12 — Responsabilités",                                               // 94
    "Considérant la nature des prestations réalisées, l'obligation d'EDUTECH FORMATIONS est une obligation de moyen.", // 95
    "Les informations données par EDUTECH FORMATIONS ne sont en aucun cas des conseils juridiques et ne sont en aucun cas destinées à se substituer aux conseils d'un professionnel du droit.", // 96
    "En tout état de cause, la responsabilité d'EDUTECH FORMATIONS est strictement limitée aux obligations expressément définies par le contrat. La responsabilité d'EDUTECH FORMATIONS ne pourra être engagée pour :", // 97
    "En cas de faute prouvée par le client, EDUTECH FORMATIONS ne sera tenu que de la réparation des conséquences pécuniaires des dommages directs du fait de l'exécution des prestations. En conséquence, EDUTECH FORMATIONS ne pourra en aucune circonstance encourir de responsabilité au titre des pertes ou dommages indirects ou imprévisibles du client ou des tiers.", // 98
    "Dans le cadre de son activité, EDUTECH FORMATIONS ne se substitue pas aux autres intervenants et au client lui-même lesquels nonobstant l'intervention d'EDUTECH FORMATIONS sont pleinement responsables des obligations qui leur incombent. Le client demeure seul responsable de la bonne application des conseils prodigués et de la méthodologie fournie. EDUTECH FORMATIONS ne saurait être tenu de quelque manière responsable à raison des fautes commises par d'autres intervenants ou du client lui-même.", // 99
    "Dans tous les cas, la responsabilité d'EDUTECH FORMATIONS, si elle est prouvée, sera limitée au montant de sa rémunération prévue ou due par le client ou à devoir telle que fixée au contrat.", // 100
    // Art 13
    "13 — Protection des données à caractère personnel",                   // 101
    "Chaque partie devra prendre toutes les mesures nécessaires pour veiller à tout moment au respect des dispositions légales et règlementaires relatives à la protection des données personnelles.", // 102
    "13.1 Collecte des données personnelles",                              // 103
    "Les données à caractère personnel qui peuvent être collectées sont les suivantes :", // 104
    "13.2 Utilisation des données personnelles",                           // 105
    "L'utilisation des données personnelles par EDUTECH FORMATIONS est limitée aux finalités suivantes :", // 106
    "13.3 Durée de conservation des données personnelles",                 // 107
    "Les données personnelles sont conservées pendant une durée qui ne saurait excéder cinq années sauf si :", // 108
    "Le client exerce son droit de suppression des données le concernant, dans les conditions décrites ci-après", // 109
    "Une durée de conservation plus longue est autorisée ou imposée en vertu d'une obligation légale ou règlementaire", // 110
    "Pendant cette période, EDUTECH FORMATIONS met en place tous moyens aptes à assurer la confidentialité et la sécurité des données personnelles, de manière à empêcher leur endommagement, effacement ou accès par des tiers non autorisées.", // 111
    "13.4 Partage des données personnelles à un tiers",                    // 112
    "L'accès à vos données personnelles est strictement limité aux intervenants et préposés d'EDUTECH FORMATIONS.", // 113
    "Les données personnelles peuvent être partagées avec des sociétés ou entités tierces ou des tiers, dans les cas suivants :", // 114
    "En dehors des cas énoncés ci-dessus, EDUTECH FORMATIONS s'engage à ne pas vendre, louer, céder ni donner accès à des tiers aux données des clients sans leur consentement préalable, à moins d'y être contraints en raison d'un motif légitime (obligation légale, lutte contre la fraude ou l'abus, exercice des droits de la défense, etc.)", // 115
    "13.5 Sécurité et confidentialité",                                    // 116
    "EDUTECH FORMATIONS met en œuvre des mesures organisationnelles, techniques, logicielles, et physiques en matière de sécurité numérique pour protéger les données personnelles de ses clients contre les altérations, destructions, et accès non autorisés.", // 117
    "13.6 Mise en œuvre des droits d'utilisateur",                        // 118
    "Conformément à la loi « informatique et libertés » du 6 janvier 1978 modifiée et au Règlement européen n°2016/679/UE du 27 avril 2016, le client bénéficie d'un droit d'accès, de rectification, de portabilité et d'effacement de ses données ou encore de limitation du traitement. Le client peut également, pour des motifs légitimes, s'opposer au traitement des données personnelles le concernant.", // 119
    "Sous réserve de la production d'un justificatif d'identité valide, le client peut exercer ses droits en contactant le Délégué à la protection des données ainsi désigné au sein d'EDUTECH FORMATIONS à l'adresse mail suivante : contact@edutechformation.com", // 120
    "Pour toute information complémentaire ou réclamation, le client peut contacter la Commission Nationale de l'Informatique et des Libertés (plus d'informations sur www.cnil.fr)", // 121
    "Le consommateur est informé de l'existence de la liste d'opposition au démarchage téléphonique « Bloctel », sur laquelle il peut s'inscrire (https://conso.bloctel.fr/).", // 122
    "13.7 Evolution de la présente clause",                                // 123
    "EDUTECH FORMATIONS se réserve le droit d'apporter à tout moment toute modification à la présente clause relative à la protection des données à caractère personnel à tout moment. Les modifications entreront en vigueur dès leur publication sur le site et seront opposables à tout nouveau contrat conclu après cette publication.", // 124
    // Art 14
    "14 — Intégrité du Contrat",                                          // 125
    "Les présentes CGV et le devis accepté par le client forment un ensemble contractuel et constituent l'intégralité des relations contractuelles intervenues entre les parties. Toute clause ou document antérieur ou complémentaire, non expressément accepté par EDUTECH FORMATIONS, est réputé non écrit.", // 126
    // Art 15
    "15 — Litige – Juridiction compétente – Médiation",                   // 127
    "15.1 Litige – Loi applicable – Juridiction compétente",              // 128
    "Le présent contrat est soumis à la loi française.",                   // 129
    "En cas de litige avec des professionnels, les juridictions d'ASNIÈRES-SUR-SEINE (France) seront compétentes, nonobstant appel en garantie ou pluralité de défendeurs même pour les procédures d'urgence ou les procédures conservatoires ou par requête.", // 130
    "En cas de litige avec des consommateurs, les tribunaux français seront seuls compétents selon les règles en vigueur. Pour la définition de la juridiction compétente, EDUTECH FORMATIONS élit domicile à l'adresse de son siège social.", // 131
    "15.2 Médiation",                                                      // 132
    "En cas de réclamation non résolue amiablement et conformément à l'article L612-1 du Code de la Consommation, le Client peut recourir gratuitement au service de médiation de l'association nationale des médiateurs, en ligne à l'adresse https://www.anm-conso.com/ ou par voie postale : ANM Conso – 62, rue Tiquetonne – 75002 PARIS. Le Service du médiateur peut être saisi pour tout litige de consommation dont le règlement n'aurait pas abouti.", // 133
    // Annexe
    "Annexe 1 : Modèle de formulaire de rétractation",                    // 134
    "(Complétez et renvoyez le présent formulaire uniquement si vous souhaitez vous rétracter du contrat. Nous vous conseillons de préciser également votre numéro de devis)", // 135
    "À l'attention de EDUTECH FORMATIONS – 52 Rue Montesquieu – 92600 ASNIÈRES-SUR-SEINE – Contact : M. Olivier GIL", // 136
    "Je/nous (*) vous notifie/notifions (*) par la présente ma/notre (*) rétractation du contrat portant sur le ou les prestations tels que décrites (*) ci-dessous :", // 137
    "Commandé le (*) / Ayant fait l'objet d'un devis le (*) :", // 138
    "Nom du (des) consommateur(s) :", // 139
    "Adresse du (des) consommateur(s) :", // 140
    "Signature du (des) consommateur(s) – Date :", // 141
    "(*) Rayez la mention inutile.",  // 142
    "Pour tout renseignement, vous pouvez contacter le Service Clients à contact@edutechformation.com ou par téléphone au 06 33 24 77 64.", // 143
  ], []);

  const allDynamic = useMemo(
    () => [
      ...staticStrings,
      ...a3_1_general, ...a3_1_formation,
      ...a4_1_respect, ...a4_1_engage, ...a4_2_engage,
      ...a6_2_conditions, ...a7_4_consequences, ...a10_1_motifs,
      ...a12_nonResp, ...a13_1_data, ...a13_2_finalites, ...a13_4_partage,
    ],
    [staticStrings, a3_1_general, a3_1_formation, a4_1_respect, a4_1_engage,
     a4_2_engage, a6_2_conditions, a7_4_consequences, a10_1_motifs,
     a12_nonResp, a13_1_data, a13_2_finalites, a13_4_partage]
  );
  const [translated] = useTranslatedContent(allDynamic);

  const sl = staticStrings.length;
  const l0 = a3_1_general.length;
  const l1 = a3_1_formation.length;
  const l2 = a4_1_respect.length;
  const l3 = a4_1_engage.length;
  const l4 = a4_2_engage.length;
  const l5 = a6_2_conditions.length;
  const l6 = a7_4_consequences.length;
  const l7 = a10_1_motifs.length;
  const l8 = a12_nonResp.length;
  const l9 = a13_1_data.length;
  const l10 = a13_2_finalites.length;

  const ts = (i: number) => translated[i] || staticStrings[i];
  const tList = (arr: string[], offset: number) =>
    arr.map((s, i) => translated[sl + offset + i] || s);

  const tA3_1_gen   = tList(a3_1_general,    0);
  const tA3_1_form  = tList(a3_1_formation,  l0);
  const tA4_1_resp  = tList(a4_1_respect,    l0+l1);
  const tA4_1_eng   = tList(a4_1_engage,     l0+l1+l2);
  const tA4_2       = tList(a4_2_engage,     l0+l1+l2+l3);
  const tA6_2       = tList(a6_2_conditions, l0+l1+l2+l3+l4);
  const tA7_4       = tList(a7_4_consequences,l0+l1+l2+l3+l4+l5);
  const tA10_1      = tList(a10_1_motifs,    l0+l1+l2+l3+l4+l5+l6);
  const tA12        = tList(a12_nonResp,     l0+l1+l2+l3+l4+l5+l6+l7);
  const tA13_1      = tList(a13_1_data,      l0+l1+l2+l3+l4+l5+l6+l7+l8);
  const tA13_2      = tList(a13_2_finalites, l0+l1+l2+l3+l4+l5+l6+l7+l8+l9);
  const tA13_4      = tList(a13_4_partage,   l0+l1+l2+l3+l4+l5+l6+l7+l8+l9+l10);

  const h2 = 'text-xl font-bold mb-3 text-gray-900';
  const h3 = 'text-base font-semibold mb-2 text-gray-800';
  const p  = 'text-gray-700 leading-relaxed text-justify hyphens-auto mb-3';
  const li = 'flex items-start gap-2';
  const bullet = 'text-primary mt-1 flex-shrink-0';
  const sec = 'mb-8';

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      <section className="bg-gradient-to-r from-primary via-teal-700 to-teal-900 text-white py-16 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">{ts(0)}</h1>
          <p className="text-xl text-teal-100">{ts(1)}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">

            {/* Art 1 */}
            <div className={sec}>
              <h2 className={h2}>{ts(2)}</h2>
              <p className={p}>{ts(3)}</p>
              <p className={p}>{ts(4)}</p>
            </div>

            {/* Art 2 */}
            <div className={sec}>
              <h2 className={h2}>{ts(5)}</h2>
              <p className={p}>{ts(6)}</p>
              <p className={p}>{ts(7)}</p>
              <p className={p}>{ts(8)}</p>
              <p className={p}>{ts(9)}</p>
              <p className={p}>{ts(10)}</p>
              <p className={p}>{ts(11)}</p>
              <p className={p}>{ts(12)}</p>
            </div>

            {/* Art 3 */}
            <div className={sec}>
              <h2 className={h2}>{ts(13)}</h2>
              <h3 className={h3}>{ts(14)}</h3>
              <p className={p}>{ts(15)}</p>
              <p className={p}>{ts(16)}</p>
              <p className="text-gray-700 mb-2">{ts(17)}</p>
              <ul className="space-y-1 mb-3 ml-4">
                {tA3_1_gen.map((item, i) => (
                  <li key={i} className={li}>
                    <span className={bullet}>•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-700 mb-2">{ts(18)}</p>
              <ul className="space-y-1 mb-4 ml-4">
                {tA3_1_form.map((item, i) => (
                  <li key={i} className={li}>
                    <span className={bullet}>•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <h3 className={h3}>{ts(19)}</h3>
              <p className={p}>{ts(20)}</p>
              <p className={p}>{ts(21)}</p>
              <h3 className={h3}>{ts(22)}</h3>
              <p className={p}>{ts(23)}</p>
              <p className={p}>{ts(24)}</p>
              <h3 className={h3}>{ts(25)}</h3>
              <p className={p}>{ts(26)}</p>
              <p className={p}>{ts(27)}</p>
              <p className={p}>{ts(28)}</p>
            </div>

            {/* Art 4 */}
            <div className={sec}>
              <h2 className={h2}>{ts(29)}</h2>
              <h3 className={h3}>{ts(30)}</h3>
              <p className="text-gray-700 mb-2">{ts(31)}</p>
              <ul className="space-y-1 mb-3 ml-4">
                {tA4_1_resp.map((item, i) => (
                  <li key={i} className={li}>
                    <span className={bullet}>•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-700 mb-2">{ts(32)}</p>
              <ul className="space-y-1 mb-4 ml-4">
                {tA4_1_eng.map((item, i) => (
                  <li key={i} className={li}>
                    <span className={bullet}>•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <h3 className={h3}>{ts(33)}</h3>
              <p className="text-gray-700 mb-2">{ts(34)}</p>
              <ul className="space-y-1 ml-4">
                {tA4_2.map((item, i) => (
                  <li key={i} className={li}>
                    <span className={bullet}>•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Art 5 */}
            <div className={sec}>
              <h2 className={h2}>{ts(35)}</h2>
              <h3 className={h3}>{ts(36)}</h3>
              <p className={p}>{ts(37)}</p>
              <p className={p}>{ts(38)}</p>
              <h3 className={h3}>{ts(39)}</h3>
              <p className={p}>{ts(40)}</p>
            </div>

            {/* Art 6 */}
            <div className={sec}>
              <h2 className={h2}>{ts(41)}</h2>
              <h3 className={h3}>{ts(42)}</h3>
              <p className={p}>{ts(43)}</p>
              <p className={p}>{ts(44)}</p>
              <p className={p}>{ts(45)}</p>
              <p className={p}>{ts(46)}</p>
              <h3 className={h3}>{ts(47)}</h3>
              <p className="text-gray-700 mb-2">{ts(48)}</p>
              <ul className="space-y-1 mb-3 ml-4">
                {tA6_2.map((item, i) => (
                  <li key={i} className={li}>
                    <span className={bullet}>•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className={p}>{ts(49)}</p>
              <p className={p}>{ts(50)}</p>
            </div>

            {/* Art 7 */}
            <div className={sec}>
              <h2 className={h2}>{ts(51)}</h2>
              <h3 className={h3}>{ts(52)}</h3>
              <p className={p}>{ts(53)}</p>
              <p className={p}>{ts(54)}</p>
              <h3 className={h3}>{ts(55)}</h3>
              <p className={p}>{ts(56)}</p>
              <h3 className={h3}>{ts(57)}</h3>
              <p className={p}>{ts(58)}</p>
              <p className={p}>{ts(59)}</p>
              <h3 className={h3}>{ts(60)}</h3>
              <p className="text-gray-700 mb-2">{ts(61)}</p>
              <ul className="space-y-1 mb-3 ml-4">
                {tA7_4.map((item, i) => (
                  <li key={i} className={li}>
                    <span className={bullet}>•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <h3 className={h3}>{ts(62)}</h3>
              <p className={p}>{ts(63)}</p>
            </div>

            {/* Art 8 */}
            <div className={sec}>
              <h2 className={h2}>{ts(64)}</h2>
              <h3 className={h3}>{ts(65)}</h3>
              <p className={p}>{ts(66)}</p>
              <h3 className={h3}>{ts(67)}</h3>
              <p className={p}>{ts(68)}</p>
              <p className={p}>{ts(69)}</p>
              <h3 className={h3}>{ts(70)}</h3>
              <p className={p}>{ts(71)}</p>
              <p className={p}>{ts(72)}</p>
              <p className={p}>{ts(73)}</p>
              <p className={p}>{ts(74)}</p>
              <p className={p}>{ts(75)}</p>
            </div>

            {/* Art 9 */}
            <div className={sec}>
              <h2 className={h2}>{ts(76)}</h2>
              <p className={p}>{ts(77)}</p>
              <p className={p}>{ts(78)}</p>
              <p className={p}>{ts(79)}</p>
              <p className={p}>{ts(80)}</p>
            </div>

            {/* Art 10 */}
            <div className={sec}>
              <h2 className={h2}>{ts(81)}</h2>
              <h3 className={h3}>{ts(82)}</h3>
              <p className="text-gray-700 mb-2">{ts(83)}</p>
              <ul className="space-y-1 mb-3 ml-4">
                {tA10_1.map((item, i) => (
                  <li key={i} className={li}>
                    <span className={bullet}>•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className={p}>{ts(84)}</p>
              <p className={p}>{ts(85)}</p>
              <h3 className={h3}>{ts(86)}</h3>
              <p className={p}>{ts(87)}</p>
              <h3 className={h3}>{ts(88)}</h3>
              <p className={p}>{ts(89)}</p>
            </div>

            {/* Art 11 */}
            <div className={sec}>
              <h2 className={h2}>{ts(90)}</h2>
              <p className={p}>{ts(91)}</p>
              <p className={p}>{ts(92)}</p>
              <p className={p}>{ts(93)}</p>
            </div>

            {/* Art 12 */}
            <div className={sec}>
              <h2 className={h2}>{ts(94)}</h2>
              <p className={p}>{ts(95)}</p>
              <p className={p}>{ts(96)}</p>
              <p className="text-gray-700 mb-2">{ts(97)}</p>
              <ul className="space-y-1 mb-3 ml-4">
                {tA12.map((item, i) => (
                  <li key={i} className={li}>
                    <span className={bullet}>•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className={p}>{ts(98)}</p>
              <p className={p}>{ts(99)}</p>
              <p className={p}>{ts(100)}</p>
            </div>

            {/* Art 13 */}
            <div className={sec}>
              <h2 className={h2}>{ts(101)}</h2>
              <p className={p}>{ts(102)}</p>
              <h3 className={h3}>{ts(103)}</h3>
              <p className="text-gray-700 mb-2">{ts(104)}</p>
              <ul className="space-y-1 mb-3 ml-4">
                {tA13_1.map((item, i) => (
                  <li key={i} className={li}>
                    <span className={bullet}>•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <h3 className={h3}>{ts(105)}</h3>
              <p className="text-gray-700 mb-2">{ts(106)}</p>
              <ul className="space-y-1 mb-3 ml-4">
                {tA13_2.map((item, i) => (
                  <li key={i} className={li}>
                    <span className={bullet}>•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <h3 className={h3}>{ts(107)}</h3>
              <p className="text-gray-700 mb-2">{ts(108)}</p>
              <ul className="space-y-1 mb-3 ml-4">
                <li className={li}><span className={bullet}>•</span><span className="text-gray-700">{ts(109)}</span></li>
                <li className={li}><span className={bullet}>•</span><span className="text-gray-700">{ts(110)}</span></li>
              </ul>
              <p className={p}>{ts(111)}</p>
              <h3 className={h3}>{ts(112)}</h3>
              <p className={p}>{ts(113)}</p>
              <p className="text-gray-700 mb-2">{ts(114)}</p>
              <ul className="space-y-1 mb-3 ml-4">
                {tA13_4.map((item, i) => (
                  <li key={i} className={li}>
                    <span className={bullet}>•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className={p}>{ts(115)}</p>
              <h3 className={h3}>{ts(116)}</h3>
              <p className={p}>{ts(117)}</p>
              <h3 className={h3}>{ts(118)}</h3>
              <p className={p}>{ts(119)}</p>
              <p className={p}>{ts(120)}</p>
              <p className={p}>{ts(121)}</p>
              <p className={p}>{ts(122)}</p>
              <h3 className={h3}>{ts(123)}</h3>
              <p className={p}>{ts(124)}</p>
            </div>

            {/* Art 14 */}
            <div className={sec}>
              <h2 className={h2}>{ts(125)}</h2>
              <p className={p}>{ts(126)}</p>
            </div>

            {/* Art 15 */}
            <div className={sec}>
              <h2 className={h2}>{ts(127)}</h2>
              <h3 className={h3}>{ts(128)}</h3>
              <p className={p}>{ts(129)}</p>
              <p className={p}>{ts(130)}</p>
              <p className={p}>{ts(131)}</p>
              <h3 className={h3}>{ts(132)}</h3>
              <p className={p}>{ts(133)}</p>
            </div>

            {/* Annexe 1 */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h2 className={h2}>{ts(134)}</h2>
              <p className="text-sm text-gray-500 italic mb-4">{ts(135)}</p>
              <div className="bg-gray-50 rounded-xl p-6 space-y-3 text-gray-700 text-sm">
                <p>{ts(136)}</p>
                <p>{ts(137)}</p>
                <div className="space-y-2">
                  <p className="border-b border-dashed border-gray-300 pb-2">{ts(138)}</p>
                  <p className="border-b border-dashed border-gray-300 pb-2">{ts(139)}</p>
                  <p className="border-b border-dashed border-gray-300 pb-2">{ts(140)}</p>
                  <p className="border-b border-dashed border-gray-300 pb-2">{ts(141)}</p>
                </div>
                <p className="text-xs text-gray-500 italic">{ts(142)}</p>
                <p>{ts(143)}</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
