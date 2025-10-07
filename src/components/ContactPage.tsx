import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import businessInfo from '../data/businessInfo.json';
import Button from './Button';

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
    <section className="py-16 bg-bg-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-deep mb-4 text-center" style={{ fontFamily: 'var(--font-family-display)' }}>
          Contact Us
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We're here to answer your questions and schedule your appointment
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-brand-deep mb-6">Get In Touch</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="text-brand-medium mr-4 mt-1">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Address</h4>
                  <p className="text-gray-600">
                    {businessInfo.address.street}<br />
                    {businessInfo.address.city}, {businessInfo.address.state} {businessInfo.address.zip}
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-brand-medium mr-4 mt-1">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                  <p className="text-gray-600">{businessInfo.phone}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-brand-medium mr-4 mt-1">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                  <p className="text-gray-600">{businessInfo.email}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-brand-medium mr-4 mt-1">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Office Hours</h4>
                  <p className="text-gray-600">
                    Monday - Thursday: {businessInfo.hours.monday}<br />
                    Friday - Sunday: {businessInfo.hours.saturday}
                  </p>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="mt-8 h-64 rounded-lg overflow-hidden border border-brand-light/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3057.889!2d-82.7864166!3d39.9199313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88387b2cbc0722ff%3A0x9a8275e74f71ee5d!2sCross%20Creeks%20Dental!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-brand-deep mb-6">Send Us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Replace with your actual Web3Forms access key */}
              <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-800 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-bg-off-white border border-brand-light/30 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-medium focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-bg-off-white border border-brand-light/30 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-medium focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-800 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 bg-bg-off-white border border-brand-light/30 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-medium focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-800 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-bg-off-white border border-brand-light/30 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-medium focus:border-transparent resize-none"
                ></textarea>
              </div>

              <Button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full"
              >
                {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
              </Button>

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
