import { useRef, useEffect, useState } from 'react';
import servicesData from '../data/services.json';

interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

const services: Service[] = servicesData;

export default function ServicesCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = 400 + 24; // card width + gap
      scrollContainerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  // Auto-scroll every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % services.length;
      scrollToIndex(nextIndex);
    }, 8000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="py-16 bg-bg-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 flex justify-between items-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-deep" style={{ fontFamily: 'var(--font-family-display)' }}>
            Our Services
          </h2>
          <a
            href="/services"
            className="bg-white text-brand-deep px-8 py-3 rounded-md font-semibold hover:bg-bg-off-white transition-colors duration-200"
          >
            All Services
          </a>
        </div>

        {/* Services carousel */}
        <div className="relative">
          {/* Scrollable container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {services.map((service) => (
              <div
                key={service.id}
                className="flex-none w-[85%] md:w-[400px] h-[400px] rounded-2xl snap-start overflow-hidden relative group"
              >
                {/* Background image with overlay */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundImage: `url(${service.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-white/90 text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll dots */}
          <div className="flex justify-center gap-2 mt-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-brand-deep w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to service ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
