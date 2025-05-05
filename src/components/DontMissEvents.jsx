import { MdKeyboardArrowRight } from 'react-icons/md';
import GroupImg from '../assets/groupcryptoforte.png';
import JoinButton from './JoinButton';



const DontMissEvents = () => {
  return (
    <div className='flex flex-col-reverse items-center px-4 my-16 md:flex-row max-w-6xl mx-auto '>
          <article className='md:w-1/2 py-4'>
            <img src={GroupImg} alt="CryptoForte" />
          </article>
          <article className='py-4 md:w-1/2'>
            <h1 className='text-xl md:text-4xl py-4 font-bold'>Don't Miss Our Next Event!</h1> 
            <p className='text-justify'>
                Get ready to dive into web3 with CryptoForte's upcoming event! Whether you're a 
                beginner or looking to sharpen your skills this is your ticker to learn, connect 
                and grow in a fun, beginner friendly space.
                Stay tuned for detials - exiting conversations, insight and networking 
                oppurtunities await! Mark your calendar and join us!
            </p>
            <div className="flex justify-center items-center my-4">
              < JoinButton />
              {/* <article
                className="flex items-center rounded-full w-fit text-white px-8 py-3 cursor-pointer"
                style={{ backgroundColor: '#DE3A6A' }}
              >
                <p>Join Us</p>
                <MdKeyboardArrowRight className="text-xl mt-1" />
              </article> */}
            </div>
          </article>
    
        </div>
  )
}

export default DontMissEvents
