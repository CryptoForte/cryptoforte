import GroupImg from '../assets/groupcryptoforte.png';
import JoinButton from './JoinButton';

const JoinCommunity = () => {
  return (
    <div  className='flex flex-col-reverse items-center px-4 my-16 md:flex-row max-w-6xl mx-auto '>
      <article className='md:w-1/2 py-4 hidden md:block'>
        <img src={GroupImg} alt="CryptoForte" />
      </article>
      <article className='py-4 md:w-1/2'>
        <h1 className='text-xl md:text-4xl py-4 font-bold'>Ready to join our community?</h1> 
        <article className='md:w-1/2 py-4 md:hidden'>
          <img src={GroupImg} alt="CryptoForte" />
        </article>
        <p className='text-justify'>
          Step into a world where Web3 is simple, welcoming and easy to navigate. Whether you&#39;re just starting or looking to grow, 
          our community is here to support you every step of the way. Connect, learn and explore with like-minded people—because crypto 
          is better together!
        </p>
        <JoinButton />
      </article>
      

    </div>
  )
}

export default JoinCommunity
