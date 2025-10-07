import { Shield } from 'lucide-react';

const insuranceProviders = [
  { name: 'DeltaDental PPO/Premier', image: '/src/assets/images/insurance/delta-dental.png' },
  { name: 'Metlife', image: '/src/assets/images/insurance/metlife.png' },
  { name: 'Guardian', image: '/src/assets/images/insurance/guardian.png' },
  { name: 'Anthem', image: '/src/assets/images/insurance/anthem.png' },
  { name: 'United Healthcare', image: '/src/assets/images/insurance/united-healthcare.png' },
  { name: 'Aetna', image: '/src/assets/images/insurance/aetna.png' },
  { name: 'Cigna', image: '/src/assets/images/insurance/cigna.png' },
  { name: 'Principal', image: '/src/assets/images/insurance/principal.png' },
  { name: 'Superior', image: '/src/assets/images/insurance/superior.png' },
  { name: 'Humana', image: '/src/assets/images/insurance/humana.png' },
  { name: 'Careington', image: '/src/assets/images/insurance/careington.png' },
  { name: 'Connection', image: '/src/assets/images/insurance/connection.png' }
];

export default function Insurance() {
  return (
    <section className="py-16 bg-bg-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-deep mb-4 text-center" style={{ fontFamily: 'var(--font-family-display)' }}>
          Insurance We Accept
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We work with most major insurance providers. Don't see your insurance provider listed? We might have added your provider. Contact our financial coordinator for more details.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {insuranceProviders.map((provider) => (
            <div
              key={provider.name}
              className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex justify-center items-center mb-3 h-12">
                {provider.image ? (
                  <img
                    src={provider.image}
                    alt={`${provider.name} logo`}
                    className="max-h-12 max-w-full object-contain"
                  />
                ) : (
                  <Shield className="w-8 h-8 text-brand-deep" />
                )}
              </div>
              <h3 className="text-sm font-semibold text-gray-800">
                {provider.name}
              </h3>
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6">
            <h3 className="text-2xl font-bold text-brand-deep mb-3">
              No Insurance? No Problem!
            </h3>
            <p className="text-gray-600 mb-6">
              We offer a competitive in-house Dental Health Savings Club for those without insurance
            </p>
            <a
              href="/Cross Creeks Dental - In House Plan.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-deep text-white px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-all duration-200"
            >
              Plan Information
            </a>
          </div>

          <div className="text-center p-6">
            <h3 className="text-2xl font-bold text-brand-deep mb-3">
              Questions About Coverage?
            </h3>
            <p className="text-gray-600 mb-6">
              Our team is here to help you understand your insurance benefits
            </p>
            <a
              href="/contact"
              className="inline-block bg-brand-deep text-white px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-all duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
