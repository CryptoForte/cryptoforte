import BuildCon1 from '../assets/buildcon001.png';
import BuildCon2 from '../assets/buildcon002.png';
import BuildCon3 from '../assets/buildcon003.png';
import BuildCon4 from '../assets/buildcon004.png';
import BuildCon5 from '../assets/buildcon005.png';
import BuildCon6 from '../assets/buildcon006.png';
import BuildCon8 from '../assets/buildcon008.png';
import BuildCon9 from '../assets/buildcon009.png';
import BuildCon10 from '../assets/buildcon010.png';
import BuildCon11 from '../assets/buildcon011.png';
import BuildCon12 from '../assets/buildcon012.png';
import BuildCon13 from '../assets/buildcon013.png';
import { useState, useEffect } from 'react';

const HomePageGallery = () => {
    // All available images
    const allImages = [
        { img: BuildCon1, alt: "Construction project 1" },
        { img: BuildCon2, alt: "Construction project 2" },
        { img: BuildCon3, alt: "Construction project 3" },
        { img: BuildCon4, alt: "Construction project 4" },
        { img: BuildCon5, alt: "Construction project 5" },
        { img: BuildCon6, alt: "Construction project 6" },
        { img: BuildCon8, alt: "Construction project 8" },
        { img: BuildCon9, alt: "Construction project 9" },
        { img: BuildCon10, alt: "Construction project 10" },
        { img: BuildCon11, alt: "Construction project 11" },
        { img: BuildCon12, alt: "Construction project 12" },
        { img: BuildCon13, alt: "Construction project 13" }
    ];

    // State to hold the randomly selected images for mobile
    const [mobileImages, setMobileImages] = useState([]);

    // Get 4 random images for mobile
    useEffect(() => {
        const shuffled = [...allImages].sort(() => 0.5 - Math.random());
        setMobileImages(shuffled.slice(0, 4));
    }, []);

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Mobile View (4 random images) */}
                <div className="md:hidden columns-1 gap-4">
                    {mobileImages.map((image, i) => (
                        <div key={`mobile-${i}`} className="mb-4 break-inside-avoid">
                            <img 
                                src={image.img} 
                                alt={image.alt} 
                                className="w-full h-48 object-cover rounded-lg"
                            />
                        </div>
                    ))}
                </div>

                {/* Desktop View (all images) */}
                <div className="hidden md:block columns-2 md:columns-3 lg:columns-4 gap-2">
                    {allImages.map((image, i) => (
                        <div key={`desktop-${i}`} className="mb-2 break-inside-avoid">
                            <img 
                                src={image.img} 
                                alt={image.alt} 
                                className={`w-full object-cover ${i % 3 === 0 ? 'h-64' : i % 2 === 0 ? 'h-80' : 'h-96'}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomePageGallery;