import { useRef, useEffect } from 'react';

interface Review {
  id: string;
  author: string;
  date: string;
  rating: number;
  text: string;
}

interface ReviewsCarouselProps {
  reviews: Review[];
}

export default function ReviewsCarousel({ reviews }: ReviewsCarouselProps) {
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
    <>
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
