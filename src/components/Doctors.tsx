import doctorsData from '../data/doctors.json';
import drQuellhorst from '../assets/images/doctors/dr-quellhorst.png';
import drZaino from '../assets/images/doctors/dr-zaino.png';

const doctorImages: Record<string, any> = {
  '/src/assets/images/doctors/dr-quellhorst.png': drQuellhorst,
  '/src/assets/images/doctors/dr-zaino.png': drZaino,
};

interface Doctor {
  id: string;
  name: string;
  title: string;
  image: string;
}

const doctors: Doctor[] = doctorsData;

export default function Doctors() {
  return (
    <section className="py-16 bg-bg-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 flex justify-between items-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-deep" style={{ fontFamily: 'var(--font-family-display)' }}>
            Our Doctors
          </h2>
          <a
            href={`${import.meta.env.BASE_URL}/team`}
            className="bg-white text-brand-deep px-8 py-3 rounded-md font-semibold hover:bg-bg-off-white transition-colors duration-200"
          >
            Meet the team
          </a>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 max-w-4xl mx-auto">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="flex flex-col items-center">
              {/* Doctor photo with circle-face effect */}
              <div className="inline-block rounded-full bg-bg-main-darker w-52 h-52 md:w-80 md:h-80 mb-6 mt-[40px] md:mt-[60px]">
                <div
                  className="inline-block w-52 h-[248px] md:w-80 md:h-[380px] -mt-[40px] md:-mt-[60px] bg-none bg-no-repeat bg-center bg-bottom [border-radius:0_0_104px_104px] md:[border-radius:0_0_160px_160px]"
                  style={{
                    backgroundImage: `url(${doctorImages[doctor.image]?.src || doctor.image})`,
                    backgroundSize: 'cover'
                  }}
                >
                </div>
              </div>

              {/* Name and title */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-brand-deep mb-1">
                  {doctor.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
