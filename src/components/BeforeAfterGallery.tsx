import BeforeAfterSlider from './BeforeAfterSlider';
import beforeAfterData from '../data/beforeAfter.json';

// Import all before/after images
import whiteningBefore from '../assets/images/before-after/whitening-before.png';
import whiteningAfter from '../assets/images/before-after/whitening-after.png';
import crownsBefore from '../assets/images/before-after/crowns-before.png';
import crownsAfter from '../assets/images/before-after/crowns-after.png';
import bondingBefore from '../assets/images/before-after/cosmetic-bonding-before.png';
import bondingAfter from '../assets/images/before-after/cosmetic-bonding-after.png';
import brokenBefore from '../assets/images/before-after/broken-tooth-before.png';
import brokenAfter from '../assets/images/before-after/broken-tooth-after.png';
import bridgeBefore from '../assets/images/before-after/bridge-before.png';
import bridgeAfter from '../assets/images/before-after/bridge-after.png';
import denturesBefore from '../assets/images/before-after/dentures-before.png';
import denturesAfter from '../assets/images/before-after/dentures-after.png';
import fillingsBefore from '../assets/images/before-after/fillings-before.png';
import fillingsAfter from '../assets/images/before-after/fillings-after.png';
import onlaysBefore from '../assets/images/before-after/onlays-before.png';
import onlaysAfter from '../assets/images/before-after/onlays-after.png';

const imageMap: Record<string, any> = {
  '/src/assets/images/before-after/whitening-before.png': whiteningBefore,
  '/src/assets/images/before-after/whitening-after.png': whiteningAfter,
  '/src/assets/images/before-after/crowns-before.png': crownsBefore,
  '/src/assets/images/before-after/crowns-after.png': crownsAfter,
  '/src/assets/images/before-after/cosmetic-bonding-before.png': bondingBefore,
  '/src/assets/images/before-after/cosmetic-bonding-after.png': bondingAfter,
  '/src/assets/images/before-after/broken-tooth-before.png': brokenBefore,
  '/src/assets/images/before-after/broken-tooth-after.png': brokenAfter,
  '/src/assets/images/before-after/bridge-before.png': bridgeBefore,
  '/src/assets/images/before-after/bridge-after.png': bridgeAfter,
  '/src/assets/images/before-after/dentures-before.png': denturesBefore,
  '/src/assets/images/before-after/dentures-after.png': denturesAfter,
  '/src/assets/images/before-after/fillings-before.png': fillingsBefore,
  '/src/assets/images/before-after/fillings-after.png': fillingsAfter,
  '/src/assets/images/before-after/onlays-before.png': onlaysBefore,
  '/src/assets/images/before-after/onlays-after.png': onlaysAfter,
};

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
              beforeImage={imageMap[item.beforeImage]?.src || item.beforeImage}
              afterImage={imageMap[item.afterImage]?.src || item.afterImage}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
