import BeforeAfterSlider from './BeforeAfterSlider';
import beforeAfterData from '../data/beforeAfter.json';

export default function BeforeAfterGallery() {
  return (
    <section className="py-16 bg-bg-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-deep mb-4 text-center" style={{ fontFamily: 'var(--font-family-display)' }}>
          See What's Possible
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Real patients, real transformations. No matter where you're starting from, we're here to help you get where you want to be.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {beforeAfterData.map((item) => (
            <BeforeAfterSlider
              key={item.id}
              title={item.title}
              beforeImage={item.beforeImage}
              afterImage={item.afterImage}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
