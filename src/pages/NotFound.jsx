import React from 'react';

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center text-center py-10 px-6 min-h-screen max-w-full overflow-hidden">
      <h1 className="text-4xl mb-4">404</h1>
      <p className="text-lg text-gray-600 mb-6">
        The page you're looking for doesn't exist.
      </p>
      <a href="/" className="inline-block">
        <button className="px-6 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-400">
          Go to Homepage
        </button>
      </a>
    </div>
  )
}