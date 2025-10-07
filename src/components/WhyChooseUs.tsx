import { Heart, Users, Award, Home } from 'lucide-react';

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-bg-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-deep mb-12 text-center" style={{ fontFamily: 'var(--font-family-display)' }}>
          Why patients choose us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-lg text-center">
            <div className="flex justify-center mb-6">
              <Heart className="w-12 h-12 text-brand-deep" />
            </div>
            <h3 className="text-xl font-bold text-brand-deep mb-4">
              Your Health, Not Quotas
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We recommend only what you actually need. No pressure, no unnecessary procedures, no sales targets. Just honest advice from dentists who genuinely care about your long-term oral health.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-lg text-center">
            <div className="flex justify-center mb-6">
              <Users className="w-12 h-12 text-brand-deep" />
            </div>
            <h3 className="text-xl font-bold text-brand-deep mb-4">
              Female-Owned & Operated
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Dr. Quellhorst and Dr. Zaino bring a gentle, patient-centered approach to every visit. Many of our patients specifically seek the comfort and understanding that comes with our practice.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-lg text-center">
            <div className="flex justify-center mb-6">
              <Award className="w-12 h-12 text-brand-deep" />
            </div>
            <h3 className="text-xl font-bold text-brand-deep mb-4">
              30+ Years of Trusted Care
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Our decades of experience, combined with modern tools like intraoral scanners and 3D printers, means we diagnose accurately and get you the care you need quickly and comfortably.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-8 rounded-lg text-center">
            <div className="flex justify-center mb-6">
              <Home className="w-12 h-12 text-brand-deep" />
            </div>
            <h3 className="text-xl font-bold text-brand-deep mb-4">
              Your Neighbors, Not a Chain
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We live here, work here, and care about community. You'll see the same faces at every visit, and we actually get to know you—not just your teeth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
