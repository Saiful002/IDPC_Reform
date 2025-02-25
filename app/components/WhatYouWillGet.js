import { FaCookieBite, FaGift, FaTshirt } from "react-icons/fa";
import Image from "next/image";
import Tshirt from "../../public/Images/tshirt.png";

const WhatYouWillGet = () => {
  return (
    <div className="relative flex flex-col items-center justify-center py-16 bg-gradient-to-br from-gray-50 via-white to-gray-200 mt-16">
      {/* Floating Gradient Circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-300 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500 opacity-20 rounded-full blur-3xl"></div>

      <div className="relative flex flex-col lg:flex-row items-center justify-between p-10 my-8 mx-auto max-w-4xl rounded-2xl bg-gradient-to-br from-gray-50 via-white to-gray-200 shadow-xl overflow-hidden mt-16">
        {/* Floating Gradient Effects */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-300 opacity-30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500 opacity-20 rounded-full blur-3xl"></div>

        {/* Glassmorphism Background Layer */}
        <div className="absolute inset-0 bg-white/30 backdrop-blur-lg rounded-2xl shadow-lg"></div>

        {/* Left Side - List of Rewards */}
        <div className="relative z-10 flex flex-col space-y-6 p-6 text-gray-800 w-full lg:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-transparent bg-clip-text text-center lg:text-left">
            What You Will Get
          </h2>
          <ul className="space-y-4">
            <li className="flex items-center space-x-4 text-lg font-medium">
              <FaCookieBite className="text-yellow-500 text-2xl" />
              <span>Snacks</span>
            </li>
            <li className="flex items-center space-x-4 text-lg font-medium">
              <FaGift className="text-yellow-500 text-2xl" />
              <span>Gifts</span>
            </li>
            <li className="flex items-center space-x-4 text-lg font-medium">
              <FaTshirt className="text-yellow-500 text-2xl" />
              <span>T-Shirt (Final Design will be uploaded later)</span>
            </li>
          </ul>
        </div>

        {/* Right Side - T-Shirt Image */}
        <div className="relative z-10 flex items-center justify-center w-full lg:w-1/2 p-6">
          <Image
            src={Tshirt}
            alt="Event T-Shirt"
            width={300}
            height={300}
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default WhatYouWillGet;
