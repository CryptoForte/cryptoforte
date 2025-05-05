import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight, FaUser } from "react-icons/fa";
import { SiFsecure } from "react-icons/si";

const CommunityFeedbackCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // Start with the first slide

  const slides = [
    {
      id: 1,
      name: "Regbin Bami",
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various",
      comm_relation: "Community Member",
      image: "",
    },
    {
      id: 2,
      name: "Adunbola Rose",
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various",
      comm_relation: "Community Member",
      image: "",
    },
    {
      id: 3,
      name: "Tolu Adesoye",
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various",
      comm_relation: "Community Member",
      image: "",
    },
    {
      id: 4,
      name: "Dennis Cage",
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various",
      comm_relation: "Top Executive",
      image: "",
    },
    {
      id: 5,
      name: "Rose Bane",
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various",
      comm_relation: "Affliate Member",
      image: "",
    },
    {
      id: 6,
      name: "Adunbola Rose",
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various",
      comm_relation: "Community Member",
      image: "",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Auto-slide every 45 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 45000); // 45 seconds

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <section className="py-8 bg-primary px-4">
      <div className="w-full max-w-4xl mx-auto overflow-hidden relative">
        {/* Slides */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="w-full flex-shrink-0 px-4 p-3 md:p-8 bg-white rounded-lg shadow-lg"
            >
              <SiFsecure className="text-2xl md:text-4xl" />
              <p className="text-gray-700 text-justify mt-4 text-sm md:text-base">
                {slide.content}
              </p>
              <article className="flex items-center gap-3 mt-4">
                <div className="bg-blue-400 p-2 rounded-md">
                  {slide.image ? (
                    slide.image
                  ) : (
                    <FaUser className="text-xl text-white" />
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-base">{slide.name}</h3>
                  <p className="font-light text-sm">{slide.comm_relation}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
        
      </div>
      <section className="flex justify-between mt-4 md:mr-14">
        <div></div>
        <div className=" flex  gap-4 px-4">
            <button
              onClick={prevSlide}
              className="px-3 py-2 bg-white rounded-lg border-2 shadow-md hover:bg-gray-100 transition-colors"
            >
              <FaArrowLeft className="text-gray-700" />
            </button>
            <button
              onClick={nextSlide}
              className="px-3 py-2 bg-white rounded-lg border-2 shadow-md hover:bg-gray-100 transition-colors"
            >
              <FaArrowRight className="text-gray-700" />
            </button>
        </div>
      </section>
    </section>
  );
};

export default CommunityFeedbackCarousel;