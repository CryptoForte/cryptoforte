import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-600">
      <div className="max-w-md text-center">
        <h1 className="text-5xl font-bold text-gray-50 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-50 mb-6">Oops! Page Not Found</h2>
        <p className="text-gray-50 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;



