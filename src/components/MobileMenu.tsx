import { useState } from 'react';
import { Home, Users, Sparkles, Shield, CreditCard, Mail } from 'lucide-react';

const NAV_ITEMS = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/team', label: 'Our Team', icon: Users },
  { href: '/services', label: 'Services', icon: Sparkles },
  { href: '/insurance', label: 'Insurance', icon: Shield },
  { href: '/payments', label: 'Payments', icon: CreditCard },
  { href: '/contact', label: 'Contact', icon: Mail },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-text-dark hover:text-brand-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-medium focus-visible:ring-offset-2 active:text-brand-deep transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 animate-in slide-in-from-top-2 duration-300">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="bg-white rounded-2xl border border-gray-200 p-4 space-y-2">
              {NAV_ITEMS.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-3 text-text-dark hover:text-brand-medium hover:bg-bg-off-white focus-visible:text-brand-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-medium focus-visible:ring-offset-2 active:text-brand-deep active:bg-brand-deep/10 active:scale-[0.98] transition-all duration-200 px-4 py-3 rounded-lg"
                  >
                    <Icon size={20} className="flex-shrink-0" />
                    <span className="font-medium">{item.label}</span>
                  </a>
                );
              })}
              <div className="pt-2">
                <a
                  href="/contact"
                  className="inline-block w-full px-6 py-3 rounded-md font-semibold transition-all duration-200 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-medium focus-visible:ring-offset-2 bg-brand-deep text-white hover:bg-brand-medium active:bg-brand-deep active:scale-95"
                >
                  Book Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
