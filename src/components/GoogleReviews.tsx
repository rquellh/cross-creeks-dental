import { useRef, useEffect } from 'react';
import reviewsData from '../data/reviews.json';
import metadata from '../data/reviews-metadata.json';

interface Review {
  id: string;
  author: string;
  date: string;
  rating: number;
  text: string;
}

// Import reviews from JSON file (generated at build time)
const reviews: Review[] = reviewsData;
const { totalReviews, averageRating } = metadata;

export default function GoogleReviews() {
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

        // Wait a bit for Flickity to render, then calculate heights
        setTimeout(() => {
          const cells = carouselRef.current?.querySelectorAll('.carousel-cell');
          if (!cells) return;

          let maxHeight = 0;
          cells.forEach((cell) => {
            const height = (cell as HTMLElement).offsetHeight;
            if (height > maxHeight) maxHeight = height;
          });

          if (maxHeight > 0 && cells.length > 0) {
            // Set all cells to the same height
            cells.forEach((cell) => {
              (cell as HTMLElement).style.height = `${maxHeight}px`;
            });
          }
        }, 100);
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Google badge */}
        <div className="flex justify-between items-start mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-deep" style={{ fontFamily: 'var(--font-family-display)' }}>
            What our patients say
          </h2>
          <a
            href="https://maps.google.com/maps?cid=11133590865144049245"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white border border-gray-200 rounded-full px-6 py-3 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <div className="text-left">
              <div className="font-semibold text-gray-900 text-sm">Google reviews</div>
              <div className="text-xs text-gray-600">{totalReviews.toLocaleString()} reviews • {averageRating} ★</div>
            </div>
          </a>
        </div>

        {/* Reviews carousel */}
        <div className="relative -mx-4 sm:-mx-6 lg:-mx-6">
          <div ref={carouselRef} className="carousel">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="carousel-cell w-[85%] md:w-[400px] bg-white border border-gray-200 rounded-2xl p-8 mx-3 flex flex-col"
              >
                {/* Star rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-brand-deep" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Review text - grows to fill space */}
                <div className="flex-grow mb-6">
                  <p className="text-gray-700 text-base leading-relaxed">
                    {review.text}
                  </p>
                </div>

                {/* Author info - stays at bottom */}
                <div>
                  <p className="font-semibold text-brand-deep text-lg">{review.author}</p>
                  <p className="text-gray-600 text-sm">{review.date}</p>
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
