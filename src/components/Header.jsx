
import Students from '../assets/buildcon004.png';
import Hakaton from '../assets/Hakaton_Rep.png';
import Hakaton1 from '../assets/buildcon002.png';
import { HiUserGroup } from "react-icons/hi2";
import { SiBlockchaindotcom } from "react-icons/si";
import topRightImage from '../assets/candyshapes.png';



const Header = () => {
  return (
    <section className="relative flex justify-center flex-col lg:flex-row md:h-[400px]  items-center px-4 lg:px-20 bg-primary">
      <div className="absolute top-[-8px] md:top-[-8px] right-0 p-0 z-0">
        <img 
          src={topRightImage} 
          alt="Top Right" 
          className="w-10 md:w-32 md:h-32 object-cover" 
        />
      </div>
      <div className="absolute bottom-[-136px] md:bottom-[-156px] left-0 p-0 z-0">
        <img 
          src={topRightImage} 
          alt="Top Right" 
          className="w-10 md:w-32 md:h-32 rotate-180 object-cover" 
        />
      </div>
      
            {/* Bottom Left Image */}
            

      <div className="my-3 md:my-5 lg:my-5 text-center mx-2  z-10">
        <h1 className="text-[17px] md:text-3xl lg:text-5xl font-bold mb-2 md:mb-4">Your Forte in Web3 Begins Here</h1>
        <h3 className="text-[12px] md:text-xl lg:text-2xl font-semibold mb-2 md:mb-4">Start strong, stay confident and explore crypto with ease.</h3>

        <p className="text-[12px] md:text-sm">Crypto isn&#39;t just the future — it&#39;s yours to explore today. Start simple, stay smart and unlock new possibilities with Web3! 🚀
        </p>
      </div>
   

    </section>
  )
}

export default Header
