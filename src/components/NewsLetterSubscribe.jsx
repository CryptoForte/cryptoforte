import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { useState } from "react";


const NewsLetterSubscribe = () => {

  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed with email!: ${email}`);
    setEmail('');
  }

  return (
    <div className="max-w-6xl mx-auto my-12 text-white p-2">
      <section className="bg-blue-700 p-4 md:p-10 rounded-4xl">
        <h1 className="text-xl font-bold pb-4">Stay ahead in Web3</h1>
        <p className="text-sm md:text-base md:w-2/3">
            Get the latest Insights, updates and beginner-friendly tips on crypto
            and Web3-Straight to your inbox. No jargan, no fluff - simply clear, 
            valuable contents to help you navigate the space with confidence.

            Sign up now and stay informed! 
        </p>
        <form onSubmit={handleSubmit}  action="">
            <div className="bg-white  md:w-[440px] mt-4 rounded-r-full flex justify-between">
            
                <div className="flex items-center ml-2">
                    <MdOutlineMail className="text-sm mt-1 md:mt-0 md:text-xl" style={{color: '#DE3A6A'}} />
                    <input 
                    type="email" 
                    className="py-2 ml-1 w-full outline-0 text-gray-700 text-sm placeholder:text-gray-500 placeholder:text-[10px] md:placeholder:text-base" 
                    placeholder="Enter your email to get latest updates"
                    />
                </div>

                <article
                  className="flex items-center rounded-full px-4 md:py-3 text-[14px] cursor-pointer"
                  style={{ backgroundColor: '#DE3A6A' }}
                >
                  <p>Subscribe</p>
                  <MdKeyboardArrowRight className="text-xl mt-1" />
                </article>
              </div>
            {/* </div> */}
        </form>
      </section>
    </div>
  )
}

export default NewsLetterSubscribe
