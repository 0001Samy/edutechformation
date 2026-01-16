'use client';

import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Message envoyé ! Nous vous répondrons dans les plus brefs délais.');
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
      <section className='relative bg-gradient-to-br from-primary via-purple-600 to-purple-800 text-white py-24 overflow-hidden'>
        <div className='absolute inset-0 opacity-10'>
          <div className='absolute top-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl'></div>
        </div>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <h1 className='text-5xl md:text-6xl font-bold mb-6'>
            Contactez-nous
          </h1>
          <p className='text-xl md:text-2xl text-purple-50 max-w-2xl'>
            Une question ? Besoin d'informations ? Notre équipe est là pour vous
            accompagner
          </p>
        </div>
      </section>

      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            {/* Contact Form */}
            <div className='bg-white rounded-2xl shadow-xl p-8 md:p-10'>
              <h2 className='text-3xl font-bold mb-6'>
                Envoyez-nous un message
              </h2>
              <form onSubmit={handleSubmit} className='space-y-6'>
                <div>
                  <label
                    htmlFor='name'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
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
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
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

                <div>
                  <label
                    htmlFor='phone'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
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
                  <label
                    htmlFor='subject'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Sujet *
                  </label>
                  <select
                    id='subject'
                    name='subject'
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent'
                  >
                    <option value=''>Sélectionnez un sujet</option>
                    <option value='info'>Demande d'information</option>
                    <option value='inscription'>
                      Inscription à une formation
                    </option>
                    <option value='financement'>
                      Question sur le financement
                    </option>
                    <option value='technique'>Support technique</option>
                    <option value='autre'>Autre</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor='message'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Message *
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
                  className='w-full bg-gradient-to-r from-primary to-purple-600 text-white px-6 py-4 rounded-xl font-semibold hover:shadow-lg transition-all hover:scale-[1.02] flex items-center justify-center gap-2'
                >
                  Envoyer le message
                  <Send size={20} />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <div className='bg-white rounded-2xl shadow-xl p-8 md:p-10 mb-8'>
                <h2 className='text-3xl font-bold mb-8'>Nos coordonnées</h2>
                <div className='space-y-6'>
                  <div className='flex items-start gap-4 group'>
                    <div className='w-14 h-14 bg-gradient-to-br from-primary to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-md'>
                      <Mail className='text-white' size={24} />
                    </div>
                    <div>
                      <h3 className='font-semibold mb-1'>Email</h3>
                      <a
                        href='mailto:edutech.formations@gmail.com'
                        className='text-primary hover:underline'
                      >
                        edutech.formations@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className='flex items-start gap-4 group'>
                    <div className='w-14 h-14 bg-gradient-to-br from-primary to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-md'>
                      <Phone className='text-white' size={24} />
                    </div>
                    <div>
                      <h3 className='font-semibold mb-1'>Téléphone</h3>
                      <a
                        href='tel:+33662091892'
                        className='text-primary hover:underline'
                      >
                        +33 6 62 09 18 92
                      </a>
                      <p className='text-sm text-gray-600 mt-1'>
                        Lun - Ven : 9h00 - 18h00
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start gap-4 group'>
                    <div className='w-14 h-14 bg-gradient-to-br from-primary to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-md'>
                      <MapPin className='text-white' size={24} />
                    </div>
                    <div>
                      <h3 className='font-semibold mb-1'>Adresse</h3>
                      <p className='text-gray-700'>
                        123 Avenue de la République
                        <br />
                        75011 Paris, France
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='bg-gradient-to-br from-primary to-purple-700 text-white rounded-2xl p-8 shadow-xl'>
                <h3 className='text-2xl font-bold mb-6'>
                  Horaires d'ouverture
                </h3>
                <div className='space-y-3'>
                  <div className='flex justify-between'>
                    <span>Lundi - Vendredi</span>
                    <span className='font-semibold'>9h00 - 18h00</span>
                  </div>
                  <div className='flex justify-between'>
                    <span>Samedi</span>
                    <span className='font-semibold'>10h00 - 16h00</span>
                  </div>
                  <div className='flex justify-between'>
                    <span>Dimanche</span>
                    <span className='font-semibold'>Fermé</span>
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
