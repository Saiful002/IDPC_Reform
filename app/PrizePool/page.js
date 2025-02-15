import Image from "next/image";
import React from "react";

const PrizePool = () => {
  const kits = [
    {

      src: "https://files.cdn.printful.com/o/upload/bfl-image/f5/10333_l_collage%20vintage%20design%20.jpg", // Replace with actual image path
      title: "T-shirt", // Title for the first card
    },
    {
      src: 'https://snackible.com/cdn/shop/files/DSC00717.jpg?v=1728113575&width=360', // Replace with actual image path
      title: "Snacks", // Title for the second card
    },
  ];
  return (
    <section className="mt-16 min-h-screen p-6 md:p-12 lg:p-16 bg-white">
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-300 opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500 opacity-10 rounded-full blur-3xl"></div>
      {/* Header Section */}
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900">🏆 Prize Pool</h2>
        <p className="text-lg text-gray-600 mt-2">
          Celebrate the best performers with amazing prizes!
        </p>
      </div>

      {/* Top 10 Prizes */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {[
          { rank: "1st", color: "bg-yellow-400", text: "text-yellow-900" },
          { rank: "2nd", color: "bg-gray-400", text: "text-white" },
          { rank: "3rd", color: "bg-orange-500", text: "text-white" },
          { rank: "4th", color: "bg-blue-500", text: "text-white" },
          { rank: "5th", color: "bg-blue-400", text: "text-white" },
          { rank: "6th", color: "bg-green-400", text: "text-white" },
          { rank: "7th", color: "bg-green-300", text: "text-white" },
          { rank: "8th", color: "bg-purple-400", text: "text-white" },
          { rank: "9th", color: "bg-purple-500", text: "text-white" },
          { rank: "10th", color: "bg-pink-400", text: "text-white" },
        ].map((prize, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-lg ${prize.color} ${prize.text} text-center font-bold text-xl`}
          >
            🎖 {prize.rank} Prize
          </div>
        ))}
      </div>

      {/* Special Prizes Section */}
      <div className="mt-12 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Solver Prize */}
          <div className="p-6 bg-red-500 text-white text-center rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold">
              🚀 First Solver of Every Problem
            </h3>
            <p className="mt-2">
              A special prize for the fastest problem solvers.
            </p>
          </div>

          {/* Best Female Participant Prize */}
          <div className="p-6 bg-pink-500 text-white text-center rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold">👩‍💻 Best Female Participant</h3>
            <p className="mt-2">
              Recognizing the best female coder in the contest.
            </p>
          </div>
        </div>
      </div>

{/* kits */}


<div className="max-w-6xl mx-auto text-center mt-32">
        <h2 className="text-4xl font-bold text-gray-900">What you will get</h2>
      </div>

<div className="max-w-6xl mx-auto px-6 mt-16">
        <div className="grid md:grid-cols-2 gap-8">
          {kits.map((kit, index) => (
            <div key={index} className="bg-gradient-to-r from-blue-400 to-blue-600 p-6 rounded-2xl shadow-lg text-center">
              {/* Title for each card */}
              <h2 className="text-3xl font-bold mb-4">{kit.title}</h2>

              <Image
                src={kit.src}
                alt="name"
                width={500}
                height={800}
                className="w-64 h-64 mx-auto rounded-6 mb-4"
              />
             
            </div>
          ))}
        </div>
      </div>



    </section>
  );
};

export default PrizePool;
