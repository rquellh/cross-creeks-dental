import { useState, useEffect } from 'react';

interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
}

// Sample reviews - replace with actual Google Reviews API integration
const sampleReviews: Review[] = [
  {
    id: '1',
    author: 'Sarah M.',
    rating: 5,
    text: 'Outstanding experience! The staff is friendly and professional. Dr. Smith made me feel completely at ease.',
    date: '2 weeks ago'
  },
  {
    id: '2',
    author: 'John D.',
    rating: 5,
    text: 'Best dental office I\'ve ever been to. Clean, modern, and the team truly cares about their patients.',
    date: '1 month ago'
  },
  {
    id: '3',
    author: 'Emily R.',
    rating: 5,
    text: 'I was nervous about my procedure, but the team was so comforting. Highly recommend Cross Creeks Dental!',
    date: '1 month ago'
  }
];

export default function Reviews() {
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % sampleReviews.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const renderStars = (rating: number) => {
    return '⭐'.repeat(rating);
  };

  return (
    <section className="py-20 bg-bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-deep mb-4">
            What Our Patients Say
          </h2>
          <p className="text-xl text-text-dark/70">
            Don't just take our word for it
          </p>
        </div>

        {/* Review Carousel */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
            <div className="text-3xl mb-4">
              {renderStars(sampleReviews[currentReview].rating)}
            </div>
            <p className="text-lg md:text-xl text-text-dark mb-6 italic">
              "{sampleReviews[currentReview].text}"
            </p>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-brand-deep">
                  {sampleReviews[currentReview].author}
                </p>
                <p className="text-sm text-text-dark/60">
                  {sampleReviews[currentReview].date}
                </p>
              </div>
              <img
                src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                alt="Google"
                className="h-6"
              />
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-6 gap-2">
            {sampleReviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentReview ? 'bg-brand-deep' : 'bg-brand-light/30'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="/reviews"
            className="inline-block text-brand-medium hover:text-brand-deep font-semibold transition-colors duration-200"
          >
            Read All Reviews →
          </a>
        </div>
      </div>
    </section>
  );
}
