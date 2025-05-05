import { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { eventList } from '../datas/events';

const EventsPageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % eventList.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? eventList.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 30000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <section className="w-full px-4 py-4 md:py-8 md:px-8">
      <div className="mx-auto max-w-6xl">
        <main className="relative overflow-hidden rounded-lg ">
          {/* Header - Centered "Our Events" title */}
          <div className="absolute top-0 left-0 right-0 z-10 flex justify-center pt-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white px-6 py-2 rounded-lg">
              Our Events
            </h2>
          </div>

          {/* Slides */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {eventList.map((list) => (
              <div key={list.id} className="flex-shrink-0 w-full relative">
                {/* Background image with full-card gradient overlay */}
                <div className="relative h-96 md:h-[500px]">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${list.img})`}}
                  />
                  {/* Full-card gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-600 to-transparent" />
                  
                  

                  {/* Content positioned absolutely to appear above gradient */}
                  <div className="relative z-10 h-full flex flex-col justify-end px-4 py-18 md:px-12 md:py-12 text-white">
                    <h3 className="text-2xl md:text-3xl font-bold mb-1 tracking-wider">{list.name}</h3>
                    <p className="text-gray-200 font-semibold text-sm mb-1">{list.address}</p>
                    <p className="text-red-300 text-sm mb-4">{list.date}</p>
                    <Link
                      to={`/events/${list.id}`}
                      className="flex items-center gap-2 w-fit  "
                    >
                      Learn More
                      <FaArrowRight className="text-sm mt-1" />

                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows Container */}
          <div className="absolute bottom-0 right-0 flex space-x-6 bg-primary px-4 md:px-32 py-2 md:py-4 rounded-tl-xl">
            <button
              onClick={prevSlide}
              className="p-3 bg-inherit border border-black rounded "
            >
              <FaArrowLeft className="text-lg" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 bg-inherit border border-black rounded "
            >
              <FaArrowRight className="text-lg" />
            </button>
          </div>
        </main>
      </div>
    </section>
  );
};

export default EventsPageCarousel;