import { MdKeyboardArrowRight } from "react-icons/md";
import { useState } from 'react';

const JoinButton = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex justify-center items-center my-4">
      <article
        className="flex items-center rounded-full w-fit text-white px-8 py-3 cursor-pointer"
        style={{ backgroundColor: '#DE3A6A' }}
        onClick={() => setShowModal(true)}
      >
        <p>Join Community</p>
        <MdKeyboardArrowRight className="text-xl mt-1" />
      </article>

      {showModal && (
        <div className="fixed inset-0 bg-black/70  flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-sm">
            <h3 className="font-bold text-lg mb-4">Join Our Community</h3>
            <p className="mb-4">You&#39;re about to join CryptoForte Telegram group. Would you like to proceed?</p>
            <div className="flex justify-end space-x-3">
              <button 
                className="px-4 py-2 border rounded cursor-pointer"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button 
                className="px-4 py-2 bg-[#DE3A6A] text-white rounded cursor-pointer"
                onClick={() => {
                  window.open('https://t.me/thecryptoforte', '_blank');
                  setShowModal(false);
                }}
              >
                Join
              </button>
            </div>
          </div>
        </div>
      )}
    </div>

  )
}

export default JoinButton
