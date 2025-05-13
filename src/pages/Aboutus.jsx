import FrequentlyAsked from "../components/FrequentlyAsked";
import NewsLetterSubscribe from "../components/NewsLetterSubscribe";
import JoinCommunity from "../components/JoinCommunity";
import { CiViewList } from "react-icons/ci";
import { LuScanEye } from "react-icons/lu";
import Akin from '../assets/Akin.jpg';
import ASAF from '../assets/ASAF.jpg';
import Bimsey from '../assets/Bimsey.jpg';
import Latsan from '../assets/Latsan.jpg';
import Micheal_Jerry from '../assets/Michael_Jerry.jpg';
import Rashford from '../assets/Rashford.jpg';
import Temi from '../assets/Temi.jpg';
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Aboutus = () => {

  const teamMembers = [
    {
      name: "Micheal Jerry",
      role: "Team Lead & Co-Founder",
      image: Micheal_Jerry,
      linkedin: "https://www.linkedin.com/in/adetunjimichael?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      twitter: "#"
    },
    {
      name: "Latsan",
      role: "Co-Founder",
      image: Latsan,
      linkedin: "https://www.linkedin.com/in/abdulateef-sanni",
      twitter: "#"
    },
    {
      name: "Rashford",
      role: "Community Lead",
      image: Rashford,
      linkedin: "https://www.linkedin.com/in/emma-elujoba",
      twitter: "#"
    },
    {
      name: "Bimsey",
      role: "Community Lead",
      image: Bimsey,
      linkedin: "https://www.linkedin.com/in/abimbola-babaseyi-782406113",
      twitter: "#"
    },
    {
      name: "Akin",
      role: "Content Writer",
      image: Akin,
      linkedin: "#",
      twitter: "https://x.com/theasaf_"
    },
    {
      name: "ASAF",
      role: "Social Media Manager",
      image: ASAF,
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Temi",
      role: "Designer",
      image: Temi,
      linkedin: "https://www.linkedin.com/in/temiladeadeyemi",
      twitter: "#"
    }
  ];

  return (
    <div >
      <section className="max-w-6xl mx-auto my-16">
        {/*About Us*/}
        <section>
          <h1 className="text-4xl text-center font-bold">About Us</h1> 
          <div className="max-w-3xl mx-auto text-center text-gray-700 my-8">
            <p className="text-sm md:text-lg text-justify px-3"> CryptoForte is a blockchain education platform dedicated to bridging the 
              gap in blockchain literacy for Africans. We simplify blockchain, cryptocurrency, decentralized finance (DeFi) and related 
              technologies, making them accessible to all. Through structured onboarding, we cover blockchain fundamentals, trading 
              strategies, and digital opportunities like DeFi jobs By fostering financial education and career growth, we are building 
              a thriving community of blockchain innovators and professionals
            </p>
          </div>
        </section>
        {/*Mission and Vision*/}
        <section className="my-10 md:my-32 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
            {/*Mission*/}
            <div className="border-2 border-gray-400 shadow-lg p-6 md:p-8 rounded-3xl mb-4 md:w-[500px] md:h-[600px]">
              <div className="w-fit p-4 md:my-8 rounded-full " style={{background: "#DE3A6A"}}>
                <CiViewList className="text-xl md:text-4xl text-white"/>
              </div>
              <h3 className="md:text-3xl font-bold mt-8 md:mt-14">Mission</h3>
              <p className="mt-4 md:mt-8 mr-4 md:mr-24 text-sm md:text-md text-justify">
                We are committed to creating a dynamic, inclusive community where everyone—from beginners to seasoned experts—can learn, 
                grow and thrive in the world of crypto. Through mentorship, education and shared opportunities, we aim to break down 
                barriers and empower users to navigate the evolving Web3 landscape with confidence. By fostering collaboration and 
                innovation, we strive to shape a future where crypto is accessible, rewarding and inclusive for all. 
              </p>
            </div>
            {/*Vision*/}
            <div className="border-2 border-gray-400 shadow-lg p-6 md:p-8 rounded-3xl mb-4 md:w-[500px] md:h-[600px]">
              <div className="w-fit p-4 md:my-8 rounded-full " style={{background: "#DE3A6A"}}>
                <LuScanEye className="text-xl md:text-4xl text-white"/>
              </div>
              <h3 className="md:text-3xl font-bold mt-8 md:mt-14">Mission</h3>
              <p className="mt-4 md:mt-8 mr-4 md:mr-24 text-sm md:text-md text-justify">
                CryptoForte makes blockchain literacy accessible to Africans, empowering them with skills for the digital economy. 
                Through education and partnerships, we bridge knowledge gaps in blockchain, crypto and DeFi. Having introduced 5,000+ 
                Africans to Web3, we continue to drive financial literacy and economic empowerment.
              </p>
            </div>
            
          </div>
        </section>
        {/*Team*/}
        <section className="mb-4 md:mb-16 px-4 md:px-0">
          <h2 className="text-3xl font-bold my-8 text-center mb-8">Our Lovely Team</h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center mb-6 md:mb-16">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-[350px] h-[400px] object-cover rounded-xl shadow-lg shadow-gray-600 mx-auto mb-4" 
                />
                <h4 className="text-xl font-bold text-gray-800">{member.name}</h4>
                <p className="text-gray-600 font-semibold">{member.role}</p>
                <div className="flex justify-center mt-2 space-x-4">
                  <a  
                     href={member.linkedin}
                     target="_blank"
                     rel="noopener noreferrer" 
                     className="text-gray-500 hover:text-blue-700"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a 
                     href={member.twitter} 
                     target="_blank"
                      rel="noopener noreferrer"
                     className="text-gray-500 hover:text-blue-700"
                  >
                    <FaTwitter />
                  </a>
                  
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
      {/* Join Community */}
      <JoinCommunity />
      {/*FAQs*/}
      <FrequentlyAsked />

      {/*Newsletter Subscription*/}
      <NewsLetterSubscribe />
      
    </div>
  )
}

export default Aboutus
