import { useState } from 'react';

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        setFormStatus('success');
        e.currentTarget.reset();
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <section className="py-20 bg-bg-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-deep mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-text-dark/70">
            We're here to answer your questions and schedule your appointment
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-brand-deep mb-6">Get In Touch</h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="text-brand-medium text-2xl mr-4">📍</div>
                <div>
                  <h3 className="font-semibold text-text-dark mb-1">Address</h3>
                  <p className="text-text-dark/70">
                    [Your Street Address]<br />
                    [City, State ZIP]
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-brand-medium text-2xl mr-4">📞</div>
                <div>
                  <h3 className="font-semibold text-text-dark mb-1">Phone</h3>
                  <p className="text-text-dark/70">[Your Phone Number]</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-brand-medium text-2xl mr-4">✉️</div>
                <div>
                  <h3 className="font-semibold text-text-dark mb-1">Email</h3>
                  <p className="text-text-dark/70">[Your Email]</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-brand-medium text-2xl mr-4">🕐</div>
                <div>
                  <h3 className="font-semibold text-text-dark mb-1">Office Hours</h3>
                  <p className="text-text-dark/70">
                    Monday - Friday: 8:00 AM - 5:00 PM<br />
                    Saturday: By Appointment<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="mt-8 bg-bg-off-white h-64 rounded-lg flex items-center justify-center border border-brand-light/20">
              <p className="text-text-dark/50">Map will be displayed here</p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-brand-deep mb-6">Send Us a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Replace with your actual Web3Forms access key */}
              <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-dark mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-brand-light/30 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-medium focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-dark mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-brand-light/30 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-medium focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-text-dark mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-brand-light/30 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-medium focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-dark mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-brand-light/30 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-medium focus:border-transparent resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full bg-brand-deep text-white px-8 py-3 rounded-md font-semibold hover:bg-brand-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>

              {formStatus === 'success' && (
                <p className="text-green-600 text-center">Thank you! Your message has been sent successfully.</p>
              )}

              {formStatus === 'error' && (
                <p className="text-red-600 text-center">Sorry, there was an error sending your message. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
