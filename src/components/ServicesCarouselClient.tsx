import { useRef, useEffect } from 'react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  items: string[];
}

interface ServicesCarouselClientProps {
  services: Service[];
  serviceImages: Record<string, any>;
}

export default function ServicesCarouselClient({ services, serviceImages }: ServicesCarouselClientProps) {
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
          cellAlign: 'center',
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
    <>
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
                style={{ backgroundImage: `url(${serviceImages[service.image] || service.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-transparent"></div>
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
    </>
  );
}
