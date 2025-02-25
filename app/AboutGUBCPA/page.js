import Image from "next/image";
import gucpa from "../../public/Images/gubcpa.png";
import mazedImage from "../../public/Images/mazed.jpg";
import arnobImage from "../../public/Images/arnob.jpg";
import noyonImage from "../../public/Images/noyon.jpg";
import prantoImage from "../../public/Images/pranto.jpg";
import samimImage from "../../public/Images/samim.jpg";

export default function AboutGUBCPA() {
  return (
    <div className="min-h-screen bg-white p-6 md:p-12 lg:p-16">
      <div className="max-w-7xl mx-auto">
        {/* About GUBCPA */}
        <div className="flex flex-col md:flex-row items-center gap-10 justify-center mt-10">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-left">
              About GUBCPA
            </h1>
            <p className="mt-4 text-gray-700 text-left max-w-3xl">
              The Green University Competitive Programming Arena (GUBCPA) is a
              dynamic platform dedicated to fostering a culture of
              problem-solving, algorithmic thinking, and teamwork among students
              at Green University. As a hub for programming enthusiasts, GUBCPA
              provides students with opportunities to enhance their coding
              skills, participate in contests, and engage in collaborative
              learning.
              <br />
              <br />
              GUBCPA organizes workshops, training sessions, and competitions to
              refine problem-solving skills and prepare students for national
              and international programming contests. By bringing together
              talented minds, the arena promotes knowledge sharing, critical
              thinking, and a passion for programming.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src={gucpa}
              alt="GUBCPA Logo"
              width={500}
              height={500}
              className="rounded-lg shadow-xl shadow-yellow-300"
            />
          </div>
        </div>

        {/* Running Sessions */}
        <div className="mt-24">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
            Running Sessions
          </h2>
          <div className="grid md:grid-cols-2 gap-10 mt-10">
            {/* Advanced Batch */}
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-8 rounded-lg shadow-lg text-white text-center">
              <h3 className="text-2xl font-semibold">Advanced Batch</h3>
              <p className="mt-2 text-lg">
                Focused on ICPC-style problem-solving, advanced algorithms, and
                competitive programming techniques.
              </p>
            </div>

            {/* Beginner Batch */}
            <div className="bg-gradient-to-r from-blue-400 to-blue-600 p-8 rounded-lg shadow-lg text-white text-center">
              <h3 className="text-2xl font-semibold">Beginner Batch</h3>
              <p className="mt-2 text-lg">
                A structured introduction to data structures, algorithms, and
                problem-solving techniques.
              </p>
            </div>
          </div>
        </div>

        {/* Mentors Section */}
        <div className="mt-24">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
            Mentors (Advanced Batch)
          </h2>
          <div className="grid md:grid-cols-2 gap-10 mt-10">
            {/* Mazed Hasan Parag */}
            <div className="bg-white p-6 border border-gray-300 rounded-lg shadow-lg flex items-center gap-6">
              <Image
                src={mazedImage} // Replace with actual image path
                alt="Mazed Hasan Parag"
                width={80}
                height={80}
                className="rounded-full"
              />
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  Mazed Hasan Parag
                </h3>
                <p className="text-gray-700">
                  BRAC University, ICPC World Finalist (2022)
                </p>
              </div>
            </div>

            {/* Arnab Sarker */}
            <div className="bg-white p-6 border border-gray-300 rounded-lg shadow-lg flex items-center gap-6">
              <Image
                src={arnobImage} // Replace with actual image path
                alt="Arnab Sarker"
                width={80}
                height={80}
                className="rounded-full"
              />
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  Arnab Sarker
                </h3>
                <p className="text-gray-700">
                  KUET, ICPC World Finalist (2024)
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
            Mentors (Beginner Batch)
          </h2>
          <div className="grid md:grid-cols-2 gap-10 mt-10">
            {/* Mazed Hasan Parag */}
            <div className="bg-white p-6 border border-gray-300 rounded-lg shadow-lg flex items-center gap-6">
              <Image
                src={noyonImage} // Replace with actual image path
                alt="Mazed Hasan Parag"
                width={80}
                height={80}
                className="rounded-full"
              />
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  Md. Hosain Rohman Noyon
                </h3>
                <p className="text-gray-700">
                  3x ICPC Dhaka Regionalist
                </p>
              </div>
            </div>

            {/* Arnab Sarker */}
            <div className="bg-white p-6 border border-gray-300 rounded-lg shadow-lg flex items-center gap-6">
              <Image
                src={prantoImage} // Replace with actual image path
                alt="Arnab Sarker"
                width={80}
                height={80}
                className="rounded-full"
              />
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  Ismatul Islam Pranto
                </h3>
                <p className="text-gray-700">
                  3x ICPC Dhaka Regionalist
                </p>
              </div>
            </div>
            <div className="bg-white p-6 border border-gray-300 rounded-lg shadow-lg flex items-center gap-6">
              <Image
                src={samimImage} // Replace with actual image path
                alt="Arnab Sarker"
                width={80}
                height={80}
                className="rounded-full"
              />
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  Samim Reza
                </h3>
                <p className="text-gray-700">
                  3x ICPC Dhaka Regionalist
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
