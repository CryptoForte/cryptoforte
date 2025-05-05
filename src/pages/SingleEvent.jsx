import { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import { eventList } from '../datas/events';
import EventsPageCarousel from "../components/EventsPageCarousel";
import { MdKeyboardArrowRight } from 'react-icons/md';
import NewsLetterSubscribe from '../components/NewsLetterSubscribe';


const SingleEvent = () => {

  const [currentSlide, setCurrentSlide] = useState(0); // Start with the first slide
  const { id } = useParams();
  const event = eventList.find(item => item.id === parseInt(id));

  if (!event) {
    return <div>Event not found</div>;
  }

  
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
    <div className='bg-primary'>
      <EventsPageCarousel />

      <section className="w-full bg-white px-4 py-8 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 md:gap-20">
            {/* Event Details */}
            <div className="space-y-4">
                          
              <h1 className="text-3xl font-bold">Description</h1>
              
              <div className="flex items-center gap-2">
                <p className='text-justify'>
                  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece 
                  of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, 
                  a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, 
                  consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, 
                  discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" 
                  (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular 
                  during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.


                </p>
              </div>

              <div className="pt-4">
                <h2 className="text-xl font-semibold mb-2">Hours</h2>
                <p className="text-gray-700 ">Weekday Hours  <span className='font-bold ml-5'>7am - 10pm</span></p>
                <p className="text-gray-700 ">Sunday Hours  <span className='font-bold ml-5'>10am - 10pm</span></p>
              </div>

              
            </div>
            {/* Map Embed */}
            <div className="pt-6">
                <h3 className="text-lg font-semibold mb-2">Event Location</h3>
                <div className="h-80 bg-gray-200 rounded-lg overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    style={{ border: 0 }}
                    src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${encodeURIComponent(event.address)}`}
                    allowFullScreen
                  >
                  </iframe>
                </div>
                <div className='mt-6'>
                  <h3 className='pb-4 text-2xl font-bold'>Contact</h3>
                  <div className='flex gap-4 md:text-xl text-gray-600'> 
                    <FaLinkedinIn/>
                    <FaTwitter />
                    <FaInstagram />
                    <FaFacebookF/>
                  </div>
                </div>
              </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl mt-16 md:my-28">
          <article
            className="flex items-center rounded-full w-fit text-white px-8 py-3 cursor-pointer"
            style={{ backgroundColor: '#DE3A6A' }}
          >
            <p>Book Now</p>
            <MdKeyboardArrowRight className="text-xl mt-1" />
          </article>
        </div>
      </section>


      {/* Other Events Slides*/}
      <section className="w-full bg-white px-4 py-4 md:py-8 md:px-8">
          <div className="mx-auto max-w-6xl">
            <div className='text-center my-4'>
              <h3 className='text-3xl font-bold mb-4'>Check Our Other Events</h3>
              <p className='text-md text-justify md:mx-28'>New to Web3? You're in the right palce. Join the CryptoForte Community for fun and engaging 
                engaging events - Twitter spaces, webinars and more. Learn, Connect and grow 
                with us, one step at a time!
              </p>
            </div>
            {/* Carousel Container */}
            <main className="relative overflow-hidden md:mt-12">
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
        
        <NewsLetterSubscribe />

    </div>
  )
}

export default SingleEvent
