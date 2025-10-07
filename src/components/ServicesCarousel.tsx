import { useRef, useEffect } from 'react';
import servicesData from '../data/servicesDetail.json';
import Button from './Button';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  items: string[];
}

const services: Service[] = servicesData;

export default function ServicesCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const flickityInstance = useRef<any>(null);

  useEffect(() => {
    // Dynamically import Flickity only on the client side
    const initFlickity = async () => {
      if (carouselRef.current && !flickityInstance.current) {
        const Flickity = (await import('flickity')).default;
        await import('flickity/css/flickity.css');

        flickityInstance.current = new Flickity(carouselRef.current, {
          wrapAround: true,
          autoPlay: 8000,
          pageDots: true,
          prevNextButtons: false,
          cellAlign: 'left',
          draggable: true,
        });
      }
    };

    initFlickity();

    return () => {
      if (flickityInstance.current) {
        flickityInstance.current.destroy();
        flickityInstance.current = null;
      }
    };
  }, []);

  return (
    <section className="py-16 bg-bg-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="mb-12 flex justify-between items-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-deep" style={{ fontFamily: 'var(--font-family-display)' }}>
            Our Services
          </h2>
          <Button variant="secondary" href="/services">
            All Services
          </Button>
        </div>

        {/* Services carousel */}
        <div className="relative -mx-4 sm:-mx-6 lg:-mx-8">
          <div ref={carouselRef} className="carousel">
            {services.map((service) => (
              <div
                key={service.id}
                className="carousel-cell w-[85%] md:w-[400px] h-[400px] rounded-2xl overflow-hidden relative group bg-bg-main-darker mx-3"
              >
                {/* Background image with overlay */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundImage: `url(${service.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-lg">
                    {service.title}
                  </h3>
                  <p className="text-white text-base leading-relaxed drop-shadow-md">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .flickity-page-dots .dot {
          background: rgb(209 213 219);
          width: 10px;
          height: 10px;
          transition: all 0.3s;
        }
        .flickity-page-dots .dot.is-selected {
          background: var(--color-brand-deep);
          width: 32px;
          border-radius: 9999px;
        }
      `}</style>
    </section>
  );
}
