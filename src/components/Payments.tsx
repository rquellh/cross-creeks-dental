import { CreditCard, DollarSign, FileText, Banknote } from 'lucide-react';

const paymentMethods = [
  { name: 'Cash', icon: 'DollarSign' },
  { name: 'Check', icon: 'Banknote' },
  { name: 'Visa', image: '/src/assets/images/payments/visa.png' },
  { name: 'Mastercard', image: '/src/assets/images/payments/mastercard.png' },
  { name: 'American Express', image: '/src/assets/images/payments/amex.png' },
  { name: 'Discover', image: '/src/assets/images/payments/discover.png' },
  { name: 'CareCredit', image: '/src/assets/images/payments/carecredit.png' }
];

const iconMap: Record<string, any> = {
  CreditCard,
  DollarSign,
  FileText,
  Banknote
};

export default function Payments() {
  return (
    <section className="py-16 bg-bg-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-deep mb-4 text-center" style={{ fontFamily: 'var(--font-family-display)' }}>
          Payment Options
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We offer flexible payment options to make your dental care convenient and affordable. Contact our office for more information about payment plans.
        </p>

        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
          {paymentMethods.map((method) => {
            const IconComponent = method.icon ? iconMap[method.icon] : null;

            return (
              <div
                key={method.name}
                className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow duration-200 w-[calc(50%-0.75rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1.125rem)]"
              >
                <div className="flex justify-center items-center mb-3 h-12">
                  {method.image ? (
                    <img
                      src={method.image}
                      alt={`${method.name} logo`}
                      className="max-h-12 max-w-full object-contain"
                    />
                  ) : IconComponent ? (
                    <IconComponent className="w-8 h-8 text-brand-deep" />
                  ) : (
                    <CreditCard className="w-8 h-8 text-brand-deep" />
                  )}
                </div>
                <h3 className="text-sm font-semibold text-gray-800">
                  {method.name}
                </h3>
              </div>
            );
          })}
        </div>


        <p className="text-center text-sm text-gray-500 my-4 max-w-3xl mx-auto">
          *Please note: A 3% processing fee applies to credit card transactions. No fees for debit or FSA/HSA payments.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center p-6">
            <h3 className="text-2xl font-bold text-brand-deep mb-3">
              Pay Online
            </h3>
            <p className="text-gray-600 mb-6">
              Conveniently pay your bill online with our secure payment portal
            </p>
            <a
              href="https://crosscreeksdenta.securepayments.cardpointe.com/pay?"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-deep text-white px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-all duration-200"
            >
              Pay Now
            </a>
          </div>

          <div className="text-center p-6">
            <h3 className="text-2xl font-bold text-brand-deep mb-3">
              Flexible Payment Plans
            </h3>
            <p className="text-gray-600 mb-6">
              We offer financing options through CareCredit to help make your dental care affordable
            </p>
            <a
              href="https://www.carecredit.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-deep text-white px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-all duration-200"
            >
              Learn More
            </a>
          </div>

          <div className="text-center p-6">
            <h3 className="text-2xl font-bold text-brand-deep mb-3">
              No Insurance? No Problem!
            </h3>
            <p className="text-gray-600 mb-6">
              We offer a competitive in-house Dental Health Savings Club for those without insurance
            </p>
            <a
              href="/insurance"
              className="inline-block bg-brand-deep text-white px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-all duration-200"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
