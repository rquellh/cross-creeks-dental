import { Shield, Sparkles, Undo2, AlertCircle, Users, Smile } from 'lucide-react';
import servicesData from '../data/servicesDetail.json';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  items: string[];
}

const services: Service[] = servicesData;

const iconMap: Record<string, any> = {
  Shield,
  Sparkles,
  Undo2,
  AlertCircle,
  Users,
  Smile
};

export default function ServicesDetail() {
  return (
    <section className="py-16 bg-bg-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-deep mb-4 text-center" style={{ fontFamily: 'var(--font-family-display)' }}>
          Our Services
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We offer a comprehensive range of dental services using the latest technology and techniques to ensure your comfort and satisfaction.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon];

            return (
              <div
                key={service.id}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex justify-center items-center mb-4">
                  <IconComponent className="w-12 h-12 text-brand-deep" />
                </div>
                <h3 className="text-xl font-bold text-brand-deep mb-3 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center text-sm text-gray-700">
                      <svg className="w-4 h-4 text-brand-medium mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href="/contact"
            className="inline-block bg-brand-deep text-white px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-all duration-200"
          >
            Schedule an Appointment
          </a>
        </div>
      </div>
    </section>
  );
}
