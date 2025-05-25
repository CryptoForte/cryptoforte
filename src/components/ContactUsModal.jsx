export default function Modal({ show, onClose }) {
    if (!show) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg max-w-sm w-full">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Thank you for contacting us!</h3>
          <p className="text-gray-600 mb-4">
            We've received your message and will get back to you soon.
          </p>
          <p className="text-gray-600 mb-6">
            Join our community to stay updated:
          </p>
          <a
            href="https://t.me/thecryptoforte"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Join WhatsApp Group
          </a>
          <button
            onClick={onClose}
            className="mt-4 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Close
          </button>
        </div>
      </div>
    );
  }