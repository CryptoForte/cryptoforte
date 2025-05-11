import CommunityFeedbackCarousel from "../components/CommunityFeedbackCarousel";
import EventsCarousel from "../components/EventsCarousel";
import Header from "../components/Header";
import JoinCommunity from "../components/JoinCommunity";
import SupportUsSection from "../components/SupportUsSection";
import partner1 from '../assets/buidcon.jpg';
import partner2 from '../assets/DexPay.jpg';
import partner3 from '../assets/web3Bridge.jpg';
import partner4 from '../assets/perculiarLogo.jpg';
import FrequentlyAsked from "../components/FrequentlyAsked";
import NewsLetterSubscribe from "../components/NewsLetterSubscribe";
import ImageGallery from "../components/HomePageGallery";


const Home = () => {
  
    const partners = [
      partner1,
      partner2,
      partner3,
      partner4
    ];
  

  return (
    <div className="">
      <Header /> 

      <section className="">
        <div className="w-full bg-primary overflow-hidden">
          <h3 className="my-5 text-center text-xl md:text-3xl">Our Partners</h3>
          {/* Static Grid Container */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 px-4 py-4">
            {partners.map((logo, index) => (
              <div key={index} className="flex items-center justify-center">
                <img
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  className="h-8 w-8 md:h-12 md:w-12 object-cover " // Equal height and width
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      

      <ImageGallery />

      < CommunityFeedbackCarousel />

      <EventsCarousel />
      
      <SupportUsSection />

      <JoinCommunity />

      <FrequentlyAsked />
      
      <NewsLetterSubscribe />
    </div>
  )
}

export default Home;
