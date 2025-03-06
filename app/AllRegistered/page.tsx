"use client";

import { useEffect, useState } from "react";

interface Participant {
  id: number;
  name: string;
  studentId: string;
  tshirtSize: string;
}

export default function Page() {
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [filteredParticipants, setFilteredParticipants] = useState<
    Participant[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("https://judgeapi.gubcpa.com/idpc/getAllRegisteredForUser")
      .then((res) => res.json())
      .then((data) => {
        setParticipants(data.participants);
        setFilteredParticipants(data.participants);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch data");
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const filtered = participants.filter(
      (participant) =>
        participant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        participant.studentId.includes(searchQuery)
    );
    setFilteredParticipants(filtered);
  }, [searchQuery, participants]);

  if (loading) return <p className="text-center mt-4">Loading...</p>;
  if (error) return <p className="text-center mt-4 text-red-500">{error}</p>;

  return (
    <div className="p-8 bg-white min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
        Registered Participants
      </h2>
      <div className="mb-4 text-center">
        <input
          type="text"
          placeholder="Search by Name or Student ID"
          className="px-4 py-2 border border-gray-300 rounded-lg w-full max-w-md"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 shadow-md">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">ID</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Student ID</th>
              <th className="border border-gray-300 px-4 py-2">T-Shirt Size</th>
            </tr>
          </thead>
          <tbody>
            {filteredParticipants.map((participant) => (
              <tr
                key={participant.id}
                className="text-center odd:bg-gray-100 even:bg-white"
              >
                <td className="border border-gray-300 px-4 py-2">
                  {participant.id}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {participant.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {participant.studentId}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {participant.tshirtSize.toUpperCase()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
