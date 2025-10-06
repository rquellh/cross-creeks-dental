interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
}

// Sample reviews - replace with actual Google Reviews API integration
const allReviews: Review[] = [
  {
    id: '1',
    author: 'Sarah M.',
    rating: 5,
    text: 'Outstanding experience! The staff is friendly and professional. Dr. Smith made me feel completely at ease during my procedure. The office is modern and clean, and they use the latest technology. Highly recommend!',
    date: '2 weeks ago'
  },
  {
    id: '2',
    author: 'John D.',
    rating: 5,
    text: 'Best dental office I\'ve ever been to. Clean, modern facility with state-of-the-art equipment. The team truly cares about their patients and takes time to explain everything. No more dental anxiety for me!',
    date: '1 month ago'
  },
  {
    id: '3',
    author: 'Emily R.',
    rating: 5,
    text: 'I was nervous about my procedure, but the team was so comforting and professional. They explained every step and made sure I was comfortable throughout. The results exceeded my expectations. Highly recommend Cross Creeks Dental!',
    date: '1 month ago'
  },
  {
    id: '4',
    author: 'Michael T.',
    rating: 5,
    text: 'Exceptional service from start to finish. The receptionist was welcoming, the hygienist was thorough, and Dr. [Name] was knowledgeable and gentle. This is now my family\'s go-to dental practice.',
    date: '2 months ago'
  },
  {
    id: '5',
    author: 'Lisa K.',
    rating: 5,
    text: 'I brought my entire family here and we all had wonderful experiences. They\'re great with kids and adults alike. The office is beautiful and the staff is incredibly kind and patient.',
    date: '2 months ago'
  },
  {
    id: '6',
    author: 'David P.',
    rating: 5,
    text: 'After years of avoiding the dentist, I finally found a place where I feel comfortable. The team is understanding and never judgmental. They helped restore my smile and my confidence!',
    date: '3 months ago'
  }
];

const renderStars = (rating: number) => {
  return '⭐'.repeat(rating);
};

export default function ReviewsPage() {
  const averageRating = (allReviews.reduce((acc, review) => acc + review.rating, 0) / allReviews.length).toFixed(1);

  return (
    <section className="py-20 bg-bg-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-deep mb-4">
            Patient Reviews
          </h1>
          <p className="text-xl text-text-dark/70 mb-6">
            Don't just take our word for it - hear from our patients
          </p>

          {/* Rating Summary */}
          <div className="inline-block bg-bg-off-white px-8 py-4 rounded-lg border border-brand-light/20">
            <div className="flex items-center gap-4">
              <div>
                <div className="text-4xl font-bold text-brand-deep">{averageRating}</div>
                <div className="text-sm text-text-dark/60">out of 5</div>
              </div>
              <div>
                <div className="text-2xl mb-1">{renderStars(5)}</div>
                <div className="text-sm text-text-dark/60">{allReviews.length} reviews</div>
              </div>
              <img
                src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                alt="Google"
                className="h-6"
              />
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {allReviews.map((review) => (
            <div
              key={review.id}
              className="bg-bg-off-white p-6 rounded-lg border border-brand-light/20 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-2xl">{renderStars(review.rating)}</div>
                <img
                  src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                  alt="Google"
                  className="h-4"
                />
              </div>
              <p className="text-text-dark mb-4 italic">"{review.text}"</p>
              <div className="border-t border-brand-light/20 pt-4">
                <p className="font-semibold text-brand-deep">{review.author}</p>
                <p className="text-sm text-text-dark/60">{review.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-brand text-white p-12 rounded-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Join Our Happy Patients?</h2>
          <p className="text-xl mb-8 text-white/90">Experience the Cross Creeks Dental difference for yourself.</p>
          <a
            href="/contact"
            className="inline-block bg-white text-brand-deep px-8 py-3 rounded-md font-semibold hover:bg-bg-off-white transition-colors duration-200"
          >
            Schedule Your Appointment
          </a>
        </div>

        {/* Note about Google Reviews */}
        <div className="mt-12 text-center">
          <p className="text-sm text-text-dark/60">
            Want to share your experience? Leave us a review on{' '}
            <a href="#" className="text-brand-medium hover:text-brand-deep underline">
              Google
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
