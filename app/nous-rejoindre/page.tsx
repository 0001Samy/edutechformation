'use client';

import {
  Users,
  CheckCircle,
  Send,
  ArrowRight,
  Sparkles,
  Paperclip,
} from 'lucide-react';
import { useState, useRef } from 'react';

export default function NousRejoindre() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    domaines: '',
    presentation: '',
  });
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setCvFile(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('domaines', formData.domaines);
    data.append('presentation', formData.presentation);
    if (cvFile) data.append('cv', cvFile);

    try {
      const res = await fetch('/api/nous-rejoindre', {
        method: 'POST',
        body: data,
      });
      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(json.error || "Échec de l'envoi");
      }
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', domaines: '', presentation: '' });
      setCvFile(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Erreur inconnue');
    }
  };

  const atouts = [
    'Intégrer un organisme de formation en développement',
    'Intervenir auprès de publics variés',
    "Bénéficier d'un cadre structuré et d'un accompagnement pédagogique",
    'Participer à des projets de formation concrets et utiles',
  ];

  const profil = [
    "Expérience professionnelle significative dans votre domaine d'expertise",
    "Capacité à transmettre de manière claire et structurée",
    "Compétences pédagogiques et goût pour l'animation",
    "Autonomie, rigueur et sens de l'adaptation",
    "Statut d'indépendant",
    "Être titulaire d'un numéro de déclaration d'activité (NDA)",
  ];

  return (
    <div className='bg-gradient-to-b from-gray-50 to-white'>
      {/* Hero */}
      <section className='relative bg-gradient-to-br from-primary via-teal-600 to-teal-800 text-white py-24 overflow-hidden'>
        <div className='absolute inset-0 opacity-10'>
          <div className='absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl'></div>
          <div className='absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl'></div>
        </div>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <h1 className='text-5xl md:text-6xl font-bold mb-6'>
            Rejoignez notre réseau
          </h1>
          <p className='text-xl md:text-2xl text-teal-50 max-w-2xl'>
            Devenez formateur indépendant partenaire d'Edutech Formations.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className='py-16'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <p className='text-lg text-gray-700 leading-relaxed text-justify hyphens-auto mb-4'>
            Edutech Formations développe régulièrement son réseau de formateurs indépendants afin de répondre aux besoins de ses clients et d'accompagner la montée en compétences des professionnels.
          </p>
          <p className='text-lg text-gray-700 leading-relaxed text-justify hyphens-auto'>
            Nous recherchons des intervenants capables de concevoir et d'animer des formations concrètes, opérationnelles et adaptées aux réalités du terrain.
          </p>
        </div>
      </section>

      {/* Votre rôle + Profil */}
      <section className='py-12 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
            <div>
              <div className='flex items-center gap-3 mb-5'>
                <div className='w-12 h-12 bg-gradient-to-br from-primary to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0'>
                  <Users className='text-white' size={24} />
                </div>
                <h2 className='text-2xl font-bold'>Votre rôle</h2>
              </div>
              <ul className='space-y-3'>
                {[
                  'Concevoir et adapter des contenus pédagogiques en fonction des objectifs définis',
                  'Animer des sessions de formation en présentiel sur site ou à distance en visioconférence',
                  "Favoriser l'engagement des participants et la mise en pratique",
                  'Évaluer les acquis et accompagner la progression des apprenants',
                ].map((item, i) => (
                  <li key={i} className='flex items-start gap-3'>
                    <CheckCircle className='text-primary flex-shrink-0 mt-0.5' size={18} />
                    <span className='text-gray-700'>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className='flex items-center gap-3 mb-5'>
                <div className='w-12 h-12 bg-gradient-to-br from-primary to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0'>
                  <Sparkles className='text-white' size={24} />
                </div>
                <h2 className='text-2xl font-bold'>Profil recherché</h2>
              </div>
              <ul className='space-y-3'>
                {profil.map((item, i) => (
                  <li key={i} className='flex items-start gap-3'>
                    <CheckCircle className='text-primary flex-shrink-0 mt-0.5' size={18} />
                    <span className='text-gray-700'>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi nous rejoindre */}
      <section className='py-12'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold mb-6'>Pourquoi nous rejoindre ?</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            {atouts.map((item, i) => (
              <div key={i} className='flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100'>
                <ArrowRight className='text-primary flex-shrink-0 mt-0.5' size={18} />
                <span className='text-gray-700'>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modalités */}
      <section className='py-12 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold mb-4'>Modalités de collaboration</h2>
          <p className='text-gray-700 leading-relaxed text-justify hyphens-auto'>
            Les interventions sont réalisées en tant que formateur indépendant, en présentiel sur site ou à distance en visioconférence, selon les besoins des missions. Chaque collaboration fait l'objet d'un cadrage précis (objectifs, contenus, modalités d'intervention).
          </p>
        </div>
      </section>

      {/* Formulaire de candidature */}
      <section className='py-20'>
        <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='bg-white rounded-2xl shadow-xl p-8 md:p-10'>
            <h2 className='text-3xl font-bold mb-2'>Candidater</h2>
            <p className='text-gray-600 mb-8'>
              Transmettez-nous votre candidature avec votre CV et la présentation de vos domaines d'intervention.
            </p>

            <form onSubmit={handleSubmit} className='space-y-6'>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                <div>
                  <label htmlFor='name' className='block text-sm font-medium text-gray-700 mb-2'>
                    Nom complet *
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent'
                  />
                </div>
                <div>
                  <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-2'>
                    Email *
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent'
                  />
                </div>
              </div>

              <div>
                <label htmlFor='phone' className='block text-sm font-medium text-gray-700 mb-2'>
                  Téléphone
                </label>
                <input
                  type='tel'
                  id='phone'
                  name='phone'
                  value={formData.phone}
                  onChange={handleChange}
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent'
                />
              </div>

              <div>
                <label htmlFor='domaines' className='block text-sm font-medium text-gray-700 mb-2'>
                  Domaines d'intervention *
                </label>
                <textarea
                  id='domaines'
                  name='domaines'
                  required
                  rows={3}
                  placeholder='Ex : Droit du travail, Médiation, Intelligence artificielle…'
                  value={formData.domaines}
                  onChange={handleChange}
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none'
                />
              </div>

              <div>
                <label htmlFor='presentation' className='block text-sm font-medium text-gray-700 mb-2'>
                  Présentation *
                </label>
                <textarea
                  id='presentation'
                  name='presentation'
                  required
                  rows={5}
                  placeholder='Présentez votre parcours, vos expériences en formation et votre approche pédagogique…'
                  value={formData.presentation}
                  onChange={handleChange}
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent'
                />
              </div>

              {/* CV Upload */}
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  CV (PDF ou Word, 5 Mo max)
                </label>
                <div
                  className='relative flex items-center gap-3 px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary transition-colors cursor-pointer'
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Paperclip className='text-gray-400' size={20} />
                  <span className='text-gray-500 text-sm'>
                    {cvFile ? cvFile.name : 'Cliquer pour joindre votre CV…'}
                  </span>
                  <input
                    ref={fileInputRef}
                    type='file'
                    id='cv'
                    name='cv'
                    accept='.pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document'
                    onChange={handleFileChange}
                    className='sr-only'
                  />
                </div>
                {cvFile && (
                  <button
                    type='button'
                    onClick={() => {
                      setCvFile(null);
                      if (fileInputRef.current) fileInputRef.current.value = '';
                    }}
                    className='mt-1 text-xs text-red-500 hover:underline'
                  >
                    Supprimer le fichier
                  </button>
                )}
              </div>

              <button
                type='submit'
                disabled={status === 'sending'}
                className='w-full bg-gradient-to-r from-primary to-teal-600 text-white px-6 py-4 rounded-xl font-semibold hover:shadow-lg transition-all hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100'
              >
                {status === 'sending' ? 'Envoi en cours...' : 'Envoyer ma candidature'}
                <Send size={20} />
              </button>

              {status === 'success' && (
                <p className='text-green-700 bg-green-50 border border-green-200 rounded-lg px-4 py-3 text-sm'>
                  Candidature envoyée ! Nous vous contacterons dans les meilleurs délais.
                </p>
              )}
              {status === 'error' && (
                <p className='text-red-700 bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm'>
                  {errorMessage || "Une erreur est survenue lors de l'envoi. Veuillez réessayer."}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
