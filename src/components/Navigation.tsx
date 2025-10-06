import { useState } from 'react';
import logo from '../assets/images/logo.svg';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-bg-off-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="block">
              <img src={logo.src} alt="Cross Creeks Dental" className="h-12" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-text-dark hover:text-brand-medium transition-colors duration-200">
              Home
            </a>
            <a href="/services" className="text-text-dark hover:text-brand-medium transition-colors duration-200">
              Services
            </a>
            <a href="/about" className="text-text-dark hover:text-brand-medium transition-colors duration-200">
              About
            </a>
            <a href="/reviews" className="text-text-dark hover:text-brand-medium transition-colors duration-200">
              Reviews
            </a>
            <a href="/contact" className="text-text-dark hover:text-brand-medium transition-colors duration-200">
              Contact
            </a>
            <a
              href="/contact"
              className="bg-brand-deep text-white px-6 py-2 rounded-md hover:bg-brand-medium transition-colors duration-200"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text-dark hover:text-brand-medium focus:outline-none"
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
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <a href="/" className="text-text-dark hover:text-brand-medium transition-colors duration-200">
                Home
              </a>
              <a href="/services" className="text-text-dark hover:text-brand-medium transition-colors duration-200">
                Services
              </a>
              <a href="/about" className="text-text-dark hover:text-brand-medium transition-colors duration-200">
                About
              </a>
              <a href="/reviews" className="text-text-dark hover:text-brand-medium transition-colors duration-200">
                Reviews
              </a>
              <a href="/contact" className="text-text-dark hover:text-brand-medium transition-colors duration-200">
                Contact
              </a>
              <a
                href="/contact"
                className="bg-brand-deep text-white px-6 py-2 rounded-md hover:bg-brand-medium transition-colors duration-200 text-center"
              >
                Book Appointment
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
