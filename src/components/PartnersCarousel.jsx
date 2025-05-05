import {motion} from 'framer-motion';

const PartnersCarousel = () => {
    const partners = [
          partner1,
          partner2,
          partner3,
        ];

  return (
    <section>
        <div className="w-full bg-primary overflow-hidden ">
          <h3 className="my-4 text-center text-xl md:text-4xl">Our Partners</h3>
          {/* Slider Container */}
          <motion.div
            className="flex"
            animate={{
              x: ["0%", "-100%"], // Move from 0% to -100% (left)
              transition: {
                duration: 20, // Adjust duration for slower/faster scroll
                repeat: Infinity, // Infinite loop
                ease: "linear", // Smooth linear animation
              },
            }}
          >
            {/* Duplicate the logos for a seamless loop */}
            {[...partners, ...partners, ...partners, ...partners, ...partners, ...partners, ...partners, ...partners].map((logo, index) => (
              <div key={index} className="mx-8 flex-shrink-0">
                <img
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  className="h-10 w-10 object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>
  )
}

export default PartnersCarousel
