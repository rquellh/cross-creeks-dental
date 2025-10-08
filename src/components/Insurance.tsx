import { Shield } from 'lucide-react';
import Button from './Button';

// Import all insurance logos
import deltaDental from '../assets/images/insurance/delta-dental.png';
import metlife from '../assets/images/insurance/metlife.png';
import guardian from '../assets/images/insurance/guardian.png';
import anthem from '../assets/images/insurance/anthem.png';
import unitedHealthcare from '../assets/images/insurance/united-healthcare.png';
import aetna from '../assets/images/insurance/aetna.png';
import cigna from '../assets/images/insurance/cigna.png';
import principal from '../assets/images/insurance/principal.png';
import superior from '../assets/images/insurance/superior.png';
import humana from '../assets/images/insurance/humana.png';
import careington from '../assets/images/insurance/careington.png';
import connection from '../assets/images/insurance/connection.png';

const insuranceProviders = [
  { name: 'DeltaDental PPO/Premier', image: deltaDental.src },
  { name: 'Metlife', image: metlife.src },
  { name: 'Guardian', image: guardian.src },
  { name: 'Anthem', image: anthem.src },
  { name: 'United Healthcare', image: unitedHealthcare.src },
  { name: 'Aetna', image: aetna.src },
  { name: 'Cigna', image: cigna.src },
  { name: 'Principal', image: principal.src },
  { name: 'Superior', image: superior.src },
  { name: 'Humana', image: humana.src },
  { name: 'Careington', image: careington.src },
  { name: 'Connection', image: connection.src }
];

export default function Insurance() {
  return (
    <section className="py-16 bg-bg-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-deep mb-4 text-center" style={{ fontFamily: 'var(--font-family-display)' }}>
          Insurance we accept
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
            <Button
              href="/Cross Creeks Dental - In House Plan.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Plan Information
            </Button>
          </div>

          <div className="text-center p-6">
            <h3 className="text-2xl font-bold text-brand-deep mb-3">
              Questions About Coverage?
            </h3>
            <p className="text-gray-600 mb-6">
              Our team is here to help you understand your insurance benefits
            </p>
            <Button href="/contact">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
