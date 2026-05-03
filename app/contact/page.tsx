'use client';

import { Mail, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from '@/lib/i18n/LanguageContext';

export default function ContactPage() {
  const t = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Échec de l'envoi");
      }
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Erreur inconnue');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className='bg-gradient-to-b from-gray-50 to-white'>
      <section className='relative bg-gradient-to-br from-primary via-teal-600 to-teal-800 text-white py-24 overflow-hidden'>
        <div className='absolute inset-0 opacity-10'>
          <div className='absolute top-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl'></div>
        </div>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <h1 className='text-5xl md:text-6xl font-bold mb-6'>
            {t.contact.heroTitle}
          </h1>
          <p className='text-xl md:text-2xl text-teal-50 max-w-2xl'>
            {t.contact.heroSubtitle}
          </p>
        </div>
      </section>

      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            {/* Contact Form */}
            <div className='bg-white rounded-2xl shadow-xl p-8 md:p-10'>
              <h2 className='text-3xl font-bold mb-6'>{t.contact.formTitle}</h2>
              <form onSubmit={handleSubmit} className='space-y-6'>
                <div>
                  <label
                    htmlFor='name'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    {t.contact.labelName}
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
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    {t.contact.labelEmail}
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

                <div>
                  <label
                    htmlFor='phone'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    {t.contact.labelPhone}
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
                  <label
                    htmlFor='subject'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    {t.contact.labelSubject}
                  </label>
                  <select
                    id='subject'
                    name='subject'
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent'
                  >
                    <option value=''>{t.contact.subjectSelect}</option>
                    <option value='info'>{t.contact.subjectInfo}</option>
                    <option value='inscription'>{t.contact.subjectRegistration}</option>
                    <option value='financement'>{t.contact.subjectFinancing}</option>
                    <option value='technique'>{t.contact.subjectTechnical}</option>
                    <option value='autre'>{t.contact.subjectOther}</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor='message'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    {t.contact.labelMessage}
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent'
                  />
                </div>

                <button
                  type='submit'
                  disabled={status === 'sending'}
                  className='w-full bg-gradient-to-r from-primary to-teal-600 text-white px-6 py-4 rounded-xl font-semibold hover:shadow-lg transition-all hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100'
                >
                  {status === 'sending' ? t.contact.sending : t.contact.sendButton}
                  <Send size={20} />
                </button>

                {status === 'success' && (
                  <p className='text-green-700 bg-green-50 border border-green-200 rounded-lg px-4 py-3 text-sm'>
                    {t.contact.messageSent}
                  </p>
                )}
                {status === 'error' && (
                  <p className='text-red-700 bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm'>
                    {errorMessage || t.contact.messageError}
                  </p>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <div className='bg-white rounded-2xl shadow-xl p-8 md:p-10 mb-8'>
                <h2 className='text-3xl font-bold mb-8'>
                  {t.contact.coordinatesTitle}
                </h2>
                <div className='space-y-6'>
                  <div className='flex items-start gap-4 group'>
                    <div className='w-14 h-14 bg-gradient-to-br from-primary to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-md'>
                      <Mail className='text-white' size={24} />
                    </div>
                    <div>
                      <h3 className='font-semibold mb-1'>{t.contact.emailLabel}</h3>
                      <a
                        href='mailto:contact@edutechformations.com'
                        className='text-primary hover:underline'
                      >
                        contact@edutechformations.com
                      </a>
                    </div>
                  </div>

                  <div className='flex items-start gap-4 group'>
                    <div className='w-14 h-14 bg-gradient-to-br from-primary to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-md'>
                      <Phone className='text-white' size={24} />
                    </div>
                    <div>
                      <h3 className='font-semibold mb-1'>{t.contact.phoneLabel}</h3>
                      <a
                        href='tel:+33633247764'
                        className='text-primary hover:underline'
                      >
                        +33 6 33 24 77 64
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className='bg-gradient-to-br from-primary to-teal-700 text-white rounded-2xl p-8 shadow-xl'>
                <h3 className='text-2xl font-bold mb-6'>
                  {t.contact.openingHoursTitle}
                </h3>
                <div className='space-y-3'>
                  <div className='flex justify-between'>
                    <span>{t.contact.monFri}</span>
                    <span className='font-semibold'>9h00 - 18h00</span>
                  </div>
                  <div className='flex justify-between'>
                    <span>
                      {t.contact.sat} - {t.contact.sun}
                    </span>
                    <span className='font-semibold'>{t.contact.closed}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
