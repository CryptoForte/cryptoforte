import { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { eventList } from '../datas/events';

const EventsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // Start with the first slide

  

  // Number of slides to show based on screen size
  const getSlidesToShow = () => {
    if (window.innerWidth >= 1024) return 3; // Large screens
    if (window.innerWidth >= 768) return 2; // Medium screens
    return 1; // Small screens
  };

  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow());

  // Update slidesToShow on window resize
  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(getSlidesToShow());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Next slide function
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % (eventList.length - slidesToShow + 1));
  };

  // Previous slide function
  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? eventList.length - slidesToShow : prev - 1
    );
  };

  // Auto-slide every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 30000); // 30 seconds

    return () => clearInterval(interval);
  }, [currentSlide, slidesToShow]);

  return (
    <section className="w-full bg-white px-4 py-4 md:py-8 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className='text-center my-4'>
          <h3 className='text-3xl font-bold mb-4'>Check Our Events</h3>
          <p className='text-sm md:text-lg md:mx-28 text-center'>
            New to Web3? You n&#39;re in the right place! Join the CryptoForte community for fun and engaging events—Twitter Spaces, 
            webinars, and more. Learn, connect, and grow with us, one step at a time!
          </p>
        </div>
        {/* Carousel Container */}
        <main className="relative overflow-hidden mt-12">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)`,
            }}
          >
            {eventList.map((list) => (
              <div
                key={list.id}
                className="flex-shrink-0 w-full sm:w-1/2 md:w-1/2 lg:w-1/3 p-2 md:p-4" // Responsive width
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-lg ">
                  <div className="relative">
                    <img
                      className="w-full"
                      src={list.img}
                      alt="Product Image"
                    />
                    <div className={`absolute top-0 right-0  text-white px-2 py-1 m-2 rounded-md text-sm font-medium ${list.event_state === "LIVE" ? `bg-red-500` : list.event_state === "UPCOMING" ? `bg-green-500` : `bg-blue-500`}`}>
                      {list.event_state}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium mb-2">{list.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{list.address}</p>
                    <p className="text-gray-600 text-sm mb-4 font-semibold">{list.date}</p>
                    <div className="flex items-center justify-between">
                      <Link
                        to={`/events/${list.id}`}
                        className="font-semibold cursor-pointer"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* Navigation Arrows */}
        <div className="flex justify-end lg:px-20 mt-4">
          <div className="flex gap-5">
            <button
              onClick={prevSlide}
              className="px-3 py-2 bg-white rounded-sm border-2 shadow-md hover:bg-gray-100 transition-colors"
            >
              <FaArrowLeft className="text-gray-700" />
            </button>
            <button
              onClick={nextSlide}
              className="px-3 py-2 bg-white rounded-sm border-2 shadow-md hover:bg-gray-100 transition-colors"
            >
              <FaArrowRight className="text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsCarousel;
