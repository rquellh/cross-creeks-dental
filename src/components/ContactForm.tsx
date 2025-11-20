import { useState, type JSX } from 'react';

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus('success');
        form.reset();
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" action="https://api.web3forms.com/submit" method="POST">
      <input type="hidden" name="access_key" value="fd7b93dd-9f4e-447c-a1ed-0830d892f21c" />

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
          Phone Number *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
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

      <button
        type="submit"
        disabled={formStatus === 'submitting'}
        className="w-full inline-block px-6 py-3 rounded-md font-semibold transition-all duration-200 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-medium focus-visible:ring-offset-2 bg-brand-deep text-white hover:bg-brand-medium active:bg-brand-deep active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
      </button>

      {formStatus === 'success' && (
        <p className="text-green-600 text-center"><span className='font-bold'>We got your message! </span>Our team will get back to you during our next business day (Mon-Thurs, 8am-5pm). Current patients with a dental emergency? Call (614) 866-2895 and follow the prompts for urgent assistance.</p>
      )}

      {formStatus === 'error' && (
        <p className="text-red-600 text-center">Sorry, there was an error sending your message. Please try again.</p>
      )}
    </form>
  );
}
