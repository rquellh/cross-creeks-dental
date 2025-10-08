import { useState } from 'react';
import { Home, Users, Sparkles, Shield, CreditCard, Mail } from 'lucide-react';
import logo from '../assets/images/logo.svg';
import Button from './Button';

const NAV_ITEMS = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/team', label: 'Our Team', icon: Users },
  { href: '/services', label: 'Services', icon: Sparkles },
  { href: '/insurance', label: 'Insurance', icon: Shield },
  { href: '/payments', label: 'Payments', icon: CreditCard },
  { href: '/contact', label: 'Contact', icon: Mail },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const currentPath = typeof window !== 'undefined' ? window.location.pathname.replace(import.meta.env.BASE_URL, '/').replace(/\/$/, '') || '/' : '/';

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href={import.meta.env.BASE_URL} className="block">
              <img src={logo.src} alt="Cross Creeks Dental" className="h-12" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={`${import.meta.env.BASE_URL}${item.href}`}
                className="text-brand-deep hover:text-brand-medium focus-visible:text-brand-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-medium focus-visible:ring-offset-2 active:text-brand-deep active:scale-[0.98] transition-all duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
            <Button href="/contact">
              Book Appointment
            </Button>
          </div>

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
                      href={`${import.meta.env.BASE_URL}${item.href}`}
                      className="flex items-center gap-3 text-text-dark hover:text-brand-medium hover:bg-bg-off-white focus-visible:text-brand-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-medium focus-visible:ring-offset-2 active:text-brand-deep active:bg-brand-deep/10 active:scale-[0.98] transition-all duration-200 px-4 py-3 rounded-lg"
                    >
                      <Icon size={20} className="flex-shrink-0" />
                      <span className="font-medium">{item.label}</span>
                    </a>
                  );
                })}
                <div className="pt-2">
                  <Button href="/contact" className="w-full">
                    Book Appointment
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
