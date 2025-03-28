"use client"
import { useState } from "react";

const page= () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="max-w-2xl w-full text-center p-6 shadow-xl bg-white rounded-2xl">
        <h1 className="text-3xl font-bold text-gray-800">Job Listings - Coming Soon</h1>
        <p className="text-gray-600 mt-4 text-lg">
          We are working tirelessly to bring you the best job opportunities across various industries, including tech, onsite, remote, and more.
        </p>
        <p className="text-gray-600 mt-2">Stay tuned for updates!</p>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-md relative text-center">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-xl"
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold text-gray-800">Exciting Job Opportunities Ahead!</h2>
            <p className="text-gray-600 mt-3">
              Our team is working diligently to bring you verified jobs in various categories including tech, remote, onsite, and many more.
            </p>
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              onClick={() => setIsModalOpen(false)}
            >
              Got it!
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default page
