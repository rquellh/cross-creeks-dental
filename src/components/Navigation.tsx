import { useState } from 'react';
import logo from '../assets/images/logo.svg';
import Button from './Button';

const NAV_ITEMS = [
  { href: '/', label: 'Home' },
    { href: '/team', label: 'Our Team' },
  { href: '/services', label: 'Services' },
  { href: '/insurance', label: 'Insurance' },
  { href: '/payments', label: 'Payments' },
  { href: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-bg-off-white shadow-sm sticky top-0 z-50">
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
                className="text-brand-deep hover:text-brand-medium focus-visible:text-brand-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-medium focus-visible:ring-offset-2 active:text-brand-deep transition-colors"
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
          <div className="lg:hidden pb-4">
            <div className="flex flex-col space-y-3">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={`${import.meta.env.BASE_URL}${item.href}`}
                  className="text-text-dark hover:text-brand-medium focus-visible:text-brand-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-medium focus-visible:ring-offset-2 active:text-brand-deep transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <Button href="/contact" className="">
                Book Appointment
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
